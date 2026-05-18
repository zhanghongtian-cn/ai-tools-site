import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, blogPosts, getRecentPosts } from '@/data/blogs';
import { AdBanner, AdInArticle } from '@/components/AdBanner';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return { title: '文章未找到' };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [{ url: post.coverImage }],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  const recentPosts = getRecentPosts(4).filter(p => p.slug !== slug);

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.coverImage,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "派搜AI"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 面包屑 */}
      <div className="bg-slate-50 border-b">
        <div className="container py-3">
          <nav className="text-sm">
            <Link href="/" className="text-slate-500 hover:text-indigo-600">首页</Link>
            <span className="mx-2 text-slate-400">/</span>
            <Link href="/blog" className="text-slate-500 hover:text-indigo-600">博客</Link>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-900 line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </div>

      <section className="py-8">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 主内容 */}
            <div className="lg:col-span-2">
              <article className="card">
                {/* 封面图 */}
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                {/* 文章头部 */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-indigo-500 text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-slate-500">
                      {post.readingTime}分钟阅读
                    </span>
                  </div>
                  
                  <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>👤 {post.author}</span>
                    <span>📅 {post.publishedAt}</span>
                    <span>🔄 {post.updatedAt}</span>
                  </div>
                </div>

                {/* 广告位 - 文章顶部 */}
                <AdInArticle position="top" />

                {/* 文章内容 */}
                <div className="prose max-w-none">
                  {post.content.split('\n\n').map((paragraph, index) => {
                    // 处理标题
                    if (paragraph.startsWith('## ')) {
                      return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                    }
                    if (paragraph.startsWith('### ')) {
                      return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                    }
                    if (paragraph.startsWith('#### ')) {
                      return <h4 key={index} className="text-lg font-bold mt-4 mb-2">{paragraph.replace('#### ', '')}</h4>;
                    }
                    
                    // 处理列表
                    if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                      return (
                        <ul key={index} className="list-disc ml-6 my-4 space-y-2">
                          {items.map((item, i) => (
                            <li key={i}>{item.replace('- ', '')}</li>
                          ))}
                        </ul>
                      );
                    }
                    
                    // 处理表格
                    if (paragraph.includes('| ') && paragraph.includes('---')) {
                      const rows = paragraph.split('\n').filter(line => line.trim() && !line.includes('---'));
                      return (
                        <div key={index} className="overflow-x-auto my-4">
                          <table className="w-full border-collapse">
                            <tbody>
                              {rows.map((row, i) => (
                                <tr key={i} className={i === 0 ? 'bg-slate-100 font-semibold' : ''}>
                                  {row.split('|').filter(cell => cell.trim()).map((cell, j) => (
                                    <td key={j} className="border border-slate-200 px-4 py-2">{cell.trim()}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                    
                    // 处理引用
                    if (paragraph.startsWith('>')) {
                      return <blockquote key={index} className="border-l-4 border-indigo-500 pl-4 italic text-slate-600 my-4">{paragraph.replace('> ', '')}</blockquote>;
                    }
                    
                    // 普通段落
                    if (paragraph.trim()) {
                      // 处理加粗
                      const processed = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                      return <p key={index} dangerouslySetInnerHTML={{ __html: processed }} />;
                    }
                    
                    return null;
                  })}
                </div>

                {/* 广告位 - 文章中间 */}
                <AdInArticle position="middle" />

                {/* 标签 */}
                <div className="mt-8 pt-6 border-t">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Link 
                        key={index} 
                        href={`/blog?q=${encodeURIComponent(tag)}`}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-slate-200"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 广告位 - 文章底部 */}
                <div className="mt-6">
                  <AdInArticle position="bottom" />
                </div>
              </article>

              {/* 分享按钮 */}
              <div className="card mt-6">
                <h3 className="font-semibold mb-4">分享这篇文章</h3>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
                    分享到微博
                  </button>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600">
                    分享到微信
                  </button>
                  <button className="px-4 py-2 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-800">
                    复制链接
                  </button>
                </div>
              </div>
            </div>

            {/* 侧边栏 */}
            <div className="lg:col-span-1">
              {/* 广告位 */}
              <AdBanner type="sidebar" />

              {/* 订阅 */}
              <div className="card mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                <h3 className="font-semibold mb-3">📬 订阅更新</h3>
                <p className="text-sm text-indigo-100 mb-4">订阅获取最新AI工具和教程</p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="输入邮箱" 
                    className="w-full px-4 py-2 rounded-lg text-slate-900 text-sm"
                    required
                  />
                  <button type="submit" className="w-full bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-indigo-50">
                    立即订阅
                  </button>
                </form>
              </div>

              {/* 最新文章 */}
              <div className="card">
                <h3 className="font-semibold mb-4">📚 最新文章</h3>
                <div className="space-y-4">
                  {recentPosts.map((p) => (
                    <Link 
                      key={p.id} 
                      href={`/blog/${p.slug}`}
                      className="block group"
                    >
                      <p className="text-sm font-medium group-hover:text-indigo-600 transition line-clamp-2">
                        {p.title}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">{p.publishedAt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
