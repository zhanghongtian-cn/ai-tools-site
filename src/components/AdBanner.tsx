// AdSense广告位占位符组件
// TODO: 申请Google AdSense后，将占位符替换为真实的AdSense代码

interface AdBannerProps {
  type?: 'banner' | 'rectangle' | 'sidebar';
}

export function AdBanner({ type = 'banner' }: AdBannerProps) {
  const dimensions = {
    banner: { width: '728', height: '90', mobile: '320x100' },
    rectangle: { width: '300', height: '250', mobile: '300x250' },
    sidebar: { width: '300', height: '250', mobile: '300x250' },
  };

  const { width, height, mobile } = dimensions[type];

  return (
    <div className="ad-placeholder" data-ad-type={type}>
      <div className="text-center">
        <p className="text-slate-500">📢 广告位</p>
        <p className="text-xs text-slate-400 mt-1">
          尺寸: {width}x{height} (桌面端) / {mobile} (移动端)
        </p>
        <p className="text-xs text-slate-400 mt-1">
          Google AdSense / Affiliate广告位
        </p>
      </div>
    </div>
  );
}

interface AdInArticleProps {
  position?: 'top' | 'middle' | 'bottom';
}

export function AdInArticle({ position = 'middle' }: AdInArticleProps) {
  return (
    <div className="ad-placeholder my-6" data-ad-position={position}>
      <div className="text-center">
        <p className="text-slate-500">📢 文章内广告</p>
        <p className="text-xs text-slate-400 mt-1">
          728x90 横幅广告
        </p>
      </div>
    </div>
  );
}
