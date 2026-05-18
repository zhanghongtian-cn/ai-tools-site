#!/bin/bash
# 部署脚本 - 在本地执行构建并准备上传

echo "🚀 开始构建派搜AI网站..."

# 检查Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js 未安装"
    exit 1
fi

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建
echo "🔨 构建项目..."
npm run build

# 复制CNAME（如果有）
if [ -f CNAME ]; then
    cp CNAME out/
fi

echo ""
echo "✅ 构建完成！"
echo "📁 输出目录: out/"
echo ""
echo "部署方式："
echo "1. Vercel: vercel --prod"
echo "2. Cloudflare Pages: 上传 out/ 目录"
echo "3. GitHub Pages: 将 out/ 内容推送到 gh-pages 分支"
echo "4. Nginx: 将 out/ 目录配置为网站根目录"
