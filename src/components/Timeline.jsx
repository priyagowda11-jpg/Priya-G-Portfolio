import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaTrophy, FaCode, FaFlask, FaSearch } from "react-icons/fa";

const events = [
  {
    year: "2021", month: "June",
    title: "Completed 10th Grade", sub: "St Anne's Primary & Higher School",
    desc: "Strong academic foundation — State Board curriculum. First steps into the world of science and mathematics.",
    icon: FaGraduationCap, color: "#F97316", side: "left",
  },
  {
    year: "2023", month: "May",
    title: "Completed PU — PCMB", sub: "Aditya PU College",
    desc: "Physics, Chemistry, Mathematics, Biology. Developed deep interest in electronics and programming.",
    icon: FaGraduationCap, color: "#EF4444", side: "right",
  },
  {
    year: "2023", month: "August",
    title: "Started B.E. EEE", sub: "Rajarajeswari College of Engineering",
    desc: "Began engineering journey with focus on Electrical & Electronics — quickly expanded into AI, IoT, and software development.",
    icon: FaCode, color: "#F97316", side: "left",
  },
  {
    year: "2024", month: "March",
    title: "Research Paper Publication", sub: "Academic Journal",
    desc: "Published research paper — combining technical writing with engineering analysis at undergraduate level.",
    icon: FaSearch, color: "#EF4444", side: "right",
  },
  {
    year: "2024", month: "June",
    title: "Full Stack Internship", sub: "Pantech AI — 3 Months",
    desc: "Built real-world web applications with Python, Flask and React. Gained hands-on industry experience.",
    icon: FaBriefcase, color: "#F97316", side: "left",
  },
  {
    year: "2024", month: "September",
    title: "Hackathon Participation", sub: "Tech Event",
    desc: "Competed in hackathon — built rapid prototypes under time pressure and collaborated with teams.",
    icon: FaTrophy, color: "#EF4444", side: "right",
  },
  {
    year: "2024", month: "November",
    title: "Project Expo", sub: "College Exhibition",
    desc: "Showcased AI and IoT projects to judges and industry professionals. Received recognition for innovation.",
    icon: FaTrophy, color: "#F97316", side: "left",
  },
  {
    year: "2025", month: "Ongoing",
    title: "Smart EV Charger + More", sub: "Independent Projects",
    desc: "Currently building Smart EV Charger app with Flutter/Firebase/AI and expanding portfolio with AI-ML projects.",
    icon: FaFlask, color: "#EF4444", side: "right",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24" style={{ background: "#0A0A0A" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal mb-14 text-center">
          <p className="section-tag justify-center">Journey</p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white mb-2">
            Timeline of Achievements
          </h2>
          <div className="orange-line mx-auto" />
          <p className="text-gray-500 text-sm">Every step that shaped who I am today</p>
        </div>

        <div className="relative reveal">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom,#F97316,rgba(239,68,68,0.3),transparent)", transform: "translateX(-50%)" }} />

          <div className="flex flex-col gap-8">
            {events.map((ev, i) => {
              const Icon = ev.icon;
              const isLeft = ev.side === "left";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`flex items-center gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                >
                  {/* Card */}
                  <div className="flex-1 dark-card p-5 hover:border-orange-500/30 transition-all duration-300 group"
                    style={{ borderColor: `${ev.color}15` }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs px-2 py-0.5"
                        style={{ background: `${ev.color}15`, color: ev.color, border: `1px solid ${ev.color}20` }}>
                        {ev.month} {ev.year}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-base mb-0.5 group-hover:text-orange-400 transition-colors">{ev.title}</h3>
                    <p className="text-xs font-mono mb-2" style={{ color: ev.color }}>{ev.sub}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{ev.desc}</p>
                  </div>

                  {/* Center dot */}
                  <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                    <div className="w-10 h-10 rounded-none flex items-center justify-center z-10"
                      style={{ background: `${ev.color}15`, border: `2px solid ${ev.color}`, color: ev.color, clipPath: "polygon(50% 0,100% 50%,50% 100%,0 50%)" }}>
                      <Icon size={14} />
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
