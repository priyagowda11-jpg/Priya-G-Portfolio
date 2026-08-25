import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const links = ["About", "Skills", "Experience", "Projects", "Certificates", "Achievements", "Contact"];

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0B0F19]/90 backdrop-blur-xl border-b border-white/5 py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.a href="#" className="font-mono text-sm font-semibold flex items-center gap-2" whileHover={{ scale: 1.03 }}>
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#14B8A6] flex items-center justify-center text-white text-xs font-bold">P</span>
            <span className="text-white">Priya<span className="text-[#3B82F6]">.</span></span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} className="nav-link">{l}</button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => setDarkMode(!darkMode)}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#3B82F6]/50 transition-all duration-200">
              {darkMode ? <FaSun size={13} /> : <FaMoon size={13} />}
            </button>
            <a href="/assets/resume/Priya_G_Resume.pdf" download
              className="hidden md:block btn-glow text-xs px-5 py-2.5">
              Resume
            </a>
            <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/5 py-6 px-6"
          >
            <div className="flex flex-col gap-5">
              {links.map((l) => (
                <button key={l} onClick={() => scrollTo(l)} className="text-left text-slate-300 hover:text-white text-base font-medium">{l}</button>
              ))}
              <a href="/assets/resume/Priya_G_Resume.pdf" download className="btn-glow text-center text-sm">Download Resume</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
