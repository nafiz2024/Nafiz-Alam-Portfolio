import nafizPortfolioImage from "@/assests/nafiz_portfolio.png";

export const profile = {
  name: "Nafiz Alam",
  designation: "Frontend React Developer",
  rotatingDesignations: [
    "Frontend React Developer",
    "React.js Developer",
    "Modern UI Builder",
  ],
  location: "Mirpur, Dhaka, Bangladesh",
  heroBadge: "Frontend React Developer",
  headlineLines: [
    "Building Modern,",
    "Responsive &",
    "User-Friendly Web",
    "Applications.",
  ],
  intro:
    "I build modern, responsive, and user-friendly web applications using React.js and modern web technologies. Passionate about clean UI design, smooth user experiences, and scalable frontend architecture.",
  photo: nafizPortfolioImage,
  resumeUrl:
    "https://drive.google.com/file/d/1iep2frg3Oh3cuaHWRNXaRb3SmIjDrbsI/view?usp=sharing",
  heroFocus:
    "Focused on building responsive React applications with clean UI, scalable architecture, and smooth user experience.",
  heroLearning:
    "Currently learning backend technologies including Node.js, Express.js, MongoDB, and MySQL to become a Full-Stack MERN Developer.",
  about: [
    "Hi, I'm Nafiz Alam - a passionate Frontend React Developer from Bangladesh with a strong interest in modern web technologies and interactive user experiences.",
    "I specialize in building responsive, clean, and user-friendly web applications using React.js, Next.js, JavaScript, and Tailwind CSS. Alongside frontend development, I'm also expanding my skills in backend technologies like Node.js, Express.js, MongoDB, and MySQL as I continue growing toward becoming a Full-Stack MERN Developer.",
    "My programming journey started during my Diploma in Computer Science and Technology in 2020. Since then, I've been continuously learning and building real-world projects through personal development, freelancing, and practical implementation work.",
    "I enjoy solving real development problems, building scalable frontend architectures, and creating lightweight modern applications with clean and maintainable code. I'm highly motivated to improve my workflow, learn new technologies, and create impactful digital experiences that help users in real life.",
  ],
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/nafiz2024" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nafiz-alam04/" },
  { label: "Facebook", href: "https://www.facebook.com/nafiz.alam.733/" },
  { label: "Email", href: "mailto:nafizalam.dev@gmail.com" },
];

export const techStackShowcase = [
  { name: "React.js", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Node.js", icon: "node" },
  { name: "Express.js", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "MySQL", icon: "mysql" },
];

export const skillsStackGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Backend / Learning",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    title: "Tools & Others",
    items: [
      { name: "Git", icon: "code" },
      { name: "GitHub", icon: "github" },
      { name: "Firebase", icon: "spark" },
      { name: "REST API", icon: "database" },
      { name: "JWT Authentication", icon: "script" },
      { name: "Vercel", icon: "next" },
      { name: "Framer Motion", icon: "spark" },
      { name: "Responsive Web Design", icon: "code" },
    ],
  },
];

export const education = [
  {
    institution: "Faridpur Polytechnic Institute",
    degree: "Diploma in Computer Science & Technology",
    timeframe: "2019 - 2023",
    details: [
      "Department: Computer Science & Technology",
      "Result: CGPA 3.42 out of 4.00",
    ],
  },
  {
    institution: "Northern University of Bangladesh",
    degree: "BSc in Computer Science & Engineering",
    timeframe: "2024 - 2028",
    details: [
      "Department: Computer Science & Engineering",
      "Status: Running",
    ],
  },
];

export const experience = [
  {
    title: "Implementation Engineer",
    organization: "MySoft Ltd.",
    timeframe: "January 2024 - February 2025",
    type: "On-site",
    summary:
      "Implemented and configured Hospital Management Software for clients. Provided technical support, deployment assistance, software setup support, and helped clients solve system-related issues.",
    highlights: [
      "Implemented and configured Hospital Management Software for clients.",
      "Provided technical support and deployment assistance.",
      "Worked closely with client requirements and software setup processes.",
      "Assisted in troubleshooting and system maintenance.",
    ],
  },
  {
    title: "Customer Service Officer",
    organization: "Grameenphone",
    timeframe: "March 2025 - December 2025",
    type: "On-site",
    summary:
      "Assisted customers by resolving service-related issues and providing support. Improved communication, problem-solving, and client handling skills through direct customer interaction.",
    highlights: [
      "Assisted customers by resolving service-related issues and providing support.",
      "Maintained customer satisfaction through effective communication and problem-solving.",
      "Handled customer queries regarding telecom services and account-related issues.",
      "Improved communication and client management skills through direct customer interaction.",
    ],
  },
];

export const services = [
  "Frontend Web Development",
  "Responsive Website Design",
  "React.js Application Development",
  "Modern UI/UX Implementation",
  "API Integration",
  "Landing Page Development",
  "Portfolio Website Development",
  "MERN Stack Learning Projects",
];

export const projects = [
  {
    slug: "drivefleet",
    name: "DriveFleet",
    category: "Vehicle Booking / Rental Management Platform",
    image: "/project-orbit.svg",
    summary:
      "A modern vehicle booking and rental management platform with a responsive interface, authentication, and dashboard-based booking flow.",
    stack: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase Auth",
      "JavaScript",
      "Vite",
      "React Icons",
      "React Toastify",
    ],
    description:
      "DriveFleet is a modern vehicle booking and rental management platform where users can browse available vehicles, view detailed information, and manage bookings through a responsive and user-friendly interface.",
    liveUrl: "https://drivefleet-nu.vercel.app/",
    repoUrl:
      "https://github.com/nafiz2024/Programming-Hero-Assignment-09-Client",
    features: [
      "Responsive modern homepage",
      "Vehicle listing section",
      "Vehicle details page",
      "Login and registration system",
      "Firebase authentication",
      "Protected dashboard routes",
      "Booking functionality",
      "User dashboard",
      "Reusable React components",
      "Mobile-friendly layout",
    ],
    futurePlans: [
      "Add advanced search and booking filters.",
      "Improve booking management workflows.",
      "Expand dashboard analytics for users and admins.",
    ],
  },
  {
    slug: "keenkeeper",
    name: "KeenKeeper",
    category: "Social Dashboard / Relationship Management Platform",
    image: "/project-pulse.svg",
    summary:
      "A relationship and interaction tracking platform with a clean dashboard, data visualization, and reusable UI components.",
    stack: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "JavaScript",
      "Recharts",
      "React Toastify",
      "Vite",
    ],
    description:
      "KeenKeeper is a modern friendship and interaction tracking platform where users can manage relationships, track communication history, and visualize interaction activities through an interactive dashboard.",
    liveUrl: "https://keenkeeper-kappa.vercel.app/",
    repoUrl: "https://github.com/nafiz2024/Programming-Hero-Assignment-07",
    features: [
      "Responsive dashboard design",
      "Friend tracking system",
      "Interaction timeline",
      "Activity visualization",
      "Statistics and charts",
      "Filtering and sorting",
      "Dynamic status tracking",
      "Reusable components",
    ],
    futurePlans: [
      "Add richer relationship insights and reminders.",
      "Improve dashboard customization options.",
      "Expand filtering and interaction reporting tools.",
    ],
  },
  {
    slug: "the-dragon-news",
    name: "The Dragon News",
    category: "News Portal / Online News Platform",
    image: "/project-canvas.svg",
    summary:
      "A responsive online news platform with category-based browsing, protected routes, and authentication-powered access control.",
    stack: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase Auth",
      "JavaScript",
      "Vite",
      "React Icons",
      "React Fast Marquee",
    ],
    description:
      "The Dragon News is a modern online news portal where users can browse news articles, explore different news categories, and access protected content through an authentication system.",
    liveUrl: "https://the-dragon-news-snowy-alpha.vercel.app/",
    repoUrl: "https://github.com/nafiz2024/The-Dragon-News",
    features: [
      "Responsive news homepage",
      "Category-based news filtering",
      "Dynamic news sections",
      "Login and registration",
      "Protected routes",
      "Firebase authentication",
      "Trending/latest news section",
      "Reusable news cards",
    ],
    futurePlans: [
      "Add bookmark and reading history features.",
      "Improve category discovery and editorial layout.",
      "Introduce richer article interactions.",
    ],
  },
  {
    slug: "wanderlust",
    name: "Wanderlust",
    category: "Travel / Tourism / Destination Exploration Platform",
    image: "/project-orbit.svg",
    summary:
      "A visually engaging travel platform focused on destination discovery, clean routing, and modern responsive presentation.",
    stack: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "JavaScript",
      "Vite",
      "React Icons",
      "Vercel",
    ],
    description:
      "Wanderlust is a modern travel and destination exploration platform where users can discover beautiful tourist destinations, explore travel experiences, and navigate through a visually engaging responsive interface.",
    liveUrl: "https://wanderlust-rosy-five.vercel.app/",
    repoUrl: "https://github.com/nafiz2024/Wanderlust",
    features: [
      "Travel-themed homepage",
      "Destination showcase",
      "Interactive hero section",
      "Destination cards",
      "Smooth routing",
      "Responsive layout",
      "Reusable React components",
      "Clean UI/UX design",
    ],
    futurePlans: [
      "Add destination filtering and trip planning tools.",
      "Expand storytelling sections for each destination.",
      "Improve performance for media-rich layouts.",
    ],
  },
  {
    slug: "travel-tourism-web-application",
    name: "Travel & Tourism Web Application",
    category: "Tourism / Travel Booking Platform",
    image: "/project-pulse.svg",
    summary:
      "A modern tourism platform built around destination exploration, dynamic routing, and a polished responsive experience.",
    stack: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "JavaScript",
      "Vite",
      "React Icons",
      "Vercel",
    ],
    description:
      "Travel & Tourism Web Application is a modern and responsive tourism platform where users can explore different travel destinations and tourism packages through a clean and interactive interface.",
    liveUrl: "https://programming-hero-assignment-08.vercel.app/",
    repoUrl: "https://github.com/nafiz2024/Programming-Hero-Assignment-08",
    features: [
      "Responsive modern homepage",
      "Tourist destination showcase",
      "Dynamic routing system",
      "Destination details page",
      "Interactive hero section",
      "Mobile-friendly responsive layout",
      "Reusable React components",
      "Error handling and 404 page",
    ],
    futurePlans: [
      "Add booking inquiry and package comparison features.",
      "Improve destination discovery with filters.",
      "Enhance page transitions and micro-interactions.",
    ],
  },
  {
    slug: "sammo-portfolio",
    name: "Sammo Portfolio",
    category: "Portfolio Website / Personal Branding Platform",
    image: "/project-canvas.svg",
    summary:
      "A personal portfolio website designed to showcase skills, projects, experience, and professional identity with a modern UI.",
    stack: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "JavaScript",
      "Vite",
      "React Icons",
      "Vercel",
    ],
    description:
      "Sammo Portfolio is a modern and responsive personal portfolio website designed to showcase developer skills, projects, experience, and personal branding in a professional way.",
    liveUrl: "https://sammo-portfolio-two.vercel.app/",
    repoUrl: "https://github.com/nafiz2024/sammo-portfolio",
    features: [
      "Responsive portfolio homepage",
      "About section",
      "Skills showcase",
      "Projects section",
      "Experience and education section",
      "Contact section",
      "Interactive animations",
      "Modern responsive UI",
    ],
    futurePlans: [
      "Add more project storytelling and case study depth.",
      "Improve animation polish and accessibility.",
      "Expand personal branding sections with testimonials or blog content.",
    ],
  },
];

export const contact = {
  email: "nafizalam.dev@gmail.com",
  phone: "+8801876566181",
  phoneLink: "+8801876566181",
  whatsapp: "+8801876566181",
  whatsappUrl: "https://wa.me/8801876566181",
  location: "Mirpur, Dhaka, Bangladesh",
};

export const portfolioStats = [
  { label: "Projects Completed", value: 6, suffix: "+" },
  { label: "Years Learning Journey", value: 2, suffix: "+" },
  { label: "Technologies Used", value: 10, suffix: "+" },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
