import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// --- CẤU HÌNH TELEGRAM ---
const TELEGRAM_TOKEN = "8532697325:AAEkf6mV9jE-_t7Ywt2SsUn8HThfy0dZC9A"; // Token từ BotFather
const TELEGRAM_CHAT_ID = "7277023738"; // ID lấy từ userinfobot

async function sendTelegramAlert(data: any) {
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  
  // Định dạng tin nhắn gửi về điện thoại
  const message = `
<b>🔔 CÓ ĐƠN ĐẶT LỊCH MỚI!</b>
━━━━━━━━━━━━━━━━━━
👤 <b>Khách hàng:</b> ${data.name}
📞 <b>Điện thoại:</b> <code>${data.phone}</code>
📍 <b>Hình thức:</b> ${data.serviceType.toUpperCase()}
🏠 <b>Địa chỉ:</b> ${data.address}
🛠 <b>Vấn đề:</b> ${data.problem}
📝 <b>Mô tả:</b> ${data.desc || "Không có mô tả"}
📎 <b>Đính kèm:</b> ${data.attachment ? `<a href="${data.attachment}">Xem ảnh/video</a>` : "Không có"}
━━━━━━━━━━━━━━━━━━
🕒 <i>Thời gian: ${new Date().toLocaleString("vi-VN")}</i>
  `;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });
  } catch (err) {
    console.error("Lỗi gửi thông báo Telegram:", err);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, address, problem, desc, serviceType, attachment } = body;

    // Validate cơ bản
    if (!name || !phone) {
      return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });
    }

    const client = await clientPromise; //
    const db = client.db(); 
    
    // 1. Lưu đơn hàng vào MongoDB
    const bookingData = {
      name,
      phone,
      address,
      serviceType,
      problem,
      desc,
      attachment,
      status: "pending",
      createdAt: new Date(),
    };

    const result = await db.collection("bookings").insertOne(bookingData); //

    // 2. GỬI THÔNG BÁO VỀ ĐIỆN THOẠI NGAY LẬP TỨC
    // Chúng ta không dùng 'await' để tránh làm chậm phản hồi cho khách hàng
    sendTelegramAlert(bookingData);

    return NextResponse.json({ success: true }); //
  } catch (e) {
    return NextResponse.json({ error: "Lỗi Server" }, { status: 500 }); //
  }
}

// ... Giữ nguyên hàm GET và PATCH bên dưới ...

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const phone = searchParams.get("phone");

    const client = await clientPromise;
    const db = client.db();
    
    // Tạo query tìm kiếm
    let query = {};
    if (phone) {
      query = { phone: { $regex: phone, $options: "i" } };
    }

    const bookings = await db.collection("bookings")
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    // Tính toán số liệu Dashboard
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const stats = {
      todayCount: bookings.filter(b => new Date(b.createdAt) >= today).length,
      pendingCount: bookings.filter(b => b.status === "pending").length,
      totalRevenue: bookings.reduce((sum, b) => sum + (parseInt(b.price) || 0), 0),
    };

    return NextResponse.json({ bookings, stats });
  } catch (e) {
    return NextResponse.json({ error: "Lỗi Server" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json();
    
    if (!id || !status) {
      return NextResponse.json({ error: "Thiếu ID hoặc trạng thái" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    const result = await db.collection("bookings").updateOne(
      { _id: new ObjectId(id) }, // Ép kiểu về ObjectId
      { $set: { status: status } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Không tìm thấy đơn hàng" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Lỗi Server" }, { status: 500 });
  }
}