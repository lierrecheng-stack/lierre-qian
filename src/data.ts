```ts
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

export const PROJECTS: Project[] = [
  {
    id: "tsinghua",
    title: { zh: "清华大学乡村振兴工作站 - 赞皇研学基地", en: "Tsinghua University Rural Revitalization Station - Zanhuang Base" },
    subtitle: { zh: "核心成员", en: "Core Member" },
    note: { zh: "河北省乡村振兴示范基地", en: "Hebei Rural Revitalization Demonstration Base" },
    time: "2024.09 - 2024.12",
    description: { zh: "", en: "" },
    tags: [],
    image: "/images/project-cover/1.jpg",
    heroImage: "/images/project-cover/1.jpg",
    sections: [
      {
        id: "topic",
        title: { zh: "", en: "" },
        content: { zh: "", en: "" },
        images: ["/images/project-cover/1.jpg"]
      }
    ]
  }
];

export const WORKS: Work[] = [
  {
    id: "snowmountain",
    title: { zh: "雪山异托邦", en: "Snow Mountain Heterotopia" },
    category: { zh: "概念设计", en: "Conceptual Design" },
    time: "2024",
    location: { zh: "雪山环境", en: "Snow Mountain Environment" },
    role: { zh: "主创设计师", en: "Lead Designer" },
    image: "/images/portfolio-cover/cover1.jpg",
    intro: { zh: "", en: "" },
    gallery: [
      "/images/portfolio/snowmountain/1.jpg",
      "/images/portfolio/snowmountain/2.jpg",
      "/images/portfolio/snowmountain/3.jpg"
    ]
  }
];

{
  id: "relief",
  title: { zh: "流浪动物也是地球上的珍贵生命", en: "Stray animals are also precious beings on the earth" },
  category: { zh: "公益设计", en: "Public Welfare" },
  time: "2024",
  location: { zh: "城市空间", en: "Urban Space" },
  role: { zh: "景观规划设计", en: "Independent Designer" },
  image: "/images/portfolio-cover/cover2.jpg",
  intro: { zh: "本项目关注城市中流浪动物的生活空间。", en: "This project focuses on urban stray animals' living spaces." },
  gallery: [
    "/images/portfolio/dog/1.jpg",
    "/images/portfolio/dog/2.jpg",
    "/images/portfolio/dog/3.jpg",
    "/images/portfolio/dog/4.jpg",
    "/images/portfolio/dog/5.jpg"
  ]
},
{
  id: "tower",
  title: { zh: "养耕共生塔", en: "Tower Space" },
  category: { zh: "概念设计", en: "Conceptual Design" },
  time: "2024",
  location: { zh: "城市环境", en: "Urban Environment" },
  role: { zh: "设计师", en: "Designer" },
  image: "/images/portfolio-cover/cover3.jpg",
  intro: { zh: "探索高塔空间的景观设计理念。", en: "Exploring design concepts for tower spaces." },
  gallery: [
    "/images/portfolio/tower/1.jpg",
    "/images/portfolio/tower/2.jpg",
    "/images/portfolio/tower/3.jpg"
  ]
},
{
  id: "garden",
  title: { zh: "共生衍化", en: "AQUAPONICS TOWER" },
  category: { zh: "概念设计", en: "Conceptual Design" },
  time: "2024",
  location: { zh: "城市环境", en: "Urban Environment" },
  role: { zh: "设计师", en: "Designer" },
  image: "/images/portfolio-cover/cover4.jpg",
  intro: { zh: "探索城市园艺空间设计的创新方式。", en: "Exploring innovative approaches to urban garden design." },
  gallery: [
    "/images/portfolio/garden/1.jpg",
    "/images/portfolio/garden/2.jpg",
    "/images/portfolio/garden/3.jpg"
  ]
},
{
  id: "yipai",
  title: { zh: "阈限空间", en: "Workplace" },
  category: { zh: "概念设计", en: "Conceptual Design" },
  time: "2024",
  location: { zh: "城市环境", en: "Urban Environment" },
  role: { zh: "设计师", en: "Designer" },
  image: "/images/portfolio-cover/cover5.jpg",
  intro: { zh: "探索工作空间的设计创新。", en: "Exploring innovative design for workplace spaces." },
  gallery: [
    "/images/portfolio/workplace/1.jpg",
    "/images/portfolio/workplace/2.jpg",
    "/images/portfolio/workplace/3.jpg",
    "/images/portfolio/workplace/4.jpg",
    "/images/portfolio/workplace/5.jpg"
  ]
},
{
  id: "other",
  title: { zh: "其他作品", en: "Other Projects" },
  category: { zh: "概念设计", en: "Conceptual Design" },
  time: "2024",
  location: { zh: "城市环境", en: "Urban Environment" },
  role: { zh: "设计师", en: "Designer" },
  image: "/images/portfolio-cover/cover6.jpg",
  intro: { zh: "收录其他艺术与设计相关项目。", en: "Collection of other art and design related projects." },

  layoutType: "grid",

  imageGroups: [
    {
      title: { zh: "书籍设计", en: "Book Design" },
      images: [
        "/images/portfolio/other/book/1.jpg",
        "/images/portfolio/other/book/2.jpg",
        "/images/portfolio/other/book/3.jpg",
        "/images/portfolio/other/book/4.jpg",
        "/images/portfolio/other/book/5.jpg",
        "/images/portfolio/other/book/6.jpg",
        "/images/portfolio/other/book/7.jpg",
        "/images/portfolio/other/book/8.jpg",
        "/images/portfolio/other/book/9.jpg",
        "/images/portfolio/other/book/10.jpg",
        "/images/portfolio/other/book/11.jpg",
        "/images/portfolio/other/book/12.jpg"
      ]
    },
    {
      title: { zh: "雕塑", en: "Sculpture" },
      images: [
        "/images/portfolio/other/sculpture/1.jpg",
        "/images/portfolio/other/sculpture/2.jpg"
      ]
    }
  ]
}
];
