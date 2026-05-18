import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我们 - 派搜AI',
  description: '了解派搜AI的使命和愿景，我们致力于帮助用户发现最实用的AI工具，提升工作学习效率。',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">关于派搜AI</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            发现最实用的AI工具，让每个人都能享受AI带来的效率提升
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* 使命 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold mb-4">🎯 我们的使命</h2>
              <p className="text-slate-600 leading-relaxed">
                派搜AI致力于成为最专业的AI工具导航平台。在这个AI快速发展的时代，
                每天都有新的AI工具诞生，但用户很难快速找到适合自己的工具。
                我们的使命是帮助用户快速发现、了解和选择最适合自己的AI工具，
                让AI真正成为提升效率的助手。
              </p>
            </div>

            {/* 价值观 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold mb-6">💡 我们的价值观</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: '🔍', title: '真实评测', desc: '所有工具都经过实际使用和测试，提供客观真实的评价' },
                  { icon: '📚', title: '实用导向', desc: '聚焦工具的实际使用价值，而非华而不实的功能' },
                  { icon: '🆓', title: '免费优先', desc: '优先推荐免费或性价比高的工具，降低使用门槛' },
                  { icon: '🔄', title: '持续更新', desc: '紧跟AI发展，持续更新最新工具和使用教程' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 数据 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold mb-6">📊 平台数据</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: '30+', label: '收录工具', icon: '🛠️' },
                  { value: '8', label: '工具分类', icon: '📂' },
                  { value: '5+', label: '原创文章', icon: '📝' },
                  { value: '10K+', label: '月访问量', icon: '👥' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 团队 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-bold mb-4">👥 团队介绍</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                派搜AI由一群热爱AI技术的团队运营，成员来自互联网、科技、教育等领域。
                我们既有对AI技术的深入理解，也有对用户需求的敏锐洞察。
              </p>
              <p className="text-slate-600 leading-relaxed">
                团队持续关注全球AI发展动态，定期评测新工具，输出实用教程，
                帮助更多人在AI时代提升竞争力。
              </p>
            </div>

            {/* 联系 */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">📧 联系我们</h2>
              <p className="text-slate-600 mb-4">
                如果你有任何问题、建议或合作意向，欢迎通过以下方式联系我们：
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📧</span>
                  <span>contact@paisoai.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">🐦</span>
                  <span>@paisoai</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">
                  💡 <strong>提示：</strong>我们欢迎AI工具开发者联系我们，免费收录优质工具。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
