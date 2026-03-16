import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaRobot, FaShieldAlt, FaInstagram, FaBolt, FaLock, FaInfoCircle } from "react-icons/fa";

const projects = [
  {
    id: "01", title: "AI Fraud Detection System", category: "Machine Learning",
    description: "Intelligent fraud detection engine using ML algorithms to analyze transaction patterns, detect anomalies, and flag suspicious activities in real-time with a Flask REST API.",
    techs: ["Python", "Pandas", "Scikit-learn", "Flask"],
    github: "https://github.com/priyagowda11-jpg/ai-fraud-detection",
    icon: FaRobot, color: "#F97316", confidential: false,
  },
  {
    id: "02", title: "Secure Voting System Prototype", category: "IoT + Security",
    description: "Hardware-software prototype using ESP32 with QR code voter verification. Tamper-proof SQLite storage, Flask backend, real-time queue management and admin dashboard.",
    techs: ["ESP32", "Python", "Flask", "SQLite", "QR Verification"],
    github: null, icon: FaShieldAlt, color: "#EF4444", confidential: true,
  },
  {
    id: "03", title: "Instagram Clone", category: "Full Stack",
    description: "Full-featured Instagram clone with posts, stories, reels, direct messaging, and real-time notifications. React Native frontend with Node.js/Express backend and MongoDB.",
    techs: ["React Native", "Expo", "Node.js", "Express", "MongoDB"],
    github: null, icon: FaInstagram, color: "#F97316", confidential: false,
  },
  {
    id: "04", title: "Smart EV Charger App", category: "IoT + AI + Mobile",
    description: "EV charging station finder with live maps, slot booking, queue management, and AI prediction for new station locations. Real-time updates via Socket.io.",
    techs: ["Flutter", "Firebase", "Node.js", "Socket.io", "Python Flask", "OpenStreetMap"],
    github: null, icon: FaBolt, color: "#EF4444", confidential: false,
  },
];

function TiltCard({ project }) {
  const ref = useRef(null);
  const shimmer = useRef(null);
  const [hov, setHov] = useState(false);
  const Icon = project.icon;

  const onMove = (e) => {
    const card = ref.current; const sh = shimmer.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / (rect.height / 2)) * -12;
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * 12;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    card.style.boxShadow = `0 20px 50px rgba(249,115,22,0.15), 0 0 0 1px ${project.color}25`;
    if (sh) sh.style.background = `radial-gradient(250px circle at ${x}px ${y}px,rgba(255,255,255,0.04),transparent 70%)`;
  };

  const onLeave = () => {
    const card = ref.current; const sh = shimmer.current;
    if (card) { card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)"; card.style.boxShadow = "none"; }
    if (sh) sh.style.background = "none";
    setHov(false);
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseEnter={() => setHov(true)} onMouseLeave={onLeave}
      className="relative flex flex-col cursor-default"
      style={{
        background: "#0F0F0F", border: `1px solid ${project.color}15`, padding: "1.75rem",
        transition: "transform 0.15s ease-out, box-shadow 0.2s ease", willChange: "transform",
      }}>
      {/* Shimmer */}
      <div ref={shimmer} className="absolute inset-0 pointer-events-none z-10" style={{ transition: "background 0.06s" }} />
      {/* Top border animated */}
      <div className="absolute top-0 left-0 right-0 h-px z-20 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg,transparent,${project.color},transparent)`, opacity: hov ? 1 : 0 }} />

      <div className="relative z-20 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <motion.div
              animate={hov ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 flex items-center justify-center"
              style={{ background: `linear-gradient(135deg,${project.color},${project.color}80)`, color: "white", clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))" }}>
              <Icon size={18} />
            </motion.div>
            <div>
              <p className="text-xs font-mono" style={{ color: project.color }}>{project.category}</p>
            </div>
          </div>
          <span className="font-['Bebas_Neue'] text-2xl" style={{ color: `${project.color}30` }}>{project.id}</span>
        </div>

        <h3 className="font-['Syne'] font-bold text-lg text-white mb-2 leading-tight">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

        {/* Techs */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techs.map(t => (
            <span key={t} className="text-xs px-2.5 py-1 font-mono"
              style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}20` }}>
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-mono transition-colors group">
              <FaGithub size={14} />
              <span className="group-hover:underline">View Code</span>
              <FaExternalLinkAlt size={10} />
            </a>
          ) : (
            <div className="flex items-center gap-2 text-gray-600 text-xs font-mono">
              <FaLock size={11} />
              <span>Private / In Progress</span>
            </div>
          )}
          {project.confidential && (
            <span className="text-xs font-mono px-2 py-0.5"
              style={{ background: "rgba(239,68,68,0.08)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.2)" }}>
              Confidential
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-14">
          <p className="section-tag">Portfolio</p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white mb-2">
            Recent Projects
          </h2>
          <div className="orange-line" />
          <p className="text-gray-500 text-sm">Real engineering solutions across AI, IoT, mobile, and web</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 reveal mb-6">
          {projects.map(p => <TiltCard key={p.id} project={p} />)}
        </div>

        <motion.div whileHover={{ x: 4 }} className="dark-card p-5 flex items-start gap-4 reveal"
          style={{ borderColor: "rgba(249,115,22,0.2)", borderLeft: "3px solid #F97316" }}>
          <FaInfoCircle size={15} style={{ color: "#F97316", marginTop: 2, flexShrink: 0 }} />
          <div>
            <p className="text-white font-semibold text-sm mb-0.5">More projects in progress</p>
            <p className="text-gray-500 text-sm">Additional confidential and ongoing projects available upon request. Contact me for details.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
