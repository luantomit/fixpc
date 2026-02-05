import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-primary group">
          <span className="material-symbols-outlined text-4xl notranslate">
            home_repair_service
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            FixPC <span className="text-primary group-hover:opacity-80 transition-opacity">Hà Đông</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-semibold hover:text-primary transition-colors text-slate-600 dark:text-slate-300" href="/van-de">
            Vấn đề
          </a>
          <a className="text-sm font-semibold hover:text-primary transition-colors text-slate-600 dark:text-slate-300" href="/dich-vu">
            Dịch vụ
          </a>
          <a className="text-sm font-semibold hover:text-primary transition-colors text-slate-600 dark:text-slate-300" href="/vi-sao-chon-chung-toi">
            Tại sao chọn chúng tôi
          </a>
          <a className="text-sm font-semibold hover:text-primary transition-colors text-slate-600 dark:text-slate-300" href="#wards">
            Khu vực
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <a 
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95" 
            href="tel:0355193008"
          >
            <span className="material-symbols-outlined text-lg notranslate">call</span>
            Gọi ngay
          </a>
        </div>
      </div>
    </header>
  );
}