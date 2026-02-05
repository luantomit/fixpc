"use client";

import Link from "next/link";
import { useState } from "react";

export default function DichVu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [serviceType, setServiceType] = useState("tận nơi");

  // Schema.org cho Dịch vụ sửa chữa (Tăng uy tín với Google)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Sửa máy tính tận nơi Hà Đông",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixPC - Cấp Cứu Máy Tính Hà Đông",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hà Đông",
        "addressRegion": "Hà Nội"
      }
    },
    "areaServed": "Hà Đông",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dịch vụ máy tính",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cài Win tại nhà" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vệ sinh Laptop" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nâng cấp SSD" } }
      ]
    }
  };

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

    const payload = {
      name: formData.get("name"),
      phone: phone,
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
        alert("Đặt lịch thành công!");
        setIsModalOpen(false);
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-1">
      {/* Chèn JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. HERO SECTION - Tối ưu H1 chứa Key chính */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <article className="flex flex-col gap-8 text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-primary px-4 py-2 rounded-full w-fit">
                <span className="material-symbols-outlined text-sm notranslate">verified</span>
                <span className="text-xs font-bold uppercase tracking-wider">Uy tín - Chuyên nghiệp - Minh bạch</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-slate-900 dark:text-white">
                Dịch vụ sửa máy tính, <span className="text-primary">Cài Win tại nhà</span> Quận Hà Đông
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                Bạn cần sửa máy tính gấp? Kỹ thuật viên FixPC có mặt sau 20 phút. Chuyên sửa Laptop, PC, Macbook tận nơi giá rẻ nhất Hà Đông.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:0355193008" className="flex flex-1 sm:flex-none items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all">
                  <span className="material-symbols-outlined notranslate">call</span> Gọi ngay: 0355.193.008
                </a>
              </div>
            </article>
            <div className="relative hidden lg:block">
              <img 
                alt="Thợ sửa máy tính tại nhà Hà Đông đang cài đặt windows" 
                title="Dịch vụ sửa máy tính tận nơi Hà Đông"
                className="relative rounded-3xl shadow-2xl object-cover w-full aspect-[4/3]" 
                src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1000&auto=format&fit=crop" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION VẤN ĐỀ - Internal Link tốt cho SEO */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Bảng giá dịch vụ sửa chữa phổ biến</h2>
          <p className="text-slate-500 mb-12">Khắc phục mọi sự cố máy tính bàn và laptop chỉ trong 1 lần thăm khám.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            <ProblemCard href="/van-de?problem=slow" icon="speed" title="Máy chạy chậm" />
            <ProblemCard href="/van-de?problem=windows" icon="desktop_windows" title="Cài Windows" />
            <ProblemCard href="/van-de?problem=hard_drive" icon="memory" title="Thay SSD/RAM" />
            <ProblemCard href="/van-de?problem=power" icon="power_off" title="Lỗi nguồn/Main" />
            <ProblemCard href="/van-de?problem=virus" icon="coronavirus" title="Phần mềm/Virus" />
          </div>
        </div>
      </section>

      {/* 3. CHI TIẾT DỊCH VỤ - Dùng thẻ Section & Heading chuẩn */}
      <section className="px-6 md:px-40 py-16 bg-white dark:bg-slate-950">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-primary/5 dark:bg-primary/10 p-8 rounded-3xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><span className="material-symbols-outlined text-primary">terminal</span>Xử lý lỗi Phần mềm</h3>
            <ul className="space-y-4 text-slate-600 dark:text-slate-300">
              <ServiceItem text="Cài đặt Windows 10, 11 (Pro/Home) kích hoạt bản quyền" />
              <ServiceItem text="Cài đặt bộ Office văn phòng, Adobe (Ps, Ai, Pr), AutoCAD" />
              <ServiceItem text="Khắc phục lỗi không vào được mạng, lỗi Driver máy in" />
              <ServiceItem text="Cứu dữ liệu ổ cứng, USB bị format hoặc virus xóa" />
            </ul>
          </section>
          <section className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><span className="material-symbols-outlined text-primary">home_repair_service</span>Sửa chữa Phần cứng</h3>
            <ul className="space-y-4 text-slate-600 dark:text-slate-300">
              <ServiceItem text="Vệ sinh Laptop lấy ngay, bôi keo tản nhiệt MX4" />
              <ServiceItem text="Nâng cấp SSD siêu tốc giúp máy khởi động trong 10 giây" />
              <ServiceItem text="Sửa chữa Mainboard, thay màn hình, bàn phím Laptop" />
              <ServiceItem text="Tư vấn lắp đặt máy tính văn phòng, PC Gaming giá rẻ" />
            </ul>
          </section>
        </div>
      </section>

      {/* 5. QUY TRÌNH - Giúp Google hiểu trải nghiệm người dùng */}
      
      <section className="px-6 md:px-40 py-20 bg-white dark:bg-slate-950 text-center">
        <h2 className="text-3xl font-bold mb-16">Quy trình sửa máy tính tại nhà chuyên nghiệp</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Step num="1" title="Tiếp nhận" desc="Khách gọi 0355193008 báo lỗi" />
          <Step num="2" title="Kỹ thuật đến" desc="Có mặt sau 20-30p tại khu vực Hà Đông" />
          <Step num="3" title="Kiểm tra & Báo giá" desc="Minh bạch, khách đồng ý mới làm" />
          <Step num="4" title="Bảo hành" desc="Dán tem và viết phiếu bảo hành dài hạn" />
        </div>
      </section>

      {/* ... Các section khác giữ nguyên cấu trúc cũ ... */}
      
    </main>
  );
}

// ... Các helper components (ProblemCard, ServiceItem, ComboCard, Step) giữ nguyên

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