import { Briefcase, Award, TrendingUp, Users } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Briefcase,
      title: "Current Role",
      description: "Assistant Manager at Genpact",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Expertise",
      description: "MERN/MEAN Full Stack and UI Development",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Impact",
      description: "28% Performance Improvements",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Mentoring 4+ Junior Developers",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const experience = [
    {
      company: "Genpact",
      role: "Full-Stack/UI Developer (Assistant Manager)",
      period: "Sep 2023 – Present",
      achievements: [
        "Built responsive SPAs using React.js, Angular, JavaScript and TypeScript, increasing user engagement by 25%",
        "Developed RESTful APIs using Express.js and Node.js with MongoDB integration",
        "Automated frontend development using Lovable AI, reducing time by 30%",
        "Optimized Angular performance with lazy loading, reducing load times by 25%"
      ]
    },
    {
      company: "Msys Technologies",
      role: "UI/MEAN-Stack Developer (Software Engineer)",
      period: "Apr 2022 – Sep 2023",
      achievements: [
        "Developed Angular UI for Aveva product using MEAN Stack",
        "Implemented Next.js SSR/SSG, improving SEO and performance by 25%",
        "Created Node.js/Express.js services with MongoDB persistence",
        "Integrated jQuery, D3, ExcelJS, Okta, JWT Auth"
      ]
    },
    {
      company: "Capgemini",
      role: "UI Developer (Senior Analyst)",
      period: "Jul 2019 – Apr 2022",
      achievements: [
        "Designed responsive landing pages using Angular and Bootstrap",
        "Built MEAN Stack backend via Node.js/Express.js APIs",
        "Automated data workflows using Python, streamlining pipelines by 40%"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dynamic Full-Stack Developer with 6+ years of experience in UI/Frontend and Backend engineering.
            Proven success in building scalable applications with cutting-edge technologies.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-transparent hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Professional Journey</h3>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">{exp.company}</h4>
                    <p className="text-lg text-purple-600 font-semibold">{exp.role}</p>
                  </div>
                  <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-600 mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
