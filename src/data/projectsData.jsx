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
    title: "SpaceX - Animated",
    category: "Web Development",
    images: [
      images.spacex1,
      images.spacex2,
      images.spacex3,
      images.spacex4,
      images.spacex5,
      images.spacex6,
    ],
    live: "https://spacex-webpage.vercel.app/",
    repo: "https://github.com/Ganesh-Mk/SpaceX",
    video: `https://www.linkedin.com/posts/ganesh-koparde_webdevelopment-spacexwebsite-responsivedesign-activity-7155899341751115776-7qhs?utm_source=share&utm_medium=member_desktop`,
    alt: "Project image",
    desc: `Fully responsive SpaceX website using HTML, CSS, JS, GSAP, and Locomotive. ✨ Check out the creative animations and seamless responsiveness, even optimized for smartwatches! 🌐`,
  },
  {
    title: "Simon's Cat",
    category: "Web Development",
    images: [images.meaw1, images.meaw2, images.meaw3, images.meaw4],
    live: "https://simonscatwebsite.netlify.app/",
    repo: "https://github.com/Ganesh-Mk/simonscat",
    video:
      "https://www.linkedin.com/posts/ganesh-koparde_technohacks-reactjs-webdevelopment-activity-7162084650981470208-SvfB?utm_source=share&utm_medium=member_desktop",
    alt: "Project image",
    desc: `
A responsive cat-themed website built using React.js, inspired by the official Simon's Cat website. 🐱 During this project, I developed my skills in React.js and focused on creating reusable components for efficient code management and better user experience.
    
💻 Tech Stack: React.js`,
  },
  {
    title: "Animal Tracking System",
    category: "Web Development",
    images: [images.animal1, images.animal2, images.animal3],
    live: null,
    repo: "https://github.com/Ganesh-Mk/AnimalTracker",
    video: `https://www.linkedin.com/posts/ganesh-koparde_participated-in-the-24-hour-hackathon-activity-7204876310479790080-mJgm?utm_source=share&utm_medium=member_desktop`,
    alt: "Project image",
    desc: `
    During 24-hour Hackathon, Built Animal Tracking System!

    ✨ Problem Statement: Animal Tracking System - Group management and alerts
    
    🎯 Project Highlights: 
    • Enhanced UI 
    • Business model with a store for purchasing radio collars 
    • Animal group management with real-time tracking every 5 seconds 
    • Multiple group management and alert system for border breaches 
    • All data of animals and user track borders stored in the database
    
    🏅 Competition: Initially, there were 68 teams. We were selected for the top 25 teams based on our online idea/solution/prototype of the problem statement. These 25 teams participated in a 24-hour hackathon, consisting of 3 rounds. We completed all requirements and problem statement use cases within 24 hours. The top 10 teams were chosen based on their performance in these rounds. We were proud to be among the top 10 teams and presented our project in front of 10 experienced and esteemed judges.
    
    🛠 Tech Stack: 
    Frontend: React, Redux, Tailwind 
    Backend: Node.js, Express.js 
    Database: MongoDB 
    
    💪 Achievement: Proud to be in the top 10 teams! Although we didn't secure a top 3 spot, our progress and accomplishments are worth celebrating.
    
    Thanks to my team for their support and enthusiasm.`,
  },

  {
    title: "Group chat app",
    category: "Web Development",
    images: [
      images.chatapp4,
      images.chatapp1,
      images.chatapp2,
      images.chatapp3,
    ],
    live: "https://groupchatservice.onrender.com/",
    repo: null,
    video: `https://www.linkedin.com/posts/ganesh-koparde_webdev-groupchat-nodejs-activity-7152618422479020032-1FOz?utm_source=share&utm_medium=member_desktop`,
    alt: "Project image",
    desc: `Users can join by adding their names, check who's online, and send messages to the entire group. ⚡️ Real-time notifications for entry/exit, dynamic typing animations, and responsive design make it a seamless experience. 👩‍💻 Built with HTML, CSS, JS, Node.js, Express.js, and Socket.io`,
  },
  {
    title: "Pokemon Game",
    category: "Web Development",
    images: [
      images.pokemon1,
      images.pokemon2,
      images.pokemon3,
      images.pokemon14,
    ],
    live: "https://pokemonwar.vercel.app/",
    repo: "https://github.com/Ganesh-Mk/PokemonGame",
    video: `https://www.linkedin.com/posts/ganesh-koparde_project-webgamedevelopment-pokemongame-activity-7140020557420400640-UHHp?utm_source=share&utm_medium=member_desktop`,
    alt: "Project image",
    desc: `It's a 2-player game where both players use the keyboard on the same device. The game features dynamic movements - jumps, sprints, and firing options. Each player starts with 100% health, and after getting hit by fire, health will reduce 10%. The first to reach zero health loses, but don't worry, you can restart the match! 🤝✨ Developed using HTML, CSS, and JavaScript, this project is a result of my creativity and passion for coding.🚀

    But only for desktop (it's not responsive)
    
    I just enjoyed while implementing this project. Playing our own games is different kind of fun😂`,
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
