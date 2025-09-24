import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { SiFreelancer } from "react-icons/si";
import { SiIntel } from "react-icons/si";
import asraMobileImg from "@/public/asra_mobile.png";
import asraAdminPanelImg from "@/public/asra_admin_panel.png";
import whaleaderMobileImg from "@/public/whaleader_mobile.png";
import myDailyPriceMobileImg from "@/public/myDailyPrice_mobile.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Recognition",
    hash: "#recognition",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Admin Panel integrated with Dashboard",
    description:
      "An admin panel which is used to manage the services and users of a vehicle services super app. The admin panel is built using Next.js, Tailwind CSS, and shadcn. It is integrated with the backend service built with Express.js and MongoDB.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "MongoDB",
      "ExpressJS",
    ],
    imageUrl: asraAdminPanelImg,
  },
  {
    title: "Vehicle Services Super Apps",
    description:
      "I developed two apps: for public users and service providers which acts a platform for clients to book vehicle-related services and for service providers to manage their services. The offered services include Chauffeur, Driver and Car Rental. Complex verification and integration are involved in this project.",
    tags: ["Mobile Apps Development", "Flutter", "MongoDB", "ExpressJS"],
    imageUrl: asraMobileImg,
  },
  {
    title: "Whaleader Logistics Apps",
    description:
      "An in-house used mobile apps for a logistics company that allows users to track their shipments and manage their account. The app is built using Dart with Flutter and integrates with our own API. The app is available on both iOS and Android platforms.",
    tags: [
      "Mobile Apps Development",
      "Flutter",
      "State Management",
      "Riverpod",
    ],
    imageUrl: whaleaderMobileImg,
  },
  {
    title: "MyDailyPrice Multi-Platform System (Award Winning)",
    description:
      "A powerful one-stop center that provides comprehensive food price-related information and features. The integrated system includes user mobile apps, an admin panel, and backend services, all developed using React JS with Express JS. The project had won the Gold Medal award at The 8th International Invention Innovation Competition in Canada, iCAN 2023.",
    tags: [
      "Mobile Apps Development",
      "Full-Stack",
      "React",
      "MongoDB",
      "ExpressJS",
      "Flutter",
    ],
    imageUrl: myDailyPriceMobileImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "MongoDB",
  "GraphQL",
  "ExpressJS",
] as const;

export const testimonialsData = [
  {
    quote: `"Hinston has delivered a stunning backend system that perfectly reflects our company operation while ensuring seamless functionality. The entire process was smooth, and they were highly responsive to our feedback. We highly recommend Hinston for anyone seeking a top-notch website development service."`,
    name: "David",
    designation: "Head of Distribution",
    connector: "at",
    company: "Seventyfive Creative",
    url: "https://www.75creative.asia/",
    src: "/testimonials/laihong_logo.jpg",
  },
  {
    quote: `"Thanks for the expert help with the chat module! It's made a significant difference to the app's functionality and user experience."`,
    name: "Ryan Soo",
    designation: "Founder",
    company: "Qublico Official Solution",
    url: "https://www.qublico.com/",
    src: "/testimonials/qublico_logo.png",
  },
  {
    quote: `"Hinston and his team are superb! They delivered the job with minimal supervision. They ensure the customer satisfaction at the high level and even give more than they should to. Totally will use their service again in the near future."`,
    name: "Dr. Mohd Nadhir",
    designation: "CEO",
    company: "Intech Art",
    url: "https://www.intech-art.com/",
    src: "/testimonials/intech_logo.png",
  },
];

export const recognitionsData = [
  {
    name: "Ryan Soo",
    title: "Founder of Qublico Official Solution",
    description:
      "Thanks for your expert help with the chat module! It's made a significant difference to the app's functionality and user experience.",
  },
  {
    name: "Ryan Soo",
    title: "Founder of Qublico Official Solution",
    description:
      "Thanks for your expert help with the chat module! It's made a significant difference to the app's functionality and user experience.",
  },
  {
    name: "Ryan Soo",
    title: "Founder of Qublico Official Solution",
    description:
      "Thanks for your expert help with the chat module! It's made a significant difference to the app's functionality and user experience.",
  },
  {
    name: "Ryan Soo",
    title: "Founder of Qublico Official Solution",
    description:
      "Thanks for your expert help with the chat module! It's made a significant difference to the app's functionality and user experience.",
  },
  {
    name: "Ryan Soo",
    title: "Founder of Qublico Official Solution",
    description:
      "Thanks for your expert help with the chat module! It's made a significant difference to the app's functionality and user experience.",
  },
  {
    name: "Ryan Soo",
    title: "Founder of Qublico Official Solution",
    description:
      "Thanks for your expert help with the chat module! It's made a significant difference to the app's functionality and user experience.",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer (Contingent Worker)",
    location: "Intel Corporation · Full-time",
    description: [
      "• Specialized in frontend development with strong focus on building, maintaining, and enhancing web platforms.",
      "• Contributed to feature development, UI/UX improvements, bug fixing, and documentation writing.",
      "• Designed and implemented reusable frontend components to improve consistency, scalability, and usability in a complex in-house use web platform.",
      "• Collaborated on backend API related to lab work and machine integrations.",
      "• Improved user experience through enhancements such as filter functionality, refined search and table interactions.",
      "• Resolved technical issues and previous tech debt related to core feature such as sorting, searching, pagination, and API calls across multiple workflows.",
      "• Utilized Github actions for CI/CD and AWS to maintain automated service deployment.",
      "• Integrated Google Analytics (GA) and Google Tag Manager (GTM) for improved user activity tracking.",
    ],
    icon: React.createElement(SiIntel),
    date: "Apr 2024 - May 2025",
  },
  {
    title: "Full Stack Developer | Mobile Application Developer",
    location: "Freelance",
    description: [
      "• Led the development of a comprehensive project, which included building an admin panel using Next.js, Tailwind CSS, and shadcn.",
      "• Designed and implemented a robust backend service with Express.js and MongoDB to ensure efficient data management and seamless communication.",
      "• Developed two mobile applications using Flutter: one for clients and one for service providers, ensuring a consistent and high-quality user experience on both iOS and Android platforms.",
      "• Engaged closely with clients to understand their requirements, translating their needs into actionable solutions and delivering a high-quality product.",
      "• Managed the full software development lifecycle, from initial consultation and planning to deployment and maintenance.",
    ],
    icon: React.createElement(SiFreelancer),
    date: "Jul 2021 - Current",
  },
  {
    title: "Software Engineer",
    location: "Finexus Group · Full-time",
    description: [
      "• Demonstrated ability in ReactJS integrating with GraphQL to deliver high quality software",
      "• Co-led a frontend development team, fostering collaborative problem-solving environment",
      "• Exhibit leadership skills in daily discussions, providing proactive problem-solving support",
      "• Conduct code reviews which ensure adherence to best code practices and quality",
    ],
    icon: React.createElement(FaLaptopCode),
    date: "Oct 2023 - Apr 2024",
  },
  {
    title: "Mobile Application Developer",
    location: "Whaleader Logistics · Part-time",
    description: [
      "• Worked as a frontend developer and quality assurance tester",
      "• Responsible for development of two mobile apps by using Dart with Flutter",
      "• Cooperated with team utilizing Agile technique with Jira & Fastlane integration",
    ],
    icon: React.createElement(MdOutlineDeveloperMode),
    date: "Jul 2021 - Jun 2022",
  },
] as const;
