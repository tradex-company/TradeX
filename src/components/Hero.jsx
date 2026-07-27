import { motion } from "framer-motion";
import Logo from "./Logo";
import TelegramButton from "./TelegramButton";
import { HIGHLIGHT_QUOTE, GUARANTEE_TEXT, WIN_RATE_TEXT } from "../constants";
import { ShieldCheck, Quote, Sparkles, TrendingUp, CheckCircle2, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#000000] overflow-hidden">

      {/* Static grid background */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,102,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,102,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#00ff66]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center w-full pt-2 sm:pt-4">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-2 sm:mb-3"
        >
          <Logo size={60} />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight"
        >
          TRADEX <span className="text-[#00ff66] drop-shadow-[0_0_20px_rgba(0,255,102,0.5)]">EXCLUSIVE GROUP</span>
        </motion.h1>

        {/* Subtitle */}
        {/* <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-1.5 text-xs sm:text-lg text-gray-300 font-medium max-w-xl"
        >
          Institutional Forex, Gold & Crypto Signals Delivered Daily.
        </motion.p> */}

        {/* 🌟 TELEGRAM JOIN BUTTON DIRECTLY BELOW MAIN HEADING & SUBTITLE 🌟 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-3.5 sm:mt-5 w-full max-w-md px-2"
        >
          <TelegramButton
            fullWidth
            size="xl"
            text="Join TradeX Exclusive Group"
          />
        </motion.div>

        {/* 🌟 DUAL HERO TRUST HIGHLIGHT CARDS 🌟 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-4 sm:mt-6 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left"
        >
          {/* CONTENT 1: EXCLUSIVE GROUP & 95%+ WIN RATE */}
          <div className="relative rounded-xl bg-gradient-to-br from-[#06180c] via-[#031107] to-[#010803] border-2 border-[#00ff66] p-4 sm:p-5 shadow-[0_0_25px_rgba(0,255,102,0.25)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-lg bg-[#00ff66] text-black font-black">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#00ff66]/20 border border-[#00ff66] text-[#00ff66] text-[10px] sm:text-xs font-black uppercase">
                  {WIN_RATE_TEXT} WIN RATE
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white mb-1">
                Institutional Exclusive Group
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-medium leading-snug">
                Institutional signal setups with precise entry, TP & SL targets posted live to Telegram daily.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#00ff66]/20 flex items-center gap-1.5 text-[11px] font-bold text-[#00ff66]">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Institutional Signal Delivery Daily</span>
            </div>
          </div>

          {/* CONTENT 2: 30 DAYS FULL REFUND GUARANTEE */}
          <div className="relative rounded-xl bg-gradient-to-br from-[#0a1f10] via-[#05150a] to-[#020a04] border-2 border-[#00ff66] p-4 sm:p-5 shadow-[0_0_25px_rgba(0,255,102,0.3)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-lg bg-[#00ff66] text-black font-black">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#00ff66] text-black text-[10px] sm:text-xs font-black uppercase">
                  100% RISK-FREE
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white mb-1">
                30 Days Full Refund Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-medium leading-snug">
                {GUARANTEE_TEXT} We take 100% financial risk so you trade with total confidence.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#00ff66]/20 flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#00ff66] flex items-center gap-1">
                <Award className="w-3.5 h-3.5" /> 100% Money Back
              </span>
              <span className="text-[10px] font-black text-white bg-[#00ff66]/20 border border-[#00ff66] px-2 py-0.5 rounded">
                30 DAYS
              </span>
            </div>
          </div>
        </motion.div>

        {/* CORE QUOTE HIGHLIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 sm:mt-6 w-full max-w-3xl bg-[#061008] border border-[#00ff66]/40 rounded-xl p-3.5 sm:p-5 text-left shadow-[0_0_20px_rgba(0,255,102,0.15)]"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#00ff66]/20 text-[#00ff66] shrink-0 font-black border border-[#00ff66]/40">
              <Quote className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#00ff66] block mb-0.5">
                CORE TRADING PRINCIPLE
              </span>
              <p className="text-xs sm:text-base font-black text-white leading-snug">
                "{HIGHLIGHT_QUOTE}"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics Row */}
        <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-3xl">
          {[
            { value: WIN_RATE_TEXT, label: "Win Rate" },
            { value: "30 DAYS", label: "Full Refund" },
            { value: "+4,850", label: "Monthly Pips" },
            { value: "14,200+", label: "Members" },
          ].map(({ value, label }) => (
            <div key={label} className="p-2.5 sm:p-3 rounded-lg bg-[#080808] border border-[#00ff66]/60 text-center shadow-[0_0_12px_rgba(0,255,102,0.1)]">
              <div className="text-base sm:text-xl font-black text-[#00ff66]">{value}</div>
              <div className="text-[10px] sm:text-xs text-white font-bold mt-0.5">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
