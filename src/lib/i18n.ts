/**
 * i18n translation reference for OpenDex.
 *
 * All UI chrome text in English, Chinese, and Japanese.
 * Actual translations are applied inline in templates using
 * data-lang-en / data-lang-zh / data-lang-ja attributes — this file serves
 * as the single source of truth for translators.
 */

export const translations = {
  nav: {
    works: { en: 'Works', zh: '作品', ja: '作品集' },
    travelogue: { en: 'Travelogue', zh: '游记', ja: '旅行記' },
  },
  theme: {
    day: { en: 'Day', zh: '日间', ja: '昼' },
    night: { en: 'Night', zh: '夜间', ja: '夜' },
  },
  lang: {
    en: 'EN',
    zh: '中文',
    ja: '日本語',
  },
  hero: {
    eyebrow: {
      en: 'Dexterous Manipulation / Embodied AI / Robotics',
      zh: '灵巧操作 / 具身智能 / 机器人',
      ja: '巧緻操作 / 身体性AI / ロボティクス',
    },
    title: {
      en: 'I teach robot hands',
      zh: '我教机器人的手',
      ja: 'ロボットの手に教える',
    },
    titleHighlight: {
      en: 'to move like human ones.',
      zh: '像人手一样运动。',
      ja: '人の手のように動くことを。',
    },
    subtitle: {
      en: 'Between optimization and intuition, I develop algorithms that give multi-fingered robotic hands the coordination, dexterity, and safety to manipulate the physical world.',
      zh: '在优化与直觉之间，我开发赋予多指机械手协调性、灵巧性和安全性的算法，使其能操控物理世界。',
      ja: '最適化と直感の狭間で、多指ロボットハンドに協調性・巧緻性・安全性を与え、物理世界を操るアルゴリズムを開発しています。',
    },
    poem: {
      en: '"Dexterity is not strength — it is the quiet negotiation between fingers, forces, and intent."',
      zh: '"灵巧不是力量——而是指尖、力与意图之间的无声协商。"',
      ja: '「巧緻さとは力ではない——指先と力と意図の間の静かな交渉である。」',
    },
    artCredit: { en: 'Art by 6VCR', zh: '画作：6VCR', ja: 'アート：6VCR' },
    artDesc: {
      en: 'Pixel landscapes by Eugenia Goncharova — signals at the edge of worlds.',
      zh: 'Eugenia Goncharova 的像素风景——世界边缘的信号。',
      ja: 'Eugenia Goncharovaのピクセル風景——世界の境界からの信号。',
    },
  },
  manifesto: {
    heading: { en: 'Research Notes', zh: '研究笔记', ja: '研究ノート' },
    items: [
      {
        title: { en: 'Dexterity begins at the fingertips.', zh: '灵巧始于指尖。', ja: '巧緻さは指先から始まる。' },
        body: {
          en: "The real challenge isn't reaching — it's the subtle coordination of finger joints that makes manipulation human-like.",
          zh: '真正的挑战不是伸手触及——而是指关节间微妙的协调，使操作如人手般自然。',
          ja: '本当の課題は手を伸ばすことではなく、指関節の繊細な協調が操作を人間らしくすることです。',
        },
      },
      {
        title: { en: 'Plan high, act low.', zh: '高层规划，底层执行。', ja: '高く計画し、低く実行する。' },
        body: {
          en: 'Let vision-language models reason about which fingers to use, then let reinforcement learning figure out the motion.',
          zh: '让视觉语言模型推理该用哪些手指，再让强化学习找出运动轨迹。',
          ja: 'ビジョン言語モデルにどの指を使うか推論させ、強化学習に動作を見つけさせる。',
        },
      },
      {
        title: { en: 'Two hands are more than twice one.', zh: '双手远胜两只单手之和。', ja: '両手は片手の二倍以上。' },
        body: {
          en: 'Bimanual grasping unlocks object classes no single hand can hold. The geometry of cooperation is its own discipline.',
          zh: '双手抓取解锁了单手无法握持的物体类别。协作的几何学自成一门学科。',
          ja: '双腕把持は片手では持てない物体を扱えるようにする。協調の幾何学はそれ自体が一つの学問です。',
        },
      },
      {
        title: { en: 'Safety makes you faster.', zh: '安全让你更快。', ja: '安全性が速度を生む。' },
        body: {
          en: "A well-designed safety shield doesn't just prevent violations — it prunes bad trajectories and accelerates convergence.",
          zh: '精心设计的安全约束不仅防止违规——它剪除不良轨迹，加速收敛。',
          ja: '適切に設計された安全制約は違反を防ぐだけでなく、不良軌道を刈り取り収束を加速させます。',
        },
      },
      {
        title: { en: 'Simulate everything, verify in reality.', zh: '仿真一切，现实验证。', ja: 'すべてをシミュレーションし、現実で検証する。' },
        body: {
          en: 'The gap between simulation and the real world is the true test of any manipulation algorithm.',
          zh: '仿真与真实世界之间的差距，是对任何操作算法的终极考验。',
          ja: 'シミュレーションと現実世界の間のギャップこそ、あらゆる操作アルゴリズムの真の試練です。',
        },
      },
    ],
  },
  selectedWorks: {
    heading: { en: 'Selected Works', zh: '精选作品', ja: '主要作品' },
    viewAll: { en: 'View all', zh: '查看全部', ja: 'すべて見る' },
  },
  works: {
    noteLabel: { en: 'Research Index', zh: '研究索引', ja: '研究索引' },
    noteDesc: {
      en: 'Papers on dexterous manipulation, bimanual grasping, and embodied safety.',
      zh: '关于灵巧操作、双手抓取和具身安全的论文。',
      ja: '巧緻操作、双腕把持、身体性安全に関する論文。',
    },
    title: { en: 'Works', zh: '作品', ja: '作品集' },
    subtitle: {
      en: 'Research papers on teaching robot hands to move like human ones.',
      zh: '教机器人手像人手一样运动的研究论文。',
      ja: 'ロボットの手を人の手のように動かす研究論文。',
    },
    backAll: { en: 'All Works', zh: '全部作品', ja: 'すべての作品' },
  },
  travelogue: {
    noteLabel: { en: 'Travel Journal', zh: '旅行日志', ja: '旅行日誌' },
    noteDesc: {
      en: 'Dispatches from conferences, field visits, and the road between labs.',
      zh: '来自学术会议、实地考察和实验室之间旅途的记录。',
      ja: '学会、フィールド訪問、研究室間の道中からの記録。',
    },
    title: { en: 'Travelogue', zh: '游记', ja: '旅行記' },
    subtitle: {
      en: 'Notes, dispatches, and reflections from the road.',
      zh: '旅途中的笔记、报道和思考。',
      ja: '旅路からのノート、報告、そして省察。',
    },
    end: { en: 'End', zh: '终', ja: '了' },
    back: { en: 'Travelogue', zh: '游记', ja: '旅行記' },
  },
  footer: {
    tagline: {
      en: 'Dexterous hands, embodied minds.',
      zh: '灵巧之手，具身之心。',
      ja: '巧みな手、身体化された知性。',
    },
  },
} as const;
