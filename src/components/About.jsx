import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        let s = 0; const step = Math.ceil(target / 40);
        const t = setInterval(() => { s += step; if (s >= target) { setVal(target); clearInterval(t); } else setVal(s); }, 35);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-24 relative" style={{ background: "#080808" }}>
      {/* Orange accent line left */}
      <div className="absolute left-0 top-1/4 w-1 h-32" style={{ background: "linear-gradient(to bottom,transparent,#F97316,transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-14">
          <p className="section-tag">About Me</p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white mb-2">
            Who I Am
          </h2>
          <div className="orange-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — text */}
          <div className="reveal">
            <p className="text-gray-300 text-base leading-relaxed mb-5">
              I'm <span className="text-white font-semibold">Priya G</span>, an Electrical and Electronics Engineering undergraduate at{" "}
              <span style={{ color: "#F97316" }} className="font-medium">Rajarajeswari College of Engineering</span> (Class of 2027).
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              I build intelligent systems that sit at the intersection of hardware and software — combining AI, IoT sensors, and embedded microcontrollers to solve real engineering problems. From fraud detection algorithms to smart voting prototypes, I turn ideas into working systems.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              My focus areas are <span className="text-white">smart real-world solutions</span>, <span className="text-white">AI-powered embedded systems</span>, and <span className="text-white">secure digital infrastructure</span>.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Name", value: "Priya G" },
                { label: "Degree", value: "B.E. EEE" },
                { label: "College", value: "RRCE" },
                { label: "Graduation", value: "2027" },
                { label: "Location", value: "India" },
                { label: "Status", value: "Open to Work ✓" },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-2 text-sm">
                  <span className="font-mono" style={{ color: "#F97316" }}>{label}:</span>
                  <span className="text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div className="reveal">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { num: 4, suffix: "+", label: "Projects Built" },
                { num: 9, suffix: "+", label: "Certifications" },
                { num: 3, suffix: " Mo", label: "Internship" },
                { num: 13, suffix: "+", label: "Technologies" },
              ].map(({ num, suffix, label }) => (
                <motion.div key={label} whileHover={{ scale: 1.03 }}
                  className="dark-card p-6 text-center hover:orange-glow transition-all duration-300"
                  style={{ borderColor: "rgba(249,115,22,0.15)" }}>
                  <div className="font-['Bebas_Neue'] text-5xl text-white mb-1"
                    style={{ textShadow: "0 0 20px rgba(249,115,22,0.4)" }}>
                    <Counter target={num} suffix={suffix} />
                  </div>
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Quote card */}
            <div className="dark-card p-5" style={{ borderLeft: "3px solid #F97316", borderRadius: 0 }}>
              <p className="text-gray-300 text-sm italic leading-relaxed mb-3">
                "Engineering is not just about building systems — it's about building systems that matter."
              </p>
              <p className="font-mono text-xs" style={{ color: "#F97316" }}>— Priya G</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
