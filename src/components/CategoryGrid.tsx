import Link from 'next/link';
import { Category } from '@/data/tools';

interface CategoryGridProps {
  categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  const categoryIcons: Record<string, string> = {
    writing: '✍️',
    image: '🎨',
    coding: '💻',
    video: '🎬',
    office: '📊',
    chatbot: '💬',
    audio: '🎵',
    research: '🔬',
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/tools?category=${category.id}`}
          className="card group hover:border-indigo-500 border border-transparent"
        >
          <div className="text-4xl mb-3">
            {categoryIcons[category.id] || '🔧'}
          </div>
          <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition">
            {category.name}
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            {category.count} 个工具
          </p>
        </Link>
      ))}
    </div>
  );
}
