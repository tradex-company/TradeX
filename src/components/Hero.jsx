import { motion } from "framer-motion";
import Logo from "./Logo";
import { HIGHLIGHT_QUOTE, GUARANTEE_TEXT } from "../constants";
import { ShieldCheck, Quote } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[#000000] overflow-hidden">

      {/* Subtle static grid background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,102,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,102,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6"
        >
          <Logo size={88} />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight"
        >
          TRADEX <span className="text-[#00ff66]">VIP SIGNALS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-lg sm:text-xl text-gray-300 font-medium max-w-xl"
        >
          Institutional Forex, Gold & Crypto Signals Delivered Daily.
        </motion.p>

        {/* QUOTE HIGHLIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 w-full max-w-3xl bg-[#080808] border-2 border-[#00ff66] rounded-2xl p-6 sm:p-8 text-left shadow-[0_0_30px_rgba(0,255,102,0.25)]"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#00ff66] text-black shrink-0">
              <Quote className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#00ff66] block mb-2">
                CORE TRADING PRINCIPLE
              </span>
              <p className="text-xl sm:text-2xl font-black text-white leading-snug">
                "{HIGHLIGHT_QUOTE}"
              </p>
            </div>
          </div>
        </motion.div>

        {/* 30-DAY REFUND GUARANTEE HIGHLIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-5 w-full max-w-3xl bg-[#05150a] border-2 border-[#00ff66] rounded-2xl p-6 sm:p-8 text-left shadow-[0_0_30px_rgba(0,255,102,0.3)]"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-[#00ff66] text-black shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-[#00ff66] text-black text-xs font-black uppercase tracking-wider mb-2">
                  100% RISK-FREE GUARANTEE
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                  {GUARANTEE_TEXT}
                </h3>
              </div>
            </div>
            <div className="shrink-0 bg-[#000000] border-2 border-[#00ff66] px-5 py-3 rounded-xl text-center">
              <div className="text-2xl font-black text-[#00ff66]">30 DAYS</div>
              <div className="text-[10px] text-white font-extrabold uppercase tracking-wider">FULL REFUND</div>
            </div>
          </div>
        </motion.div>

        {/* Metrics Row */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl">
          {[
            { value: "89.4%", label: "Win Rate" },
            { value: "+4,850", label: "Monthly Pips" },
            { value: "14,200+", label: "Active Traders" },
            { value: "30 DAYS", label: "Refund Pledge" },
          ].map(({ value, label }) => (
            <div key={label} className="p-4 rounded-xl bg-[#080808] border border-[#00ff66] text-center">
              <div className="text-xl sm:text-2xl font-black text-[#00ff66]">{value}</div>
              <div className="text-xs text-white font-bold mt-1">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
