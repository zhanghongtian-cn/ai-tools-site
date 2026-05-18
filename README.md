# 派搜AI (PaiSo AI)

🎯 **派搜AI** 是一个专业的AI工具导航网站，收录全球热门AI工具，提供详细评测、对比分析和使用教程。

## ✨ 功能特性

- 🛠️ **AI工具导航** - 收录30+热门AI工具，覆盖写作、绘画、编程、办公等领域
- 📝 **工具详情页** - 每个工具配有详细介绍、定价、优缺点分析
- 📚 **博客资讯** - AI行业动态、工具测评、使用教程
- 🔍 **智能搜索** - 快速找到需要的AI工具
- 📱 **响应式设计** - 移动端友好体验
- 🚀 **SEO优化** - 自动生成sitemap、结构化数据
- 💰 **变现模块** - 广告位、Affiliate链接、邮件订阅

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **样式**: Tailwind CSS 4
- **语言**: TypeScript
- **部署**: Vercel / Cloudflare Pages

## 📦 安装

```bash
# 克隆仓库
git clone https://github.com/username/ai-tools-site.git
cd ai-tools-site

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build
```

## 🌐 部署

### Vercel (推荐)

1. Fork 这个仓库
2. 在 [Vercel](https://vercel.com) 导入项目
3. 点击 Deploy 完成部署

### Cloudflare Pages

1. Fork 这个仓库
2. 在 Cloudflare Pages 导入
3. 构建命令: `npm run build`
4. 输出目录: `.next`

## 📁 项目结构

```
ai-tools-site/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # 首页
│   │   ├── tools/              # 工具页面
│   │   │   ├── page.tsx        # 工具列表
│   │   │   └── [id]/page.tsx   # 工具详情
│   │   ├── blog/               # 博客页面
│   │   │   ├── page.tsx        # 博客列表
│   │   │   └── [slug]/page.tsx # 博客详情
│   │   ├── about/              # 关于页面
│   │   ├── sitemap.ts         # SEO sitemap
│   │   └── robots.ts          # robots.txt
│   ├── components/            # React组件
│   ├── data/                  # 数据文件
│   │   ├── tools.ts           # AI工具数据
│   │   └── blogs.ts           # 博客文章数据
│   └── config/                # 配置文件
├── scripts/                   # 自动化脚本
│   └── generate-content.js    # 内容生成脚本
└── public/                   # 静态资源
```

## 🔄 更新内容

### 添加新工具

```bash
# 运行交互式工具创建脚本
node scripts/generate-content.js --tool
```

或手动编辑 `src/data/tools.ts`：

```typescript
{
  id: "tool-id",
  name: "工具名称",
  nameEn: "Tool Name",
  category: "chatbot", // 分类ID
  subcategory: "子分类",
  description: "简短描述",
  longDescription: "详细介绍...",
  features: ["功能1", "功能2"],
  pricing: "免费",
  pricingDetail: "免费版详细说明",
  pros: ["优点1", "优点2"],
  cons: ["缺点1", "缺点2"],
  website: "https://example.com",
  affiliateUrl: "https://affiliate.example.com",
  logo: "https://logo.url",
  tags: ["标签1", "标签2"],
  rating: 4.5,
  visitCount: 10000,
  createdAt: "2026-01-01"
}
```

### 添加新文章

```bash
# 运行交互式文章创建脚本
node scripts/generate-content.js --blog
```

或手动编辑 `src/data/blogs.ts`。

## 💰 变现配置

### Google AdSense

1. 申请 [Google AdSense](https://www.google.com/adsense)
2. 获取广告代码
3. 在组件中找到 `.ad-placeholder` 替换为广告代码

### Affiliate 链接

1. 申请各平台的Affiliate计划
2. 在 `src/data/tools.ts` 中填写 `affiliateUrl`
3. 当前为占位符格式: `https://affiliate.example.com/tool-name`

### 邮件订阅

邮件订阅入口已在首页和底部添加，可对接：
- Mailchimp
- SendGrid
- ConvertKit
- 或自建邮件服务

## 🔍 SEO

网站已内置以下SEO优化：

- [x] 语义化HTML标签
- [x] Meta标签 (title, description, keywords)
- [x] Open Graph
- [x] Twitter Cards
- [x] JSON-LD 结构化数据
- [x] Sitemap.xml 自动生成
- [x] Robots.txt
- [x] 友好的URL结构

## 📱 页面预览

- **首页**: AI工具分类导航、热门工具推荐、最新博客
- **工具列表**: 分类筛选、搜索、排序
- **工具详情**: 详细介绍、功能、优缺点、定价、相关工具
- **博客列表**: 文章分类、标签筛选
- **博客详情**: 完整文章、相关推荐、分享功能
- **关于页面**: 平台介绍、联系信息

## 🛠️ 开发

```bash
# 代码检查
npm run lint

# 类型检查
npx tsc --noEmit
```

## 📄 License

MIT License

## 🙏 致谢

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Unsplash](https://unsplash.com/) - 图片素材

---

Built with ❤️ by 派搜AI
