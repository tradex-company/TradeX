import Logo from "./Logo";
import { TELEGRAM_USERNAME, TELEGRAM_URL, HIGHLIGHT_QUOTE, GUARANTEE_TEXT } from "../constants";

export default function Footer() {
  return (
    <footer className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-[#010f04] border-t border-[#00ff66]/20 text-gray-300 text-xs sm:text-sm shadow-[0_-1px_30px_rgba(0,255,102,0.15)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
        <div>
          <Logo size={32} showWordmark={true} />
          <p className="mt-2 text-xs text-white font-bold max-w-sm mx-auto md:mx-0">
            Official Telegram:{" "}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ff66] underline font-black hover:opacity-80 transition-opacity"
            >
              @{TELEGRAM_USERNAME}
            </a>
          </p>
        </div>

        <div className="text-xs text-center md:text-right">
          <p className="text-[#00ff66] font-extrabold italic">"{HIGHLIGHT_QUOTE}"</p>
          <p className="text-gray-400 font-medium mt-1">{GUARANTEE_TEXT}</p>
          <p className="text-gray-500 mt-2">© {new Date().getFullYear()} TradeX (@{TELEGRAM_USERNAME}). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
