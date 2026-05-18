import Link from 'next/link';
import { BlogPost } from '@/data/tools';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="card block group">
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-indigo-500 text-white text-xs px-3 py-1 rounded-full">
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
