// src/data.ts

export interface LocalizedString {
  zh: string;
  en: string;
}

export interface Project {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  note?: LocalizedString;
  time: string;
  intro?: LocalizedString;
  description: LocalizedString;
  tags: string[];
  image: string;
  heroImage?: string;
  sections?: {
    id: string;
    title: LocalizedString;
    content: LocalizedString;
    images: string[];
  }[];
  closing?: LocalizedString;
  details?: {
    zh: string[];
    en: string[];
  };
}

export interface Work {
  id: string;
  title: LocalizedString;
  subtitle?: LocalizedString;
  note?: LocalizedString;
  category: LocalizedString;
  time: string;
  location: LocalizedString;
  role: LocalizedString;
  image: string;
  intro: LocalizedString;
  description?: LocalizedString;
  gallery?: string[];
  layoutType?: 'gallery' | 'waterfall' | 'grid';
  waterfallImages?: string[];
  verticalImages?: string[];
  imageGroups?: {
    title?: LocalizedString;
    images: string[];
  }[];
}

export const translations = {
  zh: {
    nav: { 
      about: "about", 
      internship: "实习", 
      projects: "项目", 
      works: "作品", 
      contact: "关于"
    },
    workDetail: {
      projectInfo: "项目信息",
      projectTitle: "项目名称",
      projectType: "项目类型",
      time: "时间",
      location: "地点",
      role: "角色",
      intro: "项目简介",
      background: "项目背景",
      concept: "设计思路",
      outcome: "设计成果",
      back: "返回作品集",
      next: "下一个作品"
    },
    about: {
      hi: "HI, :]",
      hereIs: "here is",
      nameZh: "钱程",
      nameEn: "QIANCHENG",
      interests: "= Drawing + Dancing + Dreaming + ∞",
      roles: "= Architect X Designer X Product Manager X Material Player",
      ins: "qc03111826",
      mail: "2031172488@qq.com",
      mail2: "lierrecheng@gmail.com",
      enquiry: "(please email through for any work enquires Thanks :)",
      collab: "I'd LOVE to do interesting collab & architecture & product design.",
      moreRocks: "more rocks: 👁️",
      before2019: "≡ before 2019 : 📍",
      footer: "👁️ About 👁️",
      intro: "钱程，一名具备“设计思维+项目管理+数据分析”复合背景的产品设计者。目前在中央民族大学攻读环境设计硕士学位（保研），本科期间以专业前10%的优异成绩毕业。我热衷于从复杂的生活场景中挖掘核心痛点，并利用扎实的设计审美与艺术背景，将创意转化为可落地的产品方案。在实习与项目实践中，我积累了丰富的跨部门协同经验，擅长结合数据驱动产品迭代，灵活适配多元化的场景需求。无论是乡村振兴的实地调研，还是艺术教育平台的增长运营，我都致力于通过设计创造真实的社会影响力。",
      summary: "具备“设计思维+项目管理+数据分析”的复合产品能力。擅长从复杂场景中挖掘核心痛点，具备强跨部门协同能力与落地执行力。\n扎实的设计审美与艺术背景，使其能快速理解业务逻辑，结合数据驱动产品迭代，灵活适配多元场景需求。",
      eduTitle: "教育背景",
      honorsTitle: "荣誉成果",
      skillsTitle: "技能特长"
    },
    internship: { title: "实习经历", label: "Professional" },
    projects: { title: "项目经历", label: "Projects" },
    contact: { title: "联系我", label: "Connect", desc: "My life is my work" },
    footer: "精心设计 / 追求影响力"
  },
  en: {
    nav: { 
      about: "about", 
      internship: "internship", 
      projects: "projects", 
      works: "works", 
      contact: "contact"
    },
    workDetail: {
      projectInfo: "Project Info",
      projectTitle: "Project Title",
      projectType: "Project Type",
      time: "Time",
      location: "Location",
      role: "Role",
      intro: "Introduction",
      background: "Background",
      concept: "Concept",
      outcome: "Outcome",
      back: "Back to Portfolio",
      next: "Next Project"
    },
    about: {
      hi: "HI, :]",
      hereIs: "here is",
      nameZh: "钱程",
      nameEn: "QIANCHENG",
      interests: "= Drawing + Dancing + Dreaming + ∞",
      roles: "= Architect X Designer X Product Manager X Material Player",
      ins: "qc03111826",
      mail: "2031172488@qq.com",
      mail2: "lierrecheng@gmail.com",
      enquiry: "(please email through for any work enquires Thanks :)",
      collab: "I'd LOVE to do interesting collab & architecture & product design.",
      moreRocks: "more rocks: 👁️",
      before2019: "≡ before 2019 : 📍",
      footer: "👁️ About 👁️",
      intro: "Qian Cheng is a product designer with a composite background in 'Design Thinking + Project Management + Data Analysis'. Currently pursuing a Master's degree in Environmental Design at Minzu University of China (Recommended), she graduated with top 10% honors during her undergraduate studies. Passionate about excavating core pain points from complex scenarios, she leverages a solid aesthetic and artistic background to transform creative ideas into viable product solutions. Through internships and project practices, she has accumulated extensive cross-departmental collaboration experience, excelling at data-driven iteration to flexibly adapt to diverse scenario needs. Whether in rural revitalization research or art education platform operations, she is committed to creating real social impact through design.",
      summary: "Possesses a composite product capability of 'Design Thinking + Project Management + Data Analysis'. Excels at excavating core pain points from complex scenarios, with strong cross-departmental collaboration and execution skills. A solid aesthetic and artistic background enables quick understanding of business logic, combined with data-driven product iteration to flexibly adapt to diverse scenario needs.",
      eduTitle: "Education",
      honorsTitle: "Honors",
      skillsTitle: "Skills"
    },
    internship: { title: "Internship", label: "Professional" },
    projects: { title: "Projects", label: "Projects" },
    contact: { title: "Contact", label: "Connect", desc: "Let's talk about your next creative project" },
    footer: "Designed with precision / Built for impact"
  }
};

export const EDUCATION = [
  {
    school: { zh: "香港大学 (HKU)", en: "The University of Hong Kong (HKU)" },
    degree: { zh: "创新技术与设计 (已录取) - 理学硕士", en: "MSc in Innovative Design and Technology (Admitted)" },
    time: "2025.09 - 2028.06",
    details: { zh: "", en: "" }
  },
  {
    school: { zh: "中央民族大学 (MUC)", en: "Minzu University of China (MUC)" },
    degree: { zh: "环境设计 - 硕士 (保研)", en: "MA in Environmental Design (Recommended)" },
    time: "2025.09 - 至今",
    details: { zh: "GPA: 4.08/5.00 (前10%)。连续三年获校级奖学金及优秀毕业设计。", en: "GPA: 4.08/5.00 (Top 10%). School scholarships for 3 consecutive years and Excellent Graduation Design." }
  },
  {
    school: { zh: "中央民族大学 (MUC)", en: "Minzu University of China (MUC)" },
    degree: { zh: "环境设计 - 本科", en: "BA in Environmental Design" },
    time: "2021.09 - 2025.06",
    details: { zh: "", en: "" }
  }
];

export const HONORS = [
  { zh: "中国工艺美术学会会员", en: "Member of Chinese Arts and Crafts Association" },
  { zh: "安徽省美术家协会会员", en: "Member of Anhui Fine Arts Association" }
];

export const SKILLS = [
  { category: { zh: "语言沟通", en: "Communication" }, items: ["IELTS 7.0", { zh: "普通话二级甲等", en: "Mandarin Level 2-A" }] },
  { category: { zh: "产品设计", en: "Product Design" }, items: ["Xmind", "Figma", "PS", "AI", "Rhino", "Grasshopper", "Mj", "SD"] },
  { category: { zh: "数据分析", en: "Data Analysis" }, items: ["EXCEL", "SQL", "GIS"] }
];

export const INTERNSHIP = {
  company: { zh: "中国城市规划设计研究院 (CAUPD)", en: "China Academy of Urban Planning & Design (CAUPD)" },
  role: { zh: "设计项目管理实习生", en: "Design Project Management Intern" },
  time: "2024.07 - 2024.09",
  details: {
    zh: [
      "需求洞察：在坝河河口蓄洪区建设工程中，负责胡园station及亮马河总体现划设计与关键模块（如景观护栏）的详细设计。",
      "AI辅助设计：围绕护栏设计，以人体工程学为依据，融合意向表达概念，优化护栏高度与扶手弧度。",
      "方案迭代：主导亮马河全流程设计，协调多方资源解决技术与落地冲突，确保产品核心体验符合预期。",
      "协同落地：基于用户反馈与行为数据，提炼未被满足的需求点，思考景观设施的商品化策略。"
    ],
    en: [
      "Requirement Insight: Responsible for the detailed design of Huyuan Station and Liangma River master planning in the Bahe River flood storage area project.",
      "AI-Assisted Design: Optimized guardrail height and handrail curvature based on ergonomics and conceptual intent.",
      "Iteration: Led the full-process design of Liangma River, coordinating resources to resolve technical conflicts and ensure core experience.",
      "Collaboration: Refined unmet needs based on user feedback and behavioral data, exploring commercialization strategies for landscape facilities."
    ]
  }
};

// ---------------------- PROJECTS ----------------------
export const PROJECTS: Project[] = [
  {
    id: "tsinghua",
    title: { zh: "清华大学乡村振兴工作站 - 赞皇研学基地", en: "Tsinghua University Rural Revitalization Station - Zanhuang Base" },
    subtitle: { zh: "核心成员", en: "Core Member" },
    note: { zh: "河北省乡村振兴示范基地", en: "Hebei Rural Revitalization Demonstration Base" },
    time: "2024.09 - 2024.12",
    intro: { zh: "面向山区公共空间闲置、既有植被与建设冲突等问题，带领团队勘察6处街区。", en: "Led a team to survey 6 blocks addressing issues of idle public spaces and conflicts between vegetation and construction in mountainous areas." },
    description: { 
      zh: "用户调研：面对山区公共空间狭窄、既有植被与建设冲突等问题，带领团队勘察6处街区，通过投放问卷、深度访谈居民、政府、校企三类群体共52人，明确“动线优化、寓教于学”需求。\n\n产品定位：提出“乡土学社”定位，将空间设计与教育研学结合，打造文化展示与场景体验于一体的实体产品。\n\n项目管理与成果：与施工方进行了10余次的设计对接，持续优化模型与图纸，确保设计意图清晰传递并落地实现。建立了校地共管的长效运营机制，保障产品可持续使用。项目建成后成为当地首个“乡土研学”主题公共空间，被列为区域乡村全面振兴的示范案例。", 
      en: "User Research: Led a team to survey 6 blocks, conducting questionnaires and in-depth interviews with 52 people from residents, government, and school-enterprise groups to clarify the needs for 'route optimization and learning through education'.\n\nProduct Positioning: Proposed the 'Rural Academy' positioning, combining spatial design with educational research to create a physical product integrating cultural display and scene experience.\n\nProject Management: Conducted 10+ design meetings with the construction side, optimizing models and drawings to ensure clear design intent. Established a long-term operation mechanism to ensure sustainable use. Became the first 'Rural Study' theme public space in the area." 
    },
    tags: ["Rural Revitalization", "Project Management", "Spatial Design"],
    image: "./images/project-cover/1.jpg",
    heroImage: "./images/project-cover/1.jpg",
    sections: [
      {
        id: "topic",
        title: { zh: "01 / 缘起 · 乡村的呼唤", en: "01 / Origin · Call of the Countryside" },
        content: { zh: "赞皇研学基地项目旨在通过空间改造，激发乡村活力。我们深入调研了当地的建筑特色与居民生活习惯。", en: "The Zanhuang research base project aims to stimulate rural vitality through spatial transformation. We deeply researched local architectural features and residents' habits." },
        images: ["./images/project-cover/1.jpg"]
      }
    ],
    closing: { zh: "设计不仅是美化，更是对土地的尊重与赋能。", en: "Design is not just beautification, but respect and empowerment for the land." }
  },
  {
    id: "relief",
    title: { zh: "《向西而歌》大型浮雕", en: "Song to the West - Large-scale Relief Sculpture" },
    subtitle: { zh: "核心成员", en: "Core Member" },
    time: "2023.07 - 2023.10",
    intro: { zh: "重庆医科大学大型浮雕公共艺术项目。", en: "Large-scale relief public art project for Chongqing Medical University." },
    description: { 
      zh: "前期研究：围绕重庆医科大学西迁历史主题，系统梳理项目背景、视觉叙事线索与竞品案例，实地调研材料工艺、供应商能力及落地条件，协助完成标书汇编与方案支撑，为项目中标提供关键支持。\n\nAIGC设计：协助线稿绘制，并使用Midjourney生成30+幅构成意向图，快速发散大型浮雕的视觉风格、构图层次与表达方向，将概念提案周期由2周缩短至5天。提出5项创意方案，其中3项被采纳进入深化阶段。\n\n协同落地：针对工艺复杂、运输成本高等问题，学习铸造工艺与工程造价知识，参与制定模块化实施方案。同时与校方、实施单位等多方持续沟通，平衡设计表达、制作可行性与预算约束，保障项目顺利推进与最终落地。", 
      en: "Preliminary Research: Systematically reviewed project background and visual narrative clues for the Chongqing Medical University westward migration theme. Conducted field research on material technology and supplier capabilities, providing key support for the winning bid.\n\nAIGC Design: Assisted in line drawing and used Midjourney to generate 30+ composition intention maps, shortening the concept proposal cycle from 2 weeks to 5 days. 3 out of 5 creative schemes were adopted.\n\nCollaboration: Learned casting processes and engineering cost knowledge to formulate modular implementation plans. Communicated with multiple parties to balance design expression, feasibility, and budget constraints." 
    },
    tags: ["Public Art", "AI-Assisted", "Execution"],
    image: "./images/project-cover/2.jpg",
    heroImage: "./images/project-cover/2.jpg",
    sections: [
      {
        id: "topic",
        title: { zh: "01 / 构思 · 历史的厚度", en: "01 / Conception · Thickness of History" },
        content: { zh: "《向西而歌》浮雕项目通过艺术化的手法展现了西迁精神。AI辅助设计大大提升了创作效率。", en: "The 'Song to the West' relief project showcases the spirit of westward migration through artistic means. AI-assisted design significantly improved creative efficiency." },
        images: ["./images/project-cover/2.jpg"]
      }
    ],
    closing: { zh: "艺术是连接过去与未来的桥梁。", en: "Art is a bridge connecting the past and the future." }
  },
  {
    id: "yipai",
    title: { zh: "壹派", en: "Yi Pai" },
    subtitle: { zh: "核心成员", en: "Core Member" },
    note: { zh: "互联网＋省部级项目", en: "Provincial-level Internet+ Project" },
    time: "2023.10 - 2024.01",
    intro: { zh: "一个专注于艺术教育与创意增长的综合性平台项目。", en: "A comprehensive platform project focusing on art education and creative growth." },
    description: { 
      zh: "平台运营：围绕艺术教育兼职供需场景，负责平台增长与运营策略制定，面向教师、机构等双边用户梳理核心需求，结合平台发展阶段明确增长重点，支撑产品由早期验证逐步走向规模化运营。\n\n增长优化：制定并执行内容与社群增长策略，输出岗位信息与主题推文，单篇推送最高阅读量达1000+。管理8个社群、覆盖3600+人。基于社群反馈与使用数据，推动小程序教师分级匹配流程优化，提升供需匹配效率与用户体验。\n\n视觉包装：主导完成路演PPT、宣传物料等视觉内容设计，参与教师签约宣传及抖音合作推广，以视觉化方式清晰传递平台商业模式、服务价值与增长逻辑。推动平台教师规模增至400+，供需对接成功率达90%+。", 
      en: "Platform Operation: Responsible for platform growth and operation strategy for art education part-time scenarios. Identified core needs for both teachers and institutions to support the transition from early validation to large-scale operation.\n\nGrowth Optimization: Executed content and community growth strategies, with single posts reaching 1000+ views. Managed 8 communities covering 3600+ people. Optimized the teacher matching process in the mini-program based on feedback.\n\nVisual Packaging: Led the design of roadshow PPTs and promotional materials. Clearly communicated the business model and service value through visualization. Increased teacher scale to 400+ with a 90%+ matching success rate." 
    },
    tags: ["Product Design", "Growth Strategy", "Art Education"],
    image: "./images/project-cover/3.jpg",
    heroImage: "./images/project-cover/3.jpg",
    sections: [
      {
        id: "concept",
        title: { zh: "01 / 核心理念", en: "01 / Core Concept" },
        content: { zh: "壹派致力于打破艺术教育的边界，通过数字化手段连接创作者与学习者。", en: "Yi Pai is committed to breaking the boundaries of art education, connecting creators and learners through digital means." },
        images: ["./images/project-cover/3.jpg"]
      }
    ],
    closing: { zh: "让艺术触手可及。", en: "Making art accessible to everyone." }
  }
];

// ---------------------- WORKS ----------------------
export const WORKS: Work[] = [
  {
    id: "snowmountain",
    title: { zh: "雪山异托邦", en: "Snow Mountain Heterotopia" },
    category: { zh: "概念设计", en: "Conceptual Design" },
    time: "2024",
    location: { zh: "雪山环境", en: "Snow Mountain Environment" },
    role: { zh: "主创设计师", en: "Lead Designer" },
    image: "./images/portfolio-cover/cover1.jpg",
    intro: { zh: "将“异托邦”概念引入雪山环境下的景观设计领域。", en: "Introducing the concept of 'Heterotopia' into snow mountain landscape design." },
    gallery: [
      "./images/portfolio/snowmountain/1.jpg",
      "./images/portfolio/snowmountain/2.jpg",
      "./images/portfolio/snowmountain/3.jpg"
    ]
  },
  {
    id: "relief",
    title: { zh: "流浪动物也是地球上的珍贵生命", en: "Stray animals are also precious beings on the earth" },
    category: { zh: "公益设计", en: "Public Welfare" },
    time: "2024",
    location: { zh: "城市空间", en: "Urban Space" },
    role: { zh: "景观规划设计", en: "Independent Designer" },
    image: "./images/portfolio-cover/cover2.jpg",
    intro: { zh: "本项目关注城市中流浪动物的生活空间。", en: "This project focuses on urban stray animals' living spaces." },
    gallery: [
      "./images/portfolio/dog/1.jpg",
      "./images/portfolio/dog/2.jpg",
      "./images/portfolio/dog/3.jpg",
      "./images/portfolio/dog/4.jpg",
      "./images/portfolio/dog/5.jpg"
    ]
  },
  {
    id: "tower",
    title: { zh: "养耕共生塔", en: "Tower Space" },
    category: { zh: "概念设计", en: "Conceptual Design" },
    time: "2024",
    location: { zh: "城市环境", en: "Urban Environment" },
    role: { zh: "设计师", en: "Designer" },
    image: "./images/portfolio-cover/cover3.jpg",
    intro: { zh: "探索高塔空间的景观设计理念。", en: "Exploring design concepts for tower spaces." },
    gallery: [
      "./images/portfolio/tower/1.jpg",
      "./images/portfolio/tower/2.jpg",
      "./images/portfolio/tower/3.jpg"
    ]
  },
  {
    id: "garden",
    title: { zh: "共生衍化", en: "AQUAPONICS TOWER" },
    category: { zh: "概念设计", en: "Conceptual Design" },
    time: "2024",
    location: { zh: "城市环境", en: "Urban Environment" },
    role: { zh: "设计师", en: "Designer" },
    image: "./images/portfolio-cover/cover4.jpg",
    intro: { zh: "探索城市园艺空间设计的创新方式。", en: "Exploring innovative approaches to urban garden design." },
    gallery: [
      "./images/portfolio/garden/1.jpg",
      "./images/portfolio/garden/2.jpg",
      "./images/portfolio/garden/3.jpg"
    ]
  },
  {
    id: "yipai",
    title: { zh: "阈限空间", en: "Workplace" },
    category: { zh: "概念设计", en: "Conceptual Design" },
    time: "2024",
    location: { zh: "城市环境", en: "Urban Environment" },
    role: { zh: "设计师", en: "Designer" },
    image: "./images/portfolio-cover/cover5.jpg",
    intro: { zh: "探索工作空间的设计创新。", en: "Exploring innovative design for workplace spaces." },
    gallery: [
      "./images/portfolio/workplace/1.jpg",
      "./images/portfolio/workplace/2.jpg",
      "./images/portfolio/workplace/3.jpg",
      "./images/portfolio/workplace/4.jpg",
      "./images/portfolio/workplace/5.jpg"
    ]
  },
{
  id: "other",
  title: { zh: "其他作品", en: "Other Projects" },
  category: { zh: "概念设计", en: "Conceptual Design" },
  time: "2024",
  location: { zh: "城市环境", en: "Urban Environment" },
  role: { zh: "设计师", en: "Designer" },
  image: "./images/portfolio-cover/cover6.jpg",
  intro: { zh: "收录其他艺术与设计相关项目。", en: "Collection of other art and design related projects." },

  layoutType: "grid",

  imageGroups: [
    {
      title: { zh: "书籍设计", en: "Book Design" },
      images: [
        "./images/portfolio/other/book/1.jpg",
        "./images/portfolio/other/book/2.jpg",
        "./images/portfolio/other/book/3.jpg",
        "./images/portfolio/other/book/4.jpg",
        "./images/portfolio/other/book/5.jpg",
        "./images/portfolio/other/book/6.jpg",
        "./images/portfolio/other/book/7.jpg",
        "./images/portfolio/other/book/8.jpg",
        "./images/portfolio/other/book/9.jpg",
        "./images/portfolio/other/book/10.jpg",
        "./images/portfolio/other/book/11.jpg",
        "./images/portfolio/other/book/12.jpg"
      ]
    },
    {
      title: { zh: "雕塑", en: "Sculpture" },
      images: [
        "./images/portfolio/other/sculpture/1.jpg",
        "./images/portfolio/other/sculpture/2.jpg"
      ]
    }
  ]
}
];
