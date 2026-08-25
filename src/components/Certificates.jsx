import { motion } from "framer-motion";
import { FaCertificate, FaCode, FaBrain, FaTrophy, FaSearch, FaTools, FaFlask, FaBriefcase, FaChartLine } from "react-icons/fa";

const certs = [
  { title: "Full Stack Web Development Internship", issuer: "Pantech AI", icon: FaCode, accent: "#3B82F6", type: "Professional" },
  { title: "Website Building Mastery Internship", issuer: "Pantech AI", icon: FaTools, accent: "#6366f1", type: "Professional" },
  { title: "Web Development Internship Certificate", issuer: "Pantech AI", icon: FaCode, accent: "#3B82F6", type: "Professional" },
  { title: "AI & ML in Material Engineering", issuer: "NPTEL", icon: FaBrain, accent: "#14B8A6", type: "Academic" },
  { title: "Python & AI", issuer: "DevTown", icon: FaFlask, accent: "#f59e0b", type: "Online" },
  { title: "Instagram Clone Project", issuer: "DevTown", icon: FaCode, accent: "#ec4899", type: "Online" },
  { title: "BE10x AI Tools Workshop", issuer: "BE10x", icon: FaBrain, accent: "#a78bfa", type: "Workshop" },
  { title: "Journal Publication", issuer: "Academic Journal", icon: FaSearch, accent: "#06b6d4", type: "Research" },
  { title: "Hackathon Participation", issuer: "Tech Event", icon: FaTrophy, accent: "#f97316", type: "Achievement" },
  { title: "Project Expo Participation", issuer: "College", icon: FaTrophy, accent: "#10b981", type: "Achievement" },
  { title: "Tech Explorer Job Simulation", issuer: "Commonwealth Bank / Forage", icon: FaBriefcase, accent: "#0ea5e9", type: "Simulation" },
  { title: "Operations Job Simulation", issuer: "Goldman Sachs / Forage", icon: FaChartLine, accent: "#eab308", type: "Simulation" },
];

const typeColor = {
  Professional: "#3B82F6",
  Academic: "#14B8A6",
  Online: "#f59e0b",
  Achievement: "#f97316",
  Workshop: "#a78bfa",
  Research: "#06b6d4",
  Simulation: "#0ea5e9",
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } }
};

export default function Certificates() {
  return (
    <section id="certificates" className="py-28 relative"
      style={{ background: "linear-gradient(180deg, #0B0F19 0%, #0D1220 50%, #0B0F19 100%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-4 text-center">
          <p className="section-label justify-center">Achievements</p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white mb-3">
            Certifications &{" "}
            <span style={{ background: "linear-gradient(135deg,#3B82F6,#14B8A6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Recognition
            </span>
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            Continuous learning across AI, web development, IoT, and competitive tech events
          </p>
        </div>

        {/* Count */}
        <div className="flex justify-center mb-12 reveal">
          <div className="glass-card px-5 py-2.5 flex items-center gap-3">
            <FaCertificate className="text-[#3B82F6]" size={14} />
            <span className="text-slate-400 text-sm font-mono">{certs.length} certificates earned</span>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certs.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div key={i} variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass-card p-5 cursor-default group"
                style={{ border: `1px solid ${cert.accent}15` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${cert.accent}25, ${cert.accent}10)`, color: cert.accent, boxShadow: `0 4px 14px ${cert.accent}20` }}>
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs px-2 py-0.5 rounded-full font-mono inline-block mb-2"
                      style={{ background: `${typeColor[cert.type]}12`, color: typeColor[cert.type], border: `1px solid ${typeColor[cert.type]}20` }}>
                      {cert.type}
                    </span>
                    <h4 className="text-white text-sm font-semibold leading-snug group-hover:text-[#3B82F6] transition-colors mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-slate-600 text-xs font-mono">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
