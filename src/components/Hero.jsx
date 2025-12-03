import { Github, Linkedin, Mail, Phone, MapPin, Download, Code2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/2 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8 hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-gray-700">Available for Full-Stack Opportunities</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Sachin Patidar
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Senior Software Engineer
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            MERN/MEAN Full-Stack Developer • React & Angular Specialist
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-gray-600">
            <div className="flex items-center gap-2 hover:text-purple-600 transition-colors">
              <MapPin className="w-5 h-5" />
              <span>HSR Layout, Bengaluru</span>
            </div>
            <a href="mailto:sachinstteyn@gmail.com" className="flex items-center gap-2 hover:text-purple-600 transition-colors">
              <Mail className="w-5 h-5" />
              <span>sachinstteyn@gmail.com</span>
            </a>
            <a href="tel:+919111978172" className="flex items-center gap-2 hover:text-purple-600 transition-colors">
              <Phone className="w-5 h-5" />
              <span>+91 9111978172</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://www.linkedin.com/in/sachin-patidar28"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/patidsx1/PortFolio-Sachin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View GitHub
            </a>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-indigo-600 mb-2">6+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-pink-600 mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
