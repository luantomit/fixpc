import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fixpc.vercel.app'
  
  // 1. Danh sách các trang chính (Static Pages)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0, // Trang chủ quan trọng nhất
    },
    {
      url: `${baseUrl}/van-de`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dich-vu`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bao-gia`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bao-hanh`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/vi-sao-chon-chung-toi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // 2. Tự động tạo URL cho từng loại lỗi cụ thể (Deep Links)
  const problemIds = [
    'slow', 
    'power', 
    'hard_drive', 
    'virus', 
    'windows', 
    'other'
  ]

  const problemPages: MetadataRoute.Sitemap = problemIds.map((id) => ({
    url: `${baseUrl}/van-de?problem=${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  // Gộp tất cả lại
  return [...staticPages, ...problemPages]
}