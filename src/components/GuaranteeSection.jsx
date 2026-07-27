import { motion } from "framer-motion";
import { ShieldCheck, RotateCcw, CheckCircle2, DollarSign, Lock, Award } from "lucide-react";
import TelegramButton from "./TelegramButton";
import { TELEGRAM_USERNAME, GUARANTEE_TEXT } from "../constants";

export default function GuaranteeSection() {
  const guaranteeSteps = [
    {
      step: "01",
      title: "Join TradeX VIP Telegram",
      desc: `Connect directly to @${TELEGRAM_USERNAME} to receive live Forex, Gold & Crypto entries with exact TP/SL levels.`,
      icon: Lock,
    },
    {
      step: "02",
      title: "Execute Signals for 30 Days",
      desc: "Apply our automated risk management guidelines (1-2% account size per trade) for 30 consecutive trading days.",
      icon: CheckCircle2,
    },
    {
      step: "03",
      title: "100% Money-Back Refund",
      desc: "If your trading account is not net profitable after 30 days of standard execution, we refund 100% of your fee.",
      icon: DollarSign,
    },
  ];

  return (
    <section id="guarantee" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#020403] overflow-hidden">
      {/* Background neon green ambient glows - subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#00ff66]/08 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#05180c] border border-[#00ff66]/30 text-xs font-bold text-[#00ff66] uppercase tracking-widest mb-4"
          >
            <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>UNMATCHED ACCOUNTABILITY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight px-2"
          >
            Our Ironclad{" "}
            <span className="text-[#00ff66] drop-shadow-[0_0_20px_rgba(0,255,102,0.4)]">
              30-Day Guarantee
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400 font-medium px-2"
          >
            We take all the risk so you can trade with peace of mind.
          </motion.p>
        </div>

        {/* Main Guarantee Highlight Feature Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-4 sm:p-8 md:p-12 bg-gradient-to-br from-[#061c0e] via-[#041008] to-[#020403] border-2 border-[#00ff66] shadow-[0_0_50px_rgba(0,255,102,0.2)] mb-10 sm:mb-16 overflow-hidden"
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#00ff66_1px,transparent_1px)] [background-size:24px_24px] opacity-05 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl text-left">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="p-2 rounded-xl bg-[#00ff66] text-black font-black">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#00ff66] tracking-wider uppercase">
                  ZERO RISK POLICY
                </span>
              </div>

              <h3 className="text-lg sm:text-2xl md:text-4xl font-black text-white leading-tight">
                "{GUARANTEE_TEXT}"
              </h3>

              <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
                If after 30 days of trading our verified signals from Telegram{" "}
                <span className="text-[#00ff66] font-bold">@{TELEGRAM_USERNAME}</span> you don't see net profit, contact our support for a 100% refund. No questions asked.
              </p>
            </div>

            {/* 3D Shield Badge */}
            <motion.div
              whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
              className="shrink-0 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-3xl bg-[#082211] border-2 border-[#00ff66] flex flex-col items-center justify-center text-center p-4 sm:p-6 shadow-[0_0_35px_rgba(0,255,102,0.3)] cursor-pointer"
            >
              <ShieldCheck className="w-12 h-12 sm:w-20 sm:h-20 text-[#00ff66]" />
              <span className="mt-2 sm:mt-3 text-sm sm:text-xl font-black text-white">100% REFUND</span>
              <span className="text-xs text-gray-400 font-bold tracking-wider">30 DAYS</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {guaranteeSteps.map(({ step, title, desc, icon: Icon }, idx) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-4 sm:p-6 md:p-8 rounded-2xl bg-[#051108] border border-[#00ff66]/20 hover:border-[#00ff66] transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.4)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-black text-[#00ff66] opacity-70">{step}</span>
                  <div className="p-2 sm:p-3 rounded-xl bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/20">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
                <h4 className="text-base sm:text-xl font-bold text-white mb-2">{title}</h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <TelegramButton
            size="lg"
            text={`Claim Risk-Free Access @${TELEGRAM_USERNAME}`}
          />
        </div>

      </div>
    </section>
  );
}
