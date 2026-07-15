import { motion } from "framer-motion";
import { TELEGRAM_URL } from "../constants";

function TelegramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M21.05 3.14 2.63 10.6c-1.26.52-1.25 1.24-.23 1.56l4.7 1.47 1.8 5.6c.22.62.36.86.75.86.3 0 .43-.14.6-.3l2.7-2.62 4.85 3.6c.9.5 1.53.24 1.76-.83l3.18-15c.32-1.32-.5-1.9-1.69-1.4Zm-3.6 3.65L9.02 13.6l-.35 4.02-1.4-4.36 10.4-6.5c.49-.3.94-.14.57.19Z" />
    </svg>
  );
}

export default function TelegramButton({
  size = "lg",
  fullWidth = false,
  className = "",
}) {
  const sizing =
    size === "lg"
      ? "px-8 py-4 text-lg gap-3"
      : "px-6 py-3 text-base gap-2";

  return (
    <motion.a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.045, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`group relative inline-flex ${fullWidth ? "w-full justify-center" : ""} items-center ${sizing} rounded-full font-semibold text-white
        bg-gradient-to-r from-blue-500 to-emerald-500
        shadow-[0_0_25px_rgba(59,130,246,0.45)]
        hover:shadow-[0_0_45px_rgba(16,185,129,0.65)]
        transition-shadow duration-300 ${className}`}
    >
      <span
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 blur-xl group-hover:opacity-60 transition-opacity duration-300"
        aria-hidden="true"
      />
      <TelegramIcon className="relative w-6 h-6 shrink-0" />
      <span className="relative">Join TradeX on Telegram</span>
    </motion.a>
  );
}
