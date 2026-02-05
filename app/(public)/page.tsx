"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceType, setServiceType] = useState("tận nơi");
  const [phoneError, setPhoneError] = useState("");

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

    setIsSubmitting(true);
    const finalAddress = serviceType === "tận nơi" 
      ? (formData.get("address") as string) 
      : "Khách mang máy đến cửa hàng";

    const payload = {
      name: formData.get("name"),
      phone: phone,
      problem: formData.get("problem") || selectedService,
      address: finalAddress,
      serviceType: serviceType,
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
        setIsModalOpen(false);
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
      {/* SEO SCHEMA - Giúp Google hiểu đây là dịch vụ Local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "FixPC Hà Đông - Sửa Máy Tính Tận Nơi",
            "description": "Dịch vụ sửa chữa laptop, máy tính, nâng cấp PC uy tín tại Quận Hà Đông. Phục vụ tận nhà sau 30 phút.",
            "areaServed": "Hà Đông, Hà Nội",
            "telephone": "0355193008",
            "priceRange": "100000VND - 2000000VND"
          })
        }}
      />

      {/* HERO SECTION - Tối ưu H1 và Image Alt */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-primary px-4 py-2 rounded-full w-fit">
                <span className="material-symbols-outlined text-sm notranslate">verified</span>
                <span className="text-xs font-bold uppercase tracking-wider">Sửa máy tính Hà Đông uy tín</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] text-slate-900 dark:text-white">
                Dịch Vụ Sửa Máy Tính – <span className="text-primary text-nowrap">Build PC</span> Tận Nơi Hà Đông
              </h1>
              <h2 className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                Kỹ thuật viên chuyên nghiệp hỗ trợ tận nhà 30 phút. Báo giá minh bạch, linh kiện chính hãng, bảo hành dài hạn.
              </h2>
              <div className="flex flex-wrap gap-4">
                <a title="Gọi ngay cho thợ sửa máy tính" className="flex flex-1 sm:flex-none items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all" href="tel:0355193008">
                  <span className="material-symbols-outlined notranslate">call</span> 0355.193.008
                </a>
                <button 
                  onClick={() => openBookingModal("Tư vấn tổng quát")}
                  className="flex flex-1 sm:flex-none items-center justify-center gap-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                >
                  <span className="material-symbols-outlined notranslate">calendar_month</span> Đặt lịch online
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
              <img 
                alt="Dịch vụ sửa máy tính laptop chuyên nghiệp tận nhà tại quận Hà Đông" 
                className="relative rounded-3xl shadow-2xl object-cover w-full aspect-[4/3]" 
                src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION VẤN ĐỀ - Tối ưu H2 và từ khóa dịch vụ */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50" id="problems">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Dịch vụ sửa chữa máy tính phổ biến</h2>
          <p className="text-slate-500 mb-12">Khắc phục triệt để mọi sự cố Laptop, PC, Máy văn phòng tại nhà.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
            <ProblemCard href="/van-de?problem=slow" icon="speed" title="Máy chạy chậm" desc="Vệ sinh máy tính & tối ưu Windows..." />
            <ProblemCard href="/van-de?problem=windows" icon="desktop_windows" title="Cài Win tận nơi" desc="Cài Windows 10/11 bản quyền, Office..." />
            <ProblemCard href="/van-de?problem=hard_drive" icon="memory" title="Nâng cấp SSD/RAM" desc="Tăng tốc máy tính cũ lấy ngay..." />
            <ProblemCard href="/van-de?problem=power" icon="power_off" title="Sửa nguồn máy tính" desc="Xử lý máy không lên nguồn, sập nguồn..." />
            <ProblemCard href="/van-de?problem=virus" icon="coronavirus" title="Diệt Virus" desc="Cài đặt phần mềm diệt mã độc uy tín..." />
          </div>
        </div>
      </section>
      
      {/* SECTION COMBO */}
      <section className="px-6 md:px-40 py-20 bg-white dark:bg-slate-950">
        <div className="max-w-[1200px] mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Bảng giá Combo sửa chữa tiết kiệm</h2>
          <p className="text-gray-500">Lựa chọn tối ưu cho sinh viên và dân văn phòng tại Hà Đông</p>
        </div>
        
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Combo Student */}
          <div className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary/10 text-primary px-4 py-1 text-xs font-bold rounded-bl-lg">Ưu đãi sinh viên</div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">Combo Học Tập</h3>
            <div className="text-3xl font-black text-primary mb-6">299.000đ</div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="text-sm flex items-center gap-2 dark:text-slate-300"><span className="material-symbols-outlined text-xs">done</span> Cài Win + Office cơ bản</li>
              <li className="text-sm flex items-center gap-2 dark:text-slate-300"><span className="material-symbols-outlined text-xs">done</span> Vệ sinh thổi bụi Laptop/PC</li>
              <li className="text-sm flex items-center gap-2 dark:text-slate-300"><span className="material-symbols-outlined text-xs">done</span> Miễn phí phí đi lại Hà Đông</li>
            </ul>
            <button onClick={() => openBookingModal("Combo Học Tập")} className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity">Đặt ngay</button>
          </div>

          {/* Combo Office */}
          <div className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-primary shadow-xl relative scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 text-sm font-bold rounded-full">Phổ biến nhất</div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">Combo Toàn Diện</h3>
            <div className="text-3xl font-black text-primary mb-6">399.000đ</div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="text-sm flex items-center gap-2 font-bold dark:text-slate-200"><span className="material-symbols-outlined text-xs">done</span> Cài Win + Full Phần mềm</li>
              <li className="text-sm flex items-center gap-2 font-bold dark:text-slate-200"><span className="material-symbols-outlined text-xs">done</span> Vệ sinh + Tra keo MX-4</li>
              <li className="text-sm flex items-center gap-2 dark:text-slate-300"><span className="material-symbols-outlined text-xs">done</span> Tối ưu hệ thống cực mượt</li>
              <li className="text-sm flex items-center gap-2 dark:text-slate-300"><span className="material-symbols-outlined text-xs">done</span> Bảo hành phần mềm 3 tháng</li>
            </ul>
            <button onClick={() => openBookingModal("Combo Toàn Diện")} className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity">Đặt ngay</button>
          </div>

          {/* Combo Pro */}
          <div className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-xl font-bold mb-2 dark:text-white">Combo Cứu Nguy</h3>
            <div className="text-3xl font-black text-primary mb-2">từ 450.000đ</div>
            <p className="text-xs text-gray-400 mb-6 italic">Dành cho máy lỗi nặng, treo máy</p>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="text-sm flex items-center gap-2 dark:text-slate-300"><span className="material-symbols-outlined text-xs">done</span> Khôi phục dữ liệu ổ cứng</li>
              <li className="text-sm flex items-center gap-2 dark:text-slate-300"><span className="material-symbols-outlined text-xs">done</span> Xử lý lỗi xanh màn xanh</li>
              <li className="text-sm flex items-center gap-2 dark:text-slate-300"><span className="material-symbols-outlined text-xs">done</span> Hỗ trợ kiểm tra phần cứng</li>
            </ul>
            <button onClick={() => openBookingModal("Combo Cứu Nguy")} className="w-full bg-gray-800 dark:bg-gray-700 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity">Đặt ngay</button>
          </div>
        </div>
      </section>

      {/* SECTION BOOKING FOOTER */}
      <section className="py-20 px-6" id="booking">
        <div className="mx-auto max-w-[1100px] bg-primary rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 text-white flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6 italic underline decoration-blue-300">Sửa máy tính ngay hôm nay!</h2>
              <p className="text-blue-100 mb-8 italic">Phục vụ các phường: Văn Quán, Mộ Lao, La Khê, Dương Nội, Hà Cầu, Phúc La, Yết Kiêu...</p>
              <div className="space-y-4 font-medium">
                <div className="flex items-center gap-3"><span className="material-symbols-outlined">check_circle</span> Kiểm tra máy miễn phí tận nơi</div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined">check_circle</span> Giảm 10% khi cài đặt từ 2 máy</div>
                <div className="flex items-center gap-3"><span className="material-symbols-outlined">check_circle</span> Hỗ trợ Teamview miễn phí trọn đời</div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-12">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input name="name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-primary transition-all text-slate-900 dark:text-white" placeholder="Họ và tên khách hàng" />
                <div className="space-y-1">
                  <input name="phone" required type="tel" onChange={() => setPhoneError("")} className={`w-full px-4 py-3 rounded-xl border dark:bg-slate-900 outline-none focus:ring-2 transition-all text-slate-900 dark:text-white ${phoneError ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 dark:border-slate-700 focus:ring-primary'}`} placeholder="Số điện thoại của bạn" />
                  {phoneError && <p className="text-red-500 text-[10px] font-bold uppercase ml-2 tracking-wider">{phoneError}</p>}
                </div>
                <textarea name="problem" required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 h-24 outline-none focus:ring-2 focus:ring-primary transition-all resize-none text-slate-900 dark:text-white" placeholder="Mô tả tình trạng máy (VD: Máy không lên nguồn, cần cài lại Win...)"></textarea>
                <button disabled={isSubmitting} className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-all disabled:bg-slate-400 flex items-center justify-center gap-2">
                  {isSubmitting ? <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> Đang gửi...</> : "Gửi yêu cầu sửa chữa"}
                </button>
              </form>
            </div>            
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-primary">
              <span className="material-symbols-outlined notranslate">close</span>
            </button>
            <h3 className="text-2xl font-bold mb-2 text-center dark:text-white">Đặt lịch sửa chữa</h3>
            <p className="text-center text-primary font-bold mb-6 italic underline">{selectedService}</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input name="name" required placeholder="Họ tên của bạn" className="w-full h-12 px-4 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-primary" />
              <input name="phone" required type="tel" onChange={() => setPhoneError("")} placeholder="Số điện thoại" className={`w-full h-12 px-4 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white outline-none focus:ring-2 ${phoneError ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'}`} />
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase ml-1">Hình thức phục vụ</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`flex items-center gap-2 p-3 border rounded-xl cursor-pointer transition-all dark:border-slate-700 ${serviceType === 'tận nơi' ? 'border-primary bg-primary/5' : ''}`}>
                    <input type="radio" name="serviceType" value="tận nơi" checked={serviceType === "tận nơi"} onChange={(e) => setServiceType(e.target.value)} className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium dark:text-slate-200">Tận nơi</span>
                  </label>
                  <label className={`flex items-center gap-2 p-3 border rounded-xl cursor-pointer transition-all dark:border-slate-700 ${serviceType === 'tại cửa hàng' ? 'border-primary bg-primary/5' : ''}`}>
                    <input type="radio" name="serviceType" value="tại cửa hàng" checked={serviceType === "tại cửa hàng"} onChange={(e) => setServiceType(e.target.value)} className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium dark:text-slate-200">Tại tiệm</span>
                  </label>
                </div>
              </div>
              {serviceType === "tận nơi" && (
                <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="text-[11px] font-bold text-slate-400 uppercase ml-1">Địa chỉ tại Hà Đông</label>
                  <input name="address" required={serviceType === "tận nơi"} placeholder="Số nhà, tên phố..." className="w-full h-12 px-4 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-primary" />
                </div>
              )}
              <button disabled={isSubmitting} className="w-full h-14 bg-primary text-white rounded-2xl font-bold text-lg disabled:bg-slate-400 shadow-lg mt-2">
                {isSubmitting ? "Đang xử lý..." : "Xác nhận ngay"}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

// Sub-components
function ProblemCard({ href, icon, title, desc }: any) {
  return (
    <Link href={href} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary transition-all group shadow-sm flex flex-col">
      <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform notranslate">{icon}</span>
      <h3 className="font-bold text-lg mb-2 dark:text-white">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400">{desc}</p>
    </Link>
  );
}