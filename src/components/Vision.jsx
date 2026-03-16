import { motion } from "framer-motion";
import { FaBrain, FaMicrochip, FaGlobe, FaRocket } from "react-icons/fa";

const pillars = [
  { icon: FaBrain, title: "AI & ML Systems", desc: "Building predictive models and intelligent algorithms that learn from data and make real-world decisions autonomously.", color: "#F97316" },
  { icon: FaMicrochip, title: "Smart Embedded Tech", desc: "Next-gen IoT devices with AI at the edge — hardware that thinks, adapts, and solves complex engineering problems.", color: "#EF4444" },
  { icon: FaGlobe, title: "Real-World Impact", desc: "Bridging the gap between cutting-edge technology and everyday human challenges with practical, deployable solutions.", color: "#F97316" },
];

export default function Vision() {
  return (
    <section id="vision" className="py-24 relative overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* Big bg text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span style={{ fontSize: "20rem", color: "rgba(249,115,22,0.02)", fontFamily: "Bebas Neue", lineHeight: 1 }}>
          VISION
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="reveal mb-14 text-center">
          <p className="section-tag justify-center">Future Direction</p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white mb-4">
            Where I'm{" "}
            <span style={{ WebkitTextStroke: "1px #F97316", color: "transparent" }}>Headed</span>
          </h2>
          <div className="orange-line mx-auto" />
          <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
            I aim to build <span style={{ color: "#F97316" }} className="font-semibold">AI & ML powered systems</span> and{" "}
            <span className="text-white font-semibold">intelligent embedded technologies</span> that solve real-world engineering problems — creating smart solutions that create genuine impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 reveal">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="dark-card p-8 text-center group"
                style={{ borderColor: `${p.color}15` }}>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                  style={{ background: `${p.color}12`, color: p.color, clipPath: "polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)" }}>
                  <Icon size={22} />
                </motion.div>
                <h3 className="font-['Syne'] font-bold text-lg text-white mb-3 group-hover:text-orange-400 transition-colors">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="reveal mt-12">
          <div className="dark-card p-6 flex flex-wrap items-center justify-between gap-6"
            style={{ borderColor: "rgba(249,115,22,0.2)", borderLeft: "3px solid #F97316" }}>
            <div className="flex items-center gap-4">
              <FaRocket style={{ color: "#F97316" }} size={22} />
              <div>
                <p className="text-white font-semibold text-base">Open to Opportunities</p>
                <p className="text-gray-500 text-sm font-mono">internships · research · AI/ML projects · collaborations</p>
              </div>
            </div>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-orange">
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
