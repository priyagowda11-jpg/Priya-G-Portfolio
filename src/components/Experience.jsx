import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaChartLine } from "react-icons/fa";

const experiences = [
  {
    role: "Data Analyst Intern",
    org: "Elythra EduFi Tech Solutions",
    duration: "4 Months · Ongoing",
    current: true,
    icon: FaChartLine,
    accent: "#14B8A6",
    bullets: [
      "Working with real datasets to support data-driven decision making",
      "Building reporting and analysis workflows for the organisation",
    ],
    techs: ["Python", "Data Analysis", "Excel"],
  },
  {
    role: "Full Stack Web Development Intern",
    org: "Pantech AI (Pantech Prolabs India Pvt Ltd)",
    duration: "3 Months · Completed June 2024",
    current: false,
    icon: FaCode,
    accent: "#3B82F6",
    bullets: [
      "Built and deployed a full-stack Instagram Clone",
      "Developed responsive web interfaces using React.js and Flask",
      "Maintained codebases using Git and GitHub",
    ],
    techs: ["React", "Flask", "Git", "GitHub"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-16">
          <p className="section-label">Experience</p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white">
            Where I've{" "}
            <span style={{ background: "linear-gradient(135deg,#3B82F6,#14B8A6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Worked
            </span>
          </h2>
        </div>

        <div className="reveal relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px hidden sm:block" style={{ background: "linear-gradient(180deg, rgba(59,130,246,0.4), rgba(20,184,166,0.1))" }} />

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div key={i} whileHover={{ scale: 1.005 }} className="relative sm:pl-16">
                  {/* Dot */}
                  <div className="absolute left-0 top-6 w-12 h-12 rounded-xl items-center justify-center hidden sm:flex"
                    style={{ background: `linear-gradient(135deg, ${exp.accent}25, ${exp.accent}10)`, border: `1px solid ${exp.accent}30`, boxShadow: `0 4px 14px ${exp.accent}20` }}>
                    <Icon size={16} style={{ color: exp.accent }} />
                  </div>

                  <div className="glass-card p-6" style={{ border: `1px solid ${exp.accent}18` }}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3 sm:hidden">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `linear-gradient(135deg, ${exp.accent}25, ${exp.accent}10)`, color: exp.accent }}>
                          <Icon size={14} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white font-['Syne'] font-bold text-lg leading-tight">{exp.role}</h3>
                        <p className="text-slate-400 text-sm mt-0.5">{exp.org}</p>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full font-mono flex items-center gap-1.5"
                        style={{ background: `${exp.accent}12`, color: exp.accent, border: `1px solid ${exp.accent}25` }}>
                        {exp.current && <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: exp.accent }} />}
                        {exp.duration}
                      </span>
                    </div>

                    <ul className="space-y-1.5 mb-4">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.accent }} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.techs.map(t => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full font-mono"
                          style={{ background: `${exp.accent}10`, color: exp.accent, border: `1px solid ${exp.accent}20` }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
