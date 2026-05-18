import Link from 'next/link';
import { categories, aiTools } from '@/data/tools';
import { getFeaturedPosts } from '@/data/blogs';
import { Hero } from '@/components/Hero';
import { CategoryGrid } from '@/components/CategoryGrid';
import { ToolCard } from '@/components/ToolCard';
import { BlogCard } from '@/components/BlogCard';
import { AdBanner } from '@/components/AdBanner';

export default function Home() {
  const featuredTools = aiTools.slice(0, 8);
  const featuredPosts = getFeaturedPosts();

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "热门AI工具",
            "itemListElement": featuredTools.map((tool, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "SoftwareApplication",
                "name": tool.name,
                "description": tool.description,
                "applicationCategory": "BusinessApplication"
              }
            }))
          })
        }}
      />
      
      <Hero />
      
      {/* 分类导航 */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">AI工具分类</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              按照你的需求，快速找到合适的AI工具
            </p>
          </div>
          <CategoryGrid categories={categories} />
        </div>
      </section>
      
      {/* 广告位1 - 顶部横幅 */}
      <section className="py-8 bg-slate-50">
        <div className="container">
          <AdBanner type="banner" />
        </div>
      </section>
      
      {/* 热门AI工具 */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-title">🔥 热门AI工具</h2>
              <p className="text-slate-600">最受欢迎的AI工具推荐</p>
            </div>
            <Link href="/tools" className="btn-secondary">
              查看全部 {aiTools.length} 个工具
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>
      
      {/* 博客文章 */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-title">📚 最新博客</h2>
              <p className="text-slate-600">AI工具使用教程和行业动态</p>
            </div>
            <Link href="/blog" className="btn-secondary">
              阅读更多
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* 广告位2 */}
      <section className="py-8">
        <div className="container">
          <AdBanner type="banner" />
        </div>
      </section>
      
      {/* 订阅区域 */}
      <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">订阅获取最新AI工具资讯</h2>
          <p className="text-indigo-100 max-w-xl mx-auto mb-8">
            定期推送热门AI工具、实用技巧和行业洞察，不错过任何提升效率的机会
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="输入你的邮箱" 
              className="flex-1 px-4 py-3 rounded-lg text-slate-900"
              required
            />
            <button type="submit" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
              立即订阅
            </button>
          </form>
          <p className="text-indigo-200 text-sm mt-4">订阅后随时可取消，不会发送垃圾邮件</p>
        </div>
      </section>
    </>
  );
}
