import Link from 'next/link';
import { BlogPost } from '@/data/tools';

interface BlogCardProps {
  post: BlogPost;
}

// 根据文章分类生成默认渐变色
function getCategoryGradient(category: string): { gradient: string; emoji: string } {
  const gradients: Record<string, { gradient: string; emoji: string }> = {
    "工具推荐": { gradient: "from-blue-500 to-cyan-400", emoji: "🛠️" },
    "对比评测": { gradient: "from-purple-500 to-pink-400", emoji: "⚖️" },
    "使用教程": { gradient: "from-green-500 to-emerald-400", emoji: "📖" },
    "行业洞察": { gradient: "from-orange-500 to-amber-400", emoji: "🔮" },
  };
  return gradients[category] || { gradient: "from-indigo-500 to-purple-400", emoji: "📝" };
}

export function BlogCard({ post }: BlogCardProps) {
  const { gradient, emoji } = getCategoryGradient(post.category);
  const displayGradient = post.coverGradient || gradient;
  const displayEmoji = post.coverEmoji || emoji;

  return (
    <Link href={`/blog/${post.slug}`} className="card block group">
      {/* 渐变背景卡片 */}
      <div className={`relative mb-4 overflow-hidden rounded-lg bg-gradient-to-br ${displayGradient}`}>
        {/* 装饰性圆形 */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        {/* Emoji图标 */}
        <div className="flex items-center justify-center h-48">
          <span className="text-6xl drop-shadow-lg">{displayEmoji}</span>
        </div>
        
        {/* 分类标签 */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 text-indigo-600 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
            {post.category}
          </span>
        </div>
      </div>
      
      <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition line-clamp-2">
        {post.title}
      </h3>
      
      <p className="text-sm text-slate-500 mb-4 line-clamp-2">{post.excerpt}</p>
      
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>{post.author}</span>
        <span>{post.publishedAt}</span>
        <span>{post.readingTime}分钟阅读</span>
      </div>
    </Link>
  );
}
