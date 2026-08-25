import { motion } from "framer-motion";
import { FaLinkedin, FaBook, FaTrophy, FaChalkboardTeacher, FaHandsHelping } from "react-icons/fa";

const achievements = [
  {
    icon: FaLinkedin,
    title: "991 Impressions on LinkedIn Portfolio Post",
    desc: "Organically reached 900+ people as a student and built 330++ LinkedIn connections in just 3 weeks — from scratch.",
    color: "#F97316",
  },
  {
    icon: FaBook,
    title: "Journal Publication",
    desc: "Authored a peer-reviewed research paper published in an academic journal.",
    color: "#EF4444",
  },
  {
    icon: FaTrophy,
    title: "Hackathon Participant",
    desc: "Competed in a hackathon and won a prize, building rapid prototypes under time pressure alongside a team.",
    color: "#F97316",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Project Expo Presenter",
    desc: "Presented projects at the Project Expo and won 2nd prize, RajaRajeswari College of Engineering.",
    color: "#EF4444",
  },
  {
    icon: FaHandsHelping,
    title: "Live Client Project — Social Welfare Organisation",
    desc: "Built a real website for a social welfare organisation as a final-year student — a live client project.",
    color: "#F97316",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative" style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-14">
          <p className="section-tag">Recognition</p>
          <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-white mb-2">
            Achievements
          </h2>
          <div className="orange-line" />
          <p className="text-gray-500 text-sm max-w-lg">Milestones and moments worth highlighting</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="dark-card p-6 flex flex-col gap-4"
                style={{ borderColor: `${a.color}15` }}
              >
                <div className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                  style={{ background: `${a.color}15`, color: a.color, clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))" }}>
                  <Icon size={16} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-2 leading-snug">{a.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
