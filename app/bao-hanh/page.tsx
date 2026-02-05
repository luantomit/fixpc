"use client";

import Head from "next/head";
import Link from "next/link";

export default function BaoHanh() {
  return (
    <main className="flex flex-col items-center bg-slate-50 dark:bg-slate-950">
      {/* SEO Schema - Giúp Google hiểu đây là chính sách của một doanh nghiệp địa phương */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Chính sách bảo hành - FixPC Hà Đông",
            "description": "Chính sách bảo hành minh bạch tại FixPC Hà Đông. Bảo hành sửa chữa phần cứng, linh kiện thay mới và cài đặt phần mềm tận nơi uy tín.",
            "publisher": {
              "@type": "LocalBusiness",
              "name": "FixPC Hà Đông",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hà Đông",
                "addressRegion": "Hà Nội"
              }
            }
          })
        }}
      />

      {/* HeroSection - Tối ưu H1 cho SEO Local */}
      <section className="w-full max-w-[1200px] px-4 md:px-10 py-5">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div className="flex min-h-[400px] flex-col gap-6 bg-gradient-to-br from-blue-600 to-indigo-900 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-3xl items-center justify-center p-8 relative overflow-hidden shadow-2xl">
              {/* Overlay trang trí */}
              <div className="absolute inset-0 bg-black/20"></div>
              
              <div className="flex flex-col gap-4 text-center max-w-2xl relative z-10">
                <h1 className="text-white text-4xl font-black leading-tight tracking-tight @[480px]:text-6xl">
                  Chính Sách Bảo Hành <br />
                  <span className="text-blue-200 text-3xl @[480px]:text-4xl">Tận Tâm - Uy Tín tại Hà Đông</span>
                </h1>
                <p className="text-white/90 text-base font-medium leading-relaxed @[480px]:text-lg italic">
                  "Sửa có tâm - Bảo hành có tầm. Chúng tôi không chỉ sửa máy, chúng tôi xây dựng niềm tin."
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center relative z-10">
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white text-blue-700 text-base font-bold hover:scale-105 transition-all shadow-lg">
                  Đặt lịch bảo hành
                </button>
                <a href="tel:0355193008" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-blue-500/30 border border-white/40 text-white text-base font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                  Hotline: 0355.xxx.xxx
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Section - Sử dụng thẻ H2 chứa từ khóa */}
      <section className="w-full max-w-[960px] px-4">
        <div className="text-center mb-10">
           <h2 className="text-[#0d121b] dark:text-white text-3xl font-black leading-tight tracking-tight pt-10">
             Phạm vi bảo hành dịch vụ
           </h2>
           <p className="text-slate-500 mt-2">Áp dụng cho mọi khách hàng sử dụng dịch vụ sửa chữa máy tính tại Quận Hà Đông</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          <WarrantyCard 
            icon="memory" 
            title="Sửa chữa phần cứng" 
            desc="Bảo hành các lỗi liên quan đến IC, mạch nguồn, card đồ họa đã được xử lý bởi kỹ thuật viên." 
          />
          <WarrantyCard 
            icon="upgrade" 
            title="Nâng cấp SSD/RAM" 
            desc="Linh kiện chính hãng, bảo hành theo tem NSX. Lỗi là đổi mới, không sửa chữa." 
          />
          <WarrantyCard 
            icon="component_exchange" 
            title="Thay thế màn hình/Pin" 
            desc="Cam kết hàng chất lượng cao, bảo hành dài hạn từ 6 - 12 tháng tùy model." 
          />
        </div>
      </section>

      {/* Warranty Periods Table - Tối ưu hóa bảng cho di động */}
      <section className="w-full max-w-[960px] px-4 mt-16">
        <h2 className="text-[#0d121b] dark:text-white text-2xl font-bold px-4 pb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">schedule</span>
          Tra cứu thời hạn bảo hành nhanh
        </h2>
        <div className="px-4 overflow-hidden">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left border-collapse bg-white dark:bg-slate-900 overflow-hidden">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800/50">
                  <th className="p-5 font-bold text-slate-700 dark:text-slate-200">Hạng mục dịch vụ</th>
                  <th className="p-5 font-bold text-slate-700 dark:text-slate-200">Thời gian bảo hành</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <TableRow label="Sửa Mainboard, Nguồn, VGA" time="7 - 30 ngày" />
                <TableRow label="Thay SSD, RAM, Bàn phím (Mới)" time="12 - 36 tháng" />
                <TableRow label="Thay Pin Laptop, Sạc (Mới)" time="6 - 12 tháng" />
                <TableRow label="Cài đặt Windows & Phần mềm" time="7 - 14 ngày" isLast />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Warranty Conditions - Phân chia rõ ràng giúp người dùng dễ đọc */}
      <section className="w-full max-w-[960px] px-4 mt-16">
        <div className="grid md:grid-cols-2 gap-8 px-4">
          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800/50">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-emerald-600 text-3xl">verified_user</span>
              <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-400">Điều kiện được bảo hành</h3>
            </div>
            <ul className="space-y-4 text-sm text-emerald-900/80 dark:text-emerald-300">
              <ConditionItem text="Lỗi phát sinh đúng hạng mục FixPC đã thực hiện." />
              <ConditionItem text="Tem bảo hành còn nguyên vẹn, rõ ngày tháng." />
              <ConditionItem text="Thiết bị không có dấu hiệu tháo mở từ bên ngoài." />
              <ConditionItem text="Có phiếu thu hoặc số điện thoại đăng ký trên hệ thống." />
            </ul>
          </div>

          <div className="bg-rose-50 dark:bg-rose-900/10 p-8 rounded-3xl border border-rose-100 dark:border-rose-800/50">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-rose-600 text-3xl">gpp_bad</span>
              <h3 className="text-xl font-bold text-rose-900 dark:text-rose-400">Trường hợp từ chối</h3>
            </div>
            <ul className="space-y-4 text-sm text-rose-900/80 dark:text-rose-300">
              <ConditionItem isRed text="Máy bị rơi vỡ, móp méo, biến dạng vật lý." />
              <ConditionItem isRed text="Máy bị vào nước, ẩm mốc hoặc chập cháy nổ." />
              <ConditionItem isRed text="Hết thời hạn bảo hành quy định." />
              <ConditionItem isRed text="Lỗi do phần mềm khách hàng tự cài đặt thêm." />
            </ul>
          </div>
        </div>
      </section>

      {/* Process Workflow */}
      <section className="w-full max-w-[960px] px-4 mt-20">
        <div className="bg-white dark:bg-slate-900 py-12 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm px-6 text-center">
          <h2 className="text-2xl font-bold mb-12">Quy trình tiếp nhận bảo hành siêu tốc</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            <StepItem step="1" icon="forum" title="Liên hệ" desc="Hotline/Zalo 24/7" />
            <StepItem step="2" icon="biotech" title="Kiểm tra" desc="Xác định lỗi miễn phí" />
            <StepItem step="3" icon="construction" title="Xử lý" desc="Sửa tại chỗ/trong ngày" />
            <StepItem step="4" icon="verified" title="Bàn giao" desc="Dán lại tem bảo hành" />
          </div>
        </div>
      </section>

      {/* Premium Convenience Support */}
      <section className="w-full max-w-[960px] px-4 mt-20">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="flex-1 relative z-10 text-center md:text-left">
            <h2 className="text-white text-3xl font-bold mb-4">Hỗ trợ bảo hành tận nơi tại Hà Đông</h2>
            <p className="text-white/80 leading-relaxed mb-6 text-lg">
               Chúng tôi thấu hiểu sự bất tiện khi máy gặp sự cố. FixPC hỗ trợ <strong>bảo hành tận nhà</strong> cho khách hàng tại khu vực: Mộ Lao, Văn Quán, Xa La, Văn Phú, Kiến Hưng...
            </p>
            <div className="flex justify-center md:justify-start items-center gap-4 text-white font-bold bg-white/10 w-fit px-6 py-3 rounded-2xl border border-white/20">
              <span className="material-symbols-outlined">electric_bolt</span>
              <span>Xử lý trong vòng 30 phút - 2 giờ</span>
            </div>
          </div>
          <div className="flex-shrink-0 relative z-10">
            <div className="bg-white p-2 rounded-2xl shadow-2xl rotate-2">
               <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" 
                alt="Dịch vụ sửa máy tính tận nhà Hà Đông" 
                className="w-56 h-40 object-cover rounded-xl"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Final Commitment & CTA */}
      <section className="w-full max-w-[960px] px-4 my-24 text-center">
        <h2 className="text-4xl font-black mb-10 text-slate-900 dark:text-white">Lời hứa từ FixPC</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
           <div className="p-4">
              <span className="material-symbols-outlined text-4xl text-blue-600 mb-2">history</span>
              <p className="font-bold">Không bao giờ bỏ mặc khách hàng</p>
           </div>
           <div className="p-4 border-x border-slate-200 dark:border-slate-800">
              <span className="material-symbols-outlined text-4xl text-blue-600 mb-2">support_agent</span>
              <p className="font-bold">Hỗ trợ phần mềm từ xa trọn đời</p>
           </div>
           <div className="p-4">
              <span className="material-symbols-outlined text-4xl text-blue-600 mb-2">currency_exchange</span>
              <p className="font-bold">Hoàn tiền nếu không xử lý được lỗi</p>
           </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <button className="bg-blue-600 text-white font-bold h-16 px-12 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 active:scale-95">
            Sửa máy ngay hôm nay
          </button>
          <Link href="/dich-vu" className="flex items-center justify-center bg-white border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold h-16 px-12 rounded-2xl hover:bg-slate-50 transition-all">
            Bảng giá minh bạch
          </Link>
        </div>
      </section>
    </main>
  );
}

// Sub-components cho giao diện sạch hơn
function WarrantyCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-slate-900 dark:text-white text-xl font-bold">{title}</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function TableRow({ label, time, isLast = false }: { label: string; time: string; isLast?: boolean }) {
  return (
    <tr className={isLast ? "" : "border-b border-slate-100 dark:border-slate-800"}>
      <td className="p-5 font-medium text-slate-700 dark:text-slate-300">{label}</td>
      <td className="p-5 font-bold text-blue-600">{time}</td>
    </tr>
  );
}

function ConditionItem({ text, isRed = false }: { text: string; isRed?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <span className={`material-symbols-outlined text-sm mt-1 ${isRed ? 'text-rose-500' : 'text-emerald-500'}`}>
        {isRed ? 'close' : 'check'}
      </span>
      <span>{text}</span>
    </li>
  );
}

function StepItem({ step, icon, title, desc }: { step: string; icon: string; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative mb-4">
        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>
        <span className="absolute -top-2 -right-2 w-7 h-7 bg-blue-600 text-white rounded-full text-xs font-bold flex items-center justify-center border-2 border-white dark:border-slate-900">
          {step}
        </span>
      </div>
      <h4 className="font-bold text-slate-900 dark:text-white mb-1">{title}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400">{desc}</p>
    </div>
  );
}