import React, { useState, useEffect } from "react";
import bangkitImg from "./assets/bangkit.jpg";
import webinarPemalang from "./assets/sosialisasi_pemalang.jpg";
import androidIntermediate from "./assets/android_intermediate.jpg";
import penerapanMl from "./assets/penerapan_ml.jpg";
import flutterTravelApp from "./assets/flutter_travel_app.jpg";
import flutterModernUI from "./assets/flutter_modern_ui.png";
import reactNativeFullstack from "./assets/react_native.jpg";
import cvAndiSugara from "./assets/CV-Andi-Sugara.pdf";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Download,
  ExternalLink,
  Code,
  Database,
  Users,
  Lightbulb,
  Target,
  ArrowRight,
  Star,
  ArrowUp,
  Lock,
} from "lucide-react";
import {
  SiDocker,
  SiFlutter,
  SiGit,
  SiKotlin,
  SiLaravel,
  SiPostman,
  SiReact,
  SiVuedotjs,
  SiWhatsapp,
} from "react-icons/si";

const skills = {
  technical: [
    { name: "React", color: "from-blue-400 to-cyan-400", icon: <SiReact /> },
    {
      name: "Vue",
      color: "from-green-400 to-emerald-400",
      icon: <SiVuedotjs />,
    },
    {
      name: "Laravel",
      color: "from-yellow-400 to-orange-400",
      icon: <SiLaravel />,
    },
    {
      name: "Kotlin",
      color: "from-purple-400 to-pink-400",
      icon: <SiKotlin />,
    },
    {
      name: "Flutter",
      color: "from-blue-500 to-indigo-500",
      icon: <SiFlutter />,
    },
    { name: "Docker", color: "from-cyan-400 to-blue-500", icon: <SiDocker /> },
    { name: "Git", color: "from-orange-400 to-red-400", icon: <SiGit /> },
    {
      name: "Postman",
      color: "from-orange-500 to-yellow-500",
      icon: <SiPostman />,
    },
  ],
  soft: [
    { name: "Leadership", icon: <Users className="w-4 h-4" /> },
    { name: "Public Speaking", icon: <Lightbulb className="w-4 h-4" /> },
    { name: "Team Collaboration", icon: <Target className="w-4 h-4" /> },
    { name: "Problem Solving", icon: <Code className="w-4 h-4" /> },
  ],
};

const projects = [
  {
    name: "Flight Clearance Information System",
    desc: "Led technical development of a comprehensive flight clearance management system for the Ministry of Foreign Affairs, streamlining diplomatic flight operations and enhancing inter-agency coordination.",
    stack: ["Laravel", "PHP", "SQL Server"],
    link: "#", // Internal project - no public link
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=200&fit=crop",
    featured: true,
    company: "Kabayan Consulting",
    role: "Technical Leader",
    status: "Internal Project",
    year: "2024",
  },
  {
    name: "Ministry Portal Management System",
    desc: "Developed a sophisticated management portal for the Indonesian Ministry of Foreign Affairs, facilitating efficient document processing and administrative workflows for diplomatic operations.",
    stack: ["Vue", "Typescript", "Tailwind", "Node.js"],
    link: "https://kemlu.go.id", // Replace with actual link if available
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop",
    featured: true,
    company: "Kabayan Consulting",
    role: "Frontend Developer",
    status: "Live Project",
    year: "2023",
  },
  {
    name: "Ilmate Management Portal",
    desc: "Built a comprehensive management platform designed to streamline organizational processes and enhance operational efficiency through intuitive user interfaces and robust backend integration.",
    stack: ["Vue", "Typescript", "Tailwind", "Node.js"],
    link: "https://ilmate.kemenperin.go.id", // Replace with actual link if available
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
    featured: false,
    company: "Kabayan Consulting",
    role: "Frontend Developer",
    status: "Live Project",
    year: "2023",
  },
  {
    name: "Belanja Ikan Marketplace",
    desc: "Developed a specialized e-commerce platform connecting fish vendors with customers, featuring real-time inventory management, secure payment integration, and location-based vendor discovery.",
    stack: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    link: "https://github.com/andisugara", // Replace with actual link if available
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=200&fit=crop",
    featured: false,
    company: "House Of Aplysit",
    role: "Full Stack Developer",
    status: "Live Project",
    year: "2020",
  },
  {
    name: "Assessment Center Platform",
    desc: "Confidential assessment and evaluation system designed for organizational talent management. Features comprehensive reporting and analytics capabilities.",
    stack: ["PHP", "Laravel", "PostgreSQL", "Bootstrap", "WebSocket"],
    link: "#",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=200&fit=crop",
    featured: false,
    company: "Kabayan Consulting",
    role: "Frontend Developer",
    status: "Confidential",
    year: "2024",
  },
  {
    name: "Inventory Management Application",
    desc: "Developed a comprehensive inventory management application for PT Tiara Indoprima, enabling efficient tracking and reporting of stock levels and transactions.",
    stack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    link: "#", // Internal project - no public link
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop",
    featured: false,
    company: "Goldstep Indonesia",
    role: "Web Developer",
    status: "Internal Project",
    year: "2021",
  },
  {
    name: "Hospital Information Management System (SIMRS)",
    desc: "Built a hospital management system for RS Tiara Sella, streamlining patient records, billing, and operational workflows.",
    stack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    link: "#", // Internal project - no public link
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop",
    featured: false,
    company: "Goldstep Indonesia",
    role: "Web Developer",
    status: "Internal Project",
    year: "2021",
  },
  {
    name: "Learning Management System",
    desc: "Developed a learning management system for Universitas Muhammadiyah Tasikmalaya, enabling seamless course management and student engagement.",
    stack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    link: "#", // Internal project - no public link
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=200&fit=crop",
    featured: false,
    company: "Prilude Digital Indonesia",
    role: "Software Developer",
    status: "Internal Project",
    year: "2021",
  },
  {
    name: "Greeny App",
    desc: "Built an environmental waste management solution to promote sustainable practices and efficient waste tracking.",
    stack: ["Kotlin", "Android", "Firebase", "MySQL"],
    link: "#", // Internal project - no public link
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=200&fit=crop",
    featured: false,
    company: "Prilude Digital Indonesia",
    role: "Software Developer",
    status: "Internal Project",
    year: "2021",
  },
];

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisibleScrollTop, setIsVisibleScrollTop] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisibleScrollTop(true);
      } else {
        setIsVisibleScrollTop(false);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsVisibleScrollTop(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }
    setIsLoading(true);

    const botToken = "7989932088:AAFiBerJ8SizVpTuZ02wXTf7eXAheY7JoHw"; // Ganti dengan token bot Telegram Anda
    const chatId = "1379884449"; // Ganti dengan ID chat Telegram Anda
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const text = `New Message from Portfolio:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    try {
      const response = await fetch(telegramApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("An error occurred. Please try again.");
    }
    setIsLoading(false);
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <main className="bg-black text-white font-sans leading-relaxed overflow-x-hidden">
      {/* Animated cursor follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isVisible ? 1 : 0})`,
        }}
      />

      {/* Hero Section with Enhanced Animations */}
      <section className="min-h-screen px-6 md:px-20 py-24 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          } z-10`}
        >
          <div className="mb-6">
            <div className="inline-block p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 mb-6">
              <Code className="w-8 h-8 text-purple-400" />
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl font-black tracking-tight bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
            Andi Sugara
          </h1>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              Fullstack Developer
            </p>
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Crafting digital experiences with passion and precision.
            Specializing in modern web technologies and scalable solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://wa.me/6282240356763?text=Hi%20Andi%2C%20I%20would%20like%20to%20hire%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="flex items-center gap-2">
                Hire Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href={cvAndiSugara}
              download="CV-Andi-Sugara.pdf"
              className="group border-2 border-white/20 hover:border-white/40 backdrop-blur-sm font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </span>
            </a>
          </div>
          <div className="flex gap-2">
            {[
              {
                icon: <Github className="w-7 h-7" />,
                hover: "hover:text-gray-300",
                url: "https://github.com/andisugara",
              },
              {
                icon: <Linkedin className="w-7 h-7" />,
                hover: "hover:text-blue-400",
                url: "https://www.linkedin.com/in/andi-sugara/",
              },
              {
                icon: <Instagram className="w-7 h-7" />,
                hover: "hover:text-pink-400",
                url: "https://www.instagram.com/andisugara_/",
              },
              {
                icon: <Mail className="w-7 h-7" />,
                hover: "hover:text-red-400",
                url: "mailto:sugaraandi9@gmail.com",
              },
              {
                icon: <SiWhatsapp className="w-7 h-7" />,
                hover: "hover:text-green-400",
                url: "https://wa.me/6282240356763",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border border-white/10 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/5 ${social.hover}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Glass Morphism */}
      <section id="about" className="px-6 md:px-20 py-20 max-w-6xl mx-auto">
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I’m a developer who builds impactful solutions across frontend,
                backend, and mobile. Passionate about system architecture and
                smooth user experience, I thrive in team environments and love
                learning. Currently, I’m growing toward becoming a Tech Lead —
                not just technically strong, but also emotionally aware. For me,
                tech is a tool to create real-world value.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "15+", label: "Projects Done" },
                { number: "5+", label: "Happy Clients" },
                { number: "5+", label: "Technologies" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3">
                <Database className="w-8 h-8 text-purple-400" />
                Technical Stack
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.technical.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-4 bg-gradient-to-r from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 rounded-2xl border border-white/10 cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <div className="font-semibold text-white group-hover:text-gray-100">
                        {skill.name}
                      </div>
                    </div>
                    <div
                      className={`w-full h-2 bg-gradient-to-r ${skill.color} rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-pink-400" />
                Soft Skills
              </h3>
              <div className="space-y-4">
                {skills.soft.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl border border-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-300"
                  >
                    <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Bangkit Academy",
                img: bangkitImg,
                issuer:
                  "Bangkit Team. supported by Kemendikbudristek, Google, Gojek, Tokopedia, and Traveloka",
              },
              {
                name: "Socialization of SPBE Implementation in Pemalang Regency",
                img: webinarPemalang,
                issuer: "Kabayan Group",
              },
              {
                name: "Android Intermediate",
                img: androidIntermediate,
                issuer: "Dicoding",
              },
              {
                name: "Penerapan Machine Learning di Android",
                img: penerapanMl,
                issuer: "Dicoding",
              },
              {
                name: "Flutter 2.0 Build Travel App",
                img: flutterTravelApp,
                issuer: "BuildWithAngga",
              },
              {
                name: "Flutter Modern UI Design",
                img: flutterModernUI,
                issuer: "BuildWithAngga",
              },
              {
                name: "Fullstack React Native",
                img: reactNativeFullstack,
                issuer: "BuildWithAngga",
              },
            ].map((cert, i) => (
              <div
                key={i}
                className="group relative p-5 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.img}
                    alt={cert.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-2xl rounded-b-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="mt-5">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Issued by {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            A curated selection of professional projects showcasing technical
            expertise and impact
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className={`group relative bg-gradient-to-br from-white/5 to-white/10 rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Live Project"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : project.status === "Confidential"
                        ? "bg-red-500/20 text-red-400 border border-red-500/30"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }`}
                  >
                    {project.status}
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Company & Role */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-purple-400 font-medium">
                      {project.company}
                    </span>
                    <span className="text-xs text-gray-500">
                      {project.year}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                    {project.name}
                  </h4>

                  <p className="text-xs text-gray-400 mb-2 font-medium">
                    {project.role}
                  </p>

                  <p className="text-sm text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Link */}
                  {project.status !== "Confidential" &&
                  project.status !== "Internal Project" ? (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm group-hover:gap-3 transition-all duration-300"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-gray-500 font-medium text-sm">
                      <Lock className="w-4 h-4" />
                      {project.status === "Confidential"
                        ? "Confidential Project"
                        : "Internal Use Only"}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm">
              * Some projects are confidential or for internal use only due to
              privacy and security requirements. Not all projects are included;
              this is just a sample selection.
            </p>
          </div>
        </div>
      </section>

      {/* Education & Experience with Timeline */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Journey
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />

            <div className="space-y-12">
              {/* Education */}
              <div className="relative flex items-start gap-8">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black" />
                <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-purple-300 mb-2">
                    Education
                  </h3>
                  <h4 className="text-lg font-semibold mb-2">
                    Bachelor of Informatics Engineering – Bandung University of
                    Technology
                  </h4>
                  <p className="text-gray-400 mb-3">
                    2022–Present (Currently Pursuing Undergraduate Degree)
                  </p>
                </div>
              </div>

              {/* Experience 1 */}
              <div className="relative flex items-start gap-8">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black" />
                <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-pink-300 mb-2">
                    Professional Experience
                  </h3>
                  <h4 className="text-lg font-semibold">
                    Frontend Developer at Kabayan Consulting
                  </h4>
                  <p className="text-gray-400 mb-4">July 2023–Present</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      Developed comprehensive Management Portal for the Ministry
                      of Foreign Affairs
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      Built and maintained Ilmate Management Portal system
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      Designed and implemented Assessment Center platform for MA
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      Led technical development of Flight Clearance Information
                      System for Ministry of Foreign Affairs
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative flex items-start gap-8">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black" />
                <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-pink-300 mb-2">
                    Professional Development
                  </h3>
                  <h4 className="text-lg font-semibold">
                    Mobile Development Cohort - Bangkit Academy
                  </h4>
                  <p className="text-gray-400 mb-2">
                    <span className="text-purple-300 font-medium">
                      Powered by
                    </span>{" "}
                    Google, GoTo, Tokopedia, Traveloka
                  </p>
                  <p className="text-gray-400">August 2024–January 2025</p>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="relative flex items-start gap-8">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black" />
                <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-pink-300 mb-2">
                    Professional Experience
                  </h3>
                  <h4 className="text-lg font-semibold">
                    Web Developer at Goldstep Indonesia
                  </h4>
                  <p className="text-gray-400 mb-4">
                    October 2020–October 2021
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      Developed comprehensive Inventory Management Application
                      for PT Tiara Indoprima
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      Built Hospital Information Management System (SIMRS) for
                      RS Tiara Sella
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      Created internal Currency Converter Application
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience 4 */}
              <div className="relative flex items-start gap-8">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black" />
                <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-pink-300 mb-2">
                    Professional Experience
                  </h3>
                  <h4 className="text-lg font-semibold">
                    Software Developer at Prilude Digital Indonesia
                  </h4>
                  <p className="text-gray-400 mb-4">
                    October 2020–October 2021
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      Developed Learning Management System for Universitas
                      Muhammadiyah Tasikmalaya
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      Built Greeny App - Environmental waste management solution
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      Created DITSY Factory - End-to-end garment production
                      management system
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      Developed Qini Shop - E-commerce platform similar to
                      Alfagift and Klik Indomaret
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience 5 */}
              <div className="relative flex items-start gap-8">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black" />
                <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-pink-300 mb-2">
                    Early Career Experience
                  </h3>
                  <h4 className="text-lg font-semibold">
                    Junior Developer at House Of Aplysit
                  </h4>
                  <p className="text-gray-400 mb-4">June 2020–October 2020</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      Developed "Belanja Ikan" - Online fish marketplace
                      platform
                    </li>
                  </ul>
                </div>
              </div>

              {/* Education 2 */}
              <div className="relative flex items-start gap-8">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black" />
                <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-purple-300 mb-2">
                    Education
                  </h3>
                  <h4 className="text-lg font-semibold mb-2">
                    SMKN 3 Banjar - Vocational High School
                  </h4>
                  <p className="text-gray-400 mb-4">
                    2017–2020 (Information Technology Major)
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      <span className="font-medium text-yellow-400">
                        🏆 City Champion
                      </span>{" "}
                      - IT Software Solutions for Business Competition
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      <span className="font-medium text-yellow-400">
                        🥉 Provincial Finalist
                      </span>{" "}
                      - IT Software Solutions for Business Competition
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      <span className="font-medium text-green-400">
                        👑 Squad Leader
                      </span>{" "}
                      - Pioneer Scout Organization (Pramuka)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind? Let's discuss how we can bring it to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-purple-400" />
                Get in Touch
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 placeholder-gray-400"
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    value={email}
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 placeholder-gray-400"
                  />
                </div>
                <div className="group">
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 placeholder-gray-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
              {status != "" && <p className="mt-4 text-sm">{status}</p>}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Github className="w-6 h-6" />,
                      label: "GitHub",
                      handle: "@andisugara",
                    },
                    {
                      icon: <Linkedin className="w-6 h-6" />,
                      label: "LinkedIn",
                      handle: "Andi Sugara",
                    },
                    {
                      icon: <Instagram className="w-6 h-6" />,
                      label: "Instagram",
                      handle: "@andisugara",
                    },
                  ].map((social, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    >
                      <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                        {social.icon}
                      </div>
                      <div>
                        <div className="font-semibold">{social.label}</div>
                        <div className="text-gray-400 text-sm">
                          {social.handle}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t border-white/10 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="px-6 md:px-20 py-12">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-lg font-semibold mb-2">Andi Sugara</div>
              <div className="text-gray-400 text-sm">
                © 2025 All rights reserved
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="text-gray-400 text-sm">
                Powered by Claude AI, Vite, and React (TypeScript). Hosted on
                GitHub Pages.
              </div>
            </div>
          </div>
        </div>
        {/* Scroll to Top Button */}
        {isVisibleScrollTop && (
          <button
            onClick={() => scrollToSection()}
            className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-500 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </footer>
    </main>
  );
};

export default App;
