"use client";

import Head from "next/head";

export default function BangGia() {
  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-10">
      {/* SEO Structured Data (Schema JSON-LD) - Giúp Google hiển thị bảng giá hoặc FAQ tốt hơn */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Sửa chữa máy tính",
            "provider": {
              "@type": "LocalBusiness",
              "name": "FixPC Hà Đông",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hà Đông",
                "addressRegion": "Hà Nội"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Bảng giá dịch vụ sửa máy tính",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Cài Windows tại nhà" },
                  "price": "150000",
                  "priceCurrency": "VND"
                },
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Vệ sinh Laptop" },
                  "price": "120000",
                  "priceCurrency": "VND"
                }
              ]
            }
          })
        }}
      />

      {/* Hero Section - Tối ưu H1 cho SEO Local */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        <div className="relative w-full aspect-video rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1000&auto=format&fit=crop" 
            alt="Kỹ thuật viên đang kiểm tra và báo giá sửa máy tính cho khách hàng tại Hà Đông"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
            Bảng Giá Sửa Máy Tính Hà Đông <span className="text-primary">Mới Nhất 2024</span>
          </h1>
          <h2 className="text-lg opacity-80 font-medium">
            Báo giá minh bạch, kiểm tra miễn phí. Dịch vụ sửa Laptop, PC tận nơi uy tín khu vực Quận Hà Đông. 
            Cam kết không phát sinh chi phí, bảo hành dài hạn.
          </h2>
          <div className="flex flex-wrap gap-4 mt-2">
            <a href="#dat-lich" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              Đặt lịch sửa ngay
            </a>
            <a href="tel:0355193008" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              0355.193.008
            </a>
          </div>
        </div>
      </section>

      {/* Intro text - Nhấn mạnh cam kết về giá */}
      <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary rounded-r-lg p-6 mb-12">
        <p className="text-base leading-relaxed opacity-90">
          <span className="font-bold text-primary">Lưu ý quan trọng:</span> Bảng giá này được FixPC Hà Đông xây dựng dựa trên các lỗi phổ biến. 
          Giá có thể thay đổi tùy thuộc vào model máy (đặc biệt là các dòng máy đời cũ hoặc hiếm). 
          Kỹ thuật viên sẽ <strong>kiểm tra thực tế và báo giá 0đ</strong> nếu quý khách không đồng ý sửa. 
          Mọi dịch vụ đều có hóa đơn và phiếu bảo hành đi kèm.
        </p>
      </div>

      {/* Pricing Tables Grid */}
      <h2 className="text-2xl font-black mb-8 text-center uppercase tracking-wide">Chi tiết các hạng mục sửa chữa</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Group 1: Phần mềm */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">terminal</span>
            <h3 className="text-lg font-bold">1. Cài đặt & Phần mềm</h3>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            <PriceItem label="Cài Windows (Full Apps + Driver)" price="150.000đ" />
            <PriceItem label="Cài đặt bộ Microsoft Office" price="100.000đ" />
            <PriceItem label="Diệt Virus & Tối ưu hệ thống" price="100.000đ" />
            <PriceItem label="Phần mềm đồ họa (Adobe, CAD...)" price="Từ 50.000đ" />
          </div>
        </div>

        {/* Group 2: Vệ sinh */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">cleaning_services</span>
            <h3 className="text-lg font-bold">2. Vệ sinh & Bảo dưỡng</h3>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            <PriceItem label="Vệ sinh Laptop (Tra keo MX4/Grizzly)" price="120.000đ" />
            <PriceItem label="Vệ sinh PC (Thổi bụi + Tra keo)" price="100.000đ" />
            <PriceItem label="Gói vệ sinh chuyên sâu VGA" price="150.000đ" />
            <PriceItem label="Tra keo tản nhiệt CPU cao cấp" price="80.000đ" />
          </div>
        </div>

        {/* Group 3: Linh kiện */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">memory</span>
            <h3 className="text-lg font-bold">3. Nâng cấp linh kiện</h3>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            <PriceItem label="Ổ cứng SSD 120GB/240GB" price="Từ 350.000đ" />
            <PriceItem label="Ram Laptop DDR3/DDR4 8GB" price="Từ 450.000đ" />
            <PriceItem label="Màn hình Laptop (Chính hãng)" price="Từ 850.000đ" />
            <PriceItem label="Pin Laptop (Bảo hành 6-12th)" price="Từ 350.000đ" />
          </div>
        </div>

        {/* Group 4: Sửa mạch */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">build</span>
            <h3 className="text-lg font-bold">4. Sửa chữa phần cứng</h3>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            <PriceItem label="Sửa lỗi nguồn Mainboard" price="Từ 300.000đ" />
            <PriceItem label="Sửa bản lề (Gãy rời, kẹt)" price="Từ 200.000đ" />
            <PriceItem label="Đóng lại Chipset / VGA" price="Từ 400.000đ" />
            <PriceItem label="Sửa lỗi bàn phím (Liệt, chạm)" price="Từ 200.000đ" />
          </div>
        </div>
      </div>

      {/* Transparency Notes */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-green-500">verified</span>
            Tại sao bảng giá FixPC được tin tưởng nhất?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <span><strong>Báo giá trước:</strong> Không mập mờ, khách đồng ý mới làm.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <span><strong>Linh kiện loại 1:</strong> Chỉ dùng linh kiện chất lượng, nói không với hàng nhái.</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <span><strong>Bảo hành tận nơi:</strong> Lỗi là đến, không trốn tránh trách nhiệm.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <span><strong>Hậu mãi tốt:</strong> Giảm giá cho lần sửa thứ 2 trở đi.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-primary text-white p-8 rounded-xl flex flex-col justify-center shadow-xl shadow-primary/20">
          <h3 className="text-xl font-bold mb-4">Giá rẻ có phải là tốt nhất?</h3>
          <p className="text-white/90 leading-relaxed italic">
            "Nhiều đơn vị báo giá cực rẻ nhưng linh kiện trôi nổi hoặc thu thêm phí ẩn. Tại FixPC Hà Đông, 
            mức giá chúng tôi đưa ra là <strong>Trọn Gói</strong> để đảm bảo máy bạn bền nhất có thể."
          </p>
        </div>
      </section>

      {/* FAQ Section - Tối ưu Rich Snippet FAQ của Google */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 px-4">Giải đáp thắc mắc về giá dịch vụ</h2>
        <div className="space-y-4">
          <FAQItem 
            question="Sửa máy tại nhà Hà Đông có mất thêm phí đi lại không?" 
            answer="Miễn phí 100% phí đi lại trong bán kính 3km quanh khu vực Hà Đông. Với các khu vực xa hơn, chúng tôi chỉ thu thêm 30k-50k phí hỗ trợ xăng xe cho kỹ thuật viên."
          />
          <FAQItem 
            question="Linh kiện thay thế có được bảo hành chính hãng không?" 
            answer="Có. Tất cả ổ cứng, RAM, Pin, Màn hình... đều là hàng chính hãng hoặc OEM loại 1, bảo hành từ 6 tháng đến 3 năm lỗi 1 đổi 1."
          />
          <FAQItem 
            question="Nếu kiểm tra xong tôi không muốn sửa có mất tiền không?" 
            answer="Không. FixPC Hà Đông áp dụng chính sách Kiểm tra miễn phí. Nếu quý khách thấy giá không hợp lý hoặc không muốn sửa nữa, chúng tôi sẽ lắp trả máy nguyên trạng và không thu bất cứ phí nào."
          />
        </div>
      </section>

      {/* Final CTA */}
      <section id="dat-lich" className="bg-slate-900 text-white rounded-2xl p-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Cần báo giá chính xác cho máy tính của bạn?</h2>
          <p className="mb-8 opacity-80 max-w-2xl mx-auto">
            Chụp ảnh tình trạng máy hoặc mô tả lỗi để kỹ thuật viên tư vấn và báo giá ngay lập tức qua Zalo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary hover:bg-blue-600 px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
              <span className="material-symbols-outlined">calendar_month</span> Đặt lịch ngay
            </button>
            <a href="tel:0355193008" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
              <span className="material-symbols-outlined">call</span> 0355.193.008
            </a>
            <a href="https://zalo.me/0355193008" target="_blank" className="bg-[#0068ff] hover:bg-blue-700 px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
              <span className="material-symbols-outlined">chat</span> Chat Zalo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// Sub-components giúp code gọn và dễ quản lý
function PriceItem({ label, price }: { label: string; price: string }) {
  return (
    <div className="p-4 flex justify-between items-center group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
      <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">{label}</span>
      <span className="text-primary font-bold">{price}</span>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <summary className="list-none p-5 cursor-pointer flex justify-between items-center font-bold text-slate-800 dark:text-slate-200 hover:text-primary transition-colors">
        {question}
        <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-slate-400">expand_more</span>
      </summary>
      <div className="p-5 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800">
        {answer}
      </div>
    </details>
  );
}