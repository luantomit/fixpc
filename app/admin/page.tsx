"use client";
import { useState, useEffect, useCallback } from "react";

// --- COMPONENTS CON ---

// Thẻ thống kê Dashboard
const StatCard = ({ title, value, icon, color }: any) => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] shadow-sm border dark:border-slate-800 flex items-center gap-5">
    <div className={`${color} w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg`}>
      <span className="material-symbols-outlined text-3xl notranslate">{icon}</span>
    </div>
    <div>
      <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1">{title}</p>
      <p className="text-2xl font-black text-slate-900 dark:text-white">{value}</p>
    </div>
  </div>
);

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [data, setData] = useState<any>({ bookings: [], stats: {} });
  const [searchPhone, setSearchPhone] = useState("");
  const [loading, setLoading] = useState(true);

  // Lấy dữ liệu từ API
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/booking?phone=${searchPhone}`);
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error("Lỗi fetch dữ vacations:", error);
    } finally {
      setLoading(false);
    }
  }, [searchPhone]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Cập nhật trạng thái đơn hàng
  const updateStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "pending" ? "completed" : "pending";
    const res = await fetch("/api/booking", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: newStatus }),
    });

    if (res.ok) {
      fetchData();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <span className="text-primary material-symbols-outlined text-3xl">admin_panel_settings</span>
            FIXPC ADMIN
          </h1>
          <div className="text-xs font-medium text-slate-400">Hệ thống quản lý FixPC Hà Đông</div>
        </div>

        {/* TABS NAVIGATION */}
        <div className="flex gap-6 mb-8 border-b dark:border-slate-800 overflow-x-auto">
          {["dashboard", "đơn hàng", "khách hàng", "báo cáo"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-1 font-bold capitalize whitespace-nowrap transition-all ${
                activeTab === tab ? "border-b-2 border-primary text-primary" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* NỘI DUNG TAB DASHBOARD */}
            {activeTab === "dashboard" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Đơn hôm nay" value={data.stats?.todayCount || 0} icon="today" color="bg-blue-500" />
                <StatCard title="Đang chờ xử lý" value={data.stats?.pendingCount || 0} icon="pending_actions" color="bg-amber-500" />
                <StatCard title="Tổng doanh thu" value={`${(data.stats?.totalRevenue || 0).toLocaleString()}đ`} icon="payments" color="bg-emerald-500" />
              </div>
            )}

            {/* NỘI DUNG TAB ĐƠN HÀNG - THEO PHONG CÁCH TABLE TRONG CODE.HTML */}
            {activeTab === "đơn hàng" && (
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative max-w-md">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                  <input
                    type="text"
                    placeholder="Tìm nhanh số điện thoại..."
                    value={searchPhone}
                    onChange={(e) => setSearchPhone(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary transition-all shadow-sm"
                  />
                </div>

                {/* Bảng Đơn Hàng */}
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b dark:border-slate-800">
                          <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-400 tracking-wider">Khách hàng</th>
                          <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-400 tracking-wider">Dịch vụ</th>
                          <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-400 tracking-wider">Hình thức</th>
                          <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-400 tracking-wider text-right">Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y dark:divide-slate-800">
                        {data.bookings.map((item: any) => (
                          <tr key={item._id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all group">
                            <td className="px-6 py-5">
                              <div className="font-bold text-slate-900 dark:text-white">{item.name}</div>
                              <div className="text-xs text-slate-500 font-medium">{item.phone}</div>
                              <div className="text-[10px] text-slate-400 mt-1 max-w-[180px] truncate">{item.address}</div>
                            </td>
                            <td className="px-6 py-5">
                              <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">{item.problem}</div>
                              {item.desc && <div className="text-[11px] text-slate-400 italic mt-1 line-clamp-1">{item.desc}</div>}
                            </td>
                            <td className="px-6 py-5">
                              <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase ${
                                item.serviceType === 'tận nơi' ? 'bg-purple-50 text-purple-600 border border-purple-100' : 'bg-amber-50 text-amber-600 border border-amber-100'
                              }`}>
                                {item.serviceType || "Cửa hàng"}
                              </span>
                            </td>
                            <td className="px-6 py-5 text-right">
                              <div className="flex flex-col items-end gap-2">
                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                                  item.status === 'pending' ? 'bg-slate-100 text-slate-500' : 'bg-green-100 text-green-600'
                                }`}>
                                  {item.status === 'pending' ? 'Chờ xử lý' : 'Hoàn thành'}
                                </span>
                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                  {item.attachment && (
                                    <a href={item.attachment} target="_blank" className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                                      <span className="material-symbols-outlined text-sm">image</span>
                                    </a>
                                  )}
                                  <button 
                                    onClick={() => updateStatus(item._id, item.status)}
                                    className={`p-1.5 rounded-lg transition-all ${
                                      item.status === 'pending' ? 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                                    }`}
                                  >
                                    <span className="material-symbols-outlined text-sm">
                                      {item.status === 'pending' ? 'check_circle' : 'history'}
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* CÁC TAB CHƯA PHÁT TRIỂN */}
            {activeTab !== "dashboard" && activeTab !== "đơn hàng" && (
              <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-900 rounded-[2rem] border border-dashed dark:border-slate-800">
                <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">construction</span>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Tính năng đang phát triển</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}