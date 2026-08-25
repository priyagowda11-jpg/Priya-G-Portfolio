import { motion } from "framer-motion";
import { FaRocket, FaHeartbeat, FaMicrochip, FaGlobe } from "react-icons/fa";

const visionPillars = [
  { icon: FaHeartbeat, title: "Smart Healthcare AI", desc: "AI-powered diagnostics and smart monitoring systems for accessible healthcare", color: "#ef4444" },
  { icon: FaMicrochip, title: "Intelligent Embedded Systems", desc: "Next-gen IoT devices that learn, adapt, and solve real-world engineering problems", color: "#3B82F6" },
  { icon: FaGlobe, title: "Digital Accessibility", desc: "Bridging the gap between cutting-edge tech and everyday human needs", color: "#14B8A6" },
];

export default function Vision() {
  return (
    <section id="vision" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)"
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="reveal max-w-3xl mx-auto text-center mb-16">
          <p className="section-label justify-center">Future Vision</p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white mb-6">
            Where I'm{" "}
            <span style={{ background: "linear-gradient(135deg,#3B82F6,#14B8A6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Headed
            </span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            I aim to develop <span className="text-[#3B82F6] font-medium">AI-powered smart healthcare technologies</span> and <span className="text-[#14B8A6] font-medium">intelligent embedded systems</span> that solve real-world problems and improve digital accessibility for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal">
          {visionPillars.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 text-center"
                style={{ border: `1px solid ${v.color}15` }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{ background: `${v.color}15`, color: v.color, boxShadow: `0 8px 24px ${v.color}20` }}
                >
                  <Icon size={24} />
                </motion.div>
                <h3 className="text-white font-['Syne'] font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="reveal mt-14 text-center">
          <motion.div whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-3 glass-card px-8 py-5"
            style={{ border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.04)" }}>
            <FaRocket className="text-[#3B82F6]" size={18} />
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Open to Collaboration</p>
              <p className="text-slate-500 text-xs font-mono">internships · research · projects</p>
            </div>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-glow text-xs px-5 py-2 ml-4">
              Let's Talk
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
