import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const EMAILJS_SERVICE_ID  = "service_fn2tnzk";
const EMAILJS_TEMPLATE_ID = "template_vlfm4qh";
const EMAILJS_PUBLIC_KEY  = "3YdlH-G6Hxy1e3zXv";

const socials = [
  { icon: FaEnvelope, label: "Email", value: "priyag11032005@gmail.com", href: "mailto:priyag11032005@gmail.com", color: "#F97316" },
  { icon: FaLinkedin, label: "LinkedIn", value: "priya-g-07422429a", href: "https://www.linkedin.com/in/priya-g-07422429a/", color: "#EF4444" },
  { icon: FaGithub, label: "GitHub", value: "priyagowda11-jpg", href: "https://github.com/priyagowda11-jpg/", color: "#F97316" },
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
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("success"); setForm(BLANK);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error"); setErrMsg("Failed to send. Email me directly at priyag11032005@gmail.com");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const inp = "w-full bg-transparent border-b text-white text-sm placeholder-gray-600 focus:outline-none py-3 transition-all duration-200 font-body caret-orange-500";
  const inpStyle = { borderColor: "rgba(249,115,22,0.2)", borderBottomWidth: "1px" };
  const inpFocusStyle = { borderColor: "#F97316" };

  return (
    <section id="contact" className="py-24" style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-14">
          <p className="section-tag">Contact</p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white mb-2">
            Get In Touch
          </h2>
          <div className="orange-line" />
        </div>

        <div className="grid md:grid-cols-2 gap-14 reveal">
          {/* Left */}
          <div>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Open to internships, research collaborations, and AI/ML project discussions. Let's build something intelligent together.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {socials.map(({ icon: Icon, label, value, href, color }) => (
                <motion.a key={label} href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 group">
                  <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{ background: `${color}12`, color, border: `1px solid ${color}20`, clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))" }}>
                    <Icon size={15} />
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs font-mono">{label}</p>
                    <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Available badge */}
            <div className="flex items-center gap-3 p-4"
              style={{ border: "1px solid rgba(249,115,22,0.2)", background: "rgba(249,115,22,0.04)", borderLeft: "3px solid #F97316" }}>
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold">Currently Available</p>
                <p className="text-gray-600 text-xs font-mono">Internships · Research · Projects</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <h3 className="font-['Syne'] font-bold text-xl text-white mb-8">Send a Message</h3>

            {status === "success" ? (
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center py-14 gap-4">
                <div className="w-16 h-16 flex items-center justify-center"
                  style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)", clipPath: "polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)" }}>
                  <FaCheckCircle size={26} style={{ color: "#F97316" }} />
                </div>
                <p className="text-white font-semibold text-lg">Message Sent! 🎉</p>
                <p className="text-gray-500 text-sm text-center">Thanks for reaching out — I'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-gray-600 text-xs font-mono mb-2 block uppercase tracking-wider">Name *</label>
                    <input name="from_name" value={form.name} onChange={set("name")}
                      placeholder="Your name" required className={inp} style={inpStyle}
                      onFocus={e => e.target.style.borderColor = "#F97316"}
                      onBlur={e => e.target.style.borderColor = "rgba(249,115,22,0.2)"} />
                  </div>
                  <div>
                    <label className="text-gray-600 text-xs font-mono mb-2 block uppercase tracking-wider">Email *</label>
                    <input name="from_email" type="email" value={form.email} onChange={set("email")}
                      placeholder="you@email.com" required className={inp} style={inpStyle}
                      onFocus={e => e.target.style.borderColor = "#F97316"}
                      onBlur={e => e.target.style.borderColor = "rgba(249,115,22,0.2)"} />
                  </div>
                </div>

                <div>
                  <label className="text-gray-600 text-xs font-mono mb-2 block uppercase tracking-wider">Subject *</label>
                  <input name="subject" value={form.subject} onChange={set("subject")}
                    placeholder="What's this about?" required className={inp} style={inpStyle}
                    onFocus={e => e.target.style.borderColor = "#F97316"}
                    onBlur={e => e.target.style.borderColor = "rgba(249,115,22,0.2)"} />
                </div>

                <div>
                  <label className="text-gray-600 text-xs font-mono mb-2 block uppercase tracking-wider">Message *</label>
                  <textarea name="message" rows={4} value={form.message} onChange={set("message")}
                    placeholder="Your message..." required className={`${inp} resize-none`} style={inpStyle}
                    onFocus={e => e.target.style.borderColor = "#F97316"}
                    onBlur={e => e.target.style.borderColor = "rgba(249,115,22,0.2)"} />
                </div>

                {status === "error" && (
                  <div className="flex items-start gap-2 p-3 text-xs text-red-400"
                    style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)" }}>
                    <FaExclamationTriangle size={13} className="mt-0.5 flex-shrink-0" />
                    {errMsg}
                  </div>
                )}

                <motion.button type="submit" disabled={status === "sending"}
                  whileHover={status !== "sending" ? { scale: 1.01 } : {}}
                  whileTap={{ scale: 0.98 }}
                  className="btn-orange flex items-center justify-center gap-2 w-full disabled:opacity-50">
                  {status === "sending" ? (
                    <><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending...</>
                  ) : (
                    <><FaPaperPlane size={13} />Send Message</>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 text-center" style={{ borderTop: "1px solid rgba(249,115,22,0.08)" }}>
          <p className="text-gray-700 text-sm font-mono">
            Built with ❤️ by <span style={{ color: "#F97316" }} className="font-semibold">Priya G</span>
            {" "}· EEE @ RRCE · 2025
          </p>
          <p className="text-gray-800 text-xs font-mono mt-1">React · Framer Motion · Tailwind CSS · Vite</p>
        </div>
      </div>
    </section>
  );
}
