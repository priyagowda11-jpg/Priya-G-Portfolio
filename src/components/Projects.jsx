import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaRobot, FaShieldAlt, FaLock, FaInfoCircle, FaMicrochip, FaHandsHelping, FaUserShield, FaLaptopCode } from "react-icons/fa";

const projects = [
  {
    id: "01",
    title: "AeroGrid AI Dashboard",
    category: "IoT + AI",
    description: "A real-time monitoring dashboard that streams ESP32 sensor data into a live React interface, giving instant visibility into environmental and system conditions.",
    techs: ["ESP32", "Python", "Flask", "React", "Firebase"],
    github: "#",
    live: null,
    icon: FaMicrochip,
    accent: "#3B82F6",
    glow: "rgba(59,130,246,0.25)",
    gradient: "from-[#3B82F6] to-[#6366f1]",
    tag: "Done",
  },
  {
    id: "02",
    title: "Asha Worker Website",
    category: "Web Development",
    description: "A social-welfare awareness website supporting ASHA workers — built with real organisational data to help the initiative reach and inform more people.",
    techs: ["HTML", "CSS", "JavaScript", "Flask"],
    github: null,
    live: null,
    icon: FaHandsHelping,
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.25)",
    gradient: "from-[#f59e0b] to-[#f97316]",
    tag: "Building",
  },
  {
    id: "03",
    title: "SecureOne",
    category: "Security",
    description: "A secure web application demonstrating robust authentication and data-protection practices, built to safeguard user information end-to-end.",
    techs: ["Python", "Flask", "JavaScript"],
    github: "#",
    live: null,
    icon: FaUserShield,
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.25)",
    gradient: "from-[#a78bfa] to-[#8b5cf6]",
    tag: "Done",
  },
  {
    id: "04",
    title: "Voting Prototype",
    category: "IoT + Security",
    description: "Hardware-software integrated prototype using an ESP32 microcontroller with QR-based voter verification, combining physical security with tamper-proof digital authentication.",
    techs: ["Python", "Flask", "ESP32", "QR Verification"],
    github: "#",
    live: null,
    icon: FaShieldAlt,
    accent: "#14B8A6",
    glow: "rgba(20,184,166,0.25)",
    gradient: "from-[#14B8A6] to-[#06b6d4]",
    tag: "Done",
  },
  {
    id: "05",
    title: "AI Fraud Detection",
    category: "Machine Learning",
    description: "An intelligent fraud detection engine using ML algorithms to analyze transaction patterns, detect anomalies, and flag suspicious activities in real-time with a Flask API backend.",
    techs: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/priyagowda11-jpg/ai-fraud-detection",
    live: null,
    icon: FaRobot,
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.25)",
    gradient: "from-[#ef4444] to-[#f97316]",
    tag: "Done",
  },
  {
    id: "06",
    title: "Personal Portfolio",
    category: "Web Development",
    description: "This live personal portfolio itself — showcasing projects, skills, and experience through a modern, animated interface.",
    techs: ["HTML", "CSS", "JavaScript"],
    github: null,
    live: "#",
    icon: FaLaptopCode,
    accent: "#10b981",
    glow: "rgba(16,185,129,0.25)",
    gradient: "from-[#10b981] to-[#14B8A6]",
    tag: "Live",
  },
];

const tagColor = {
  Done: "#10b981",
  Building: "#f59e0b",
  Live: "#3B82F6",
};

function TiltCard({ project }) {
  const cardRef = useRef(null);
  const shimmerRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;

  const onMove = (e) => {
    const card = cardRef.current;
    const shimmer = shimmerRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -14;
    const ry = ((x - cx) / cx) * 14;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`;
    card.style.boxShadow = `0 30px 70px ${project.glow}, 0 0 0 1px ${project.accent}25`;
    if (shimmer) {
      shimmer.style.background = `radial-gradient(280px circle at ${x}px ${y}px, rgba(255,255,255,0.05), transparent 70%)`;
    }
  };

  const onLeave = () => {
    const card = cardRef.current;
    const shimmer = shimmerRef.current;
    if (card) {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
      card.style.boxShadow = `0 4px 30px transparent, 0 0 0 1px ${project.accent}15`;
    }
    if (shimmer) shimmer.style.background = "none";
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      className="relative rounded-2xl cursor-default flex flex-col"
      style={{
        background: "rgba(17,24,39,0.7)",
        backdropFilter: "blur(20px)",
        border: `1px solid ${project.accent}18`,
        padding: "2rem",
        transition: "transform 0.15s ease-out, box-shadow 0.2s ease",
        willChange: "transform",
      }}
    >
      {/* Shimmer overlay */}
      <div ref={shimmerRef} className="absolute inset-0 rounded-2xl pointer-events-none z-10"
        style={{ transition: "background 0.06s" }} />

      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
          opacity: hovered ? 1 : 0
        }} />

      {/* Content */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <motion.div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
              style={{ boxShadow: hovered ? `0 12px 30px ${project.glow}` : "none" }}
            >
              <Icon size={22} className="text-white" />
            </motion.div>
            <div>
              <p className="text-xs font-mono mb-0.5" style={{ color: project.accent }}>{project.category}</p>
              <span className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: `${tagColor[project.tag]}15`, color: tagColor[project.tag], border: `1px solid ${tagColor[project.tag]}25` }}>
                {project.tag}
              </span>
            </div>
          </div>
          <span className="font-mono text-slate-700 text-sm font-bold">{project.id}</span>
        </div>

        <h3 className="text-white font-['Syne'] font-bold text-xl mb-3 leading-tight">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

        {/* Techs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techs.map(t => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full font-mono"
              style={{ background: `${project.accent}10`, color: project.accent, border: `1px solid ${project.accent}20` }}>
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 flex-wrap gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="flex items-center gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-mono transition-colors group">
                <FaGithub size={15} />
                <span className="group-hover:underline">GitHub</span>
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-mono transition-colors group">
                <FaExternalLinkAlt size={12} />
                <span className="group-hover:underline">Live</span>
              </a>
            )}
            {!project.github && !project.live && (
              <div className="flex items-center gap-2 text-slate-600 text-xs font-mono">
                <FaLock size={11} />
                <span>In Progress</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-16">
          <p className="section-label">Portfolio</p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white mb-4">
            My Recent{" "}
            <span style={{ background: "linear-gradient(135deg,#3B82F6,#14B8A6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Projects
            </span>
          </h2>
          <p className="text-slate-500 text-sm max-w-xl">Real-world engineering solutions at the intersection of AI, IoT, and security</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal mb-8">
          {projects.map(p => <TiltCard key={p.id} project={p} />)}
        </div>

        {/* Note */}
        <motion.div
          whileHover={{ scale: 1.005 }}
          className="glass-card p-5 flex items-start gap-4 reveal"
          style={{ border: "1px solid rgba(20,184,166,0.2)", background: "rgba(20,184,166,0.04)" }}
        >
          <FaInfoCircle size={16} className="text-[#14B8A6] mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-white font-semibold text-sm mb-1">More projects available</p>
            <p className="text-slate-400 text-sm">Additional in-progress projects available upon request. Reach out via the contact section.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
