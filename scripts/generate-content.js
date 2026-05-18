/**
 * AI工具内容生成脚本
 * 
 * 使用方法：
 * 1. 直接运行: node scripts/generate-content.js
 * 2. 添加新工具: node scripts/generate-content.js --tool
 * 3. 添加新文章: node scripts/generate-content.js --blog
 * 
 * 这个脚本用于自动生成新的AI工具页面和博客文章模板
 */

const fs = require('fs');
const path = require('path');

// 颜色输出
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(color, message) {
  console.log(`${color}${message}${colors.reset}`);
}

// 工具数据模板
const toolTemplate = {
  id: '',
  name: '',
  nameEn: '',
  category: 'chatbot', // writing, image, coding, video, office, chatbot, audio, research
  subcategory: '',
  description: '',
  longDescription: '',
  features: [],
  pricing: '',
  pricingDetail: '',
  pros: [],
  cons: [],
  website: '',
  affiliateUrl: '',
  logo: '',
  tags: [],
  rating: 4.5,
  visitCount: 1000,
  createdAt: new Date().toISOString().split('T')[0]
};

// 博客模板
const blogTemplate = {
  id: '',
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  category: '工具推荐', // 工具推荐, 对比评测, 使用教程, 行业动态
  tags: [],
  author: '派搜AI',
  publishedAt: new Date().toISOString().split('T')[0],
  updatedAt: new Date().toISOString().split('T')[0],
  coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
  readingTime: 5,
  featured: false
};

// 常用分类
const categories = [
  { id: 'writing', name: 'AI写作', icon: '✍️' },
  { id: 'image', name: 'AI绘画', icon: '🎨' },
  { id: 'coding', name: 'AI编程', icon: '💻' },
  { id: 'video', name: 'AI视频', icon: '🎬' },
  { id: 'office', name: 'AI办公', icon: '📊' },
  { id: 'chatbot', name: 'AI对话', icon: '💬' },
  { id: 'audio', name: 'AI音频', icon: '🎵' },
  { id: 'research', name: 'AI研究', icon: '🔬' },
];

// 生成工具ID
function generateToolId(name) {
  return name.toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// 生成文章Slug
function generateSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5\s]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50);
}

// 交互式输入
async function prompt(question) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// 创建新工具
async function createNewTool() {
  log(colors.cyan, '\n=== 创建新AI工具 ===\n');
  
  const tool = { ...toolTemplate };
  
  tool.id = await prompt('工具ID (英文，如 chatgpt): ');
  tool.name = await prompt('工具名称: ');
  tool.nameEn = await prompt('英文名称: ');
  
  log(colors.yellow, '\n可用分类:');
  categories.forEach((cat, i) => {
    log(colors.blue, `  ${i + 1}. ${cat.id} - ${cat.name}`);
  });
  const catNum = await prompt('\n选择分类编号: ');
  tool.category = categories[parseInt(catNum) - 1]?.id || 'chatbot';
  
  tool.subcategory = await prompt('子分类: ');
  tool.description = await prompt('简短描述: ');
  
  log(colors.yellow, '\n详细描述 (多行输入，输入 END 结束):');
  let desc = '';
  let line;
  while ((line = await prompt('')) !== 'END') {
    desc += line + '\n';
  }
  tool.longDescription = desc.trim();
  
  const featuresStr = await prompt('\n主要功能 (逗号分隔): ');
  tool.features = featuresStr.split(',').map(f => f.trim()).filter(f => f);
  
  tool.pricing = await prompt('定价 (如: 免费, 付费, 免费/付费): ');
  tool.pricingDetail = await prompt('定价详情: ');
  
  const prosStr = await prompt('\n优点 (逗号分隔): ');
  tool.pros = prosStr.split(',').map(f => f.trim()).filter(f => f);
  
  const consStr = await prompt('缺点 (逗号分隔): ');
  tool.cons = consStr.split(',').map(f => f.trim()).filter(f => f);
  
  tool.website = await prompt('官网链接: ');
  tool.affiliateUrl = await prompt('Affiliate链接 (留空使用官网): ');
  if (!tool.affiliateUrl) tool.affiliateUrl = tool.website;
  
  const tagsStr = await prompt('标签 (逗号分隔): ');
  tool.tags = tagsStr.split(',').map(f => f.trim()).filter(f => f);
  
  tool.rating = parseFloat(await prompt('评分 (0-5，默认4.5): ')) || 4.5;
  tool.visitCount = parseInt(await prompt('浏览量 (默认1000): ')) || 1000;
  
  return tool;
}

// 创建新文章
async function createNewBlog() {
  log(colors.cyan, '\n=== 创建新博客文章 ===\n');
  
  const post = { ...blogTemplate };
  
  post.title = await prompt('文章标题: ');
  post.slug = generateSlug(post.title);
  post.excerpt = await prompt('文章摘要: ');
  
  log(colors.yellow, '\n可用分类:');
  log(colors.blue, '  1. 工具推荐');
  log(colors.blue, '  2. 对比评测');
  log(colors.blue, '  3. 使用教程');
  log(colors.blue, '  4. 行业动态');
  const catNum = await prompt('\n选择分类编号: ');
  const catMap = { '1': '工具推荐', '2': '对比评测', '3': '使用教程', '4': '行业动态' };
  post.category = catMap[catNum] || '工具推荐';
  
  log(colors.yellow, '\n文章内容 (多行输入，输入 END 结束):');
  let content = '';
  let line;
  while ((line = await prompt('')) !== 'END') {
    content += line + '\n';
  }
  post.content = content.trim();
  
  const tagsStr = await prompt('\n标签 (逗号分隔): ');
  post.tags = tagsStr.split(',').map(f => f.trim()).filter(f => f);
  
  post.readingTime = Math.ceil(post.content.length / 1000) || 5;
  
  const featured = await prompt('是否精选? (y/n，默认n): ');
  post.featured = featured.toLowerCase() === 'y';
  
  return post;
}

// 保存到文件
function saveTool(tool) {
  const filePath = path.join(__dirname, '../src/data/tools-new.ts');
  let content = '';
  
  if (fs.existsSync(filePath)) {
    content = fs.readFileSync(filePath, 'utf8');
  }
  
  // 追加新工具到数组
  const toolStr = JSON.stringify(tool, null, 2);
  content += '\n// 新增工具\n' + toolStr;
  
  fs.writeFileSync(filePath, content);
  log(colors.green, `\n✅ 工具 "${tool.name}" 已保存到 tools-new.ts`);
  log(colors.yellow, '请手动将新工具添加到 src/data/tools.ts 的 aiTools 数组中');
}

function saveBlog(post) {
  const filePath = path.join(__dirname, '../src/data/blogs-new.ts');
  let content = '';
  
  if (fs.existsSync(filePath)) {
    content = fs.readFileSync(filePath, 'utf8');
  }
  
  const postStr = JSON.stringify(post, null, 2);
  content += '\n// 新增文章\n' + postStr;
  
  fs.writeFileSync(filePath, content);
  log(colors.green, `\n✅ 文章 "${post.title}" 已保存到 blogs-new.ts`);
  log(colors.yellow, '请手动将新文章添加到 src/data/blogs.ts 的 blogPosts 数组中');
}

// 生成文章Markdown模板
function generateMarkdownTemplate() {
  const template = `---
title: 你的文章标题
date: ${new Date().toISOString().split('T')[0]}
category: 工具推荐
tags: [AI工具, 教程]
cover: https://images.unsplash.com/photo-xxxxx?w=800
featured: false
---

# 文章标题

在这里开始写文章内容...

## 小标题

内容...

## 另一个小标题

更多内容...
`;

  const filePath = path.join(__dirname, '../content/blog/template.md');
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, template);
  log(colors.green, '✅ Markdown模板已生成到 content/blog/template.md');
}

// 主函数
async function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--tool')) {
    const tool = await createNewTool();
    saveTool(tool);
  } else if (args.includes('--blog')) {
    const post = await createNewBlog();
    saveBlog(post);
  } else if (args.includes('--template')) {
    generateMarkdownTemplate();
  } else {
    log(colors.cyan, '\n🎯 AI工具内容生成脚本\n');
    log(colors.blue, '使用选项:');
    log(colors.yellow, '  --tool     创建新的AI工具模板');
    log(colors.yellow, '  --blog     创建新的博客文章模板');
    log(colors.yellow, '  --template 生成Markdown文章模板');
    log(colors.yellow, '\n示例:');
    log(colors.green, '  node scripts/generate-content.js --tool');
    log(colors.green, '  node scripts/generate-content.js --blog');
    log(colors.green, '  node scripts/generate-content.js --template');
  }
}

main().catch(console.error);
