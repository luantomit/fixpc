import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fixpc.vercel.app'
  
  // Danh sách ID các vấn đề từ file page.tsx của bạn
  const problemIds = [
    'slow', 
    'power', 
    'hard_drive', 
    'virus', 
    'windows', 
    'other'
  ]

  // 1. Khai báo các trang chính
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/van-de`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // 2. Tự động tạo URL cho từng loại lỗi (SEO tốt hơn)
  const problemPages: MetadataRoute.Sitemap = problemIds.map((id) => ({
    url: `${baseUrl}/van-de?problem=${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticPages, ...problemPages]
}