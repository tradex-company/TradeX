import { motion } from "framer-motion";
import Logo from "./Logo";
import TelegramButton from "./TelegramButton";

export default function CTA() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-[0_8px_50px_rgba(0,0,0,0.4)] px-8 py-16 sm:px-16 text-center"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(500px circle at 50% -10%, rgba(59,130,246,0.25), transparent 60%), radial-gradient(500px circle at 50% 110%, rgba(16,185,129,0.2), transparent 60%)",
            }}
          />

          <div className="relative flex flex-col items-center">
            <div className="animate-float">
              <Logo size={64} />
            </div>

            <h2 className="mt-8 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Ready to Trade Smarter?
            </h2>
            <p className="mt-4 max-w-xl text-base sm:text-lg text-slate-400">
              Join our Telegram community today.
            </p>

            <div className="mt-10">
              <TelegramButton size="lg" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
