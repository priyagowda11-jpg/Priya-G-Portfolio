import { useState, useEffect, useRef } from "react";
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const TEXTS = ["AI & IoT Systems Developer", "EEE Student", "Python Developer", "Building Smart Real-World Solutions"];
const PHOTO = "/assets/profile/profile.jpg";

function useTyping(texts) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);
  const [pause, setPause] = useState(false);
  useEffect(() => {
    const cur = texts[idx]; let t;
    if (pause) { t = setTimeout(() => { setPause(false); setDel(true); }, 1800); }
    else if (!del && display.length < cur.length) { t = setTimeout(() => setDisplay(cur.slice(0, display.length + 1)), 75); }
    else if (!del && display.length === cur.length) { setPause(true); }
    else if (del && display.length > 0) { t = setTimeout(() => setDisplay(cur.slice(0, display.length - 1)), 40); }
    else { setDel(false); setIdx(p => (p + 1) % texts.length); }
    return () => clearTimeout(t);
  }, [display, del, pause, idx, texts]);
  return display;
}

// Particle canvas — orange dots
function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; const ctx = c.getContext("2d");
    let w = c.width = window.innerWidth; let h = c.height = window.innerHeight;
    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * w * 0.55, y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      o: Math.random() * 0.4 + 0.1,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w * 0.55; if (p.x > w * 0.55) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249,115,22,${p.o})`; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) { ctx.beginPath(); ctx.strokeStyle = `rgba(249,115,22,${0.06 * (1 - d / 90)})`; ctx.lineWidth = 0.5; ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke(); }
        }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => { w = c.width = window.innerWidth; h = c.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} />;
}

export default function Hero() {
  const typed = useTyping(TEXTS);
  const [imgErr, setImgErr] = useState(false);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden" style={{ background: "#080808" }}>
      <Particles />

      {/* Grid — left only */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(249,115,22,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,0.04) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "linear-gradient(to right,black 0%,black 45%,transparent 65%)",
        WebkitMaskImage: "linear-gradient(to right,black 0%,black 45%,transparent 65%)",
        zIndex: 1,
      }} />

      {/* ── PHOTO — right side, fully blended ── */}
      <div className="absolute top-0 right-0 h-full hidden lg:block" style={{ width: "52%", zIndex: 2 }}>

        {/* Photo image */}
        {!imgErr ? (
          <img
            src={PHOTO}
            alt="Priya G"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center top" }}
            onError={() => setImgErr(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center"
            style={{ background: "radial-gradient(ellipse at 60% 40%,rgba(249,115,22,0.1),rgba(239,68,68,0.05),#080808)" }}>
            <span style={{ fontSize: "20rem", color: "rgba(255,255,255,0.03)", fontFamily: "Bebas Neue", lineHeight: 1 }}>PG</span>
          </div>
        )}

        {/* 1. Dark base overlay — kills warm/bright background tones */}
        <div className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: "rgba(8,8,8,0.38)" }} />

        {/* 2. Left fade — deep blend into #080808 (wider, stronger) */}
        <div className="absolute inset-y-0 left-0 z-20 pointer-events-none"
          style={{
            width: "65%",
            background: "linear-gradient(to right, #080808 0%, #080808 10%, rgba(8,8,8,0.92) 30%, rgba(8,8,8,0.6) 55%, rgba(8,8,8,0.15) 80%, transparent 100%)"
          }} />

        {/* 3. Top fade */}
        <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none"
          style={{
            height: "30%",
            background: "linear-gradient(to bottom, #080808 0%, rgba(8,8,8,0.7) 40%, transparent 100%)"
          }} />

        {/* 4. Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
          style={{
            height: "35%",
            background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.75) 40%, transparent 100%)"
          }} />

        {/* 5. Right edge fade — prevents hard cut at screen edge */}
        <div className="absolute inset-y-0 right-0 z-20 pointer-events-none"
          style={{
            width: "12%",
            background: "linear-gradient(to left, #080808 0%, transparent 100%)"
          }} />

        {/* 6. Subtle orange tone overlay — matches site accent */}
        <div className="absolute inset-0 z-20 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.06) 0%, transparent 50%)" }} />
      </div>

      {/* ── TEXT — left side (unchanged) ── */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="w-full lg:w-[52%] px-8 lg:px-14 xl:px-20 py-28">

          {/* Top label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: "#F97316" }} />
            <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: "#F97316" }}>
              it's me
            </span>
          </div>

          {/* GREETING */}
          <p className="text-gray-400 text-lg mb-2 font-light">Hello! I'm</p>

          {/* NAME — glitch effect */}
          <div className="mb-3">
            <h1
              className="glitch font-['Bebas_Neue'] text-white leading-none"
              data-text="PRIYA G"
              style={{ fontSize: "clamp(4rem,12vw,8rem)", letterSpacing: "0.02em" }}
            >
              PRIYA{" "}
              <span style={{ WebkitTextStroke: "2px #F97316", color: "transparent" }}>G</span>
            </h1>
          </div>

          {/* Divider line */}
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(90deg,#F97316,transparent)" }} />
            <span className="text-gray-400 text-sm font-light tracking-wider">EEE Student & Developer</span>
            <span className="text-lg" style={{ color: "#F97316" }}>✦</span>
          </div>

          {/* Typing */}
          <div className="h-9 flex items-center mb-5">
            <span className="font-mono text-base md:text-lg text-gray-300 type-cur">{typed}</span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-3 max-w-lg">
            Passionate about building <span style={{ color: "#F97316", fontWeight: 600 }}>intelligent real-world systems</span> by combining{" "}
            <span className="text-white font-medium">AI</span>,{" "}
            <span style={{ color: "#EF4444", fontWeight: 500 }}>IoT</span>, and{" "}
            <span className="text-white font-medium">Embedded Technologies</span>.
          </p>

          {/* Checklist */}
          <div className="flex flex-col gap-1.5 mb-8">
            {["Product must be innovative", "Solve real-world problems elegantly", "AI-driven, hardware-integrated solutions"].map(t => (
              <div key={t} className="flex items-center gap-2 text-gray-400 text-sm">
                <span style={{ color: "#F97316" }}>✓</span> {t}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="/assets/resume/Priya_G_Resume.pdf" download className="btn-orange flex items-center gap-2">
              <FaDownload size={12} /> Download CV
            </a>
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline-orange flex items-center gap-2">
              View Projects <FaArrowRight size={12} />
            </button>
          </div>

          {/* Socials row */}
          <div className="flex items-center gap-4 pt-6" style={{ borderTop: "1px solid rgba(249,115,22,0.1)" }}>
            <span className="text-xs text-gray-600 font-mono uppercase tracking-widest">Find me on</span>
            {[
              { icon: FaGithub, href: "https://github.com/priyagowda11-jpg/" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/priya-g-07422429a/" },
              { icon: FaEnvelope, href: "mailto:priyag11032005@gmail.com" },
            ].map(({ icon: Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-white transition-colors"
                style={{ border: "1px solid rgba(249,115,22,0.2)", background: "transparent", clipPath: "polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))" }}>
                <Icon size={14} />
              </a>
            ))}
            <div className="w-px h-5 mx-1" style={{ background: "rgba(249,115,22,0.2)" }} />
            <span className="text-gray-600 text-xs font-mono">priyag11032005@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-10 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 animate-pulse" style={{ background: "linear-gradient(to bottom,#F97316,transparent)" }} />
        <span className="text-xs font-mono tracking-widest" style={{ color: "#F97316", writingMode: "vertical-rl" }}>SCROLL</span>
      </div>
    </section>
  );
}