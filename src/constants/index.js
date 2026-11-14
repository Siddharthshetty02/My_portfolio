import {
  nitk,
  portfolio,
  chargeswap,
  comicify_ai,
  greentrust,
  placeholder,
  kudos,
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

import {
  SiPython,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFastapi,
  SiStreamlit,
  SiSqlite,
  SiVercel,
  SiArduino,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiJupyter,
  SiGit,
  SiGithub,
  SiOpenai,
  SiBluetooth,
  SiAndroid,
  SiLeetcode,
  SiHackerrank,
} from "react-icons/si";

import { FaBrain, FaRobot, FaMicrochip, FaDatabase, FaCode } from "react-icons/fa6";
import { TbWaveSine, TbActivityHeartbeat } from "react-icons/tb";

export const resumeLink = "";
export const repoLink = "https://github.com/Siddharthshetty02/Stadium_management";
export const callToAction = "https://www.linkedin.com/in/siddharth-shetty-657797283/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Activities",
  },
  {
    id: "contactMe",
    title: "Contact",
  },
];

export const aboutMe = {
  name: "Siddharth Shetty",
  tagLine: "Computer Science Engineering | AI/ML & Software Development",
  intro:
    "I enjoy building practical software and exploring how Artificial Intelligence, Machine Learning, and data-driven systems can solve real problems. My work spans AI-powered applications, web projects, data systems, and an IoT-based physiotherapy monitoring prototype.",
  githubUsername: "Siddharthshetty02",
};

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/siddharth-shetty-657797283/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/Siddharthshetty02",
  },
  {
    id: "social-media-3",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/nc6bhxIZ0x/",
  },
  {
    id: "social-media-4",
    icon: SiHackerrank,
    link: "https://www.hackerrank.com/profile/siddharthCS207",
  },
];

export const skills = [
  {
    title: "Programming & Computer Science",
    items: [
      { id: "p-1", icon: SiPython, name: "Python" },
      { id: "p-2", icon: FaDatabase, name: "SQL" },
      { id: "p-3", icon: FaCode, name: "OOP" },
      { id: "p-4", icon: FaBrain, name: "DSA" },
      { id: "p-5", icon: SiGit, name: "Git" },
      { id: "p-6", icon: SiGithub, name: "GitHub" },
    ],
  },
  {
    title: "Machine Learning & Data Science",
    items: [
      { id: "ml-1", icon: FaBrain, name: "Machine Learning" },
      { id: "ml-2", icon: SiScikitlearn, name: "scikit-learn" },
      { id: "ml-3", icon: FaRobot, name: "XGBoost" },
      { id: "ml-4", icon: SiNumpy, name: "NumPy" },
      { id: "ml-5", icon: TbActivityHeartbeat, name: "Feature Eng." },
      { id: "ml-6", icon: TbWaveSine, name: "Time-Series" },
    ],
  },
  {
    title: "Generative AI",
    items: [
      { id: "ai-1", icon: SiOpenai, name: "LLM APIs" },
      { id: "ai-2", icon: FaBrain, name: "Prompt Eng." },
      { id: "ai-3", icon: FaRobot, name: "AI Workflows" },
      { id: "ai-4", icon: FaCode, name: "Agentic Systems" },
      { id: "ai-5", icon: FaDatabase, name: "RAG Concepts" },
    ],
  },
  {
    title: "Web, Backend & Data",
    items: [
      { id: "w-1", icon: SiFastapi, name: "FastAPI" },
      { id: "w-2", icon: SiStreamlit, name: "Streamlit" },
      { id: "w-3", icon: SiSqlite, name: "SQLite" },
      { id: "w-4", icon: SiJavascript, name: "JavaScript" },
      { id: "w-5", icon: SiVercel, name: "Vercel" },
    ],
  },
  {
    title: "Embedded, IoT & Mobile",
    items: [
      { id: "iot-1", icon: FaMicrochip, name: "ESP32" },
      { id: "iot-2", icon: SiArduino, name: "MPU6050" },
      { id: "iot-3", icon: SiBluetooth, name: "BLE" },
      { id: "iot-4", icon: SiAndroid, name: "Android" },
      { id: "iot-5", icon: TbWaveSine, name: "Sensor Filters" },
    ],
  },
  {
    title: "Currently Exploring",
    items: [
      { id: "ex-1", icon: SiPandas, name: "pandas" },
      { id: "ex-2", icon: FaDatabase, name: "Statistics" },
      { id: "ex-3", icon: SiJupyter, name: "Jupyter" },
    ],
  },
];

export const experiences = [
  {
    organisation: "InAmigos Foundation",
    logo: placeholder,
    positions: [
      {
        title: "Web Development Intern",
        duration: "May 2026",
        content: [
          {
            text: "Worked on responsive frontend web development, component structuring, and UI implementation.",
            link: "",
          },
          {
            text: "Collaborated with team members to deliver web interfaces and maintain clean code practices.",
            link: "",
          },
        ],
      },
    ],
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "AMC Engineering College",
    degree: "Bachelor of Engineering (B.E.), Computer Science & Engineering",
    duration: "2023 - 2027 (Expected)",
    content1:
      "Core Coursework: Data Structures & Algorithms, Machine Learning, Database Management Systems, Operating Systems, Computer Networks.",
    content2:
      "Location: Bengaluru, Karnataka, India.",
  },
];

export const achievements = [
  {
    id: "a-1",
    event: "Global Fintech Festival (GFF 2026)",
    position: "Participant",
    icon: kudos,
    content1: "Engaged in fintech innovation challenges focusing on digital transaction architectures.",
    content2: "Collaborated on tech-driven solutions for modern financial workflows.",
  },
  {
    id: "a-2",
    event: "Datathon 2026",
    position: "Participant",
    icon: kudos,
    content1: "Tackled complex data science problems, statistical modeling, and predictive evaluation.",
    content2: "Implemented end-to-end data pipelines and classification metrics.",
  },
  {
    id: "a-3",
    event: "TrackShift 2026",
    position: "Participant",
    icon: kudos,
    content1: "Built technical solutions addressing rapid shifts in domain problem spaces.",
  },
  {
    id: "a-4",
    event: "AMD Slingshot Hackathon",
    position: "Participant",
    icon: kudos,
    content1: "Explored compute-intensive applications and high-performance algorithms.",
  },
  {
    id: "a-5",
    event: "Google Developer Solution Challenge 2026",
    position: "Participant",
    icon: kudos,
    content1: "Designed software solutions addressing real-world community challenges using modern developer tools.",
  },
  {
    id: "a-6",
    event: "Smart Horizon International Hackathon",
    position: "Participant",
    icon: kudos,
    content1: "Collaborated in an international hackathon solving global challenges through tech prototypes.",
  },
  {
    id: "a-7",
    event: "PromptWars",
    position: "Participant",
    icon: kudos,
    content1: "Competed in generative AI prompt engineering challenges, agent design, and AI model steering.",
  },
  {
    id: "a-8",
    event: "Tech4Bharat",
    position: "Participant",
    icon: kudos,
    content1: "Developed tech concepts aimed at socio-economic and digital enablement initiatives.",
  },
];

export const projects = [
  {
    id: "p-1",
    title: "IoT Physiotherapy Monitoring & Feedback",
    image: chargeswap,
    content:
      "Sensor-based rehabilitation monitoring prototype using ESP32 and MPU6050 accelerometer/gyroscope. Features complementary-filter angle estimation, time-window repetition feature extraction, and XGBoost classification with Android BLE integration for real-time exercise feedback.",
    stack: [
      { id: "1", icon: FaMicrochip, name: "ESP32" },
      { id: "2", icon: SiPython, name: "Python" },
      { id: "3", icon: SiScikitlearn, name: "scikit-learn" },
      { id: "4", icon: SiAndroid, name: "Android" },
      { id: "5", icon: SiBluetooth, name: "BLE" },
    ],
    github: "",
    link: "",
  },
  {
    id: "p-2",
    title: "CarbonWise",
    image: greentrust,
    content:
      "A live deployed web application focused on carbon-footprint tracking, environmental awareness, and personalized sustainability recommendations for conscious living.",
    stack: [
      { id: "1", icon: SiReact, name: "React" },
      { id: "2", icon: SiTailwindcss, name: "Tailwind CSS" },
      { id: "3", icon: SiJavascript, name: "JavaScript" },
      { id: "4", icon: SiVercel, name: "Vercel" },
    ],
    github: "",
    link: "https://carbon-footprint-virtual-prompts.vercel.app/",
  },
  {
    id: "p-3",
    title: "DataLens AI",
    image: comicify_ai,
    content:
      "AI-assisted intelligent data catalog project combining FastAPI, SQLite, and Streamlit with LLM integration to empower natural language data discovery and schema exploration.",
    stack: [
      { id: "1", icon: SiFastapi, name: "FastAPI" },
      { id: "2", icon: SiStreamlit, name: "Streamlit" },
      { id: "3", icon: SiSqlite, name: "SQLite" },
      { id: "4", icon: SiPython, name: "Python" },
    ],
    github: "",
    link: "",
  },
  {
    id: "p-4",
    title: "Insider Threat Detection AI",
    image: portfolio,
    content:
      "Anomaly detection prototype designed to identify unusual behavioral patterns and potential security risks using Isolation Forest algorithms and an interactive Streamlit investigation dashboard.",
    stack: [
      { id: "1", icon: SiPython, name: "Python" },
      { id: "2", icon: SiScikitlearn, name: "scikit-learn" },
      { id: "3", icon: SiStreamlit, name: "Streamlit" },
    ],
    github: "",
    link: "",
  },
  {
    id: "p-5",
    title: "Stadium Management System",
    image: placeholder,
    content:
      "Full-stack venue and event management application designed to manage stadium allocations, seat reservations, fixtures, and administrative operations efficiently.",
    stack: [
      { id: "1", icon: SiPython, name: "Python" },
      { id: "2", icon: FaDatabase, name: "SQL" },
      { id: "3", icon: FaCode, name: "OOP" },
    ],
    github: "https://github.com/Siddharthshetty02/Stadium_management.git",
    link: "",
  },
  {
    id: "p-6",
    title: "TalentMind AI",
    image: comicify_ai,
    content:
      "AI-driven recruitment and talent screening assistant designed to analyze technical candidate submissions and streamline interview evaluation pipelines.",
    stack: [
      { id: "1", icon: SiPython, name: "Python" },
      { id: "2", icon: SiFastapi, name: "FastAPI" },
      { id: "3", icon: FaBrain, name: "AI Evaluation" },
    ],
    github: "",
    link: "",
  },
  {
    id: "p-7",
    title: "AI Voice Assistant",
    image: portfolio,
    content:
      "Interactive LLM-powered voice assistant capable of speech synthesis, natural language reasoning, and query execution built with FastAPI backend services.",
    stack: [
      { id: "1", icon: SiPython, name: "Python" },
      { id: "2", icon: SiFastapi, name: "FastAPI" },
      { id: "3", icon: SiOpenai, name: "LLM API" },
    ],
    github: "",
    link: "",
  },
  {
    id: "p-8",
    title: "Virtual Prompts",
    image: greentrust,
    content:
      "Developer workbench for generative AI prompt engineering, testing prompt variations, and optimizing output coherence across language models.",
    stack: [
      { id: "1", icon: SiReact, name: "React" },
      { id: "2", icon: SiTailwindcss, name: "Tailwind CSS" },
      { id: "3", icon: FaBrain, name: "Prompt Eng." },
    ],
    github: "",
    link: "",
  },
  {
    id: "p-9",
    title: "SEBISense",
    image: chargeswap,
    content:
      "Regulatory intelligence case study exploring AI-assisted analysis and key metric extraction from regulatory compliance filings.",
    stack: [
      { id: "1", icon: SiPython, name: "Python" },
      { id: "2", icon: FaBrain, name: "NLP" },
      { id: "3", icon: SiStreamlit, name: "Streamlit" },
    ],
    github: "",
    link: "",
  },
  {
    id: "p-10",
    title: "Metro Document Intelligence",
    image: placeholder,
    content:
      "Machine learning case study and analytical report evaluating document parsing workflows and operational efficiency in transit logistics.",
    stack: [
      { id: "1", icon: SiPython, name: "Python" },
      { id: "2", icon: SiNumpy, name: "Analytics" },
      { id: "3", icon: FaBrain, name: "ML Report" },
    ],
    github: "",
    link: "",
  },
  {
    id: "p-11",
    title: "BioML: The Living Algorithm",
    image: comicify_ai,
    content:
      "Exploratory platform drawing parallels between biological systems, cellular automata, and machine learning adaptation mechanisms.",
    stack: [
      { id: "1", icon: SiPython, name: "Python" },
      { id: "2", icon: FaBrain, name: "BioML" },
    ],
    github: "",
    link: "",
  },
  {
    id: "p-12",
    title: "Autonomous GenAI Agent Workflows",
    image: portfolio,
    content:
      "Goal-driven multi-step agent execution pipelines exploring tool invocation, automated plan refinement, and execution monitoring.",
    stack: [
      { id: "1", icon: SiPython, name: "Python" },
      { id: "2", icon: FaRobot, name: "Agent Loops" },
      { id: "3", icon: SiOpenai, name: "LLM APIs" },
    ],
    github: "",
    link: "",
  },
];

export const extraCurricular = [
  {
    id: "ec-1",
    organisation: "Gen AI Academy",
    title: "Participant & Learner",
    duration: "2025 - 2026",
    logo: kudos,
    content: [
      {
        text: "Explored advanced generative AI concepts, LLM architectures, and agentic workflows.",
        link: "",
      },
    ],
  },
  {
    id: "ec-2",
    organisation: "Agentic Knowledge Harness",
    title: "Technical Exploration",
    duration: "2026",
    logo: kudos,
    content: [
      {
        text: "Studied autonomous agent tooling, function calling protocols, and multi-agent systems.",
        link: "",
      },
    ],
  },
  {
    id: "ec-3",
    organisation: "Wadhwani Ignite Bootcamp",
    title: "Bootcamp Participant",
    duration: "2025 - 2026",
    logo: kudos,
    content: [
      {
        text: "Participated in entrepreneurship, problem validation, and venture creation bootcamp.",
        link: "",
      },
    ],
  },
  {
    id: "ec-4",
    organisation: "Google Developer Groups",
    title: "Active Member",
    duration: "2024 - Present",
    logo: kudos,
    content: [
      {
        text: "Active participant in technical workshops, hackathons, and developer community sessions.",
        link: "",
      },
    ],
  },
];

export const blogPosts = [];
export const stats = [];
export const itemsToFetch = 10;
export const includedRepos = [];
