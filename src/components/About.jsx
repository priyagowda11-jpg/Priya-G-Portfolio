import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaHeartbeat, FaMicrochip, FaShieldAlt } from "react-icons/fa";

const stats = [
  { label: "Projects", value: 5, suffix: "+" },
  { label: "Certifications", value: 12, suffix: "+" },
  { label: "LinkedIn Reach", value: 900, suffix: "+" },
  { label: "Tech Stack", value: 12, suffix: "+" },
];

const interests = [
  { icon: FaHeartbeat, label: "Smart Healthcare Innovation", color: "#ef4444" },
  { icon: FaCode, label: "AI-Powered Systems", color: "#3B82F6" },
  { icon: FaMicrochip, label: "Embedded Technologies", color: "#14B8A6" },
  { icon: FaShieldAlt, label: "Secure Digital Systems", color: "#a78bfa" },
];

function Counter({ target, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setVal(target); clearInterval(timer); }
          else setVal(start);
        }, 35);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="section-label">About Me</p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white">
            My Experience & Expertise<br />
            <span style={{ background: "linear-gradient(135deg,#3B82F6,#14B8A6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              With Tech Used Throughout My Journey
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="reveal">
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              I'm a <span className="text-white font-semibold">final year Electrical and Electronics Engineering student</span> (CGPA: 8.5/10) passionate about building intelligent real-world systems that combine{" "}
              <span className="text-[#3B82F6] font-medium">hardware</span> and{" "}
              <span className="text-[#14B8A6] font-medium">software</span>.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              I build across <span className="text-white font-medium">IoT</span>, <span className="text-white font-medium">Embedded Systems</span>, <span className="text-white font-medium">AI/ML</span>, and <span className="text-white font-medium">Web Development</span> — from ESP32 sensors to Flask backends to live deployed web apps. Currently building a real-world website for a social welfare organisation and actively working on embedded AI projects.
            </p>

            {/* Code card */}
            <div className="glass-card p-5 font-mono text-sm mb-8" style={{ border: "1px solid rgba(59,130,246,0.15)" }}>
              <div className="flex gap-1.5 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <p><span className="text-purple-400">const</span> <span className="text-[#3B82F6]">priya</span> <span className="text-slate-500">=</span> <span className="text-[#14B8A6]">{"{"}</span></p>
              <p className="pl-5"><span className="text-slate-400">university</span>: <span className="text-orange-300">"Rajarajeswari College of Engineering"</span>,</p>
              <p className="pl-5"><span className="text-slate-400">degree</span>: <span className="text-orange-300">"B.E. EEE"</span>,</p>
              <p className="pl-5"><span className="text-slate-400">cgpa</span>: <span className="text-orange-300">"8.5 / 10"</span>,</p>
              <p className="pl-5"><span className="text-slate-400">year</span>: <span className="text-orange-300">"2023 → 2027"</span>,</p>
              <p className="pl-5"><span className="text-slate-400">focus</span>: <span className="text-orange-300">["AI", "IoT", "Embedded Systems"]</span>,</p>
              <p className="pl-5"><span className="text-slate-400">goal</span>: <span className="text-orange-300">"Embedded AI Systems Engineer"</span>,</p>
              <p className="pl-5"><span className="text-slate-400">openTo</span>: <span className="text-green-400">true</span></p>
              <p><span className="text-[#14B8A6]">{"}"}</span></p>
            </div>

            {/* Interest tags */}
            <div className="grid grid-cols-2 gap-3">
              {interests.map(({ icon: Icon, label, color }) => (
                <div key={label} className="glass-card p-3 flex items-center gap-3 hover:scale-[1.02] transition-transform cursor-default">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}18`, color }}>
                    <Icon size={14} />
                  </div>
                  <span className="text-slate-300 text-xs font-medium leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div className="reveal">
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map(({ label, value, suffix }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.04 }}
                  className="glass-card p-6 text-center"
                  style={{ border: "1px solid rgba(59,130,246,0.12)" }}
                >
                  <div className="font-['Syne'] font-extrabold text-4xl text-white mb-1"
                    style={{ textShadow: "0 0 20px rgba(59,130,246,0.5)" }}>
                    <Counter target={value} suffix={suffix} />
                  </div>
                  <div className="text-slate-500 text-xs font-mono uppercase tracking-wider">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Internship highlight */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass-card p-6"
              style={{ border: "1px solid rgba(20,184,166,0.2)", background: "rgba(20,184,166,0.04)" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#3B82F6,#14B8A6)", boxShadow: "0 8px 20px rgba(59,130,246,0.3)" }}>
                  <FaCode size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-[#14B8A6] text-xs font-mono mb-1">Currently</p>
                  <h4 className="text-white font-semibold text-base mb-0.5">Data Analyst Intern</h4>
                  <p className="text-slate-400 text-sm">Elythra EduFi Tech Solutions · 4 Months (Ongoing)</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {["Python", "Data Analysis", "Excel", "Reporting"].map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full font-mono"
                        style={{ background: "rgba(59,130,246,0.12)", color: "#3B82F6", border: "1px solid rgba(59,130,246,0.2)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
