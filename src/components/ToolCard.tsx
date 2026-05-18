import Link from 'next/link';
import { AITool } from '@/data/tools';

interface ToolCardProps {
  tool: AITool;
}

export function ToolCard({ tool }: ToolCardProps) {
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

  return (
    <Link href={`/tools/${tool.id}`} className="card block">
      <div className="flex items-start justify-between mb-3">
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
          <span className="text-2xl">{tool.name.charAt(0)}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="star-rating">★</span>
          <span className="text-sm font-medium text-slate-700">{tool.rating}</span>
        </div>
      </div>
      
      <h3 className="font-semibold text-slate-900 mb-1">{tool.name}</h3>
      <p className="text-sm text-slate-500 mb-3 line-clamp-2">{tool.description}</p>
      
      <div className="flex items-center justify-between">
        <span className="tag">{categoryLabels[tool.category]}</span>
        <span className="text-xs text-slate-400">{tool.pricing}</span>
      </div>
    </Link>
  );
}
