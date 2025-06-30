import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/joki/logo.png";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Presentation,
  PenTool,
  Image,
  BookOpen,
  Star,
  Shield,
  Zap,
  Users,
  MessageCircle,
  ArrowRight,
  Award,
  Target,
  Lightbulb,
  Crown,
  ArrowUp,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const schoolServices = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    name: "PR Harian",
    description: "Menjawab soal harian semua mapel",
    duration: "Reg: 1 hari / Exp: 5 jam",
    price: "10k / 15k",
    category: "daily",
    featured: false,
  },
  {
    icon: <FileText className="w-6 h-6" />,
    name: "Makalah Mini ",
    description: "< 7 hlm (sudah termasuk Cover)",
    duration: "Reg: 2 hari / Exp: 1 hari",
    price: "15k / 20k",
    category: "paper",
    featured: false,
  },
  {
    icon: <FileText className="w-6 h-6" />,
    name: "Makalah Umum",
    description: "> 7 hlm (sudah termasuk Cover)",
    duration: "Reg: 2 hari / Exp: 1 hari",
    price: "25k / 30k",
    category: "paper",
    featured: true,
  },
  {
    icon: <Presentation className="w-6 h-6" />,
    name: "PPT Sekolah <7",
    description: "Presentasi di bawah 7 slide",
    duration: "Reg: 2 hari / Exp: 1 hari",
    price: "20k / 25k",
    category: "presentation",
    featured: false,
  },
  {
    icon: <Presentation className="w-6 h-6" />,
    name: "PPT Sekolah >7",
    description: "Presentasi 7+ slide (max 15)",
    duration: "Reg: 2 hari / Exp: 1 hari",
    price: "30k / 35k",
    category: "presentation",
    featured: true,
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    name: "Karya Kreatif",
    description: "Puisi, cerpen, pantun, narasi, dll.",
    duration: "1-2  hari",
    price: "10k – 40k",
    category: "creative",
    featured: false,
  },
  {
    icon: <Image className="w-6 h-6" />,
    name: "Poster Edukasi",
    description: "Poster tugas, promosi event sekolah, dsb",
    duration: "1–2 hari",
    price: "40k – 65k",
    category: "design",
    featured: false,
  },
  {
    icon: <Award className="w-6 h-6" />,
    name: "Laporan Praktik",
    description: "Laporan sains/praktikum non-hitungan",
    duration: "3 hari",
    price: "100k",
    category: "report",
    featured: true,
  },
];

const collegeServices = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    name: "Tugas Harian",
    description: "Menjawab soal/tugas mandiri non-coding",
    duration: "Reg: 1 hari / Exp: 5 jam",
    price: "15k / 20k",
    category: "daily",
    featured: false,
  },
  {
    icon: <FileText className="w-6 h-6" />,
    name: "Makalah Akademik",
    description: "sudah termasuk Cover",
    duration: "Reg: 2–4 hari",
    price: "40k / 70k",
    category: "paper",
    featured: true,
  },
  {
    icon: <Presentation className="w-6 h-6" />,
    name: "PPT Kuliah <7",
    description: "Presentasi kuliah < 7 slide",
    duration: "Reg: 2 hari / Exp: 1 hari",
    price: "20k / 25k",
    category: "presentation",
    featured: false,
  },
  {
    icon: <Presentation className="w-6 h-6" />,
    name: "PPT Kuliah >7",
    description: "Presentasi kuliah > 7 slide (max 20)",
    duration: "Reg: 2 hari / Exp: 1 hari",
    price: "35k / 45k",
    category: "presentation",
    featured: true,
  },
  {
    icon: <Award className="w-6 h-6" />,
    name: "Artikel Ilmiah",
    description: "Artikel 3–10 halaman (tanpa revisi dosen)",
    duration: "3–4 hari",
    price: "200k – 300k",
    category: "academic",
    featured: true,
  },
  {
    icon: <Image className="w-6 h-6" />,
    name: "Poster Kuliah",
    description: "Poster infografis presentasi tugas",
    duration: "1–2 hari",
    price: "40k – 65k",
    category: "design",
    featured: false,
  },
];

const generalServices = [
  {
    icon: <PenTool className="w-6 h-6" />,
    name: "Menjawab Survey Responden",
    description:
      "Membantu menjawab survey dengan akurasi tinggi. Harga disesuaikan dengan jumlah responden dan kompleksitas survey.",
    duration: "1–7 hari",
    price: "Mulai dari 50k",
    category: "survey",
    featured: false,
  },
  {
    icon: <FileText className="w-6 h-6" />,
    name: "Data Entry",
    description:
      "Input data ke sistem atau spreadsheet dengan cepat. Harga tergantung jumlah data dan kompleksitas.",
    duration: "1–7 hari",
    price: "Mulai dari 50k",
    category: "data-entry",
    featured: false,
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    name: "Technical Writer",
    description:
      "Penulisan dokumen teknis, panduan, atau artikel. Harga disesuaikan dengan panjang dan kompleksitas dokumen.",
    duration: "3–7 hari",
    price: "Harga mulai dari 10K",
    category: "writing",
    featured: true,
  },
];

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Pengerjaan Cepat",
    description: "Layanan regular dan express untuk kebutuhan mendesak",
    color: "from-yellow-400 to-orange-400",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Kualitas Terjamin",
    description: "Hasil berkualitas dengan revisi gratis hingga sempurna",
    color: "from-green-400 to-emerald-400",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Tim Berpengalaman",
    description: "Dikerjakan oleh mahasiswa dan profesional berpengalaman",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Konsultasi 24/7",
    description: "Siap membantu dan memberikan update progress kapan saja",
    color: "from-purple-400 to-pink-400",
  },
];

const testimonials = [
  {
    name: "Hanifa",
    role: "Mahasiswa S2",
    message:
      "Sangat membantu untuk tugas-tugas kuliah yang menumpuk. Kualitas bagus dan tepat waktu!",
    rating: 5,
  },
  {
    name: "Ardika",
    role: "SMA Kelas 12",
    message:
      "PPT untuk presentasi ujian sekolah hasilnya sangat memuaskan. Terima kasih!",
    rating: 5,
  },
  {
    name: "Rina A.",
    role: "Mahasiswa Sastra",
    message:
      "Makalah yang dikerjakan berkualitas tinggi dan sesuai dengan requirements dosen.",
    rating: 5,
  },
];

const JokiTugas: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisibleScrollTop, setIsVisibleScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState<"school" | "college" | "general">(
    "school"
  );

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

  const currentServices =
    activeTab === "school"
      ? schoolServices
      : activeTab === "college"
      ? collegeServices
      : generalServices;

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

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="px-6 md:px-20 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 text-white hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Personal Portfolio</span>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/6285846106063?text=Hi%20Mimin Joki Tugas%2C%20saya%20ingin%20pesan%20layanan%20JokiTugas%20sekarang."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
            >
              <SiWhatsapp className="w-4 h-4" />
              Order Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen px-6 md:px-20 py-24 flex flex-col items-center justify-center text-center relative overflow-hidden pt-32">
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
              <img src={Logo} alt="Logo" className="w-42 h-42 rounded-full" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
            Joki Tugas
          </h1>

          <div className="flex items-center justify-center gap-2 mb-6">
            <Crown className="w-6 h-6 text-yellow-400" />
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              Solusi Tugas Sekolah & Kuliah
            </p>
          </div>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Jasa pengerjaan tugas profesional untuk siswa SD-SMA dan mahasiswa
            S1 & Umum. Kualitas terjamin, harga terjangkau, dan pengerjaan tepat
            waktu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://wa.me/6285846106063?text=Hi%20Mimin Joki Tugas%2C%20saya%20tertarik%20dengan%20jasa%20joki%20tugas."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
            >
              <span className="flex items-center gap-2">
                <SiWhatsapp className="w-5 h-5" />
                Order Sekarang
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group border-2 border-white/20 hover:border-white/40 backdrop-blur-sm font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5"
            >
              <span className="flex items-center gap-2">
                Lihat Layanan
                <Target className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { number: "500+", label: "Tugas Selesai" },
              { number: "24/7", label: "Support" },
              { number: "98%", label: "Kepuasan" },
              { number: "Fast", label: "Delivery" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-4 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Mengapa Pilih Kami?
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Keunggulan layanan yang membuat kami berbeda
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${feature.color} bg-opacity-20 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Layanan Kami
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Paket lengkap untuk semua kebutuhan tugas akademik
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-full p-2 border border-white/10">
              <button
                onClick={() => setActiveTab("school")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "school"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Sekolah (SD-SMA)
              </button>
              <button
                onClick={() => setActiveTab("college")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "college"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Kuliah
              </button>
              <button
                onClick={() => setActiveTab("general")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300  ${
                  activeTab === "general"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Umum
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentServices.map((service, i) => (
              <div
                key={i}
                className={`group relative bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 ${
                  service.featured
                    ? "border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                    : ""
                }`}
              >
                {/* Featured Badge */}
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-xs font-semibold">
                      <Star className="w-3 h-3" />
                      Popular
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-400">
                      Durasi: {service.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-gray-400">
                      Harga:{" "}
                      <span className="text-white font-semibold">
                        {service.price}
                      </span>
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/6285846106063?text=Hi%20Andi%2C%20saya%20ingin%20order%20${service.name}%20-%20${service.description}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold py-3 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
                >
                  <SiWhatsapp className="w-4 h-4" />
                  Order Sekarang
                </a>
              </div>
            ))}
          </div>

          {/* Pricing Note */}
          <div className="text-center mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
            <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <p className="text-gray-300 mb-2">
              <strong>Keterangan Harga:</strong> Reg = Regular | Exp = Express
            </p>
            <p className="text-gray-400 text-sm">
              Harga dapat berubah tergantung kompleksitas tugas. Konsultasi
              gratis untuk estimasi yang lebih akurat.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Apa Kata Mereka
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Testimoni dari klien yang puas dengan layanan kami
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed italic">
                  "{testimonial.message}"
                </p>
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Siap Membantu Tugas Anda
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Jangan biarkan tugas menumpuk dan mengganggu aktivitas Anda.
              Hubungi kami sekarang untuk konsultasi gratis dan penawaran
              terbaik.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6285846106063?text=Halo%20Mimin Joki Tugas%2C%20saya%20ingin%20konsultasi%20gratis%20terkait%20layanan%20JokiTugas."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
              >
                <span className="flex items-center gap-2">
                  <SiWhatsapp className="w-5 h-5" />
                  Konsultasi Gratis
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="https://wa.me/6285846106063?text=Hai%20Mimin Joki Tugas%2C%20saya%20ingin%20bertanya%20dan%20diskusi%20tentang%20layanan%20JokiTugas."
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-white/20 hover:border-white/40 backdrop-blur-sm font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5"
              >
                <span className="flex items-center gap-2">
                  Tanya Jawab
                  <MessageCircle className="w-4 h-4" />
                </span>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <CheckCircle
                  className="w-4
                h-4 text-green-400"
                />
                <span>Revisi Gratis</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Waktu Fleksibel</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <Shield className="w-4 h-4 text-purple-400" />
                <span>Privasi Terjaga</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {isVisibleScrollTop && (
        <button
          onClick={scrollToSection}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </main>
  );
};

export default JokiTugas;
