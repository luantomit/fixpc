"use client";
import React from "react";
import Link from "next/link";

// --- Dữ liệu để quản lý nội dung dễ dàng hơn ---
const CORE_VALUES = [
  {
    icon: "visibility",
    title: "Kiểm tra công khai",
    desc: "Mọi lỗi máy tính đều được chỉ rõ trực tiếp trước mặt khách hàng.",
  },
  {
    icon: "receipt_long",
    title: "Báo giá trước khi làm",
    desc: "Không có chi phí ẩn. Bạn biết chính xác số tiền cần trả trước khi thợ đụng máy.",
  },
  {
    icon: "thumb_up",
    title: "Chỉ sửa khi được duyệt",
    desc: "Tuyệt đối không tự ý thay linh kiện hay phát sinh dịch vụ khi chưa hỏi ý kiến khách.",
  },
];

const STATS = [
  { value: "5+", label: "Năm kinh nghiệm" },
  { value: "2k+", label: "Máy đã sửa" },
  { value: "100%", label: "Linh kiện chính hãng" },
  { value: "24h", label: "Xử lý nhanh gọn" },
];

const CUSTOMER_TYPES = [
  {
    icon: "school",
    title: "Học sinh & Sinh viên",
    desc: "Cần máy chạy mượt để làm đồ án, chơi game giải trí với chi phí tối ưu.",
  },
  {
    icon: "laptop_mac",
    title: "Dân văn phòng",
    desc: "Cần xử lý lỗi phần mềm nhanh để không trễ deadline, bảo mật dữ liệu.",
  },
  {
    icon: "sentiment_satisfied",
    title: "Người mới dùng Tech",
    desc: "Sợ bị 'chém' giá, cần một người thợ nhiệt tình giải thích dễ hiểu nhất.",
  },
];

export default function ViSaoChonChungToiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* HERO SECTION */}
        <section className="py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-[#0d121b] dark:text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                Vì Sao Chọn <span className="text-primary">FixPC Hà Đông?</span>
              </h1>
              <h2 className="text-[#4c669a] dark:text-gray-400 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-primary pl-4 py-1">
                "Máy tính hỏng là đã mệt, còn mệt hơn nếu không biết mình đang bị sửa gì... FixPC Hà Đông sinh ra để giải quyết đúng nỗi lo đó."
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/dat-lich" className="flex-1 md:flex-none px-8 py-4 bg-primary text-white rounded-xl font-bold text-center shadow-lg shadow-primary/20 hover:bg-blue-700 transition-all active:scale-95">
                Đặt lịch sửa chữa
              </Link>
              <Link href="/bang-gia" className="flex-1 md:flex-none px-8 py-4 bg-primary/10 text-primary border border-primary/20 rounded-xl font-bold text-center hover:bg-primary/20 transition-all">
                Xem bảng giá
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center relative">
            {/* Trang trí hình ảnh từ file html */}
            <div className="aspect-square bg-primary/5 rounded-full absolute -z-10 w-64 h-64 blur-3xl animate-pulse"></div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border dark:border-slate-800 shadow-2xl">
                <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-white dark:bg-slate-800 rounded-[2rem]">
                    <span className="material-symbols-outlined text-9xl text-primary/20">reproducibility</span>
                </div>
            </div>
          </div>
        </section>

        {/* CORE COMMITMENTS */}
        <section className="py-16">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-primary text-sm font-bold tracking-widest uppercase">Cam kết cốt lõi</h3>
            <h2 className="text-[#0d121b] dark:text-white text-3xl md:text-4xl font-black tracking-tight">Minh bạch – Điểm ăn tiền số 1</h2>
            <p className="text-[#4c669a] dark:text-gray-400 max-w-2xl mx-auto text-lg">Chúng tôi cam kết 3 trụ cột cốt lõi để khách hàng luôn an tâm tuyệt đối.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_VALUES.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-primary bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h4>
                <p className="text-[#4c669a] dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* STATS & SPECIALTY */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] px-8 md:px-12 my-10 border dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold dark:text-white">Chuyên môn thật - Tối ưu thật</h2>
              <p className="text-[#4c669a] dark:text-gray-400 text-lg leading-relaxed">
                Chúng tôi không cố bán linh kiện đắt nhất, chúng tôi tìm giải pháp phù hợp nhất. Từ Gaming gear hầm hố đến máy văn phòng bền bỉ.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: "sports_esports", label: "Gaming", text: "Tối ưu FPS, tản nhiệt và hiệu năng." },
                  { icon: "work", label: "Văn phòng", text: "Độ ổn định tuyệt đối và bảo mật dữ liệu." },
                  { icon: "school", label: "Sinh viên", text: "Giải pháp tiết kiệm nhưng hiệu quả lâu dài." }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 dark:text-white group">
                    <span className="material-symbols-outlined text-primary group-hover:rotate-12 transition-transform">{item.icon}</span>
                    <p><span className="font-bold">{item.label}:</span> {item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg text-center border-t-4 border-primary">
                  <h4 className="text-4xl font-black text-primary mb-1">{stat.value}</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAP SECTION */}
        <section className="py-16 text-center">
          <div className="mb-10">
            <h2 className="text-primary text-sm font-bold uppercase mb-2">Khu vực phục vụ</h2>
            <h3 className="text-3xl font-bold dark:text-white mb-4">FixPC - Người hàng xóm Hà Đông</h3>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden h-[400px] relative shadow-2xl group border-4 border-white dark:border-slate-800">
             <img 
               src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
               alt="Ha Dong Area" 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-primary/10"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-8 py-4 rounded-full flex items-center gap-2 shadow-2xl z-10">
               <span className="material-symbols-outlined animate-bounce">location_on</span>
               <span className="font-bold">Hỗ trợ nhanh tại Hà Đông</span>
             </div>
          </div>
        </section>

        {/* TARGET USERS */}
        <section className="py-16 bg-primary/5 rounded-[3rem] px-8 mb-16">
           <h2 className="text-2xl md:text-3xl font-black text-center mb-12 dark:text-white italic">Dịch vụ này dành cho bạn nếu bạn là...</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CUSTOMER_TYPES.map((type, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                   <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-md mb-6">
                      <span className="material-symbols-outlined text-primary text-3xl">{type.icon}</span>
                   </div>
                   <h4 className="font-bold text-lg mb-2 dark:text-white">{type.title}</h4>
                   <p className="text-sm text-[#4c669a] dark:text-gray-400">{type.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 4 COMMITMENTS & CTA */}
        <section className="py-20 border-t dark:border-slate-800">
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 p-10 md:p-16 rounded-[3rem] shadow-2xl border border-primary/10">
            <h2 className="text-3xl font-black text-center mb-10 dark:text-white underline decoration-primary decoration-4 underline-offset-8">4 Cam kết Vàng từ FixPC</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                "Bảo hành dài hạn từ 3-12 tháng.",
                "Hoàn tiền 100% nếu không hài lòng.",
                "Tư vấn nâng cấp đúng nhu cầu.",
                "Hỗ trợ kỹ thuật online miễn phí trọn đời."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-500 font-bold">check_circle</span>
                  <p className="font-medium text-[#0d121b] dark:text-slate-200">{text}</p>
                </div>
              ))}
            </div>
            <div className="text-center space-y-8">
               <p className="text-lg font-bold text-primary animate-pulse italic">Bạn đã sẵn sàng hồi sinh chiếc máy tính của mình?</p>
               <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-primary hover:bg-blue-700 text-white font-black py-4 px-10 rounded-2xl transition-all shadow-lg active:scale-95">
                    ĐẶT LỊCH SỬA CHỮA NGAY
                  </button>
                  <button className="bg-white dark:bg-slate-800 border-2 border-primary text-primary hover:bg-primary/5 font-black py-4 px-10 rounded-2xl transition-all">
                    NHẬN TƯ VẤN MIỄN PHÍ
                  </button>
               </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}