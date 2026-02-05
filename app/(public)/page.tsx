"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Thêm vào cùng chỗ với các useState khác
  const [serviceType, setServiceType] = useState("tận nơi");
  // Kiểm soát lỗi số điện thoại
  const [phoneError, setPhoneError] = useState("");

  // Hàm mở Modal và gán tên dịch vụ/combo
  const openBookingModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setPhoneError(""); // Reset lỗi khi mở mới
    setIsModalOpen(true);
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const phone = formData.get("phone") as string;

  // 1. Validate số điện thoại (10 số)
  if (!/^[0-9]{10}$/.test(phone)) {
    setPhoneError("Số điện thoại phải bao gồm đúng 10 chữ số.");
    return;
  }

  setIsSubmitting(true);
  
  // 2. Xử lý logic Địa chỉ động
  // Nếu là 'tận nơi' thì lấy từ input 'address', nếu 'tại cửa hàng' thì gán mặc định
  const finalAddress = serviceType === "tận nơi" 
    ? (formData.get("address") as string) 
    : "Khách mang máy đến cửa hàng";

  // 3. Chuẩn bị dữ liệu gửi đi (Lấy từ state và form)
  const payload = {
    name: formData.get("name"),
    phone: phone,
    problem: formData.get("problem") || selectedService, // Lấy từ textarea hoặc tên Combo
    address: finalAddress,                               // Dữ liệu động
    serviceType: serviceType,                           // Dữ liệu động từ State
    status: "pending",
    createdAt: new Date(),
  };

  try {
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("Đặt lịch thành công! Kỹ thuật viên sẽ gọi cho bạn ngay.");
      setIsModalOpen(false); // Đóng modal sau khi thành công
      (e.target as HTMLFormElement).reset(); 
    } else {
      alert("Có lỗi xảy ra, vui lòng thử lại.");
    }
  } catch (error) {
    console.error("Lỗi gửi form:", error);
    alert("Không thể kết nối đến máy chủ.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <main className="flex flex-col gap-12 bg-white dark:bg-slate-950">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-primary px-4 py-2 rounded-full w-fit">
                <span className="material-symbols-outlined text-sm notranslate">verified</span>
                <span className="text-xs font-bold uppercase tracking-wider">Phục vụ tận nơi 30 phút</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900 dark:text-white">
                Sửa – Nâng cấp – <span className="text-primary">Build PC</span> tận nơi tại Hà Đông
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                Báo giá trước · Không rành máy vẫn yên tâm · Có mặt nhanh
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="flex flex-1 sm:flex-none items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all" href="tel:0900000000">
                  <span className="material-symbols-outlined notranslate">call</span> Gọi ngay
                </a>
                <button 
                  onClick={() => openBookingModal("Tư vấn nâng cấp")}
                  className="flex flex-1 sm:flex-none items-center justify-center gap-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                >
                  <span className="material-symbols-outlined notranslate">calendar_month</span> Báo giá & Đặt lịch
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
              <img alt="Professional PC Repair" className="relative rounded-3xl shadow-2xl object-cover w-full aspect-[4/3]" src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop"/>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION VẤN ĐỀ */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50" id="problems">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Bạn đang gặp vấn đề gì?</h2>
          <p className="text-slate-500 mb-12">Chọn sự cố bạn gặp phải để xem giải pháp và báo giá tức thì.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
            <ProblemCard href="/van-de?problem=slow" icon="speed" title="Máy chạy chậm" desc="Giật lag, treo máy..." />
            <ProblemCard href="/van-de?problem=windows" icon="desktop_windows" title="Lỗi Windows" desc="Màn hình xanh, không vào Win..." />
            <ProblemCard href="/van-de?problem=hard_drive" icon="memory" title="SSD/RAM" desc="Nâng cấp tốc độ gấp 10 lần..." />
            <ProblemCard href="/van-de?problem=power" icon="power_off" title="Không nguồn" desc="Máy sập nguồn, không lên điện..." />
            <ProblemCard href="/van-de?problem=virus" icon="coronavirus" title="Virus" desc="Mã độc, quảng cáo, tống tiền..." />
          </div>
        </div>
      </section>
      
     {/* SECTION COMBO - Giao diện mới */}
      <section className="px-6 md:px-40 py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1200px] mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Gói Combo Tiết Kiệm</h2>
          <p className="text-gray-500">Lựa chọn tối ưu cho mọi nhu cầu, không lo về giá</p>
        </div>
        
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Combo Student */}
          <div className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary/10 text-primary px-4 py-1 text-xs font-bold rounded-bl-lg">Hot</div>
            <h3 className="text-xl font-bold mb-2">Combo Sinh viên</h3>
            <div className="text-3xl font-black text-primary mb-6">299.000đ</div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="text-sm flex items-center gap-2"><span className="material-symbols-outlined text-xs">done</span> Cài Win + Office cơ bản</li>
              <li className="text-sm flex items-center gap-2"><span className="material-symbols-outlined text-xs">done</span> Vệ sinh bên ngoài</li>
              <li className="text-sm flex items-center gap-2"><span className="material-symbols-outlined text-xs">done</span> Miễn phí phí đi lại</li>
            </ul>
            <button 
              onClick={() => openBookingModal("Combo Sinh viên")}
              className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Đặt ngay
            </button>
          </div>

          {/* Combo Office */}
          <div className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-primary shadow-xl relative scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 text-sm font-bold rounded-full">Phổ biến nhất</div>
            <h3 className="text-xl font-bold mb-2">Combo Văn phòng</h3>
            <div className="text-3xl font-black text-primary mb-6">399.000đ</div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="text-sm flex items-center gap-2 font-bold"><span className="material-symbols-outlined text-xs">done</span> Cài Win + Full Soft</li>
              <li className="text-sm flex items-center gap-2 font-bold"><span className="material-symbols-outlined text-xs">done</span> Vệ sinh, tra keo tản nhiệt</li>
              <li className="text-sm flex items-center gap-2"><span className="material-symbols-outlined text-xs">done</span> Tối ưu hệ thống 100%</li>
              <li className="text-sm flex items-center gap-2"><span className="material-symbols-outlined text-xs">done</span> Bảo hành 3 tháng</li>
            </ul>
            <button 
              onClick={() => openBookingModal("Combo Văn phòng")}
              className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Đặt ngay
            </button>
          </div>

          {/* Combo Pro */}
          <div className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Combo Cứu nguy</h3>
            <div className="text-3xl font-black text-primary mb-2">từ 450.000đ</div>
            <p className="text-xs text-gray-400 mb-6 italic">Dành cho máy lỗi nặng</p>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="text-sm flex items-center gap-2"><span className="material-symbols-outlined text-xs">done</span> Backup dữ liệu khẩn cấp</li>
              <li className="text-sm flex items-center gap-2"><span className="material-symbols-outlined text-xs">done</span> Xử lý lỗi xanh màn, treo</li>
              <li className="text-sm flex items-center gap-2"><span className="material-symbols-outlined text-xs">done</span> Thay linh kiện (nếu cần)</li>
            </ul>
            <button 
              onClick={() => openBookingModal("Combo Cứu nguy")}
              className="w-full bg-gray-800 dark:bg-gray-700 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Đặt ngay
            </button>
          </div>
        </div>
      </section>

      {/* SECTION BOOKING FOOTER */}
      <section className="py-20 px-6" id="booking">
        <div className="mx-auto max-w-[1100px] bg-primary rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 text-white flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6">Đặt lịch ngay hôm nay</h2>
              <p className="text-blue-100 mb-8 italic">Kỹ thuật viên sẽ gọi lại cho bạn trong 2 phút.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3"><span className="material-symbols-outlined">check_circle</span> Miễn phí kiểm tra</div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined">check_circle</span> Giảm 10% cho sinh viên</div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-12">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-primary transition-all" 
                  placeholder="Họ và tên của bạn" 
                />
                
                <div className="space-y-1">
                  <input 
                    name="phone" 
                    required 
                    type="tel" 
                    onChange={() => setPhoneError("")}
                    className={`w-full px-4 py-3 rounded-xl border dark:bg-slate-900 outline-none focus:ring-2 transition-all ${
                      phoneError ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 dark:border-slate-700 focus:ring-primary'
                    }`} 
                    placeholder="Số điện thoại (10 số)" 
                  />
                  {phoneError && <p className="text-red-500 text-[10px] font-bold uppercase ml-2 tracking-wider">{phoneError}</p>}
                </div>

                <textarea 
                  name="problem" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 h-24 outline-none focus:ring-2 focus:ring-primary transition-all resize-none" 
                  placeholder="Máy tính của bạn đang gặp vấn đề gì?"
                ></textarea>

                <button 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all disabled:bg-slate-400 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Đang gửi...
                    </>
                  ) : (
                    "Gửi yêu cầu ngay"
                  )}
                </button>
              </form>
            </div>            
          </div>
        </div>
      </section>

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

// Sub-components để code gọn hơn
function ProblemCard({ href, icon, title, desc }: any) {
  return (
    <Link href={href} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary transition-all group shadow-sm">
      <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform notranslate">{icon}</span>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-slate-500">{desc}</p>
    </Link>
  );
}

function ComboCard({ title, desc, price, onBooking, isFeatured = false }: any) {
  return (
    <div className={`flex flex-col p-8 rounded-3xl border-2 overflow-hidden shadow-lg transition-all ${isFeatured ? 'bg-primary text-white border-primary scale-105' : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700'}`}>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className={`text-sm mb-6 ${isFeatured ? 'text-blue-100' : 'text-slate-500'}`}>{desc}</p>
      <div className={`text-xl font-black mb-8 ${isFeatured ? 'text-white' : 'text-primary'}`}>{price}</div>
      <button 
        onClick={onBooking}
        className={`mt-auto w-full py-4 rounded-xl font-bold transition-all ${isFeatured ? 'bg-white text-primary hover:bg-blue-50' : 'bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white'}`}
      >
        Đặt lịch
      </button>
    </div>
  );
}