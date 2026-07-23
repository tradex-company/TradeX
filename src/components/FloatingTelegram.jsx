import { TELEGRAM_URL, TELEGRAM_USERNAME } from "../constants";

function TelegramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M21.05 3.14 2.63 10.6c-1.26.52-1.25 1.24-.23 1.56l4.7 1.47 1.8 5.6c.22.62.36.86.75.86.3 0 .43-.14.6-.3l2.7-2.62 4.85 3.6c.9.5 1.53.24 1.76-.83l3.18-15c.32-1.32-.5-1.9-1.69-1.4Zm-3.6 3.65L9.02 13.6l-.35 4.02-1.4-4.36 10.4-6.5c.49-.3.94-.14.57.19Z" />
    </svg>
  );
}

export default function FloatingTelegram() {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 z-50 flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-[#00ff66] text-black font-extrabold shadow-[0_0_25px_rgba(0,255,102,0.8)] border-2 border-black hover:scale-105 transition-transform"
    >
      <TelegramIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-black shrink-0" />
      <span className="text-xs sm:text-sm font-black tracking-tight text-black whitespace-nowrap">
        @{TELEGRAM_USERNAME}
      </span>
    </a>
  );
}
