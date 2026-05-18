import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://paisoai.com'),
  title: {
    default: '派搜AI - 发现最实用的AI工具',
    template: '%s | 派搜AI'
  },
  description: '派搜AI是专业的AI工具导航平台，收录全球热门AI工具，提供详细评测、对比分析和使用教程。发现ChatGPT、Claude、Midjourney等AI工具，提升工作学习效率。',
  keywords: ['AI工具', 'AI软件', '人工智能工具', 'ChatGPT', 'Claude', 'Midjourney', 'AI绘画', 'AI写作', 'AI编程', 'AI助手'],
  authors: [{ name: '派搜AI' }],
  creator: '派搜AI',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://paisoai.com',
    siteName: '派搜AI',
    title: '派搜AI - 发现最实用的AI工具',
    description: '专业的AI工具导航平台，收录全球热门AI工具，提供详细评测和使用教程',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '派搜AI'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '派搜AI - 发现最实用的AI工具',
    description: '专业的AI工具导航平台',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "派搜AI",
              "url": "https://paisoai.com",
              "description": "专业的AI工具导航平台",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://paisoai.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container">
            <nav className="flex items-center justify-between h-16">
              <a href="/" className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <span className="text-xl font-bold text-gradient">派搜AI</span>
              </a>
              <div className="hidden md:flex items-center gap-8">
                <a href="/" className="nav-link">首页</a>
                <a href="/tools" className="nav-link">AI工具</a>
                <a href="/blog" className="nav-link">博客</a>
                <a href="/about" className="nav-link">关于我们</a>
              </div>
              <div className="flex items-center gap-4">
                <a href="/blog" className="btn-primary hidden sm:inline-flex">
                  浏览AI工具
                </a>
                <button className="md:hidden p-2" id="mobile-menu-btn">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </header>
        
        <main className="flex-1">
          {children}
        </main>
        
        <footer className="bg-slate-900 text-white py-12 mt-16">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🚀</span>
                  <span className="text-xl font-bold">派搜AI</span>
                </div>
                <p className="text-slate-400 text-sm">
                  发现最实用的AI工具，提升工作学习效率
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">AI工具分类</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="/tools?category=writing" className="hover:text-white">AI写作工具</a></li>
                  <li><a href="/tools?category=image" className="hover:text-white">AI绘画工具</a></li>
                  <li><a href="/tools?category=coding" className="hover:text-white">AI编程工具</a></li>
                  <li><a href="/tools?category=video" className="hover:text-white">AI视频工具</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">热门资源</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="/blog/best-ai-tools-2026" className="hover:text-white">2026年AI工具推荐</a></li>
                  <li><a href="/blog/chatgpt-vs-claude" className="hover:text-white">ChatGPT vs Claude</a></li>
                  <li><a href="/blog/ai-coding-assistants" className="hover:text-white">程序员AI工具</a></li>
                  <li><a href="/blog/ai-productivity-10x" className="hover:text-white">效率提升10倍</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">订阅更新</h4>
                <p className="text-slate-400 text-sm mb-4">订阅获取最新AI工具和教程</p>
                <form className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="输入邮箱" 
                    className="flex-1 px-3 py-2 rounded-lg text-slate-900 text-sm"
                  />
                  <button type="submit" className="bg-indigo-500 px-4 py-2 rounded-lg text-sm hover:bg-indigo-600">
                    订阅
                  </button>
                </form>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
              <p>© 2026 派搜AI. 致力于发现优质AI工具</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
