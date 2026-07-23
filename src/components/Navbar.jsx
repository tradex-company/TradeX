import Logo from "./Logo";
import { TELEGRAM_USERNAME } from "../constants";
import { ShieldCheck } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#010f04] border-b border-[#00ff66] py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2">
          <Logo size={40} showWordmark={true} />
        </a>

        {/* 30-Day Guarantee Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a1a0f] border border-[#00ff66] text-xs text-[#00ff66] font-extrabold uppercase">
          <ShieldCheck className="w-4 h-4 text-[#00ff66]" />
          <span className="hidden sm:inline">30-Day Profitability Full Refund Guarantee</span>
          <span className="sm:hidden">30-Day Refund Guarantee</span>
        </div>
      </div>
    </header>
  );
}
