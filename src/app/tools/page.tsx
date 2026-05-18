"use client";

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { categories, aiTools, searchTools, getToolsByCategory } from '@/data/tools';
import { ToolCard } from '@/components/ToolCard';

function ToolsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') || '';
  const searchQuery = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [search, setSearch] = useState(searchQuery);
  const [sortBy, setSortBy] = useState<'rating' | 'visits' | 'name'>('rating');

  const filteredTools = useMemo(() => {
    let tools = selectedCategory ? getToolsByCategory(selectedCategory) : aiTools;
    
    if (search) {
      tools = searchTools(search);
      if (selectedCategory) {
        tools = tools.filter(t => t.category === selectedCategory);
      }
    }
    
    // 排序
    switch (sortBy) {
      case 'rating':
        return [...tools].sort((a, b) => b.rating - a.rating);
      case 'visits':
        return [...tools].sort((a, b) => b.visitCount - a.visitCount);
      case 'name':
        return [...tools].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return tools;
    }
  }, [selectedCategory, search, sortBy]);

  return (
    <>
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">AI工具导航</h1>
          <p className="text-indigo-100">
            发现全球热门AI工具，提升工作学习效率
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* 分类筛选 */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  !selectedCategory 
                    ? 'bg-indigo-500 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                全部
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === cat.id 
                      ? 'bg-indigo-500 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>

            {/* 排序 */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm"
            >
              <option value="rating">按评分排序</option>
              <option value="visits">按热度排序</option>
              <option value="name">按名称排序</option>
            </select>
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
          <div className="mb-6">
            <p className="text-slate-600">
              共找到 <span className="font-semibold text-indigo-600">{filteredTools.length}</span> 个AI工具
            </p>
          </div>

          {filteredTools.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">没有找到匹配的AI工具</p>
              <button 
                onClick={() => { setSelectedCategory(''); setSearch(''); }}
                className="btn-primary mt-4"
              >
                清除筛选
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function ToolsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">加载中...</div>}>
      <ToolsContent />
    </Suspense>
  );
}
