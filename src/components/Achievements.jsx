import { motion } from "framer-motion";
import { FaChartLine, FaUsers, FaBook, FaTrophy, FaProjectDiagram, FaGlobe } from "react-icons/fa";

const achievements = [
  {
    icon: FaChartLine,
    title: "991 LinkedIn Impressions",
    desc: "Organically reached 900+ people as a student with a single portfolio post",
    accent: "#3B82F6",
  },
  {
    icon: FaUsers,
    title: "330+ New Connections",
    desc: "Built a LinkedIn network from scratch in just 3 weeks",
    accent: "#14B8A6",
  },
  {
    icon: FaBook,
    title: "Journal Publication",
    desc: "Co-authored a peer-reviewed research paper",
    accent: "#a78bfa",
  },
  {
    icon: FaTrophy,
    title: "Hackathon Participant",
    desc: "Competed in a team hackathon building under time pressure",
    accent: "#f97316",
  },
  {
    icon: FaProjectDiagram,
    title: "Project Expo Presenter",
    desc: "Presented at Rajarajeswari College of Engineering's Project Expo",
    accent: "#10b981",
  },
  {
    icon: FaGlobe,
    title: "Live Client Project",
    desc: "Built a real website for a social welfare organisation as a 3rd-year student",
    accent: "#ec4899",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 relative"
      style={{ background: "linear-gradient(180deg, #0B0F19 0%, #0D1220 50%, #0B0F19 100%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-16 text-center">
          <p className="section-label justify-center">Milestones</p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white">
            Achievements &{" "}
            <span style={{ background: "linear-gradient(135deg,#3B82F6,#14B8A6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Milestones
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div key={i} whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card p-6"
                style={{ border: `1px solid ${a.accent}18` }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `linear-gradient(135deg, ${a.accent}25, ${a.accent}10)`, color: a.accent, boxShadow: `0 4px 14px ${a.accent}20` }}>
                  <Icon size={16} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{a.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
