import {
  mobile,
  backend,
  creator,
  web,
  libraries,
  repsoft,
  girlscript,
  c,
  cpp,
  python,
  java,
  dart,
  html5,
  css3,
  javascript,
  flutter,
  node,
  react,
  pandas,
  numpy,
  scikitlearn,
  matplotlib,
  tensorflow,
  sql,
  vscode,
  androidstudio,
  git,
  github,
  firebase,
  healtech,
  detection,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "ABOUT",
  },
  {
    id: "experience",
    title: "EXPERIENCE",
  },
  {
    id: "tech stack",
    title: "TECHNOLOGY STACK",
  },
  {
    id: "projects",
    title: "PROJECTS",
  },
  {
    id: "contact",
    title: "CONTACT",
  },
];

const services = [
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI/ML Enthusiast",
    icon: creator,
  },
  {
    title: "Python Libraries",
    icon: libraries,
  },
];

const technologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "HTML5",
    icon: html5,
  },
  {
    name: "CSS3",
    icon: css3,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "Scikit Learn",
    icon: scikitlearn,
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "Android Studio",
    icon: androidstudio,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "Open - Source Contributor",
    company_name: "GIRLSCRIPT SUMMER OF CODE",
    icon: girlscript,
    iconBg: "#E6DEDD",
    date: "May 2024 - August 2024",
    points: [
      "Made contributions to various open-source projects, enhancing collaborative development skills.",
      "Gained a deeper understanding of Git and GitHub, effectively managing code versions and collaborating with others.",
      "Utilized the Flutter Text-to-Speech (flutter_tts) and Audio Player (just_audio) packages to improve user interaction in an educational application.",
    ],
    techStack: ["Flutter", "Dart"],
  },
  {
    title: "Flutter Developer",
    company_name: "REPSOFT CONSULTANCY SERVICES",
    icon: repsoft,
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
      "Implemented a complex UI for 3 applications using Flutter widgets including Stack, TabBar, and TabView.",
      "Implemented responsive Flutter applications that worked seamlessly across various screen sizes.",
      "Integrated APIs to enhance application functionality and improve user experience.",
    ],
    techStack: ["Flutter", "Dart", "REST APIs"],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HealTech",
    description:
      "A Flutter-based application designed to manage appointments, medication schedules, and medical records.",
    tags: [
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: healtech,
    source_code_link: "https://github.com/Medlia/healtech",
  },
  {
    name: "Distracted Driver Detection",
    description:
      "A CNN-based system developed to identify and mitigate distracted driving behavior aiming to enhance road safety through automated monitoring.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "Scikit Learn",
        color: "orange-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: detection,
    source_code_link:
      "https://github.com/Maheen-Ilyas/distracted-driver-detection",
  },
];

export { services, technologies, experiences, testimonials, projects };
