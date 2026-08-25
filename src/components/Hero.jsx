import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const TEXTS = [
  "Smart AI & IoT Systems Developer",
  "EEE Student",
  "Python Developer",
  "Building Intelligent Healthcare Systems",
];

function useTyping(texts) {
  const [idx, setIdx] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const cur = texts[idx];
    let t;
    if (paused) { t = setTimeout(() => { setPaused(false); setDeleting(true); }, 1800); }
    else if (!deleting && display.length < cur.length) { t = setTimeout(() => setDisplay(cur.slice(0, display.length + 1)), 75); }
    else if (!deleting && display.length === cur.length) { setPaused(true); }
    else if (deleting && display.length > 0) { t = setTimeout(() => setDisplay(cur.slice(0, display.length - 1)), 40); }
    else { setDeleting(false); setIdx(p => (p + 1) % texts.length); }
    return () => clearTimeout(t);
  }, [display, deleting, paused, idx, texts]);
  return display;
}

// Particle canvas
function Particles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      o: Math.random() * 0.5 + 0.1,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${p.o})`;
        ctx.fill();
      });
      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59,130,246,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} />;
}

export default function Hero() {
  const typed = useTyping(TEXTS);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const imgX = useTransform(springX, [-1, 1], [-18, 18]);
  const imgY = useTransform(springY, [-1, 1], [-12, 12]);
  const imgRotateY = useTransform(springX, [-1, 1], [-8, 8]);
  const imgRotateX = useTransform(springY, [-1, 1], [6, -6]);
  const [imgError, setImgError] = useState(false);

  const onMouseMove = useCallback((e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    mouseX.set((e.clientX - cx) / cx);
    mouseY.set((e.clientY - cy) / cy);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      onMouseMove={onMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.08) 0%, transparent 60%), #0B0F19" }}
    >
      <Particles />

      {/* Background orbs */}
      <div className="orb orb-1" style={{ zIndex: 1 }} />
      <div className="orb orb-2" style={{ zIndex: 1 }} />

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px", zIndex: 1
      }} />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-28 lg:py-0 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center w-full">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 text-xs font-mono text-[#14B8A6] mb-8"
            >
              <span className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full animate-pulse" />
              Available for internships & projects
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            >
              <p className="text-slate-400 text-base font-light mb-2 tracking-wide">Hello, I'm</p>
              <h1 className="font-['Syne'] font-extrabold leading-none mb-4"
                style={{ fontSize: "clamp(3.5rem,9vw,7rem)" }}>
                <span className="text-white">Priya</span>{" "}
                <span style={{
                  background: "linear-gradient(135deg, #3B82F6, #14B8A6)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
                }}>G</span>
              </h1>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-0.5 bg-[#3B82F6]" />
                <p className="text-slate-300 text-base font-light tracking-widest uppercase text-xs font-mono">
                  EEE Student · AI & IoT Engineer
                </p>
              </div>
            </motion.div>

            {/* Typing */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="h-9 mb-6"
            >
              <span className="text-lg md:text-xl text-slate-300 font-mono type-cursor">{typed}</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
              className="text-slate-400 text-sm leading-relaxed max-w-lg mb-8"
            >
              Building intelligent real-world systems at the intersection of{" "}
              <span className="text-[#3B82F6] font-medium">Artificial Intelligence</span>,{" "}
              <span className="text-[#14B8A6] font-medium">IoT</span>, and{" "}
              <span className="text-[#3B82F6] font-medium">Embedded Technologies</span>.
              Passionate about smart healthcare & secure systems.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="flex items-center gap-1.5 text-slate-600 text-xs font-mono mb-10"
            >
              <FaMapMarkerAlt size={11} />
              India · Rajarajeswari College of Engineering · 2027
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a href="/assets/resume/Priya_G_Resume.pdf" download className="btn-glow flex items-center gap-2">
                <FaDownload size={13} /> Download Resume
              </a>
              <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-ghost flex items-center gap-2">
                Explore Projects <FaArrowRight size={12} />
              </button>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-ghost flex items-center gap-2">
                Contact Me
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: FaGithub, href: "https://github.com/priyagowda11-jpg/" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/priya-g-07422429a/" },
                { icon: FaEnvelope, href: "mailto:priyag11032005@gmail.com" },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-[#3B82F6] hover:border-[#3B82F6]/40 transition-all duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                  <Icon size={15} />
                </a>
              ))}
              <div className="w-px h-6 bg-white/10 mx-1" />
              <span className="text-slate-600 text-xs font-mono">priyag11032005@gmail.com</span>
            </motion.div>
          </div>

          {/* RIGHT — floating profile image */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              style={{ x: imgX, y: imgY, rotateY: imgRotateY, rotateX: imgRotateX, perspective: 1000, transformStyle: "preserve-3d" }}
              className="relative"
            >
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full" style={{
                background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 60%)",
                transform: "scale(1.3)", filter: "blur(30px)"
              }} />
              <div className="absolute -inset-4 rounded-full border border-[#3B82F6]/15 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute -inset-8 rounded-full border border-[#14B8A6]/08" />

              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden"
                style={{ border: "2px solid rgba(59,130,246,0.3)", boxShadow: "0 0 60px rgba(59,130,246,0.2), 0 0 120px rgba(59,130,246,0.08), inset 0 0 40px rgba(59,130,246,0.05)" }}>
                {!imgError ? (
                  <img
                    src="/assets/profile/profile.jpg"
                    alt="Priya G"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  // Placeholder when no photo
                  <div className="w-full h-full flex flex-col items-center justify-center"
                    style={{ background: "radial-gradient(circle at 40% 40%, rgba(59,130,246,0.15), rgba(20,184,166,0.08), #0B0F19)" }}>
                    <span className="font-['Syne'] font-extrabold text-8xl text-white/10 select-none">PG</span>
                    <p className="text-xs text-slate-600 font-mono mt-4">Add profile.jpg</p>
                  </div>
                )}
                {/* Overlay gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{ background: "linear-gradient(to top, rgba(11,15,25,0.6), transparent)" }} />
              </div>

              {/* Floating badge — role */}
              <motion.div
                animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass-card px-4 py-2.5"
                style={{ border: "1px solid rgba(59,130,246,0.25)" }}
              >
                <p className="text-xs text-slate-400 font-mono">Currently</p>
                <p className="text-sm text-white font-semibold">EEE Undergrad</p>
              </motion.div>

              {/* Floating badge — year */}
              <motion.div
                animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-2 -left-6 glass-card px-3 py-2"
                style={{ border: "1px solid rgba(20,184,166,0.25)" }}
              >
                <p className="text-xs text-[#14B8A6] font-mono font-semibold">Class of 2027</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 z-10"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#3B82F6]/50 to-transparent" />
      </motion.div>
    </section>
  );
}
