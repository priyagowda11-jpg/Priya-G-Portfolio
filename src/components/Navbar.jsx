import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = ["About", "Experience", "Skills", "Projects", "Timeline", "Certificates", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3 border-b" : "py-5"
        }`}
        style={{
          background: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderColor: "rgba(249,115,22,0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 flex items-center justify-center font-mono font-bold text-sm text-white"
              style={{ background: "linear-gradient(135deg,#F97316,#EF4444)", clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))" }}>
              P
            </div>
            <span className="font-mono text-sm font-semibold text-white">
              Priya<span style={{ color: "#F97316" }}>.</span>
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => <button key={l} onClick={() => scrollTo(l)} className="nav-item">{l}</button>)}
          </div>

          <div className="flex items-center gap-3">
            <a href="/assets/resume/Priya_G_Resume.pdf" download
              className="hidden md:block btn-orange text-xs px-5 py-2.5">
              Resume
            </a>
            <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setOpen(!open)}>
              {open ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 py-6 px-6"
            style={{ background: "rgba(8,8,8,0.98)", borderBottom: "1px solid rgba(249,115,22,0.15)" }}>
            <div className="flex flex-col gap-5">
              {links.map(l => <button key={l} onClick={() => scrollTo(l)} className="text-left text-gray-300 hover:text-white">{l}</button>)}
              <a href="/assets/resume/Priya_G_Resume.pdf" download className="btn-orange text-center text-sm">Resume</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
