import { Home, Briefcase, User, Code2 } from "lucide-react";

export default function Navbar({ setCurrentPage, setWorkPage }) {
  const scrollToSection = (sectionId) => {
    setCurrentPage("home");
    setWorkPage(null);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <nav className="p-4 shadow-lg bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1
          className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
          onClick={() => {
            setCurrentPage("home");
            setWorkPage(null);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Sachin Patidar
        </h1>

        <ul className="flex gap-8 text-gray-600 font-medium">
          <li 
            className="cursor-pointer hover:text-purple-600 transition-colors flex items-center gap-2"
            onClick={() => {
              setCurrentPage("home");
              setWorkPage(null);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </li>
          
          <li 
            className="cursor-pointer hover:text-purple-600 transition-colors flex items-center gap-2"
            onClick={() => scrollToSection("about")}
          >
            <User className="w-4 h-4" />
            <span>About</span>
          </li>
          
          <li 
            className="cursor-pointer hover:text-purple-600 transition-colors flex items-center gap-2"
            onClick={() => scrollToSection("skills")}
          >
            <Code2 className="w-4 h-4" />
            <span>Skills</span>
          </li>

          <li 
            className="cursor-pointer hover:text-purple-600 transition-colors flex items-center gap-2"
            onClick={() => scrollToSection("projects")}
          >
            <Briefcase className="w-4 h-4" />
            <span>Projects</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
