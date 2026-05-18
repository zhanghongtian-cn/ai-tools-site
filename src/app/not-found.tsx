import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl mb-4">🔍</div>
        <h1 className="text-4xl font-bold mb-4">页面未找到</h1>
        <p className="text-slate-600 mb-8">
          抱歉，您访问的页面不存在或已被移除
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn-primary">
            返回首页
          </Link>
          <Link href="/tools" className="btn-secondary">
            浏览AI工具
          </Link>
        </div>
      </div>
    </div>
  );
}
