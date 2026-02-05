"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function VanDe() {
  const searchParams = useSearchParams();
  const solutionRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceType, setServiceType] = useState("tận nơi");
  const [phoneError, setPhoneError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  

  const problems = [
    {
      id: "slow",
      label: "Máy chạy chậm",
      icon: "speed",
      solutions: [
        { title: "Vệ sinh máy tính & Thay keo tản nhiệt", price: "120.000đ", note: "Khuyên dùng 6 tháng/lần", icon: "cleaning_services" },
        { title: "Cài đặt lại Windows & Phần mềm cơ bản", price: "150.000đ", note: "Tối ưu hóa hệ thống sạch sẽ", icon: "fluid_med" },
        { title: "Nâng cấp ổ cứng SSD (120GB - 500GB)", price: "300.000đ", note: "Tăng tốc độ máy lên gấp 5-10 lần", icon: "rocket_launch", isFrom: true },
        { title: "Nâng cấp bộ nhớ RAM", price: "250.000đ", note: "Giúp mở nhiều ứng dụng không giật lag", icon: "memory", isFrom: true },
      ]
    },
    { id: "power", label: "Không lên nguồn", icon: "power_off", solutions: [{ title: "Sửa nguồn PC", price: "250.000đ", note: "Xử lý lỗi sụt áp", icon: "bolt" }] },
    { id: "hard_drive", label: "Lỗi ổ cứng", icon: "hard_drive", solutions: [{ title: "Thay SSD mới", price: "450.000đ", note: "Bảo hành 3 năm", icon: "storage" }] },
    { id: "virus", label: "Nhiễm virus", icon: "coronavirus", solutions: [{ title: "Diệt Virus chuyên sâu", price: "100.000đ", note: "Quét sạch mã độc", icon: "shield" }] },
    { id: "windows", label: "Cài Windows", icon: "settings_backup_restore", solutions: [{ title: "Cài Win 10/11 Pro", price: "150.000đ", note: "Đầy đủ Driver", icon: "laptop_windows" }] },
    { id: "other", label: "Lỗi khác", icon: "more_horiz", solutions: [{ title: "Kiểm tra tận nơi", price: "50.000đ", note: "Miễn phí nếu sửa", icon: "support_agent" }] }
  ];

  const [selectedId, setSelectedId] = useState("slow");

  useEffect(() => {
    const query = searchParams.get("problem");
    if (query && problems.some(p => p.id === query)) {
      setSelectedId(query);
      setTimeout(() => solutionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 500);
    }
  }, [searchParams]);

  const activeProblem = problems.find(p => p.id === selectedId) || problems[0];

  // HÀM XỬ LÝ CHÍNH
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

    try {
      let attachmentUrl = "";
      const file = formData.get("attachment") as File;

      // BƯỚC 1: UPLOAD FILE LÊN CLOUDINARY QUA API RIÊNG
      if (file && file.size > 0) {
        const uploadFormData = new FormData();
        uploadFormData.append("file", file);

        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: uploadFormData,
        });

        if (!uploadRes.ok) throw new Error("Không thể upload ảnh/video");
        
        const uploadData = await uploadRes.json();
        attachmentUrl = uploadData.url; // Lấy URL trả về từ Cloudinary
      }

      // BƯỚC 2: GỬI DATA CUỐI CÙNG LÊN MONGODB
      const payload = {
        name: formData.get("name"),
        phone: phone,
        address: serviceType === "tận nơi" ? formData.get("address") : "Khách mang máy đến cửa hàng",
        serviceType: serviceType,
        desc: formData.get("desc"),
        attachment: attachmentUrl, // Lưu URL thay vì Base64
        problem: activeProblem.label,
      };

      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Sau khi thành công:
      setShowSuccessModal(true);
      (e.target as HTMLFormElement).reset(); 
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-1 bg-slate-50 dark:bg-slate-950 min-h-screen relative">
      <div className="px-4 md:px-40 py-10 flex flex-col items-center text-slate-900 dark:text-white">
        <div className="max-w-[960px] w-full">
          {/* Grid chọn lỗi */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-xs">1</span>
              Máy bạn bị làm sao?
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 text-slate-900 dark:text-white">
              {problems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                    selectedId === item.id 
                    ? "border-primary bg-white dark:bg-slate-800 shadow-lg" 
                    : "border-transparent bg-slate-100 dark:bg-slate-900 hover:border-slate-200"
                  }`}
                >
                  <span className={`material-symbols-outlined !text-3xl notranslate ${selectedId === item.id ? "text-primary" : "text-slate-400"}`}>
                    {item.icon}
                  </span>
                  <p className={`text-[11px] font-bold ${selectedId === item.id ? "text-primary" : "text-slate-500"}`}>
                    {item.label}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Bảng giải pháp */}
          <div ref={solutionRef} className="scroll-mt-24 bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100 dark:border-slate-800 mb-10">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Giải pháp cho: <span className="text-primary">{activeProblem.label}</span></h2>
            <div className="space-y-3">
              {activeProblem.solutions.map((sol, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                    <span className="material-symbols-outlined text-primary notranslate">{sol.icon}</span>
                    <div>
                      <p className="text-sm font-bold leading-none mb-1">{sol.title}</p>
                      <p className="text-[10px] text-slate-400">{sol.note}</p>
                    </div>
                  </div>
                  <p className="text-primary font-black shrink-0">{sol.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
            <button onClick={() => setIsModalOpen(true)} className="flex-1 flex items-center justify-center gap-2 h-14 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 active:scale-95 transition-all">
              <span className="material-symbols-outlined notranslate">calendar_month</span>
              Đặt lịch ngay
            </button>
            <a href="tel:0355193008" className="flex-1 flex items-center justify-center gap-2 h-14 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-lg">
              <span className="material-symbols-outlined text-primary notranslate">call</span>
              Gọi tư vấn
            </a>
          </div>
        </div>
      </div>

      {/* --- MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-slate-900/60 backdrop-blur-sm p-0 md:p-4">
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative w-full md:max-w-md bg-white dark:bg-slate-900 rounded-t-[32px] md:rounded-3xl p-6 md:p-8 shadow-2xl animate-in slide-in-from-bottom md:zoom-in duration-300">
            <div className="w-12 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-6 md:hidden"></div>
            <button onClick={() => setIsModalOpen(false)} className="hidden md:block absolute top-4 right-4 text-slate-400"><span className="material-symbols-outlined notranslate">close</span></button>
            
            <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-6">Thông tin đặt lịch</h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase ml-1">Họ tên</label>
                <input name="name" required placeholder="Nguyễn Văn A" className="w-full h-12 px-4 rounded-xl border bg-slate-50 dark:bg-slate-800 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white" />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase ml-1">Số điện thoại</label>
                <input 
                  name="phone" 
                  required 
                  type="tel" 
                  placeholder="09xx xxx xxx" 
                  onChange={() => setPhoneError("")}
                  className={`w-full h-12 px-4 rounded-xl border bg-slate-50 dark:bg-slate-800 outline-none focus:ring-2 transition-all text-slate-900 dark:text-white ${phoneError ? "border-red-500 focus:ring-red-500" : "dark:border-slate-700 focus:ring-primary"}`} 
                />
                {phoneError && <p className="text-red-500 text-[10px] font-bold ml-1 animate-pulse">{phoneError}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase ml-1">Hình thức sửa chữa</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`flex items-center gap-2 p-3 border rounded-xl cursor-pointer transition-all ${serviceType === 'tận nơi' ? 'border-primary bg-primary/5' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                    <input type="radio" name="serviceType" value="tận nơi" checked={serviceType === "tận nơi"} onChange={(e) => setServiceType(e.target.value)} className="w-4 h-4 text-primary" />
                    <span className="text-sm">Tận nơi</span>
                  </label>
                  <label className={`flex items-center gap-2 p-3 border rounded-xl cursor-pointer transition-all ${serviceType === 'tại cửa hàng' ? 'border-primary bg-primary/5' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                    <input type="radio" name="serviceType" value="tại cửa hàng" checked={serviceType === "tại cửa hàng"} onChange={(e) => setServiceType(e.target.value)} className="w-4 h-4 text-primary" />
                    <span className="text-sm">Cửa hàng</span>
                  </label>
                </div>
              </div>

              {serviceType === "tận nơi" && (
                <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="text-[11px] font-bold text-slate-400 uppercase ml-1">Địa chỉ của bạn</label>
                  <input name="address" required={serviceType === "tận nơi"} placeholder="Số nhà, tên đường..." className="w-full h-12 px-4 rounded-xl border bg-slate-50 dark:bg-slate-800 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white" />
                </div>
              )}

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase ml-1">Mô tả tình trạng máy</label>
                <textarea name="desc" placeholder="Máy bật không lên hình..." className="w-full h-24 px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-800 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white resize-none"></textarea>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase ml-1">Đính kèm ảnh/video lỗi</label>
                <input type="file" name="attachment" accept="image/*,video/*" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
              </div>

              <button disabled={isSubmitting} className="w-full h-14 bg-primary text-white rounded-2xl font-bold text-lg shadow-lg active:scale-[0.98] disabled:bg-slate-300 transition-all flex items-center justify-center gap-2">
                {isSubmitting ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : "Xác nhận đặt lịch"}
              </button>
            </form>
            <div className="h-6 md:hidden"></div>
          </div>
        </div>
      )}
      {/* MODAL THÔNG BÁO THÀNH CÔNG */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] p-8 md:p-12 shadow-2xl border dark:border-slate-800 text-center scale-in-center animate-in zoom-in-95 duration-300">
            
            {/* Icon Check động */}
            <div className="mx-auto w-20 h-20 bg-emerald-100 dark:bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-5xl text-emerald-500 font-bold">
                check_circle
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3">
              Gửi yêu cầu thành công!
            </h2>
            
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-medium">
              Cảm ơn bạn đã tin tưởng FixPC. <br />
              Kỹ thuật viên sẽ gọi xác nhận cho bạn trong <span className="text-primary font-bold">15 phút</span> tới.
            </p>

            <div className="space-y-3">
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-blue-700 transition-all active:scale-95"
              >
                Đóng thông báo
              </button>
              
              <Link 
                href="/"
                className="block w-full py-4 text-slate-500 dark:text-slate-400 font-bold text-sm hover:text-primary transition-colors"
              >
                Quay lại trang chủ
              </Link>
            </div>

            {/* Thông tin hỗ trợ nhanh */}
            <div className="mt-8 pt-6 border-t dark:border-slate-800 flex justify-center gap-4">
               <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm text-primary">bolt</span>
                  Xử lý siêu tốc
               </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default function VanDePage() {
  return (
    <Suspense fallback={<div className="p-20 text-center text-slate-500">Đang tải dữ liệu...</div>}>
      <VanDe />
    </Suspense>
  );
}