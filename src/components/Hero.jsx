import { motion } from "framer-motion";
import Logo from "./Logo";
import Background from "./Background";
import TelegramButton from "./TelegramButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden">
      <Background />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="animate-float"
        >
          <Logo size={92} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-xl sm:text-2xl font-semibold tracking-tight text-white"
        >
          Trade<span className="text-emerald-400">X</span>
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-4 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
        >
          <span className="bg-gradient-to-r from-white via-white to-slate-300 bg-clip-text text-transparent">
            Trade Smarter.
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Grow Faster.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-slate-400"
        >
          Professional Forex, Crypto &amp; Gold Trading Signals with Daily
          Market Analysis.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10"
        >
          <TelegramButton size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
