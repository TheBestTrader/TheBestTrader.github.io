/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 
};


const illustration = {
  animated: true 
};

const greeting = {
  username: "TheBestTrader",
  title: "Hi all, I'm 李嘉祐",
  subTitle: emoji(
    "擁有電機工程背景的開發者 。熱衷於將 AI 技術落地，擅長運用 Python 開發電腦視覺模型 (如瑕疵檢測)，以及利用 n8n 打造自動化與大語言模型 (LLM) 應用系統。"
  ),
  resumeLink: "", 
  displayGreeting: true 
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/TheBestTrader",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717"
  },
  
  {
    name: "Gmail",
    link: "mailto:ken7040532@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836"
  }
];
const skillsSection = {
  title: "What I do",
  subTitle: "熱衷於探索各種新技術，結合軟硬體與 AI 解決實際問題的開發者",
  skills: [
    emoji(" 運用 PyTorch 與深度學習模型進行電腦視覺與工業瑕疵檢測開發"),
    emoji(" 結合 n8n、Multi-Agent 與 RAG 技術建立高度自動化工作流與分析系統"),
    emoji(" 熟悉 Linux 環境配置、Docker 容器化部署與 Git/GitHub 版本控制"),
    emoji(" 使用python API 串接、streamlit UI 介面應用、pandas、numpy")
  ],
  softwareSkills: [
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "github", fontAwesomeClassname: "fab fa-github" },
    { skillName: "database", fontAwesomeClassname: "fas fa-database" }
  ],
  display: true 
};

// Education Section
const educationInfo = {
  display: true, // 
  schools: [
    {
      schoolName: "大同大學 (Tatung University)",
      logo: require("./assets/images/ttuLogo.png"), // 
      subHeader: "電機工程學系",
      desc: "具備紮實的硬體與電路基礎，並積極跨足軟體與 AI 開發領域。",
      descBullets: [
        "班級代表 (109-1 ~ 111-1)",
        "畢聯會 活動長"
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: false, 
  experience: [],
  displayCodersrank: false 
};

// Work experience section
const workExperiences = {
  display: true, // 
  experience: [
    {
      role: "AI 架構師專班",
      company: "國立陽明交通大學",
      companylogo: require("./assets/images/nycuLogo.png"), // 
      date: "2025/10 - 2026/10", // 
      desc: "參與 AI 架構師專班，深化人工智慧應用、深度學習模型建立與系統架構設計之能力。",
      descBullets: []
    }
  ]
};

const openSource = {
  githubUserName: "TheBestTrader", // 
  showGithubProfile: "true", 
  display: true 
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [],
  display: false 
};

// Achievement Section
const achievementSection = {
  title: emoji("Licensure & Certification "),
  subtitle: "結合 AI 專業與金融科技領域的認證，以及外語能力證明。",
  achievementsCards: [
    {
      title: "Microsoft AI-900",
      subtitle: "Azure AI Fundamentals (微軟人工智慧基礎認證)",
      image: require("./assets/images/microsoft.jpg"), // 
      imageAlt: "Microsoft AI-900 Logo",
      footerLink: []
    },
    {
      title: "TOEIC 多益英語測驗",
      subtitle: "測驗成績：580 分",
      image: require("./assets/images/TOEIC.webp"), // 
      imageAlt: "TOEIC Logo",
      footerLink: []
    },
    {
      title: "金融科技力知識檢定",
      subtitle: "台灣金融研訓院 (TABF) 專業測驗",
      image: require("./assets/images/TABF.png"), //
      imageAlt: "Fintech Certification Logo",
      footerLink: []
    }
 
  ],
  display: true // 
};

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", 
  blogs: [],
  display: false 
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE "),
  talks: [],
  display: false 
};

const podcastSection = {
  title: emoji("Podcast "),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false 
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false 
};


const contactInfo = {
  title: emoji("Reach Out to me! "),
  subtitle: "討論專案、技術交流，或是有任何合作機會，隨時歡迎聯絡我！",
  email_address: "ken7040532@gmail.com" // 
};

const twitterDetails = {
  userName: "twitter", 
  display: false 
};

const isHireable = true; 

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
