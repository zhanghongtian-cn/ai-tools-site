import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getToolById, getCategoryById, aiTools } from '@/data/tools';
import { AdBanner, AdInArticle } from '@/components/AdBanner';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const tool = getToolById(id);
  
  if (!tool) {
    return { title: '工具未找到' };
  }
  
  return {
    title: `${tool.name} - AI工具详细介绍`,
    description: tool.description,
    keywords: tool.tags,
    openGraph: {
      title: `${tool.name} - 派搜AI`,
      description: tool.description,
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  return aiTools.map((tool) => ({
    id: tool.id,
  }));
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { id } = await params;
  const tool = getToolById(id);
  
  if (!tool) {
    notFound();
  }
  
  const category = getCategoryById(tool.category);
  const relatedTools = aiTools
    .filter(t => t.category === tool.category && t.id !== tool.id)
    .slice(0, 4);

  const categoryLabels: Record<string, string> = {
    writing: 'AI写作',
    image: 'AI绘画',
    coding: 'AI编程',
    video: 'AI视频',
    office: 'AI办公',
    chatbot: 'AI对话',
    audio: 'AI音频',
    research: 'AI研究',
  };

  // 判断是否使用affiliate链接
  const affiliateLink = tool.affiliateUrl || tool.website;

  // JSON-LD结构化数据
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "description": tool.description,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": tool.pricing === "免费" ? "0" : "varies",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": tool.rating,
      "ratingCount": tool.visitCount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 面包屑导航 */}
      <div className="bg-slate-50 border-b">
        <div className="container py-3">
          <nav className="text-sm">
            <Link href="/" className="text-slate-500 hover:text-indigo-600">首页</Link>
            <span className="mx-2 text-slate-400">/</span>
            <Link href="/tools" className="text-slate-500 hover:text-indigo-600">AI工具</Link>
            <span className="mx-2 text-slate-400">/</span>
            <Link href={`/tools?category=${tool.category}`} className="text-slate-500 hover:text-indigo-600">
              {categoryLabels[tool.category]}
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-900">{tool.name}</span>
          </nav>
        </div>
      </div>

      {/* 主内容 */}
      <section className="py-8">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 左侧主体 */}
            <div className="lg:col-span-2">
              {/* 工具头部 */}
              <div className="card mb-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">{tool.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-2xl font-bold">{tool.name}</h1>
                      <span className="tag">{categoryLabels[tool.category]}</span>
                      {tool.affiliateUrl && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                         Affiliate
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600">{tool.description}</p>
                  </div>
                </div>
                
                {/* 评分和统计 */}
                <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b">
                  <div>
                    <span className="text-2xl font-bold text-amber-500">★ {tool.rating}</span>
                    <span className="text-slate-500 text-sm ml-2">评分</span>
                  </div>
                  <div>
                    <span className="text-slate-900 font-semibold">{tool.visitCount.toLocaleString()}</span>
                    <span className="text-slate-500 text-sm ml-1">次浏览</span>
                  </div>
                  <div>
                    <span className="text-slate-900 font-semibold">{tool.pricing}</span>
                    <span className="text-slate-500 text-sm ml-1">定价</span>
                  </div>
                </div>

                {/* Affiliate按钮 - 变现模块 */}
                <div className="flex flex-wrap gap-3">
                  <a 
                    href={affiliateLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {tool.affiliateUrl ? '🔗 前往官网（ Affiliate链接）' : '🚀 前往官网'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 详细介绍 */}
              <div className="card mb-6">
                <h2 className="text-xl font-bold mb-4">详细介绍</h2>
                <div className="prose max-w-none">
                  {tool.longDescription.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return <h3 key={index} className="text-lg font-semibold mt-6 mb-3">{paragraph.replace(/\*\*/g, '')}</h3>;
                    }
                    if (paragraph.startsWith('- ')) {
                      return <li key={index} className="ml-4">{paragraph.replace('- ', '')}</li>;
                    }
                    if (paragraph.trim()) {
                      return <p key={index}>{paragraph}</p>;
                    }
                    return null;
                  })}
                </div>
              </div>

              {/* 广告位 - 内容中间 */}
              <AdInArticle position="middle" />

              {/* 功能特点 */}
              <div className="card mb-6">
                <h2 className="text-xl font-bold mb-4">主要功能</h2>
                <div className="flex flex-wrap gap-2">
                  {tool.features.map((feature, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* 优缺点 */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="card">
                  <h3 className="text-lg font-semibold text-green-600 mb-3">✅ 优点</h3>
                  <ul className="space-y-2">
                    {tool.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <h3 className="text-lg font-semibold text-red-600 mb-3">⚠️ 缺点</h3>
                  <ul className="space-y-2">
                    {tool.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-500">×</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 标签 */}
              <div className="card">
                <h3 className="text-lg font-semibold mb-3">相关标签</h3>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag, index) => (
                    <Link 
                      key={index} 
                      href={`/tools?q=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-slate-200"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* 右侧边栏 */}
            <div className="lg:col-span-1">
              {/* 广告位 */}
              <AdBanner type="sidebar" />

              {/* 定价信息 */}
              <div className="card mb-6">
                <h3 className="text-lg font-semibold mb-4">💰 定价方案</h3>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-2xl font-bold text-indigo-600">{tool.pricing}</p>
                  <p className="text-sm text-slate-600 mt-2">{tool.pricingDetail}</p>
                </div>
                <a 
                  href={affiliateLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center mt-4"
                >
                  {tool.affiliateUrl ? '🔗 使用 Affiliate 链接' : '立即开始使用'}
                </a>
              </div>

              {/* 相关工具 */}
              {relatedTools.length > 0 && (
                <div className="card">
                  <h3 className="text-lg font-semibold mb-4">🔥 同类工具</h3>
                  <div className="space-y-3">
                    {relatedTools.map((t) => (
                      <Link 
                        key={t.id} 
                        href={`/tools/${t.id}`}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition"
                      >
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-lg">
                          {t.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-slate-900">{t.name}</p>
                          <p className="text-xs text-slate-500">{t.pricing}</p>
                        </div>
                        <span className="text-amber-500 text-sm">★ {t.rating}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
