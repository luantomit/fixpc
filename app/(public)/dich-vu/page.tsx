"use client";

import Link from "next/link";
import { useState } from "react";

export default function DichVu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  // Thêm vào cùng chỗ với các useState khác
  const [serviceType, setServiceType] = useState("tận nơi");

  // Hàm mở Modal và gán tên dịch vụ/combo
  const openBookingModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setPhoneError("");
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const phone = formData.get("phone") as string;

    if (!/^[0-9]{10}$/.test(phone)) {
      setPhoneError("Số điện thoại phải bao gồm đúng 10 chữ số.");
      return;
    }

    setPhoneError("");
    setIsSubmitting(true);

    const payload = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    // Nếu chọn tại cửa hàng thì lưu địa chỉ cố định, nếu không thì lấy từ input
    address: serviceType === "tận nơi" ? formData.get("address") : "Khách mang đến cửa hàng",
    serviceType: serviceType,
    problem: selectedService,
  };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Đặt lịch thành công! Chúng tôi sẽ gọi lại ngay.");
        setIsModalOpen(false);
        (e.target as HTMLFormElement).reset();
      } else {
        const err = await res.json();
        alert("Lỗi: " + err.error);
      }
    } catch (error) {
      alert("Lỗi kết nối máy chủ.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-1">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-primary px-4 py-2 rounded-full w-fit">
                <span className="material-symbols-outlined text-sm notranslate">verified</span>
                <span className="text-xs font-bold uppercase tracking-wider">Phục vụ tận nơi 30 phút</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-slate-900 dark:text-white">
                Dịch vụ sửa máy tính – <span className="text-primary">Laptop</span> tận nơi tại Hà Đông
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                Báo giá trước · Không rành máy vẫn yên tâm · Có mặt nhanh sau 20-30 phút gọi.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:0355193008" className="flex flex-1 sm:flex-none items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all">
                  <span className="material-symbols-outlined notranslate">call</span> Gọi ngay
                </a>
                <button 
                  onClick={() => openBookingModal("Tư vấn chung")}
                  className="flex flex-1 sm:flex-none items-center justify-center gap-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                >
                  <span className="material-symbols-outlined notranslate">calendar_month</span> Đặt lịch sửa
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
              <img alt="Sửa máy tính chuyên nghiệp" className="relative rounded-3xl shadow-2xl object-cover w-full aspect-[4/3]" src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1000&auto=format&fit=crop" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION VẤN ĐỀ (Link tới trang chi tiết) */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Bạn đang gặp vấn đề gì?</h2>
          <p className="text-slate-500 mb-12">Chọn sự cố để xem giải pháp và báo giá tức thì.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            <ProblemCard href="/van-de?problem=slow" icon="speed" title="Máy chạy chậm" />
            <ProblemCard href="/van-de?problem=windows" icon="desktop_windows" title="Lỗi Windows" />
            <ProblemCard href="/van-de?problem=hard_drive" icon="memory" title="Nâng cấp SSD" />
            <ProblemCard href="/van-de?problem=power" icon="power_off" title="Không nguồn" />
            <ProblemCard href="/van-de?problem=virus" icon="coronavirus" title="Diệt Virus" />
          </div>
        </div>
      </section>

      {/* 3. CHI TIẾT DỊCH VỤ PHẦN MỀM/CỨNG */}
      <section className="px-6 md:px-40 py-16 bg-white dark:bg-slate-950">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-3xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><span className="material-symbols-outlined text-primary">terminal</span>Sửa phần mềm</h3>
            <ul className="space-y-4 text-slate-600 dark:text-slate-300">
              <ServiceItem text="Cài đặt Windows 10, 11 bản quyền" />
              <ServiceItem text="Cài Office, đồ họa (Adobe, CAD...)" />
              <ServiceItem text="Diệt Virus, cài đặt Driver máy in" />
              <ServiceItem text="Phục hồi dữ liệu ổ cứng" />
            </ul>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><span className="material-symbols-outlined text-primary">home_repair_service</span>Sửa phần cứng</h3>
            <ul className="space-y-4 text-slate-600 dark:text-slate-300">
              <ServiceItem text="Vệ sinh, bảo dưỡng máy tính, laptop" />
              <ServiceItem text="Nâng cấp SSD tốc độ cao" />
              <ServiceItem text="Thay thế RAM, Bàn phím, Pin laptop" />
              <ServiceItem text="Tra keo tản nhiệt gốm cao cấp" />
            </ul>
          </div>
        </div>
      </section>

      {/* 4. SECTION COMBO TIẾT KIỆM */}
      <section className="px-6 md:px-40 py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1200px] mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Gói Combo Tiết Kiệm</h2>
          <p className="text-slate-500 italic">Giá trọn gói - Tiết kiệm đến 30%</p>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <ComboCard 
            title="Combo Sinh viên" price="299.000đ" 
            features={["Cài Win + Office", "Vệ sinh bên ngoài", "Miễn phí đi lại"]}
            onClick={() => openBookingModal("Combo Sinh viên")}
          />
          <ComboCard 
            title="Combo Văn phòng" price="399.000đ" isFeatured={true}
            features={["Cài Win + Full Soft", "Vệ sinh + Tra keo tản nhiệt", "Tối ưu hệ thống", "Bảo hành 3 tháng"]}
            onClick={() => openBookingModal("Combo Văn phòng")}
          />
          <ComboCard 
            title="Combo Cứu nguy" price="từ 450.000đ" 
            features={["Backup dữ liệu khẩn cấp", "Xử lý lỗi xanh màn", "Thay linh kiện (nếu cần)"]}
            onClick={() => openBookingModal("Combo Cứu nguy")}
          />
        </div>
      </section>

      {/* 5. QUY TRÌNH & TIN TƯỞNG */}
      <section className="px-6 md:px-40 py-20 bg-white dark:bg-slate-950">
        <h2 className="text-3xl font-bold mb-16 text-center">Quy trình chuyên nghiệp</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Step num="1" title="Liên hệ" desc="Báo tình trạng máy" />
          <Step num="2" title="Kiểm tra" desc="Có mặt sau 30 phút" />
          <Step num="3" title="Báo giá" desc="Thống nhất giá trước" />
          <Step num="4" title="Bàn giao" desc="Viết phiếu bảo hành" />
        </div>
      </section>

      {/* 6. KHU VỰC PHỤC VỤ */}
      <section className="px-6 md:px-40 py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">location_on</span> Khu vực phục vụ tại Hà Đông
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Văn Quán", "Mộ Lao", "La Khê", "Vạn Phúc", "Phúc La", "Quang Trung", "Yết Kiêu", "Dương Nội", "Kiến Hưng"].map(area => (
              <span key={area} className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-medium shadow-sm border border-slate-100 dark:border-slate-700">Phường {area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MODAL ĐẶT LỊCH */}
      {isModalOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl">
          <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-primary">
            <span className="material-symbols-outlined notranslate">close</span>
          </button>
          <h3 className="text-2xl font-bold mb-2 text-center">Đặt lịch sửa máy</h3>
          <p className="text-center text-primary font-bold mb-6 italic underline">{selectedService}</p>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input name="name" required placeholder="Họ tên của bạn" className="w-full h-12 px-4 rounded-xl border dark:bg-slate-800 outline-none focus:ring-2 focus:ring-primary" />
            
            <input 
              name="phone" required type="tel" 
              onChange={() => setPhoneError("")}
              placeholder="Số điện thoại (10 số)" 
              className={`w-full h-12 px-4 rounded-xl border dark:bg-slate-800 outline-none focus:ring-2 ${phoneError ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'}`} 
            />
            {phoneError && <p className="text-red-500 text-xs font-bold">{phoneError}</p>}

            {/* 1. CHỌN PHƯƠNG THỨC SỬA CHỮA */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-slate-400 uppercase ml-1">Hình thức sửa chữa</label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`flex items-center gap-2 p-3 border rounded-xl cursor-pointer transition-all ${serviceType === 'tận nơi' ? 'border-primary bg-primary/5' : ''}`}>
                  <input 
                    type="radio" name="serviceType" value="tận nơi" 
                    checked={serviceType === "tận nơi"}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-4 h-4 text-primary" 
                  />
                  <span className="text-sm font-medium">Tận nơi</span>
                </label>
                <label className={`flex items-center gap-2 p-3 border rounded-xl cursor-pointer transition-all ${serviceType === 'tại cửa hàng' ? 'border-primary bg-primary/5' : ''}`}>
                  <input 
                    type="radio" name="serviceType" value="tại cửa hàng" 
                    checked={serviceType === "tại cửa hàng"}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-4 h-4 text-primary" 
                  />
                  <span className="text-sm font-medium">Tại cửa hàng</span>
                </label>
              </div>
            </div>

            {/* 2. ẨN/HIỆN ĐỊA CHỈ: Chỉ hiện khi chọn "Tận nơi" */}
            {serviceType === "tận nơi" && (
              <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="text-[11px] font-bold text-slate-400 uppercase ml-1">Địa chỉ của bạn</label>
                <input 
                    name="address" 
                    required={serviceType === "tận nơi"} 
                    placeholder="Số nhà, tên đường, khu vực..." 
                    className="w-full h-12 px-4 rounded-xl border dark:bg-slate-800 outline-none focus:ring-2 focus:ring-primary" 
                  />
              </div>
            )}

            <button disabled={isSubmitting} className="w-full h-14 bg-primary text-white rounded-2xl font-bold text-lg disabled:bg-slate-400 shadow-lg mt-2">
              {isSubmitting ? "Đang gửi..." : "Xác nhận ngay"}
            </button>
          </form>
        </div>
      </div>
    )}
    </main>
  );
}

// Helper Components
function ProblemCard({ href, icon, title }: any) {
  return (
    <Link href={href} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary hover:shadow-md transition-all group">
      <span className="material-symbols-outlined text-4xl text-primary mb-3 group-hover:scale-110 transition-transform notranslate">{icon}</span>
      <h3 className="font-bold text-slate-800 dark:text-slate-200">{title}</h3>
    </Link>
  );
}

function ServiceItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
      <span>{text}</span>
    </li>
  );
}

function ComboCard({ title, price, features, onClick, isFeatured = false }: any) {
  return (
    <div className={`flex flex-col p-8 rounded-3xl border-2 transition-all ${isFeatured ? 'bg-white dark:bg-slate-900 border-primary scale-105 shadow-xl z-10' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-sm'}`}>
      {isFeatured && <div className="bg-primary text-white text-[10px] font-black py-1 px-3 rounded-full w-fit mb-4">PHỔ BIẾN NHẤT</div>}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-3xl font-black text-primary mb-6">{price}</div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f: string) => (
          <li key={f} className="text-sm flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">done</span>{f}</li>
        ))}
      </ul>
      <button onClick={onClick} className={`w-full py-3 rounded-xl font-bold transition-all ${isFeatured ? 'bg-primary text-white hover:bg-blue-700' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-primary hover:text-white'}`}>Đặt ngay</button>
    </div>
  );
}

function Step({ num, title, desc }: any) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="size-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-black mb-4">{num}</div>
      <h4 className="font-bold mb-1">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}