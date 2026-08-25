import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

// ── EmailJS Config ─────────────────────────────────────────────────
// 1. Sign up free: https://emailjs.com
// 2. Create a service  → paste Service ID here
// 3. Create a template → paste Template ID here
//    Template variables: {{from_name}} {{from_email}} {{subject}} {{message}}
// 4. Account → API Keys → paste Public Key here
const EMAILJS_SERVICE  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE = "YOUR_TEMPLATE_ID";
const EMAILJS_KEY      = "YOUR_PUBLIC_KEY";
// ──────────────────────────────────────────────────────────────────

const socials = [
  { icon: FaEnvelope, label: "Email", value: "priyag11032005@gmail.com", href: "mailto:priyag11032005@gmail.com", color: "#3B82F6" },
  { icon: FaLinkedin, label: "LinkedIn", value: "priya-g-07422429a", href: "https://www.linkedin.com/in/priya-g-07422429a/", color: "#0ea5e9" },
  { icon: FaGithub, label: "GitHub", value: "priyagowda11-jpg", href: "https://github.com/priyagowda11-jpg/", color: "#a78bfa" },
];

const BLANK = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState(BLANK);
  const [status, setStatus] = useState("idle");
  const [errMsg, setErrMsg] = useState("");

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Demo mode if keys not set
    if (EMAILJS_SERVICE === "YOUR_SERVICE_ID") {
      await new Promise(r => setTimeout(r, 1400));
      setStatus("success");
      setForm(BLANK);
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }
    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_KEY);
      setStatus("success");
      setForm(BLANK);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrMsg("Failed to send. Please email me directly.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const input = "w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-700 focus:outline-none focus:border-[#3B82F6]/50 focus:bg-[#3B82F6]/5 transition-all duration-200";

  return (
    <section id="contact" className="py-28 relative"
      style={{ background: "linear-gradient(180deg, #0B0F19, #0D1220)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-16 text-center">
          <p className="section-label justify-center">Contact</p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white mb-4">
            Let's{" "}
            <span style={{ background: "linear-gradient(135deg,#3B82F6,#14B8A6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Connect
            </span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">Open to internships, research collaborations, and interesting engineering conversations.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 reveal">
          {/* Left */}
          <div>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              I'm always excited about new challenges in AI, IoT, and embedded systems. Whether it's a project collab, research opportunity, or just a conversation — feel free to reach out!
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {socials.map(({ icon: Icon, label, value, href, color }) => (
                <motion.a key={label} href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 glass-card p-4 group transition-all duration-200"
                  style={{ border: `1px solid ${color}15` }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{ background: `${color}15`, color }}>
                    <Icon size={15} />
                  </div>
                  <div>
                    <p className="text-slate-600 text-xs font-mono">{label}</p>
                    <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability banner */}
            <div className="glass-card p-4 flex items-center gap-3"
              style={{ border: "1px solid rgba(20,184,166,0.2)", background: "rgba(20,184,166,0.04)" }}>
              <span className="w-2.5 h-2.5 bg-[#14B8A6] rounded-full animate-pulse flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold">Currently Available</p>
                <p className="text-slate-500 text-xs font-mono">Internships · Research · Part-time projects</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <motion.div whileHover={{ y: -2 }} className="glass-card p-7"
            style={{ border: "1px solid rgba(59,130,246,0.12)" }}>
            <h3 className="text-white font-['Syne'] font-bold text-xl mb-6">Send a Message</h3>

            {status === "success" ? (
              <div className="flex flex-col items-center py-10 gap-4">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(20,184,166,0.15)", border: "1px solid rgba(20,184,166,0.3)" }}>
                  <FaCheckCircle size={26} className="text-[#14B8A6]" />
                </motion.div>
                <p className="text-white font-semibold text-lg">Message Sent! 🎉</p>
                <p className="text-slate-400 text-sm text-center">Thanks for reaching out — I'll get back to you soon!</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-600 text-xs font-mono mb-1.5 block">Name *</label>
                    <input name="from_name" value={form.name} onChange={set("name")} placeholder="Your name" required className={input} />
                  </div>
                  <div>
                    <label className="text-slate-600 text-xs font-mono mb-1.5 block">Email *</label>
                    <input name="from_email" type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" required className={input} />
                  </div>
                </div>
                <div>
                  <label className="text-slate-600 text-xs font-mono mb-1.5 block">Subject *</label>
                  <input name="subject" value={form.subject} onChange={set("subject")} placeholder="What's this about?" required className={input} />
                </div>
                <div>
                  <label className="text-slate-600 text-xs font-mono mb-1.5 block">Message *</label>
                  <textarea name="message" rows={4} value={form.message} onChange={set("message")} placeholder="Your message..." required className={`${input} resize-none`} />
                </div>

                {status === "error" && (
                  <div className="flex items-start gap-2 p-3 rounded-xl text-xs text-red-400"
                    style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)" }}>
                    <FaExclamationTriangle size={13} className="mt-0.5 flex-shrink-0" />
                    {errMsg}
                  </div>
                )}

                <motion.button type="submit" disabled={status === "sending"}
                  whileHover={status !== "sending" ? { scale: 1.01 } : {}}
                  whileTap={{ scale: 0.98 }}
                  className="btn-glow w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-1">
                  {status === "sending" ? (
                    <><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Sending...</>
                  ) : (
                    <><FaPaperPlane size={13} /> Send Message</>
                  )}
                </motion.button>
                <p className="text-slate-700 text-xs text-center font-mono">Powered by EmailJS — add your keys in Contact.jsx</p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 text-center reveal" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <p className="text-slate-600 text-sm font-mono">
            Built with ❤️ by <span className="text-[#3B82F6] font-semibold">Priya G</span> · EEE @ RRCE · 2024
          </p>
          <p className="text-slate-700 text-xs font-mono mt-1">React · Framer Motion · Tailwind CSS · Vite</p>
        </div>
      </div>
    </section>
  );
}
