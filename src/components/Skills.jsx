import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Data Science", num: "01",
    skills: [
      { name: "Python", pct: 88 }, { name: "Machine Learning", pct: 78 },
      { name: "TensorFlow", pct: 70 }, { name: "Pandas", pct: 82 },
      { name: "Scikit-learn", pct: 75 }, { name: "Data Analysis", pct: 80 },
    ],
    color: "#F97316",
  },
  {
    title: "IoT & Embedded", num: "02",
    skills: [
      { name: "ESP32", pct: 82 }, { name: "Arduino", pct: 78 },
      { name: "MQTT Protocol", pct: 74 }, { name: "Sensor Integration", pct: 80 },
      { name: "SQLite", pct: 72 }, { name: "Embedded C", pct: 70 },
    ],
    color: "#EF4444",
  },
  {
    title: "Web & App Dev", num: "03",
    skills: [
      { name: "React", pct: 68 }, { name: "Flask", pct: 74 },
      { name: "Node.js", pct: 65 }, { name: "HTML & CSS", pct: 85 },
      { name: "JavaScript", pct: 70 }, { name: "Flutter", pct: 60 },
    ],
    color: "#F97316",
  },
  {
    title: "Tools & Platforms", num: "04",
    skills: [
      { name: "Git & GitHub", pct: 82 }, { name: "Firebase", pct: 70 },
      { name: "Socket.io", pct: 65 }, { name: "OpenStreetMap", pct: 68 },
      { name: "MongoDB", pct: 62 }, { name: "REST APIs", pct: 76 },
    ],
    color: "#EF4444",
  },
];

function SkillItem({ name, pct, color, animate }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 text-sm">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{pct}%</span>
      </div>
      <div className="h-0.5 rounded-none overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          className="h-full"
          initial={{ width: 0 }}
          animate={{ width: animate ? `${pct}%` : 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
          style={{ background: `linear-gradient(90deg,${color},${color}70)`, boxShadow: `0 0 6px ${color}50` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative" ref={ref}
      style={{ background: "linear-gradient(180deg,#080808 0%,#0A0A0A 100%)" }}>
      {/* Big background text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
        style={{ fontSize: "18rem", color: "rgba(249,115,22,0.02)", fontFamily: "Bebas Neue", lineHeight: 1 }}>
        SKILLS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="reveal mb-14">
          <p className="section-tag">Technical Skills</p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white mb-2">Skill Arsenal</h2>
          <div className="orange-line" />
          <p className="text-gray-500 text-sm max-w-lg">Combining hardware expertise with software innovation across 4 domains</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 reveal">
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              whileHover={{ y: -3 }}
              className="dark-card p-6"
              style={{ borderColor: `${cat.color}15` }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-['Bebas_Neue'] text-3xl" style={{ color: cat.color }}>{cat.num}</span>
                  <div className="w-px h-8" style={{ background: `${cat.color}30` }} />
                  <h3 className="text-white font-semibold text-base">{cat.title}</h3>
                </div>
                <div className="w-2 h-2 rounded-full" style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
              </div>

              {cat.skills.map(s => (
                <SkillItem key={s.name} {...s} color={cat.color} animate={visible} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Soft skills row */}
        <div className="reveal mt-8">
          <div className="dark-card p-6">
            <h3 className="text-white font-semibold text-sm mb-5 font-mono uppercase tracking-wider" style={{ color: "#F97316" }}>
              // Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Problem Solving", "Analytical Thinking", "Technical Research", "Project Development", "Team Collaboration", "Fast Learner"].map(s => (
                <motion.span key={s} whileHover={{ scale: 1.05, y: -2 }}
                  className="text-sm px-4 py-2 font-medium cursor-default transition-all duration-200"
                  style={{ border: "1px solid rgba(249,115,22,0.2)", color: "#d1d5db", background: "rgba(249,115,22,0.05)" }}>
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
