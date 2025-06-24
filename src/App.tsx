import React, { useState, useEffect } from "react";
import bangkitImg from "./assets/bangkit.jpg";
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

interface Project {
  name: string;
  desc: string;
  stack: string[];
  link: string;
  img: string;
  featured?: boolean;
}

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

const projects: Project[] = [
  {
    name: "Dev Dashboard",
    desc: "A performance dashboard for developers with real-time insights and analytics.",
    stack: ["React", "Node.js", "Chart.js"],
    link: "https://github.com/andisugara",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    featured: true,
  },
  {
    name: "Mobile Wallet App",
    desc: "A fintech wallet app built with Flutter and Firebase for seamless transactions.",
    stack: ["Flutter", "Firebase"],
    link: "https://github.com/andisugara/wallet-app",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop",
    featured: true,
  },
  {
    name: "Portfolio Generator",
    desc: "CLI tool to generate sleek developer portfolios with customizable themes.",
    stack: ["Python", "Markdown"],
    link: "https://github.com/andisugara/portfolio-gen",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
  },
];

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
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
            <button className="group border-2 border-white/20 hover:border-white/40 backdrop-blur-sm font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5">
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </span>
            </button>
          </div>

          <div className="flex gap-6">
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
                {skills.technical.map((skill, i) => (
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
                {skills.soft.map((skill, i) => (
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
            Some of my recent work that I'm proud of
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={project.name}
                className={`group relative bg-gradient-to-br from-white/5 to-white/10 rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 ${
                  project.featured ? "md:col-span-1 lg:col-span-1" : ""
                }`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded-full text-xs font-semibold">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                    {project.name}
                  </h4>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm group-hover:gap-3 transition-all duration-300"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
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
              <div className="relative flex items-start gap-8">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black" />
                <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-purple-300 mb-2">
                    Education
                  </h3>
                  <h4 className="text-lg font-semibold mb-2">
                    S1 Teknik Informatika – Universitas X
                  </h4>
                  <p className="text-gray-400 mb-3">2021–2026</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      Juara 2 LKS Tingkat Provinsi
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      Skripsi Terbaik 2026
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative flex items-start gap-8">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black" />
                <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-pink-300 mb-2">
                    Experience
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold">
                        Fullstack Developer @ PT ABC
                      </h4>
                      <p className="text-gray-400">2022–2023</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">
                        Ketua Pramuka – SMA 1 XYZ
                      </h4>
                      <p className="text-gray-400">Leadership Role</p>
                    </div>
                  </div>
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
              <div className="space-y-6">
                <div className="group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 placeholder-gray-400"
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 placeholder-gray-400"
                  />
                </div>
                <div className="group">
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 placeholder-gray-400 resize-none"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25">
                  Send Message
                </button>
              </div>
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
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors underline"
              >
                Download CV
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors underline"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;
