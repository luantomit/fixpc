import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Cấu hình font Space Grotesk
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "FixPC Hà Đông - Sửa Chữa & Nâng Cấp PC Chuyên Nghiệp",
  description: "Chuyên gia sửa chữa máy tính tận nơi hàng đầu khu vực Hà Đông.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="light" style={{ scrollBehavior: 'smooth' }}> 
      <head>
        {/* Link tải bộ icon Material Symbols */}
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
        />
      </head>
      
      <body className={`${spaceGrotesk.variable} font-display antialiased min-h-screen flex flex-col`}>
        {/* Header xuất hiện ở mọi trang */}
        <Header />

        {/* Nội dung chính của từng trang sẽ thay đổi ở đây */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer xuất hiện ở mọi trang */}
        <Footer />
      </body>
    </html>
  );
}