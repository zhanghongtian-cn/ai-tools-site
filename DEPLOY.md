# 派搜AI - 一键部署指南

## 🚀 快速部署到 Vercel（推荐）

### 步骤1：准备GitHub仓库

**方式A：手动推送到GitHub**

```bash
# 1. 进入项目目录
cd ai-tools-site

# 2. 初始化Git
git init

# 3. 添加所有文件
git add .

# 4. 提交
git commit -m "Initial commit - 派搜AI v1.0"

# 5. 在GitHub创建新仓库，然后添加远程地址
git remote add origin https://github.com/YOUR_USERNAME/ai-tools-site.git
git branch -M main
git push -u origin main
```

**方式B：使用GitHub Desktop**

1. 下载 [GitHub Desktop](https://desktop.github.com/)
2. File → Add Local Repository
3. 选择 `ai-tools-site` 文件夹
4. Publish repository 到GitHub

### 步骤2：部署到Vercel

1. 访问 [vercel.com](https://vercel.com) 并登录（可用GitHub账号）
2. 点击 "New Project"
3. 选择你刚创建的 `ai-tools-site` 仓库
4. Framework Preset 选择 "Next.js"
5. 点击 "Deploy"
6. 等待1-2分钟，网站就上线了！

**自定义域名（可选）：**
1. 在Vercel项目设置 → Domains
2. 添加你的域名（如 paisoai.com）
3. 按照提示配置DNS记录

---

## 🌐 部署到 Cloudflare Pages

1. 访问 [pages.cloudflare.com](https://pages.cloudflare.com/)
2. 创建项目 → 上传 `out/` 目录（或连接Git仓库）
3. 构建命令：`npm run build`
4. 输出目录：`out`

---

## 📦 本地构建（需手动上传）

如果你的电脑无法运行npm build：

1. 使用GitHub Codespaces（免费）
   - 在GitHub仓库按 `.` 键打开Codespaces
   - 运行 `npm run build`
   - 下载 `out/` 目录

2. 使用Gitpod（免费）
   - 安装 Gitpod Chrome插件
   - 点击仓库的Gitpod按钮

---

## ⚠️ 部署前检查清单

- [ ] 已修改 `src/config/site.ts` 中的网站名称和URL
- [ ] 已添加真实的Affiliate链接
- [ ] 已申请 Google AdSense（可选）
- [ ] 已配置邮件订阅服务（可选）
- [ ] 已更新 robots.ts 中的 verification code

---

## 🔧 后续维护

### 添加新AI工具

1. 编辑 `src/data/tools.ts`
2. 按现有格式添加新工具
3. 推送到GitHub，Vercel自动重新部署

### 发布新文章

1. 编辑 `src/data/blogs.ts`
2. 按现有格式添加新文章
3. 推送到GitHub

### 使用自动化脚本

```bash
# 添加新工具
node scripts/generate-content.js --tool

# 添加新文章
node scripts/generate-content.js --blog
```

---

## 📋 需要主人配合的事项

### 1. GitHub账号（必须）

如果没有GitHub账号：
1. 访问 [github.com](https://github.com)
2. 点击 "Sign up" 注册
3. 创建新仓库

### 2. Vercel账号（必须）

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "Sign Up"
3. 使用 GitHub 账号登录
4. 点击 "New Project" → Import GitHub Repository
5. 选择 ai-tools-site 仓库

### 3. Google AdSense（变现可选）

1. 访问 [adsense.google.com](https://adsense.google.com)
2. 申请账号和广告位代码
3. 在代码中替换 `.ad-placeholder` 区域

### 4. Affiliate联盟计划

推荐申请的Affiliate平台：
- **亚马逊联盟** (Amazon Associates)
- **阿里妈妈** (国内)
- **各大AI工具官网** 的Affiliate/Partner计划

### 5. 邮件订阅服务

推荐服务：
- **Mailchimp** (免费1000订阅者)
- **ConvertKit** (创作者专用)
- **SendGrid** (大规模)

---

## 📁 项目文件位置

```
云电脑路径: /app/data/所有对话/主对话/ai-tools-site/
```

### 关键文件

| 文件 | 用途 |
|------|------|
| `src/data/tools.ts` | AI工具数据（30个工具） |
| `src/data/blogs.ts` | 博客文章数据（5篇文章） |
| `src/config/site.ts` | 网站配置 |
| `src/app/page.tsx` | 首页 |
| `src/app/tools/` | 工具页面 |
| `src/app/blog/` | 博客页面 |
| `scripts/generate-content.js` | 内容生成脚本 |
| `README.md` | 项目说明 |
| `DEPLOY.md` | 部署指南（本文档） |

---

## 🆘 常见问题

**Q: Vercel部署失败怎么办？**
A: 检查错误日志，常见问题：
- 依赖安装失败 → 删除 node_modules 后重新 `npm install`
- 构建超时 → 升级Vercel套餐或优化构建

**Q: 网站打不开？**
A: 检查：
- 域名DNS是否正确配置
- SSL证书是否生效
- Vercel项目是否正常运行

**Q: 如何更新内容？**
A: 修改数据文件后推送到GitHub，Vercel会自动重新部署

---

## 📞 需要帮助？

如果遇到问题，可以通过以下方式获取帮助：
- GitHub Issues: 在仓库创建Issue
- Next.js文档: https://nextjs.org/docs
- Vercel文档: https://vercel.com/docs
