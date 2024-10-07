import { images } from "../Images";
export const categories = [
  "All",
  "Web Development",
  "App Development",
  "Console Applications",
];

export const projects = [
  // Web Development
  {
    title: "CodeBro",
    category: "Web Development",
    images: [
      images.codebro1,
      images.codebro2,
      images.codebro3,
      images.codebro4,
      images.codebro5,
    ],
    live: "https://codebrowebsite.vercel.app/",
    repo: "https://github.com/Ganesh-Mk/CodeBro",
    video:
      "https://www.linkedin.com/posts/ganesh-koparde_codebro-a-coding-problem-solving-platform-activity-7216841300761804801-jMr4?utm_source=share&utm_medium=member_desktop",
    alt: "Project image",
    desc: `
This Coding Problem-Solving Platform is a full-stack website where users can practice coding in JavaScript, Python, or Java. Built with MERN stack and a responsive design, it lets users browse problems, solve them with test cases, track progress, and view leaderboards
    
💻 Tech Stack:
    
-> Frontend: ReactJS, SASS, PrimeReact, Chakra-UI, Material-UI, Redux
-> Backend: Node.js, Express.js, Nodemailer
-> Database: MongoDB
-> Collaboration: Git and GitHub
-> Code Editor & Compiler: Utilizes Monaco Editor for coding and integrates with Piston API for compiling code

✨ Features:

1. User Authentication: Login and Signup
2. Home Page: View all problems, stats, and coding quotes
3. Problem Page: Browse problems with filters, search, and random pick functionality
4. Coding Page: Solve problems in JavaScript, Python, or Java with test cases and problem descriptions
5. Account Page: Track solved problems by difficulty and language, edit profile, and add social media links
6. Leaderboard Page: View user rankings, social links, and problem-solving stats
7. About Page: Information about us and feedback form
8. Auto Login: Ensures users remain logged in even after re opening the browser
9. Responsive Design: Works seamlessly on mobile devices

`,
  },
  {
    title: "Simon's Cat",
    category: "Web Development",
    images: [images.meaw1, images.meaw2, images.meaw3, images.meaw4],
    live: "https://simonscatwebsite.netlify.app/",
    repo: "",
    video:
      "https://www.linkedin.com/posts/ganesh-koparde_technohacks-reactjs-webdevelopment-activity-7162084650981470208-SvfB?utm_source=share&utm_medium=member_desktop",
    alt: "Project image",
    desc: `
A responsive cat-themed website built using React.js, inspired by the official Simon's Cat website. 🐱 During this project, I developed my skills in React.js and focused on creating reusable components for efficient code management and better user experience.
    
💻 Tech Stack: React.js`,
  },

  // App Development

  // Console Applications
  {
    title: "Hang Man Game",
    category: "Console Applications",
    images: [images.hangmangame1, images.hangmangame2, images.hangmangame3],
    alt: "Project image",
    live: null,
    video:
      "https://drive.google.com/file/d/1PzoWN8TFadwkz16xXSkfIRC8gD2MEztD/view?usp=sharing",
    repo: null,
    desc: "Crafted HangManGame using Java with dynamic words and it's length. ",
  },
];
