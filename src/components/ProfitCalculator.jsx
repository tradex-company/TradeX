import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ShieldCheck, DollarSign, ArrowRight, Zap, CheckCircle } from "lucide-react";
import { TELEGRAM_USERNAME, GUARANTEE_TEXT } from "../constants";
import TelegramButton from "./TelegramButton";

export default function ProfitCalculator() {
  const [balance, setBalance] = useState(1000);
  const [riskLevel, setRiskLevel] = useState("conservative"); // conservative (1%), standard (2%), aggressive (3%)

  // Profit calculation logic (based on historical average ~35% - 65% monthly ROI at standard risk)
  const multiplier = riskLevel === "conservative" ? 0.32 : riskLevel === "standard" ? 0.48 : 0.68;
  const estimatedMonthlyProfit = Math.round(balance * multiplier);
  const totalBalanceAfter30Days = balance + estimatedMonthlyProfit;

  return (
    <section id="calculator" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#020403] border-t border-[#00ff66]/10">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#05180c] border border-[#00ff66]/40 text-xs font-bold text-[#00ff66] uppercase tracking-widest mb-4">
            <Calculator className="w-4 h-4" />
            <span>INTERACTIVE ROI ESTIMATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Calculate Your <span className="text-[#00ff66]">30-Day Potential</span>
          </h2>
          <p className="mt-3 text-gray-300 text-base sm:text-lg">
            See estimated returns based on our historical win rate. Protected by our 30-day refund policy.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#06170d] to-[#030905] border border-[#00ff66]/35 shadow-[0_0_50px_rgba(0,255,102,0.15)]">
          
          {/* Controls Side */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-gray-200">
                  Starting Trading Balance ($ USD):
                </label>
                <span className="text-2xl font-black text-[#00ff66]">${balance.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="200"
                max="10000"
                step="100"
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
                className="w-full h-3 bg-[#0a2213] rounded-lg appearance-none cursor-pointer accent-[#00ff66]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>$200 Min</span>
                <span>$5,000</span>
                <span>$10,000 Max</span>
              </div>
            </div>

            {/* Risk Mode Selector */}
            <div>
              <label className="text-sm font-bold text-gray-200 mb-3 block">
                Risk Management Level per Trade:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "conservative", name: "1% Safe Risk", roi: "~32%/mo" },
                  { id: "standard", name: "2% Standard", roi: "~48%/mo" },
                  { id: "aggressive", name: "3% Growth", roi: "~68%/mo" },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setRiskLevel(mode.id)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      riskLevel === mode.id
                        ? "bg-[#00ff66] text-black font-black border-[#00ff66] shadow-[0_0_20px_rgba(0,255,102,0.5)]"
                        : "bg-[#07190c] text-gray-300 border-[#00ff66]/20 hover:border-[#00ff66]/60"
                    }`}
                  >
                    <div className="text-xs font-bold">{mode.name}</div>
                    <div className="text-[11px] opacity-80 mt-1">{mode.roi}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Refund Protection Note */}
            <div className="p-4 rounded-2xl bg-[#020a05] border border-[#00ff66]/30 flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#00ff66] shrink-0 mt-0.5" />
              <div className="text-xs text-gray-300">
                <strong className="text-white block mb-0.5">30-Day Guarantee Active:</strong>
                {GUARANTEE_TEXT} If your account is not net positive after 30 days, get 100% money back.
              </div>
            </div>
          </div>

          {/* Results Side */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-[#020603] border border-[#00ff66]/40 text-center">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#00ff66]">
                ESTIMATED 30-DAY OUTCOME
              </span>

              <div className="mt-6 mb-4">
                <span className="text-xs text-gray-400 block font-semibold">PROJECTED NET PROFIT</span>
                <div className="text-4xl sm:text-5xl font-black text-[#00ff66] neon-text-glow">
                  +${estimatedMonthlyProfit.toLocaleString()}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#071a0e] border border-[#00ff66]/20 mb-6">
                <span className="text-xs text-gray-400 block font-medium">TOTAL PORTFOLIO IN 30 DAYS</span>
                <span className="text-2xl font-black text-white">${totalBalanceAfter30Days.toLocaleString()}</span>
              </div>
            </div>

            <TelegramButton
              fullWidth
              size="lg"
              text={`Start Trading @${TELEGRAM_USERNAME}`}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
