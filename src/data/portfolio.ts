// Portfolio Data - Maryam Irfan

export const personalInfo = {
  name: "Maryam Irfan",
  title: "Full Stack Developer",
  tagline: "Crafting seamless web experiences from frontend to backend",
  email: "maryamirfan1036@gmail.com",
  phone: "+92 325 3198733",
  location: "Pakistan",
  avatar: "/avatar.jpg",
  social: {
    linkedin: "https://www.linkedin.com/in/maryam-irfan-565838263/",
  },
};

export const aboutMe = {
  summary: `I’m a Full Stack Web Developer specializing in building scalable, secure, and high-performance web applications from responsive React frontends to robust backend systems using PHP/Laravel and modern databases. I focus on clean architecture, optimized performance, and seamless user experiences, delivering production-ready solutions that solve real-world problems. I’m an IT graduate from the University of Agriculture, Faisalabad, continuously exploring modern technologies and AI-driven development.`,
  highlights: [
    "Full Stack Web Development",
    "Frontend & UI Development",
    "Backend & Database Systems",
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Bootstrap",
      "Responsive Design",
    ],
  },
  {
    category: "Backend",
    items: ["PHP", "Python", "SQL", "MySQL", "Supabase", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "XAMPP", "Vercel", "Jupyter"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "AWS", "Vercel", "cPanel (Web Hosting Management)"],
  },
];

export const experiences = [
  {
    id: 1,
    role: "Full Stack Web Developer",
    company: "Digimitrix",
    location: "Remote",
    period: "Jul 2025 - Present",
    description: [
      "Building full stack web applications for international clients including admin dashboards and management platforms",
      "Developed a Salon Booking Platform with separate Admin and Salon Owner dashboards, integrating with a mobile app built by team members",
      "Designed and implemented database architecture using Supabase (PostgreSQL) with real-time updates and role-based access control",
      "Creating responsive, user-friendly interfaces while handling backend APIs and database management",
      "Collaborating with mobile development team to ensure seamless integration between web and mobile platforms",
    ],
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Career Institute",
    location: "On-site",
    period: "Mar 2025 - Apr 2025",
    description: [
      "Developed dynamic web pages using PHP with MySQL database integration",
      "Implemented form handling and data validation for secure user inputs",
      "Built responsive interfaces using Bootstrap framework",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Honours in Information Technology",
    institution: "University of Agriculture",
    period: "2021 - 2025",
    achievements: [
      "Merit-Based Scholarship",
      "Prime Minister Youth Laptop Award",
    ],
  },
];

export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  features: string[];
  liveUrl?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Salon Booking Platform",
    shortDescription:
      "Full stack web dashboards for a salon booking ecosystem with Admin and Salon Owner portals, integrated with mobile apps.",
    fullDescription: `Built comprehensive web dashboards as part of a salon booking ecosystem at Digimitrix.
    The platform includes an Admin Dashboard for platform management and a Salon Owner Dashboard for
    individual salon management. Customers use mobile applications (Android & iOS) built by team members,
    while salon owners manage their businesses through the web portal. The entire system is powered by
    Supabase with PostgreSQL database, featuring real-time updates, secure authentication, and seamless
    integration between web and mobile platforms.`,
    image: "/projects/test.jpg",
    tags: [
      "Supabase",
      "PostgreSQL",
      "JavaScript",
      "Real-time DB",
      "Full Stack",
    ],
    features: [
      "Admin Dashboard for platform-wide management and analytics",
      "Salon Owner Dashboard for managing bookings, staff, and services",
      "Real-time database synchronization with Supabase",
      "Role-based access control and secure authentication",
      "Integration with mobile apps (Android & iOS)",
      "Appointment scheduling and management system",
      "Staff management and performance tracking",
      "Service catalog and pricing management",
    ],
    liveUrl: "",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "News Website",
    shortDescription:
      "Dynamic news platform with API integration and personalized content display.",
    fullDescription: `Built a dynamic news platform using React.js that integrates with external news APIs
    for real-time data retrieval. The platform displays content based on user preferences and categories,
    providing a personalized news reading experience. Features include category filtering, search
    functionality, and responsive design for optimal viewing across devices.`,
    image: "/projects/news.jpg",
    tags: ["React.js", "API Integration", "JavaScript", "Responsive Design"],
    features: [
      "Real-time news API integration",
      "Category-based content filtering",
      "User preference settings",
      "Search functionality",
      "Responsive mobile design",
      "Dynamic content loading",
    ],
    liveUrl: "",
    category: "Frontend",
  },
  {
    id: 3,
    title: "Digimitrix Company Website",
    shortDescription:
      "Official corporate website developed for Digimitrix, showcasing company services, portfolio, and digital solutions.",
    fullDescription: `Designed and developed the official company website for Digimitrix. 
  The platform presents the company's services, portfolio, expertise, and contact information 
  in a modern and responsive layout. Focused on clean UI/UX, performance optimization, 
  and structured content presentation to enhance brand identity and user engagement. 
  Implemented responsive design principles to ensure seamless experience across desktop, 
  tablet, and mobile devices.`,
    image: "portfolio_Maryam/src/components/test.jpg", // Add screenshot of website here
    tags: [
      "React.js",
      "Responsive Design",
      "UI/UX",
      "Frontend Development",
      "Corporate Website",
    ],
    features: [
      "Fully responsive corporate website",
      "Modern and clean UI design",
      "Service and portfolio showcase sections",
      "Optimized performance and loading speed",
      "Contact form integration",
      "SEO-friendly structure",
    ],
    liveUrl: "https://dmx.website.digimiitrix.com/",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Mat Med - Homeopathic Medicine Website",
    shortDescription:
      "Responsive web platform for managing homeopathic remedies with admin dashboard.",
    fullDescription: `Developed a comprehensive web platform for managing homeopathic medicine information
    using PHP and MySQL. The system includes an admin dashboard for content management and a searchable
    client interface for easy data retrieval. Features include medicine database management, search
    functionality with filters, and responsive design for accessibility.`,
    image: "/projects/matmed.jpg",
    tags: ["PHP", "MySQL", "Admin Dashboard", "Bootstrap"],
    features: [
      "Admin dashboard for content management",
      "Searchable medicine database",
      "Client-friendly interface",
      "Filter and category options",
      "Responsive Bootstrap design",
      "Data validation and security",
    ],
    liveUrl: "",
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Smart Street Light System",
    shortDescription:
      "IoT-based smart lighting system using motion and light sensors for energy optimization.",
    fullDescription: `Developed an innovative IoT-based smart street lighting system that uses motion
    and light sensors to optimize energy usage. The system automatically adjusts lighting based on
    ambient conditions and detected movement, collecting sensor data for analysis and improving
    operational efficiency. This project demonstrates expertise in IoT integration and sensor-based
    automation.`,
    image: "/projects/streetlight.jpg",
    tags: ["IoT", "Sensors", "Automation", "Energy Efficiency"],
    features: [
      "Motion detection sensors",
      "Ambient light sensing",
      "Automatic brightness adjustment",
      "Energy usage optimization",
      "Sensor data collection",
      "Remote monitoring capabilities",
    ],
    liveUrl: "",
    category: "IoT",
  },
  {
    id: 6,
    title: "Automatic Certificate Generator",
    shortDescription:
      "Automated system in MATLAB for generating certificates, streamlining workflows.",
    fullDescription: `Developed an automated certificate generation system using MATLAB that streamlines
    the process of creating and distributing certificates. The system reduces manual processing time
    significantly by automating template filling, data integration, and batch generation. Ideal for
    educational institutions and organizations handling large-scale certificate issuance.`,
    image: "/projects/certificate.jpg",
    tags: ["MATLAB", "Automation", "Image Processing", "Batch Processing"],
    features: [
      "Automated template filling",
      "Batch certificate generation",
      "Data import from spreadsheets",
      "Custom template support",
      "Export in multiple formats",
      "Streamlined workflow",
    ],
    liveUrl: "",
    category: "Automation",
  },
  {
    id: 7,
    title: "Image Stitching Algorithm",
    shortDescription:
      "MATLAB algorithm for creating seamless panoramic images from multiple photos.",
    fullDescription: `Contributed to developing an image stitching algorithm in MATLAB that creates
    seamless panoramic images from multiple photographs. The project involved implementing advanced
    data processing and computational methods for feature detection, image alignment, and blending
    to produce high-quality panoramic outputs.`,
    image: "/projects/imagestitching.jpg",
    tags: ["MATLAB", "Image Processing", "Algorithm", "Computer Vision"],
    features: [
      "Feature detection and matching",
      "Image alignment algorithms",
      "Seamless blending techniques",
      "Multi-image processing",
      "Panorama generation",
      "Quality optimization",
    ],
    liveUrl: "",
    category: "Image Processing",
  },
];

export const certifications = [
  "Google Coding Competition - Farewell Round A Achievement",
  "Robotic Process Automation Workshop - UAF Computing Society",
  "Cohere Hackathon Participation",
  "Command Line Basics in Linux - Coursera",
  "Frontend Development Course - Udemy",
  "7 Days Backend Web Development Bootcamp - Google DSC & Devtown",
];

export const awards = [
  {
    title: "UN Women 'You Go Girl!' Exchange Program",
    description:
      "Selected for fully funded D4WEE Korea Exchange Visit Program organized by UN Women & KOICA",
    year: "2025",
  },
  {
    title: "Prime Minister Youth Laptop Scheme",
    description: "Merit-based laptop award from Prime Minister Youth Programme",
    year: "2023",
  },
  {
    title: "Merit-Based Scholarship",
    description: "University scholarship for outstanding academic performance",
    year: "2023",
  },
];

export const services = [
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end web solutions from responsive frontends to powerful backend systems.",
    icon: "layers",
  },
  {
    title: "Frontend Development",
    description:
      "Creating responsive, interactive user interfaces with React.js, HTML, CSS, and JavaScript.",
    icon: "layout",
  },
  {
    title: "Backend & Database",
    description:
      "Building APIs, server-side logic, and optimized database systems with PHP, MySQL, and Supabase.",
    icon: "database",
  },
];
