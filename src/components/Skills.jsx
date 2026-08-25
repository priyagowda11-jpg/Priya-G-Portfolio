import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "AI & Machine Learning",
    color: "#3B82F6",
    skills: [
      { name: "Python", level: 88 },
      { name: "Machine Learning", level: 78 },
      { name: "Artificial Intelligence", level: 75 },
      { name: "Pandas & NumPy", level: 80 },
      { name: "Scikit-learn", level: 72 },
    ],
  },
  {
    category: "Web & Backend",
    color: "#14B8A6",
    skills: [
      { name: "Flask", level: 73 },
      { name: "React.js", level: 65 },
      { name: "HTML5 & CSS3", level: 85 },
      { name: "JavaScript", level: 68 },
      { name: "Firebase", level: 68 },
      { name: "Git & GitHub", level: 82 },
    ],
  },
  {
    category: "IoT & Embedded",
    color: "#a78bfa",
    skills: [
      { name: "ESP32 & Arduino", level: 80 },
      { name: "Sensor Integration", level: 76 },
      { name: "Embedded C", level: 70 },
      { name: "C (Basics)", level: 65 },
    ],
  },
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: animate ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)`, boxShadow: `0 0 8px ${color}60` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28 relative" ref={ref}
      style={{ background: "linear-gradient(180deg, #0B0F19 0%, #0D1220 50%, #0B0F19 100%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-16 text-center">
          <p className="section-label justify-center">Technical Skills</p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white">
            My Skill{" "}
            <span style={{ background: "linear-gradient(135deg,#3B82F6,#14B8A6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Arsenal
            </span>
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">Combining hardware expertise with software innovation to build intelligent systems</p>
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-6 reveal">
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              whileHover={{ y: -4 }}
              className="glass-card p-6"
              style={{ border: `1px solid ${group.color}18` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ background: group.color, boxShadow: `0 0 10px ${group.color}` }} />
                <h3 className="text-white font-semibold text-sm">{group.category}</h3>
              </div>

              {group.skills.map((s) => (
                <SkillBar key={s.name} {...s} color={group.color} animate={visible} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <div className="reveal mt-12">
          <div className="glass-card p-6 text-center">
            <p className="text-slate-500 text-xs font-mono mb-4 uppercase tracking-widest">Full Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Python","JavaScript","C (Basics)","HTML5 & CSS3","Flask","React.js","ESP32 & Arduino","Scikit-learn","Pandas & NumPy","Firebase","Git & GitHub","VS Code"].map(t => (
                <motion.span key={t} whileHover={{ scale: 1.08, y: -2 }}
                  className="text-xs px-3 py-1.5 rounded-full font-mono cursor-default"
                  style={{ background: "rgba(59,130,246,0.08)", color: "#94a3b8", border: "1px solid rgba(59,130,246,0.12)" }}>
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Soft skills */}
        <div className="reveal mt-6">
          <div className="glass-card p-6 text-center" style={{ border: "1px solid rgba(20,184,166,0.15)" }}>
            <p className="text-slate-500 text-xs font-mono mb-4 uppercase tracking-widest">Soft Skills</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Problem Solving","Analytical Thinking","System Design","Technical Research"].map(t => (
                <motion.span key={t} whileHover={{ scale: 1.08, y: -2 }}
                  className="text-xs px-3 py-1.5 rounded-full font-mono cursor-default"
                  style={{ background: "rgba(20,184,166,0.08)", color: "#14B8A6", border: "1px solid rgba(20,184,166,0.15)" }}>
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
