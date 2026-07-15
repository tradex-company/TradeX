import { Send } from "lucide-react";
import Logo from "./Logo";
import { TELEGRAM_URL } from "../constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <Logo size={36} showWordmark animated={false} />

        <p className="text-sm text-slate-500 order-3 sm:order-2">
          TradeX &copy; 2026. All rights reserved.
        </p>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="order-2 sm:order-3 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200"
        >
          <Send className="w-4 h-4" />
          Telegram
        </a>
      </div>
    </footer>
  );
}
