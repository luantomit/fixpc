import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-16">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Cột 1: Thông tin thương hiệu */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 text-primary mb-6">
              <span className="material-symbols-outlined text-3xl notranslate">
                home_repair_service
              </span>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                FixPC Hà Đông
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Chuyên gia sửa chữa máy tính tận nơi hàng đầu khu vực Hà Đông. 
              Uy tín - Tận tâm - Chuyên nghiệp.
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 cursor-pointer hover:text-primary transition-colors notranslate">
                share
              </span>
              <span className="material-symbols-outlined p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 cursor-pointer hover:text-primary transition-colors notranslate">
                mail
              </span>
            </div>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Liên kết</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Về chúng tôi</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">Dịch vụ sửa chữa</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Build PC Gaming</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Chính sách bảo hành</Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Thông tin liên hệ */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Liên hệ</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg notranslate">location_on</span>
                <div>
                  <p className="font-bold text-slate-700 dark:text-slate-300">Cơ sở Hà Đông:</p>
                  <p>123 Trần Phú, Hà Đông, Hà Nội</p>
                  <a 
                    className="text-primary hover:underline text-xs mt-1 inline-block" 
                    href="https://maps.google.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Xem bản đồ
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg notranslate">call</span>
                <a href="tel:0900000000" className="hover:text-primary">0900.000.000</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg notranslate">schedule</span>
                <span>08:00 - 21:00 (Cả T7 & CN)</span>
              </li>
            </ul>
          </div>

          {/* Cột 4: Hashtags / Tìm kiếm */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Tìm kiếm</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "#suamaytinhhadong",
                "#suapctannoi",
                "#buildpcgiare",
                "#vesinhmaytinh",
              ].map((tag) => (
                <span 
                  key={tag} 
                  className="text-[10px] px-2 py-1 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded hover:bg-primary hover:text-white transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bản quyền */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 text-xs">
          <p>© {new Date().getFullYear()} FixPC Hà Đông Services. Thiết kế bởi ProDesigner.</p>
        </div>
      </div>
    </footer>
  );
}