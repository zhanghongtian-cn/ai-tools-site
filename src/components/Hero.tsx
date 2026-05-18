export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full opacity-20 blur-3xl" />
      </div>
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* 标签 */}
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>✨</span>
            <span>收录 {30}+ 热门AI工具</span>
          </div>
          
          {/* 主标题 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            发现最实用的
            <span className="text-gradient block">AI工具</span>
          </h1>
          
          {/* 副标题 */}
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            派搜AI是专业的AI工具导航平台，涵盖AI写作、绘画、编程、办公等各类工具，
            提供详细评测、对比分析和最佳使用教程，帮助你找到最适合的AI助手。
          </p>
          
          {/* 搜索框 */}
          <div className="max-w-2xl mx-auto mb-8">
            <form action="/tools" method="GET" className="flex gap-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  name="q"
                  placeholder="搜索AI工具，如 ChatGPT、Midjourney..."
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-slate-900"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-indigo-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <button type="submit" className="btn-primary px-6">
                搜索
              </button>
            </form>
          </div>
          
          {/* 热门标签 */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-sm text-slate-500">热门搜索：</span>
            {['ChatGPT', 'Claude', 'Midjourney', 'AI绘画', 'AI编程'].map((tag) => (
              <a
                key={tag}
                href={`/tools?q=${encodeURIComponent(tag)}`}
                className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:border-indigo-500 hover:text-indigo-600 transition"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
        
        {/* 数据统计 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16">
          {[
            { value: '30+', label: '收录工具', icon: '🛠️' },
            { value: '8', label: '工具分类', icon: '📂' },
            { value: '5+', label: '精品文章', icon: '📝' },
            { value: '100%', label: '免费查阅', icon: '💯' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
