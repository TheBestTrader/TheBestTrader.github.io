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

const socialMediaLinks = {
  github: "https://github.com/TheBestTrader",
  gmail: "ken7040532@gmail.com",
  display: true 
};

const skillsSection = {
  title: "What I do",
  subTitle: "INTEGRATING HARDWARE KNOWLEDGE WITH AI AND AUTOMATION",
  skills: [
    emoji(" 運用 PyTorch 與深度學習模型進行電腦視覺與工業瑕疵檢測開發"),
    emoji(" 結合 n8n、Multi-Agent 與 RAG 技術建立高度自動化工作流與分析系統"),
    emoji(" 熟悉 Linux 環境配置、Docker 容器化部署與 Git/GitHub 版本控制")
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

const achievementSection = {
  title: emoji("Achievements And Certifications  "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [],
  display: false 
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
  title: emoji("Contact Me "),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "ken7040532@gmail.com"
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
