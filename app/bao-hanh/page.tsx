"use client";

export default function DichVu() {
    return (
        <main className="flex flex-col items-center">
{/* HeroSection */}
<div className="w-full max-w-[1200px] px-4 md:px-10 py-5">
<div className="@container">
<div className="@[480px]:p-4">
<div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-8 relative overflow-hidden" data-alt="Modern workspace with tech gadgets and blue ambient lighting" >
<div className="flex flex-col gap-4 text-center max-w-2xl">
<h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                                        Chính sách bảo hành tại FixPC Hà Đông
                                    </h1>
<p className="text-white/90 text-base font-normal leading-relaxed @[480px]:text-lg">
                                        Cam kết rõ ràng – đúng lỗi – không bỏ mặc khách hàng sau khi sửa. Niềm tin của bạn là giá trị cốt lõi của chúng tôi.
                                    </p>
</div>
<div className="flex flex-wrap gap-4 justify-center">
<button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white text-primary text-base font-bold hover:bg-gray-100 transition-all">
                                        Đặt lịch ngay
                                    </button>
<button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary/20 border border-white/30 text-white text-base font-bold hover:bg-white/10 transition-all">
                                        Liên hệ hỗ trợ
                                    </button>
</div>
</div>
</div>
</div>
</div>
{/* Scope Section */}
<div className="w-full max-w-[960px] px-4">
<h2 className="text-[#0d121b] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">Phạm vi bảo hành</h2>
<div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-4">
<div className="flex flex-1 gap-4 rounded-xl border border-[#cfd7e7] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex-col hover:shadow-md transition-shadow">
<div className="text-primary">
<span className="material-symbols-outlined text-4xl">memory</span>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-[#0d121b] dark:text-white text-lg font-bold">Sửa chữa phần cứng</h3>
<p className="text-[#4c669a] dark:text-slate-400 text-sm leading-relaxed">Bảo hành toàn bộ các lỗi phát sinh liên quan trực tiếp đến hạng mục đã sửa chữa.</p>
</div>
</div>
<div className="flex flex-1 gap-4 rounded-xl border border-[#cfd7e7] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex-col hover:shadow-md transition-shadow">
<div className="text-primary">
<span className="material-symbols-outlined text-4xl">upgrade</span>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-[#0d121b] dark:text-white text-lg font-bold">Nâng cấp linh kiện</h3>
<p className="text-[#4c669a] dark:text-slate-400 text-sm leading-relaxed">Bảo hành theo tiêu chuẩn nhà sản xuất hoặc cam kết tối thiểu 1 tháng tại cửa hàng.</p>
</div>
</div>
<div className="flex flex-1 gap-4 rounded-xl border border-[#cfd7e7] dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex-col hover:shadow-md transition-shadow">
<div className="text-primary">
<span className="material-symbols-outlined text-4xl">component_exchange</span>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-[#0d121b] dark:text-white text-lg font-bold">Thay thế linh kiện</h3>
<p className="text-[#4c669a] dark:text-slate-400 text-sm leading-relaxed">Sản phẩm mới chính hãng 100%. Lỗi 1 đổi 1 nhanh chóng không chờ đợi.</p>
</div>
</div>
</div>
</div>
{/* Warranty Periods Table */}
<div className="w-full max-w-[960px] px-4 mt-10">
<h2 className="text-[#0d121b] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6">Bảng tra cứu thời gian bảo hành</h2>
<div className="px-4 overflow-x-auto">
<table className="w-full text-left border-collapse bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm">
<thead>
<tr className="bg-primary/10 dark:bg-primary/20">
<th className="p-4 font-bold border-b border-[#cfd7e7] dark:border-slate-800">Hạng mục dịch vụ</th>
<th className="p-4 font-bold border-b border-[#cfd7e7] dark:border-slate-800">Thời gian bảo hành</th>
</tr>
</thead>
<tbody className="text-sm">
<tr>
<td className="p-4 border-b border-[#cfd7e7] dark:border-slate-800">Sửa chữa phần cứng (Mainboard, Nguồn, VGA)</td>
<td className="p-4 border-b border-[#cfd7e7] dark:border-slate-800 font-semibold text-primary">7 - 30 ngày</td>
</tr>
<tr>
<td className="p-4 border-b border-[#cfd7e7] dark:border-slate-800">Linh kiện thay mới (RAM, SSD, HDD, Phím, Pin)</td>
<td className="p-4 border-b border-[#cfd7e7] dark:border-slate-800 font-semibold text-primary">Theo NSX (Min 1 tháng)</td>
</tr>
<tr>
<td className="p-4 border-b border-[#cfd7e7] dark:border-slate-800">Cài đặt phần mềm &amp; Hệ điều hành</td>
<td className="p-4 border-b border-[#cfd7e7] dark:border-slate-800 font-semibold text-primary">7 - 14 ngày</td>
</tr>
<tr>
<td className="p-4">Vệ sinh máy &amp; Tra keo tản nhiệt</td>
<td className="p-4 font-semibold text-primary">7 ngày (Nhiệt độ ổn định)</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Warranty Conditions */}
<div className="w-full max-w-[960px] px-4 mt-16">
<div className="grid md:grid-cols-2 gap-8 px-4">
<div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl border border-green-200 dark:border-green-800">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-green-600">check_circle</span>
<h3 className="text-lg font-bold text-green-800 dark:text-green-400">Điều kiện được bảo hành</h3>
</div>
<ul className="space-y-3 text-sm text-green-900/80 dark:text-green-300">
<li className="flex items-start gap-2"><span className="material-symbols-outlined text-xs mt-1">arrow_forward</span> Lỗi phát sinh trùng lặp với lỗi đã sửa chữa.</li>
<li className="flex items-start gap-2"><span className="material-symbols-outlined text-xs mt-1">arrow_forward</span> Tem bảo hành của FixPC còn nguyên vẹn, không rách/tẩy xóa.</li>
<li className="flex items-start gap-2"><span className="material-symbols-outlined text-xs mt-1">arrow_forward</span> Thiết bị chưa có sự can thiệp từ bên thứ ba hoặc người dùng tự mở.</li>
</ul>
</div>
<div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-200 dark:border-red-800">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-red-600">cancel</span>
<h3 className="text-lg font-bold text-red-800 dark:text-red-400">Từ chối bảo hành</h3>
</div>
<ul className="space-y-3 text-sm text-red-900/80 dark:text-red-300">
<li className="flex items-start gap-2"><span className="material-symbols-outlined text-xs mt-1">block</span> Máy bị rơi vỡ, móp méo, tác động vật lý mạnh.</li>
<li className="flex items-start gap-2"><span className="material-symbols-outlined text-xs mt-1">block</span> Máy có dấu hiệu bị vào nước, ẩm mốc, chập cháy do nguồn điện.</li>
<li className="flex items-start gap-2"><span className="material-symbols-outlined text-xs mt-1">block</span> Hết thời hạn bảo hành ghi trên tem hoặc hóa đơn.</li>
</ul>
</div>
</div>
</div>
{/* Process Workflow */}
<div className="w-full max-w-[960px] px-4 mt-16 bg-white dark:bg-slate-900/50 py-10 rounded-2xl">
<h2 className="text-[#0d121b] dark:text-white text-2xl font-bold text-center mb-10">Quy trình tiếp nhận bảo hành</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
<div className="text-center group">
<div className="size-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl">call</span>
</div>
<h4 className="font-bold text-sm mb-1">Bước 1</h4>
<p className="text-xs text-slate-500">Liên hệ qua Hotline hoặc Zalo</p>
</div>
<div className="text-center group">
<div className="size-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl">description</span>
</div>
<h4 className="font-bold text-sm mb-1">Bước 2</h4>
<p className="text-xs text-slate-500">Mô tả tình trạng lỗi gặp phải</p>
</div>
<div className="text-center group">
<div className="size-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl">troubleshoot</span>
</div>
<h4 className="font-bold text-sm mb-1">Bước 3</h4>
<p className="text-xs text-slate-500">Kiểm tra miễn phí 100%</p>
</div>
<div className="text-center group">
<div className="size-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl">task_alt</span>
</div>
<h4 className="font-bold text-sm mb-1">Bước 4</h4>
<p className="text-xs text-slate-500">Khắc phục &amp; Bàn giao ngay</p>
</div>
</div>
<div className="mt-8 text-center">
<span className="inline-block bg-primary/5 text-primary text-xs font-bold px-4 py-2 rounded-full border border-primary/20">
                            Lưu ý: Miễn phí kiểm tra lỗi bảo hành kể cả khi không thuộc diện bảo hành
                        </span>
</div>
</div>
{/* Premium Convenience Support */}
<div className="w-full max-w-[960px] px-4 mt-16">
<div className="bg-gradient-to-r from-primary to-blue-700 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 shadow-xl">
<div className="flex-1">
<h2 className="text-white text-2xl font-bold mb-4">Hỗ trợ bảo hành tận nơi tại Hà Đông</h2>
<p className="text-white/90 leading-relaxed mb-6">
                                Quý khách bận rộn không thể qua cửa hàng? FixPC cung cấp dịch vụ bảo hành tại nhà khu vực Hà Đông (Mộ Lao, Văn Quán, Xa La, Văn Phú...) với chi phí hỗ trợ cực thấp hoặc MIỄN PHÍ tùy hạng mục.
                            </p>
<div className="flex items-center gap-4 text-white font-bold">
<span className="material-symbols-outlined">local_shipping</span>
<span>Tiết kiệm thời gian - An tâm tuyệt đối</span>
</div>
</div>
<div className="flex-shrink-0">
<div className="bg-white p-4 rounded-xl shadow-lg transform rotate-3">
<div className="w-48 h-32 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden" data-location="Hanoi, Vietnam">
<img alt="Map of Ha Dong district" className="object-cover" data-alt="Map view of Ha Dong area in Hanoi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNwfkjzoc5FA7_R_OMhHYhWhAMk38BdFCKLLe2Q3MmJa8YkiwCYX8BBAwL9Euyk0f7NE5J__qI2cyHuNbP-5IKMOUG999Oy7ZX9frDn5OzDZYs2YIEMODTyc8rz2K2478DcfZb7QbelALzu3vsKTeKTQzLPJWC36fanxfaX9QBdQMxz8YtIeZgb-nrNiGKE9TigNX5AwPjt9VUEpFWRM8SPwwkoauE_zQ7hq0pt6oITpms5z1HYGu_iW8cggvXSoHnAtbbN0vJVmSN"/>
</div>
</div>
</div>
</div>
</div>
{/* Final Commitment & CTA */}
<div className="w-full max-w-[960px] px-4 my-20 text-center">
<h2 className="text-3xl font-black mb-8">Cam kết của chúng tôi</h2>
<div className="flex flex-wrap justify-center gap-8 mb-12">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary font-bold">check</span>
<span className="font-bold">Không né tránh trách nhiệm</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary font-bold">check</span>
<span className="font-bold">Hỗ trợ kỹ thuật trọn đời</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary font-bold">check</span>
<span className="font-bold">Hoàn tiền 100% nếu không hài lòng</span>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-primary text-white font-bold h-14 px-10 rounded-xl hover:scale-105 transition-transform shadow-lg">Đặt lịch sửa chữa ngay</button>
<button className="bg-white border-2 border-primary text-primary font-bold h-14 px-10 rounded-xl hover:bg-primary/5 transition-colors">Xem bảng giá minh bạch</button>
</div>
</div>
</main>

    )

}