import { BarChart3, Cloud, Code2, Database, ExternalLink, Github } from "lucide-react";

export default function Projects({ setCurrentPage, setWorkPage }) {
  const skills = [
    {
      category: "Frontend",
      techs: ["React.js", "Angular", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "SCSS", "Tailwind CSS", "Bootstrap", "MUI", "Redux", "RXJS"]
    },
    {
      category: "Backend",
      techs: ["Node.js", "Express.js", "RESTful APIs", "Python"]
    },
    {
      category: "Database & Tools",
      techs: ["MongoDB", "MySQL", "AWS", "Git/GitHub", "Docker", "CI/CD", "Jest", "Jasmine", "Jira", "Azure DevOps"]
    },
    {
      category: "AI Tools",
      techs: ["GitHub Copilot", "Lovable", "ChatGPT", "Claude AI", "Tabnine"]
    }
  ];

  const projects = [
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics dashboard with interactive charts, real-time data visualization, and performance metrics. Built with React.js and Recharts.",
      icon: BarChart3,
      gradient: "from-blue-500 to-cyan-500",
      tags: ["React", "Recharts", "Tailwind", "Analytics"],
      action: () => {
        setCurrentPage("work");
        setWorkPage("dashboard");
      }
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with 7-day forecasts, hourly updates, and dynamic backgrounds. Features city search and detailed weather metrics.",
      icon: Cloud,
      gradient: "from-purple-500 to-pink-500",
      tags: ["React", "Lucide Icons", "Glassmorphism", "API"],
      action: () => {
        setCurrentPage("work");
        setWorkPage("weather");
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Skills Section */}
        <div id="skills" className="mb-20">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">Technologies I work with daily</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillSet, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{skillSet.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillSet.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-700 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">Showcasing my UI/UX design and development skills</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div
                  key={idx}
                  onClick={project.action}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${project.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-4 transition-all">
                      <span>View Project</span>
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
