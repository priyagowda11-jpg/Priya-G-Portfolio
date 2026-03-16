import { motion } from "framer-motion";
import { FaBriefcase, FaCheckCircle, FaCode, FaLayerGroup } from "react-icons/fa";

const achievements = [
  "Built a fully functional responsive website from scratch",
  "Developed a feature-rich Instagram Clone with backend",
  "Strengthened Python, Flask and AI integration skills",
  "Used Git & GitHub for version control and team collaboration",
];

const techUsed = ["Python", "Flask", "HTML/CSS", "JavaScript", "React", "Git", "GitHub", "REST APIs"];

const expertise = [
  { icon: FaCode, title: "AI & Machine Learning", desc: "Building predictive models using Python, Scikit-learn, and TensorFlow for real-world classification and anomaly detection tasks.", level: 78, color: "#F97316" },
  { icon: FaLayerGroup, title: "IoT & Embedded Systems", desc: "Designing sensor-integrated systems using ESP32, Arduino, and MQTT protocol for real-time hardware-software communication.", level: 82, color: "#EF4444" },
  { icon: FaBriefcase, title: "Full Stack Web Development", desc: "Building end-to-end web applications with React frontend, Flask/Node.js backend, and database integration.", level: 72, color: "#F97316" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative" style={{ background: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-14">
          <p className="section-tag">Experience & Expertise</p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white mb-2">
            My Experience & Expertise<br />
            <span style={{ WebkitTextStroke: "1px #F97316", color: "transparent" }}>
              With Tech Used Throughout
            </span>
          </h2>
          <div className="orange-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-14">
          {/* Internship card */}
          <div className="reveal">
            <div className="dark-card p-7 h-full" style={{ borderColor: "rgba(249,115,22,0.2)" }}>
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#F97316,#EF4444)", clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))" }}>
                  <FaBriefcase size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl">Full Stack Web Dev Intern</h3>
                  <p style={{ color: "#F97316" }} className="font-medium text-sm mt-0.5">Pantech AI</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-mono px-2 py-0.5 rounded-none"
                      style={{ background: "rgba(249,115,22,0.1)", color: "#F97316", border: "1px solid rgba(249,115,22,0.2)" }}>
                      Completed
                    </span>
                    <span className="text-gray-500 text-xs font-mono">3 Months</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Completed a 3-month intensive internship working on responsive web applications, Python/Flask backend integration, and collaborative full-stack project development.
              </p>

              {/* Achievements */}
              <div className="flex flex-col gap-2.5 mb-5">
                {achievements.map((a, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <FaCheckCircle size={13} className="mt-0.5 flex-shrink-0" style={{ color: "#F97316" }} />
                    <span className="text-gray-300 text-sm">{a}</span>
                  </div>
                ))}
              </div>

              {/* Tech used */}
              <div className="flex flex-wrap gap-2">
                {techUsed.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 font-mono"
                    style={{ background: "rgba(249,115,22,0.08)", color: "#F97316", border: "1px solid rgba(249,115,22,0.15)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Expertise cards */}
          <div className="reveal flex flex-col gap-4">
            {expertise.map((e, i) => {
              const Icon = e.icon;
              return (
                <motion.div key={i} whileHover={{ x: 4 }}
                  className="dark-card p-5 flex items-start gap-4"
                  style={{ borderColor: `${e.color}15` }}>
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ background: `${e.color}15`, color: e.color }}>
                    <Icon size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-white font-semibold text-sm">{e.title}</h4>
                      <span className="font-mono text-xs" style={{ color: e.color }}>{e.level}%</span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed mb-2">{e.desc}</p>
                    <div className="h-1 rounded-none overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                      <motion.div
                        initial={{ width: 0 }} whileInView={{ width: `${e.level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full"
                        style={{ background: `linear-gradient(90deg,${e.color},${e.color}80)`, boxShadow: `0 0 8px ${e.color}50` }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Marquee tech banner */}
        <div className="reveal overflow-hidden py-4" style={{ borderTop: "1px solid rgba(249,115,22,0.1)", borderBottom: "1px solid rgba(249,115,22,0.1)" }}>
          <div className="marquee-track flex gap-10 whitespace-nowrap" style={{ width: "max-content" }}>
            {[...Array(2)].map((_, ri) =>
              ["Python", "✦", "Flask", "✦", "React", "✦", "ESP32", "✦", "Arduino", "✦", "TensorFlow", "✦", "MQTT", "✦", "SQLite", "✦", "Node.js", "✦", "Flutter", "✦", "Firebase", "✦", "Socket.io", "✦", "Git", "✦"].map((t, i) => (
                <span key={`${ri}-${i}`} className="text-sm font-mono"
                  style={{ color: t === "✦" ? "#F97316" : "#6b7280" }}>
                  {t}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
