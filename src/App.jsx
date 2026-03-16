import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Certificates from "./components/Certificates";
import Vision from "./components/Vision";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      setScrollProgress((window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) { dotRef.current.style.left = e.clientX + "px"; dotRef.current.style.top = e.clientY + "px"; }
    };
    const animate = () => {
      const s = 0.11;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * s;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * s;
      if (ringRef.current) { ringRef.current.style.left = ringPos.current.x + "px"; ringRef.current.style.top = ringPos.current.y + "px"; }
      rafRef.current = requestAnimationFrame(animate);
    };
    const onEnter = () => document.body.classList.add("cur-hover");
    const onLeave = () => document.body.classList.remove("cur-hover");
    document.querySelectorAll("a,button,[data-cur]").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(rafRef.current); };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      <div id="cur-dot" ref={dotRef} />
      <div id="cur-ring" ref={ringRef} />
      <div id="scroll-bar" style={{ width: `${scrollProgress}%` }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Timeline />
        <Certificates />
        <Vision />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}
