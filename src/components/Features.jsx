import { motion } from "framer-motion";
import { LineChart, ShieldCheck, Users, Signal } from "lucide-react";

const FEATURES = [
  {
    icon: Signal,
    title: "Daily Signals",
    description:
      "Curated Forex, Crypto & Gold entries delivered straight to your Telegram, every trading day.",
  },
  {
    icon: LineChart,
    title: "Market Analysis",
    description:
      "In-depth technical breakdowns and macro context so you understand every call we make.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    description:
      "Clear stop-loss and position sizing guidance built to protect your capital first.",
  },
  {
    icon: Users,
    title: "Trading Community",
    description:
      "Join thousands of traders sharing insights, wins, and lessons in real time.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              trade with confidence
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl p-6 bg-white/[0.04] border border-white/10 backdrop-blur-xl
                shadow-[0_8px_32px_rgba(0,0,0,0.35)]
                transition-all duration-300
                hover:border-emerald-400/40 hover:bg-white/[0.06]"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(120px circle at 50% 0%, rgba(16,185,129,0.18), transparent 70%)",
                }}
              />
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl mb-5 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-white/10 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.45)] transition-shadow duration-300">
                <Icon className="w-6 h-6 text-emerald-400" strokeWidth={1.75} />
              </div>
              <h3 className="relative text-lg font-semibold text-white mb-2">
                {title}
              </h3>
              <p className="relative text-sm text-slate-400 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
