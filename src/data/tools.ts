export interface AITool {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  subcategory: string;
  description: string;
  longDescription: string;
  features: string[];
  pricing: string;
  pricingDetail: string;
  pros: string[];
  cons: string[];
  website: string;
  affiliateUrl: string;
  logo: string;
  tags: string[];
  rating: number;
  visitCount: number;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  coverImage: string;
  coverGradient?: string;
  coverEmoji?: string;
  readingTime: number;
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  description: string;
  count: number;
}

export const categories: Category[] = [
  { id: "writing", name: "AI写作", nameEn: "AI Writing", icon: "✍️", description: "智能写作、内容生成、文案创作", count: 0 },
  { id: "image", name: "AI绘画", nameEn: "AI Image", icon: "🎨", description: "图像生成、图片编辑、艺术创作", count: 0 },
  { id: "coding", name: "AI编程", nameEn: "AI Coding", icon: "💻", description: "代码生成、编程助手、代码审查", count: 0 },
  { id: "video", name: "AI视频", nameEn: "AI Video", icon: "🎬", description: "视频生成、视频编辑、短视频创作", count: 0 },
  { id: "office", name: "AI办公", nameEn: "AI Office", icon: "📊", description: "文档处理、表格制作、PPT生成", count: 0 },
  { id: "chatbot", name: "AI对话", nameEn: "AI Chat", icon: "💬", description: "智能对话、问答系统、客服机器人", count: 0 },
  { id: "audio", name: "AI音频", nameEn: "AI Audio", icon: "🎵", description: "语音合成、音频编辑、音乐生成", count: 0 },
  { id: "research", name: "AI研究", nameEn: "AI Research", icon: "🔬", description: "学术研究、数据分析、科学计算", count: 0 },
];

export const aiTools: AITool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    nameEn: "ChatGPT",
    category: "chatbot",
    subcategory: "大语言模型",
    description: "OpenAI开发的AI对话助手，支持多轮对话、代码生成、内容创作等，是目前最流行的AI工具之一",
    longDescription: `ChatGPT是OpenAI于2022年11月推出的人工智能聊天机器人程序，基于GPT-4架构开发。它能够进行自然语言对话、回答问题、撰写文章、编写代码、翻译等多种任务。ChatGPT以其强大的语言理解和生成能力，迅速成为全球最受欢迎的AI工具之一。

**主要特点：**
- 支持多轮连续对话，理解上下文语境
- 强大的文本生成能力，可撰写各类文章
- 代码编写和调试辅助
- 支持插件扩展，可联网搜索
- 多语言支持，包括中文

**适用场景：**
- 内容创作与写作辅助
- 代码编写与调试
- 学习教育与知识问答
- 商业文案撰写
- 日常问题解答`,
    features: ["多轮对话", "代码生成", "文章撰写", "翻译", "插件系统", "联网搜索"],
    pricing: "免费/付费",
    pricingDetail: "免费版基于GPT-3.5，付费版ChatGPT Plus月费20美元可使用GPT-4",
    pros: ["对话能力强", "生态完善", "插件丰富", "社区活跃"],
    cons: ["免费版有使用限制", "中国访问不便", "偶尔会编造信息"],
    website: "https://chat.openai.com",
    affiliateUrl: "",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    tags: ["AI对话", "大语言模型", "GPT-4", "OpenAI", "AI写作", "AI助手"],
    rating: 4.9,
    visitCount: 156000,
    createdAt: "2024-01-15"
  },
  {
    id: "claude",
    name: "Claude",
    nameEn: "Claude",
    category: "chatbot",
    subcategory: "大语言模型",
    description: "Anthropic开发的AI助手，以安全性和长文本处理能力著称，支持200K token上下文",
    longDescription: `Claude是Anthropic公司开发的AI助手，以其卓越的安全性、长文本处理能力和对话逻辑著称。Claude 2版本支持高达200K token的上下文窗口，能够处理整本书籍、长篇文档分析等复杂任务。

**主要特点：**
- 超长上下文窗口（200K tokens）
- 强大的长文本分析和总结能力
- 注重AI安全和伦理
- 支持文档上传和分析
- 优秀的编程辅助能力

**适用场景：**
- 长文档阅读和分析
- 复杂项目代码审查
- 学术论文写作
- 创意写作
- 深度知识探讨`,
    features: ["超长上下文", "文档分析", "代码审查", "安全AI", "多语言"],
    pricing: "免费/付费",
    pricingDetail: "免费额度用完后，Claude Pro月费20美元",
    pros: ["长文本能力强", "安全性高", "回答质量高", "不胡编乱造"],
    cons: ["免费额度有限", "生成速度较慢", "中文能力略弱"],
    website: "https://claude.ai",
    affiliateUrl: "",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Claude_icon.svg",
    tags: ["AI对话", "大语言模型", "Anthropic", "长文本", "AI助手"],
    rating: 4.8,
    visitCount: 89000,
    createdAt: "2024-01-20"
  },
  {
    id: "midjourney",
    name: "Midjourney",
    nameEn: "Midjourney",
    category: "image",
    subcategory: "AI绘画",
    description: "强大的AI图像生成工具，以艺术风格见长，生成的图像质量极高",
    longDescription: `Midjourney是一款基于Discord平台的AI图像生成工具，以其出色的艺术风格和视觉效果而闻名。用户通过简单的文本描述（prompt）即可生成高质量的图像作品。

**主要特点：**
- 艺术风格出众，图像质量高
- 操作简单，通过Discord交互
- 社区氛围活跃，灵感丰富
- 支持风格定制和参数调整
- 持续迭代更新

**适用场景：**
- 艺术创作与设计灵感
- 社交媒体配图
- 产品概念设计
- 游戏美术素材
- 品牌视觉设计`,
    features: ["文生图", "风格多样", "高质量输出", "社区分享", "参数微调"],
    pricing: "付费订阅",
    pricingDetail: "基础版月费10美元，标准版30美元，专业版60美元",
    pros: ["图像质量高", "艺术感强", "社区活跃", "操作简单"],
    cons: ["需要付费", "需要科学上网", "版权争议"],
    website: "https://www.midjourney.com",
    affiliateUrl: "",
    logo: "https://cjridgeway.com/wp-content/uploads/2023/01/midjourney-emblem-1-768x432.png",
    tags: ["AI绘画", "文生图", "艺术创作", "Midjourney", "AI图像"],
    rating: 4.7,
    visitCount: 67000,
    createdAt: "2024-02-01"
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    nameEn: "Stable Diffusion",
    category: "image",
    subcategory: "AI绘画",
    description: "开源免费的高质量AI图像生成模型，支持本地部署和自定义训练",
    longDescription: `Stable Diffusion是由Stability AI开发的开源AI图像生成模型，以其免费、开源、本地部署能力而广受欢迎。它基于Latent Diffusion架构，能够在消费级显卡上运行。

**主要特点：**
- 完全开源免费
- 支持本地部署
- 模型生态丰富
- 可自定义训练
- 隐私保护强

**适用场景：**
- 个人创作
- 商业项目
- 模型二次开发
- 研究学习
- 批量图像生成`,
    features: ["开源免费", "本地部署", "模型众多", "自定义训练", "隐私安全"],
    pricing: "免费",
    pricingDetail: "完全免费，可本地部署",
    pros: ["完全免费", "本地运行", "可定制", "社区丰富"],
    cons: ["需要硬件配置", "上手有门槛", "质量不如MJ"],
    website: "https://stability.ai",
    affiliateUrl: "",
    logo: "https://platform.stability.ai/logo.png",
    tags: ["AI绘画", "开源", "本地部署", "Stable Diffusion", "免费AI"],
    rating: 4.6,
    visitCount: 78000,
    createdAt: "2024-02-05"
  },
  {
    id: "dall-e",
    name: "DALL-E",
    nameEn: "DALL-E",
    category: "image",
    subcategory: "AI绘画",
    description: "OpenAI开发的AI图像生成器，支持图像编辑和变体生成，与ChatGPT集成",
    longDescription: `DALL-E是OpenAI开发的AI图像生成模型，最新版本DALL-E 3集成在ChatGPT中，提供更精确的图像生成能力。它特别擅长理解复杂的文本描述并生成对应图像。

**主要特点：**
- 与ChatGPT集成
- 理解复杂prompt
- 图像编辑功能
- 一致性风格保持
- 安全内容过滤

**适用场景：**
- 概念设计
- 插画创作
- 产品原型
- 品牌素材
- 社交媒体内容`,
    features: ["文生图", "图生图", "图像编辑", "风格保持", "ChatGPT集成"],
    pricing: "积分制",
    pricingDetail: "ChatGPT Plus用户可用，115美元可购买1150积分",
    pros: ["与ChatGPT集成", "prompt理解强", "安全性高", "品牌可信"],
    cons: ["需要付费", "风格有限制", "速度较慢"],
    website: "https://openai.com/dall-e-3",
    affiliateUrl: "",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    tags: ["AI绘画", "OpenAI", "文生图", "DALL-E", "AI图像"],
    rating: 4.5,
    visitCount: 45000,
    createdAt: "2024-02-10"
  },
  {
    id: "cursor",
    name: "Cursor",
    nameEn: "Cursor",
    category: "coding",
    subcategory: "AI编程",
    description: "AI代码编辑器，专注提升编程效率，支持对话式编程和多文件编辑",
    longDescription: `Cursor是一款专为AI时代打造的代码编辑器，基于VS Code开发，集成了强大的AI辅助编程功能。它支持代码补全、代码解释、Bug修复、代码重构等多种功能。

**主要特点：**
- AI代码补全和建议
- 对话式代码生成
- 代码解释和问答
- Bug自动修复
- 多文件编辑

**适用场景：**
- 日常编程开发
- 代码学习和理解
- Bug修复和调试
- 代码重构
- 项目协作`,
    features: ["代码补全", "AI对话", "Bug修复", "代码解释", "多文件编辑"],
    pricing: "免费/付费",
    pricingDetail: "免费版有使用限制，Pro版月费20美元",
    pros: ["编程效率高", "上手快", "功能全面", "免费版够用"],
    cons: ["免费版有限制", "偶有卡顿", "生态不如VSCode"],
    website: "https://cursor.sh",
    affiliateUrl: "",
    logo: "https://cursor.sh/cdn沐浴.jpg",
    tags: ["AI编程", "代码编辑器", "Cursor", "AI助手"],
    rating: 4.8,
    visitCount: 52000,
    createdAt: "2024-02-15"
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    nameEn: "GitHub Copilot",
    category: "coding",
    subcategory: "AI编程",
    description: "微软和GitHub联合开发的AI编程助手，与VS Code完美集成",
    longDescription: `GitHub Copilot是由GitHub、OpenAI和微软联合开发的AI编程助手，被誉为"程序员的AI搭档"。它集成在IDE中，能够实时提供代码补全和建议。

**主要特点：**
- 实时代码补全
- 整行或整函数补全
- 支持多种语言
- 代码解释
- 测试代码生成

**适用场景：**
- 日常开发编码
- 学习新语言
- 代码补全加速
- 重复代码生成
- 测试用例编写`,
    features: ["代码补全", "多语言支持", "IDE集成", "测试生成", "文档生成"],
    pricing: "付费订阅",
    pricingDetail: "个人版月费10美元，年付100美元",
    pros: ["代码质量高", "集成完善", "微软生态", "支持广泛"],
    cons: ["需要付费", "偶有错误建议", "隐私顾虑"],
    website: "https://github.com/features/copilot",
    affiliateUrl: "",
    logo: "https://github.githubassets.com/images/modules/site/copilot/productivity-bg-head.png",
    tags: ["AI编程", "GitHub", "Copilot", "微软", "代码助手"],
    rating: 4.7,
    visitCount: 98000,
    createdAt: "2024-02-20"
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    nameEn: "Notion",
    category: "office",
    subcategory: "AI笔记",
    description: "Notion内置的AI功能，帮助用户更高效地写作、总结和整理信息",
    longDescription: `Notion AI是集成在Notion笔记工具中的AI助手，可以帮助你快速撰写内容、总结长文档、翻译、生成创意等。作为最受欢迎的笔记工具之一，Notion AI让内容创作更加高效。

**主要特点：**
- AI写作助手
- 文档自动总结
- 多语言翻译
- 创意头脑风暴
- 任务清单优化

**适用场景：**
- 笔记整理
- 文章撰写
- 项目管理
- 团队协作
- 知识库建设`,
    features: ["AI写作", "自动总结", "翻译", "头脑风暴", "任务管理"],
    pricing: "免费/付费",
    pricingDetail: "免费版有额度，Plus版月费10美元含AI功能",
    pros: ["集成强大", "使用便捷", "协作友好", "模板丰富"],
    cons: ["高级功能付费", "需要科学上网", "离线功能有限"],
    website: "https://www.notion.so",
    affiliateUrl: "https://www.notion.so/affiliates?affiliate_code=AFFILIATE",
    logo: "https://www.notion.so/images/favicon.ico",
    tags: ["AI办公", "笔记", "Notion", "写作助手", "团队协作"],
    rating: 4.8,
    visitCount: 112000,
    createdAt: "2024-03-01"
  },
  {
    id: "kimi",
    name: "Kimi",
    nameEn: "Kimi",
    category: "chatbot",
    subcategory: "大语言模型",
    description: "月之暗面开发的国产AI助手，擅长中文理解，20万字超长上下文",
    longDescription: `Kimi是月之暗面（Moonshot AI）公司开发的大语言模型，专注于中文语言处理，提供高达20万字的长上下文支持。作为国产AI的代表，Kimi在中文理解方面表现优异。

**主要特点：**
- 20万字超长上下文
- 中文理解能力强
- 支持文件上传分析
- 联网搜索能力
- 完全免费使用

**适用场景：**
- 中文对话
- 长文阅读分析
- 文档处理
- 学术研究
- 内容创作`,
    features: ["超长上下文", "中文强", "文件分析", "联网搜索", "免费使用"],
    pricing: "免费",
    pricingDetail: "完全免费使用",
    pros: ["完全免费", "中文优秀", "长文本强", "国产优秀"],
    cons: ["功能相对基础", "生态较新", "响应速度一般"],
    website: "https://kimi.moonshot.cn",
    affiliateUrl: "",
    logo: "https://kimi.moonshot.cn/favicon.ico",
    tags: ["AI对话", "国产AI", "Kimi", "长文本", "中文AI"],
    rating: 4.7,
    visitCount: 65000,
    createdAt: "2024-03-05"
  },
  {
    id: "perplexity",
    name: "Perplexity",
    nameEn: "Perplexity",
    category: "chatbot",
    subcategory: "AI搜索",
    description: "AI驱动的搜索引擎，可以实时获取最新信息并提供准确答案",
    longDescription: `Perplexity是一款AI搜索引擎，结合了传统搜索引擎和AI对话的能力。它能够实时搜索互联网，为用户提供准确的答案和信息来源引用。

**主要特点：**
- 实时联网搜索
- 答案带来源引用
- 支持多种AI模型
- 简洁易用的界面
- 专业版提供更强能力

**适用场景：**
- 信息检索
- 学术研究
- 新闻追踪
- 产品调研
- 日常问答`,
    features: ["联网搜索", "来源引用", "多模型", "简洁界面", "专业版"],
    pricing: "免费/付费",
    pricingDetail: "免费版可用，Pro版月费20美元",
    pros: ["实时信息", "来源可靠", "回答准确", "界面简洁"],
    cons: ["免费版有限制", "上下文有限", "需要科学上网"],
    website: "https://www.perplexity.ai",
    affiliateUrl: "",
    logo: "https://www.perplexity.ai/favicon.ico",
    tags: ["AI搜索", "AI对话", "Perplexity", "联网搜索"],
    rating: 4.6,
    visitCount: 48000,
    createdAt: "2024-03-10"
  },
  {
    id: "runway",
    name: "Runway",
    nameEn: "Runway",
    category: "video",
    subcategory: "AI视频",
    description: "AI视频生成和编辑平台，支持文生视频、图生视频等多种功能",
    longDescription: `Runway是一款专注于AI视频创作的平台，提供文生视频、图生视频、视频编辑等功能。它是AI视频领域的先驱，被广泛应用于影视制作和内容创作。

**主要特点：**
- 文生视频
- 视频风格迁移
- 视频编辑
- 绿幕抠像
- 持续更新新功能

**适用场景：**
- 视频创作
- 影视制作
- 社交媒体内容
- 广告制作
- 短视频创作`,
    features: ["文生视频", "风格迁移", "视频编辑", "绿幕抠像", "多模板"],
    pricing: "免费/付费",
    pricingDetail: "免费版有额度，Pro版月费35美元",
    pros: ["功能强大", "持续更新", "社区活跃", "质量不错"],
    cons: ["免费版有限", "需要付费", "生成速度慢"],
    website: "https://runwayml.com",
    affiliateUrl: "",
    logo: "https://runwayml.com/favicon.ico",
    tags: ["AI视频", "视频生成", "Runway", "视频创作"],
    rating: 4.5,
    visitCount: 42000,
    createdAt: "2024-03-15"
  },
  {
    id: "gamma",
    name: "Gamma",
    nameEn: "Gamma",
    category: "office",
    subcategory: "PPT生成",
    description: "AI驱动的PPT生成工具，输入主题即可生成精美演示文稿",
    longDescription: `Gamma是一款AI驱动的演示文稿生成工具，用户只需输入主题或大纲，即可自动生成精美的PPT。它大幅简化了演示文稿制作流程。

**主要特点：**
- AI自动生成PPT
- 多种主题模板
- 在线协作编辑
- 嵌入多媒体
- 导出多种格式

**适用场景：**
- 商务演示
- 教学课件
- 会议报告
- 个人展示
- 团队汇报`,
    features: ["AI生成", "模板丰富", "在线协作", "多媒体嵌入", "多格式导出"],
    pricing: "免费/付费",
    pricingDetail: "免费版可用，Plus版月费18美元",
    pros: ["制作快速", "模板美观", "协作方便", "导出灵活"],
    cons: ["免费版有限", "AI生成需审核", "高级模板付费"],
    website: "https://gamma.app",
    affiliateUrl: "",
    logo: "https://gamma.app/favicon.ico",
    tags: ["AI办公", "PPT", "演示文稿", "Gamma", "AI工具"],
    rating: 4.7,
    visitCount: 58000,
    createdAt: "2024-03-20"
  },
  {
    id: "canva-ai",
    name: "Canva AI",
    nameEn: "Canva",
    category: "image",
    subcategory: "设计工具",
    description: "包含AI功能的在线设计平台，提供海量模板和设计素材",
    longDescription: `Canva是全球领先的在线设计平台，其AI功能包括Magic Write文案生成、Magic Design设计建议、Magic Eraser图片编辑等，让设计变得更简单。

**主要特点：**
- AI文案生成
- 智能设计建议
- 图片编辑
- 海报生成
- 团队协作

**适用场景：**
- 社交媒体设计
- 海报制作
- PPT设计
- 品牌素材
- 营销内容`,
    features: ["AI文案", "设计模板", "图片编辑", "协作", "品牌套件"],
    pricing: "免费/付费",
    pricingDetail: "免费版可用，Pro版月费12.99美元",
    pros: ["模板丰富", "操作简单", "协作方便", "设计美观"],
    cons: ["高级功能付费", "导出有限制", "创意有限"],
    website: "https://www.canva.com",
    affiliateUrl: "https://partner.canva.com/affiliate",
    logo: "https://www.canva.com/favicon.ico",
    tags: ["AI设计", "设计工具", "Canva", "海报", "社交媒体"],
    rating: 4.6,
    visitCount: 72000,
    createdAt: "2024-04-15"
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    nameEn: "Copy.ai",
    category: "writing",
    subcategory: "文案生成",
    description: "AI文案生成工具，帮助快速创建营销内容，支持90+种语言",
    longDescription: `Copy.ai是一款AI文案生成工具，专注于帮助用户快速生成营销文案、社交媒体内容、产品描述等商业写作任务。它支持90多种语言，是跨境营销的好帮手。

**主要特点：**
- 多种文案模板
- 多语言支持
- 品牌声音定制
- 批量生成
- 协作功能

**适用场景：**
- 营销文案
- 社交媒体
- 产品描述
- 邮件撰写
- 广告创意`,
    features: ["文案模板", "多语言", "品牌定制", "批量生成", "SEO优化"],
    pricing: "免费/付费",
    pricingDetail: "免费版有额度，Pro版月费49美元",
    pros: ["模板丰富", "生成快速", "多语言", "SEO友好"],
    cons: ["价格较高", "内容重复", "需人工修改"],
    website: "https://www.copy.ai",
    affiliateUrl: "https://www.copy.ai/affiliates?ref=AFFILIATE",
    logo: "https://www.copy.ai/favicon.ico",
    tags: ["AI写作", "文案", "营销", "Copy.ai", "跨境电商"],
    rating: 4.4,
    visitCount: 28000,
    createdAt: "2024-04-20"
  },
  {
    id: "jasper",
    name: "Jasper",
    nameEn: "Jasper",
    category: "writing",
    subcategory: "AI写作",
    description: "企业级AI内容创作平台，支持SEO优化和品牌一致性管理",
    longDescription: `Jasper是领先的AI内容创作平台，专为企业和营销团队设计，提供SEO优化、品牌一致性、多语言内容生成等功能。它是企业内容营销的最佳选择。

**主要特点：**
- 品牌声音定制
- SEO集成
- 多语言内容
- 团队协作
- API接口

**适用场景：**
- 企业内容营销
- 跨境电商
- 内容工厂
- 品牌运营
- SEO优化`,
    features: ["品牌定制", "SEO优化", "多语言", "API", "团队协作"],
    pricing: "付费订阅",
    pricingDetail: "Starter版月费49美元，Pro版月存49美元",
    pros: ["企业级功能", "品牌一致性", "SEO优化", "支持多语言"],
    cons: ["价格昂贵", "上手有门槛", "需要配置"],
    website: "https://www.jasper.ai",
    affiliateUrl: "https://www.jasper.ai/affiliate?via=AFFILIATE",
    logo: "https://www.jasper.ai/favicon.ico",
    tags: ["AI写作", "企业", "营销", "Jasper", "内容营销"],
    rating: 4.5,
    visitCount: 31000,
    createdAt: "2024-04-25"
  },
  {
    id: "writesonic",
    name: "Writesonic",
    nameEn: "Writesonic",
    category: "writing",
    subcategory: "AI写作",
    description: "AI写作助手，支持文章生成和SEO优化，性价比高",
    longDescription: `Writesonic是一款综合性AI写作工具，支持文章写作、博客内容、SEO优化内容、营销文案等多种类型的内容生成。价格相对亲民，适合个人用户。

**主要特点：**
- 多类型内容生成
- SEO优化建议
- 文章重写
- 图片生成集成
- API支持

**适用场景：**
- 博客文章
- SEO内容
- 产品文案
- 广告创意
- 社交内容`,
    features: ["文章生成", "SEO优化", "多类型", "图片生成", "API"],
    pricing: "免费/付费",
    pricingDetail: "免费版有限，Pro版月费19美元",
    pros: ["功能全面", "SEO友好", "价格适中", "生成质量好"],
    cons: ["免费版限制多", "偶有重复", "需要审核"],
    website: "https://writesonic.com",
    affiliateUrl: "",
    logo: "https://writesonic.com/favicon.ico",
    tags: ["AI写作", "SEO", "文章", "Writesonic", "博客"],
    rating: 4.4,
    visitCount: 26000,
    createdAt: "2024-05-01"
  },
  {
    id: "removal-ai",
    name: "Remove.bg",
    nameEn: "Remove.bg",
    category: "image",
    subcategory: "图片编辑",
    description: "AI一键抠图工具，自动移除图片背景，几秒钟完成",
    longDescription: `Remove.bg是一款AI驱动的在线抠图工具，可以自动识别并移除图片背景，几秒钟内完成高质量的背景移除。电商卖家和设计师的必备工具。

**主要特点：**
- 一键抠图
- 边缘精细
- API支持
- 批量处理
- 多种格式

**适用场景：**
- 电商产品图
- 证件照处理
- 营销素材
- 人像处理
- 设计素材`,
    features: ["一键抠图", "边缘精细", "API", "批量", "格式多样"],
    pricing: "免费/付费",
    pricingDetail: "免费版有限，高清版月费9美元",
    pros: ["操作简单", "效果好", "速度快", "API可用"],
    cons: ["免费版有限", "复杂图效果差", "隐私顾虑"],
    website: "https://www.remove.bg",
    affiliateUrl: "",
    logo: "https://www.remove.bg/favicon.ico",
    tags: ["AI图片", "抠图", "Remove.bg", "图片编辑"],
    rating: 4.7,
    visitCount: 58000,
    createdAt: "2024-05-05"
  },
  {
    id: "voicemaker",
    name: "Voicemaker",
    nameEn: "Voicemaker",
    category: "audio",
    subcategory: "语音合成",
    description: "AI文字转语音工具，支持多种语言和声音风格",
    longDescription: `Voicemaker是一款AI文字转语音工具，提供多种语言和声音选择，可以将文本转换为自然流畅的语音输出。适合视频配音、有声书等多种场景。

**主要特点：**
- 多种声音选择
- 多语言支持
- 语速调节
- 商用授权
- 多种格式导出

**适用场景：**
- 视频配音
- 有声书
- 教育内容
- 广告旁白
- 语音导航`,
    features: ["多声音", "多语言", "语速调节", "商用授权", "多格式"],
    pricing: "免费/付费",
    pricingDetail: "免费版可用，付费版月费9美元起",
    pros: ["声音自然", "选择多", "价格实惠", "商用可用"],
    cons: ["免费版有水印", "情感表达有限", "需网络"],
    website: "https://www.voicemaker.in",
    affiliateUrl: "",
    logo: "https://www.voicemaker.in/favicon.ico",
    tags: ["AI音频", "语音合成", "TTS", "文字转语音"],
    rating: 4.5,
    visitCount: 24000,
    createdAt: "2024-05-10"
  },
  {
    id: "otter",
    name: "Otter",
    nameEn: "Otter",
    category: "audio",
    subcategory: "语音转文字",
    description: "AI会议记录和语音转文字工具，实时转录会议内容",
    longDescription: `Otter是一款AI驱动的会议记录工具，能够实时转录语音、识别说话人、自动生成会议摘要，提高会议效率。是远程办公和在线会议的必备工具。

**主要特点：**
- 实时转录
- 说话人识别
- 自动摘要
- 关键词高亮
- 协作标注

**适用场景：**
- 会议记录
- 访谈整理
- 课堂笔记
- 电话记录
- 远程会议`,
    features: ["实时转录", "说话人识别", "自动摘要", "关键词", "协作"],
    pricing: "免费/付费",
    pricingDetail: "免费版每月300分钟，Pro版月费20美元",
    pros: ["转录准确", "实时同步", "自动摘要", "协作方便"],
    cons: ["免费版时间少", "依赖网络", "英文效果更好"],
    website: "https://otter.ai",
    affiliateUrl: "",
    logo: "https://otter.ai/favicon.ico",
    tags: ["AI音频", "转录", "会议", "Otter", "办公"],
    rating: 4.6,
    visitCount: 32000,
    createdAt: "2024-05-15"
  },
  {
    id: "photomath",
    name: "Photomath",
    nameEn: "Photomath",
    category: "research",
    subcategory: "AI学习",
    description: "AI数学解题助手，拍照识别数学题并给出详细解题步骤",
    longDescription: `Photomath是一款AI数学学习应用，通过拍照识别数学题并给出详细解题步骤，帮助学生理解数学概念。覆盖小学到高中数学，是学习数学的好帮手。

**主要特点：**
- 拍照识别题目
- 分步解题
- 多种解法
- 动画演示
- 学习记录

**适用场景：**
- 数学作业
- 考试准备
- 自学辅导
- 家长检查
- 课堂教学`,
    features: ["拍照识别", "分步解题", "多解法", "动画演示", "学习记录"],
    pricing: "免费/付费",
    pricingDetail: "基础版免费，Plus版月费9.99美元",
    pros: ["解题准确", "讲解详细", "学习友好", "覆盖广"],
    cons: ["高等数学有限", "付费功能多", "需拍照"],
    website: "https://photomath.com",
    affiliateUrl: "",
    logo: "https://photomath.com/favicon.ico",
    tags: ["AI教育", "数学", "学习", "Photomath", "学生"],
    rating: 4.8,
    visitCount: 45000,
    createdAt: "2024-05-20"
  },
  {
    id: "grammarly",
    name: "Grammarly",
    nameEn: "Grammarly",
    category: "writing",
    subcategory: "语法检查",
    description: "AI英语语法检查和写作辅助工具，提升英文写作质量",
    longDescription: `Grammarly是一款AI驱动的英语写作辅助工具，提供语法检查、拼写纠正、标点修正、风格建议等功能，帮助用户提升英文写作质量。是留学生和商务人士的必备工具。

**主要特点：**
- 实时语法检查
- 风格建议
- 语气调整
- 抄袭检测
- 多平台集成

**适用场景：**
- 英语写作
- 论文润色
- 邮件检查
- 商务沟通
- 留学申请`,
    features: ["语法检查", "拼写纠正", "风格建议", "语气调整", "抄袭检测"],
    pricing: "免费/付费",
    pricingDetail: "免费版基础功能，Premium版月费12美元",
    pros: ["检查准确", "功能全面", "集成广泛", "学习功能"],
    cons: ["高级功能付费", "主要针对英文", "需联网"],
    website: "https://www.grammarly.com",
    affiliateUrl: "https://www.grammarly.com/affiliate?affiliate=AFFILIATE",
    logo: "https://www.grammarly.com/favicon.ico",
    tags: ["AI写作", "语法检查", "英语", "Grammarly", "写作辅助"],
    rating: 4.7,
    visitCount: 68000,
    createdAt: "2024-05-25"
  },
  {
    id: "leonardo",
    name: "Leonardo.ai",
    nameEn: "Leonardo.ai",
    category: "image",
    subcategory: "AI绘画",
    description: "AI游戏美术生成平台，专注游戏资产和角色设计",
    longDescription: `Leonardo.ai是一款专注于游戏和创意领域的AI图像生成平台，提供独特的模型和风格，特别适合生成游戏资产、角色设计、场景概念等。

**主要特点：**
- 游戏美术模型
- 角色设计
- 风格定制
- 社区分享
- 商用授权

**适用场景：**
- 游戏美术
- 角色设计
- 场景概念
- 素材生成
- 创意设计`,
    features: ["游戏美术", "角色设计", "风格定制", "社区", "商用授权"],
    pricing: "免费/付费",
    pricingDetail: "免费版每日150 tokens，付费版月费12美元起",
    pros: ["游戏美术专业", "质量高", "社区活跃", "可商用"],
    cons: ["免费版有限", "界面复杂", "生成较慢"],
    website: "https://leonardo.ai",
    affiliateUrl: "",
    logo: "https://leonardo.ai/favicon.ico",
    tags: ["AI绘画", "游戏", "Leonardo", "角色设计", "游戏美术"],
    rating: 4.6,
    visitCount: 39000,
    createdAt: "2024-06-01"
  },
  {
    id: "adesk",
    name: "Adskier",
    nameEn: "Adskier",
    category: "research",
    subcategory: "AI广告",
    description: "AI广告文案和素材生成工具，提升广告制作效率",
    longDescription: `Adskier是一款专注于广告创意的AI工具，帮助营销人员快速生成广告文案、图片和视频素材，提升广告制作效率。

**主要特点：**
- 广告文案生成
- 图片素材生成
- 多平台适配
- A/B测试建议
- 数据分析

**适用场景：**
- 数字广告
- 社交媒体广告
- 搜索广告
- 电商广告
- 品牌营销`,
    features: ["文案生成", "素材生成", "多平台", "A/B测试", "数据分析"],
    pricing: "免费/付费",
    pricingDetail: "免费试用，付费版月费29美元起",
    pros: ["广告优化", "多平台", "效率提升", "数据分析"],
    cons: ["需付费", "学习成本", "效果依赖输入"],
    website: "https://adskier.io",
    affiliateUrl: "",
    logo: "https://adskier.io/favicon.ico",
    tags: ["AI广告", "营销", "素材生成", "广告文案"],
    rating: 4.3,
    visitCount: 18000,
    createdAt: "2024-06-05"
  },
  {
    id: "tabnine",
    name: "Tabnine",
    nameEn: "Tabnine",
    category: "coding",
    subcategory: "AI编程",
    description: "AI代码补全工具，支持私有化部署，保护代码隐私",
    longDescription: `Tabnine是一款AI代码补全工具，支持多种编程语言和IDE，提供个人版和团队版，团队版支持私有化部署保护代码隐私。

**主要特点：**
- 多语言支持
- 多IDE集成
- 私有化部署
- 代码隐私保护
- 团队协作

**适用场景：**
- 日常编码
- 企业开发
- 代码隐私
- 团队协作
- 特定领域模型`,
    features: ["代码补全", "私有部署", "多语言", "团队版", "隐私保护"],
    pricing: "免费/付费",
    pricingDetail: "免费版基础功能，Pro版月费12美元",
    pros: ["代码隐私好", "私有部署", "老牌稳定", "多语言"],
    cons: ["功能相对基础", "AI能力不如Copilot", "免费版限制"],
    website: "https://www.tabnine.com",
    affiliateUrl: "",
    logo: "https://www.tabnine.com/favicon.ico",
    tags: ["AI编程", "代码补全", "Tabnine", "企业开发"],
    rating: 4.4,
    visitCount: 25000,
    createdAt: "2024-06-10"
  },
  {
    id: "codeium",
    name: "Codeium",
    nameEn: "Codeium",
    category: "coding",
    subcategory: "AI编程",
    description: "免费的AI代码补全工具，支持多种语言和IDE",
    longDescription: `Codeium是一款免费的AI代码补全工具，目标是让每个开发者都能使用AI编程，提供个人版免费使用，支持多种语言和IDE。

**主要特点：**
- 完全免费
- 多语言支持
- 多IDE集成
- 快速响应
- 持续更新

**适用场景：**
- 个人开发
- 学习编程
- 小团队
- 快速原型
- 开源项目`,
    features: ["免费", "代码补全", "多语言", "多IDE", "快速"],
    pricing: "免费",
    pricingDetail: "个人使用完全免费",
    pros: ["完全免费", "功能全面", "安装简单", "无限制"],
    cons: ["企业版需付费", "代码质量一般", "社区不如Copilot"],
    website: "https://codeium.com",
    affiliateUrl: "",
    logo: "https://codeium.com/favicon.ico",
    tags: ["AI编程", "免费", "代码补全", "Codeium", "开发者"],
    rating: 4.5,
    visitCount: 38000,
    createdAt: "2024-06-15"
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    nameEn: "DeepSeek",
    category: "chatbot",
    subcategory: "大语言模型",
    description: "深度求索开发的开源大语言模型，代码和数学能力强",
    longDescription: `DeepSeek是由深度求索公司开发的开源大语言模型，拥有强大的推理能力和代码生成能力，其DeepSeek-Coder和DeepSeekMath在各自领域表现优异。

**主要特点：**
- 开源可商用
- 推理能力强
- 代码能力出色
- 数学能力强
- API价格低

**适用场景：**
- 代码开发
- 数学推理
- 学术研究
- 企业应用
- 成本敏感项目`,
    features: ["开源", "代码强", "推理强", "数学强", "低价API"],
    pricing: "免费/付费",
    pricingDetail: "开源免费，API按量付费价格低廉",
    pros: ["开源免费", "代码能力强", "API便宜", "持续开源"],
    cons: ["生态较新", "中文略弱", "长文本有限"],
    website: "https://www.deepseek.com",
    affiliateUrl: "",
    logo: "https://www.deepseek.com/favicon.ico",
    tags: ["AI对话", "开源", "代码", "DeepSeek", "大语言模型"],
    rating: 4.7,
    visitCount: 55000,
    createdAt: "2024-06-20"
  }
];

// 更新分类计数
categories.forEach(cat => {
  cat.count = aiTools.filter(tool => tool.category === cat.id).length;
});

export function getToolById(id: string): AITool | undefined {
  return aiTools.find(tool => tool.id === id);
}

export function getToolsByCategory(categoryId: string): AITool[] {
  return aiTools.filter(tool => tool.category === categoryId);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(cat => cat.id === id);
}

export function searchTools(query: string): AITool[] {
  const lowerQuery = query.toLowerCase();
  return aiTools.filter(tool => 
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
