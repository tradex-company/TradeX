import { motion } from "framer-motion";
import { TELEGRAM_URL, TELEGRAM_USERNAME } from "../constants";

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
  text = `Join @${TELEGRAM_USERNAME} on Telegram`,
  className = "",
}) {
  const sizing =
    size === "lg"
      ? "px-5 py-3 text-sm sm:px-8 sm:py-4 sm:text-lg gap-2 sm:gap-3"
      : size === "xl"
      ? "px-6 py-3 text-sm sm:px-10 sm:py-5 sm:text-xl gap-2 sm:gap-4"
      : "px-4 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-base gap-2";

  return (
    <motion.a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex ${fullWidth ? "w-full justify-center" : ""} items-center ${sizing} rounded-xl font-extrabold text-black bg-[#00ff66] hover:bg-[#10b981] shadow-[0_0_25px_rgba(0,255,102,0.5)] transition-all duration-200 cursor-pointer border-2 border-[#00ff66] ${className}`}
    >
      <TelegramIcon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 fill-black text-black" />
      <span className="tracking-tight text-black whitespace-nowrap">{text}</span>
    </motion.a>
  );
}
