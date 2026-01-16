import { blogPosts } from '@/data/blogPosts'

const siteUrl = 'https://www.loanapp.co.ke'

export async function GET() {
  const now = new Date().toISOString()

  // Static pages
  const staticUrls = [
    { loc: siteUrl, priority: '1.0', changefreq: 'daily', lastmod: now },
    { loc: `${siteUrl}/blog`, priority: '0.9', changefreq: 'daily', lastmod: now },
  ]

  // Blog post URLs
  const blogUrls = blogPosts.map((post) => ({
    loc: `${siteUrl}/blog/${post.slug}`,
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: post.publishedAt ? new Date(post.publishedAt).toISOString() : now,
  }))

  const allUrls = [...staticUrls, ...blogUrls]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod || now}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
