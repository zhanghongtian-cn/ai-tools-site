import Link from 'next/link';
import { blogPosts } from '@/data/blogs';
import { BlogCard } from '@/components/BlogCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI工具博客 - 最新资讯与使用教程',
  description: '阅读派搜AI的博客，了解最新的AI工具资讯、使用教程和行业动态。涵盖ChatGPT、Midjourney等热门工具的使用技巧。',
  keywords: ['AI博客', 'AI教程', 'ChatGPT教程', 'AI工具使用', '人工智能'],
};

export default function BlogPage() {
  const categories = [...new Set(blogPosts.map(p => p.category))];

  return (
    <>
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">AI工具博客</h1>
          <p className="text-indigo-100">
            AI工具使用教程、行业动态和实用技巧
          </p>
        </div>
      </section>

      {/* 分类导航 */}
      <section className="py-6 bg-white border-b">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-indigo-500 text-white rounded-full text-sm font-medium">
              全部文章
            </span>
            {categories.map((cat) => (
              <span key={cat} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm hover:bg-slate-200 cursor-pointer">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 广告位 */}
      <section className="py-4">
        <div className="container">
          <div className="ad-placeholder py-4">
            <p>📢 广告位 - 728x90</p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
