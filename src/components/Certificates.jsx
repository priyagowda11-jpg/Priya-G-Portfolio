import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCertificate, FaExpand, FaCode, FaBrain, FaTrophy, FaSearch, FaTools, FaFlask } from "react-icons/fa";

// ── HOW TO ADD CERTIFICATE IMAGES ──────────────────────────────────
// Put images in: public/assets/certificates/
// Name them exactly as shown in the "image" field below
// Example: public/assets/certificates/pantech_fullstack.jpg
// ────────────────────────────────────────────────────────────────────

const certs = [
  { title: "Pantech Full Stack Internship", issuer: "Pantech AI", type: "Professional", icon: FaCode, color: "#F97316", image: "/assets/certificates/pantech_fullstack.jpg" },
  { title: "Website Building Mastery", issuer: "Pantech AI", type: "Professional", icon: FaTools, color: "#EF4444", image: "/assets/certificates/website_mastery.jpg" },
  { title: "NPTEL AI & ML Engineering", issuer: "NPTEL / IIT", type: "Academic", icon: FaBrain, color: "#F97316", image: "/assets/certificates/nptel.jpg" },
  { title: "DevTown Python & AI", issuer: "DevTown", type: "Online", icon: FaFlask, color: "#EF4444", image: "/assets/certificates/devtown_python.jpg" },
  { title: "DevTown Instagram Clone", issuer: "DevTown", type: "Online", icon: FaCode, color: "#F97316", image: "/assets/certificates/devtown_instagram.jpg" },
  { title: "Hackathon Participation", issuer: "Tech Event", type: "Achievement", icon: FaTrophy, color: "#EF4444", image: "/assets/certificates/hackathon.jpg" },
  { title: "Project Expo Participation", issuer: "College", type: "Achievement", icon: FaTrophy, color: "#F97316", image: "/assets/certificates/project_expo.jpg" },
  { title: "BE10x AI Tool Workshop", issuer: "BE10x", type: "Workshop", icon: FaBrain, color: "#EF4444", image: "/assets/certificates/be10x.jpg" },
  { title: "Research Paper Publication", issuer: "Academic Journal", type: "Research", icon: FaSearch, color: "#F97316", image: "/assets/certificates/research_paper.jpg" },
];

function CertModal({ cert, onClose }) {
  const [err, setErr] = useState(false);

  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(10px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }} transition={{ duration: 0.25 }}
          className="relative max-w-3xl w-full"
          style={{ background: "#0F0F0F", border: `1px solid ${cert.color}30` }}
          onClick={e => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between px-6 py-4"
            style={{ borderBottom: `1px solid rgba(249,115,22,0.1)` }}>
            <div>
              <h3 className="text-white font-semibold text-base">{cert.title}</h3>
              <p className="text-xs font-mono mt-0.5" style={{ color: cert.color }}>{cert.issuer}</p>
            </div>
            <button onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              <FaTimes size={13} />
            </button>
          </div>

          {/* Image */}
          <div className="p-6">
            {!err ? (
              <img src={cert.image} alt={cert.title}
                className="w-full object-contain max-h-[65vh] rounded-none"
                onError={() => setErr(true)} />
            ) : (
              <div className="w-full h-56 flex flex-col items-center justify-center gap-3"
                style={{ border: "2px dashed rgba(249,115,22,0.15)" }}>
                <FaExpand size={28} className="text-gray-700" />
                <p className="text-gray-600 text-sm font-mono text-center">
                  Add image to:<br />
                  <span style={{ color: "#F97316" }}>public/assets/certificates/</span>
                </p>
              </div>
            )}
          </div>
          <p className="text-center text-gray-700 text-xs font-mono pb-4">Press ESC or click outside to close</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="certificates" className="py-24" style={{ background: "#080808" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal mb-4">
            <p className="section-tag">Certifications</p>
            <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white mb-2">
              Certifications & Recognition
            </h2>
            <div className="orange-line" />
          </div>

          <div className="flex items-center gap-4 mb-10 reveal">
            <FaCertificate style={{ color: "#F97316" }} size={14} />
            <span className="text-gray-500 text-sm font-mono">{certs.length} certificates — click any to view</span>
          </div>

          {/* Grid — different from v1: horizontal list style with number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
            {certs.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <motion.button
                  key={i}
                  onClick={() => setSelected(cert)}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="dark-card p-5 text-left group relative overflow-hidden"
                  style={{ borderColor: `${cert.color}15` }}
                >
                  {/* Number background */}
                  <span className="absolute top-2 right-3 font-['Bebas_Neue'] text-5xl pointer-events-none select-none"
                    style={{ color: `${cert.color}08` }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Top line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg,transparent,${cert.color},transparent)` }} />

                  <div className="flex items-start gap-3 mb-3 relative z-10">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300"
                      style={{ background: `${cert.color}15`, color: cert.color }}>
                      <Icon size={15} />
                    </div>
                    <span className="text-xs px-2 py-0.5 font-mono self-start"
                      style={{ background: `${cert.color}10`, color: cert.color, border: `1px solid ${cert.color}20` }}>
                      {cert.type}
                    </span>
                  </div>

                  <h4 className="text-white text-sm font-semibold leading-snug mb-1 group-hover:text-orange-400 transition-colors relative z-10">
                    {cert.title}
                  </h4>
                  <p className="text-gray-600 text-xs font-mono relative z-10">{cert.issuer}</p>

                  {/* Click hint */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaExpand size={11} className="text-gray-600" />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
