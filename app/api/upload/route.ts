import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Cấu hình Cloudinary với thông tin từ .env
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "Không tìm thấy file" }, { status: 400 });
    }

    // Chuyển đổi File (Buffer) để upload lên Cloudinary
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Xử lý upload thông qua Promise
    const uploadResponse: any = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: "auto", // Tự động nhận diện ảnh hoặc video
          folder: "fixpc_bookings", // Tên thư mục trên Cloudinary
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });

    // Trả về URL của file sau khi upload thành công
    return NextResponse.json({ 
      url: uploadResponse.secure_url,
      public_id: uploadResponse.public_id 
    });

  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    return NextResponse.json({ error: "Lỗi khi upload lên Cloudinary" }, { status: 500 });
  }
}