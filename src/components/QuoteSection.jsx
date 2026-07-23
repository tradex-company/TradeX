import { motion } from "framer-motion";
import { Quote, AlertTriangle, CheckCircle, XCircle, BookOpen, Sparkles } from "lucide-react";
import { HIGHLIGHT_QUOTE, TELEGRAM_USERNAME } from "../constants";
import TelegramButton from "./TelegramButton";

export default function QuoteSection() {
  const comparison = [
    {
      badTitle: "Free Tips & Unverified Groups",
      badItems: [
        "Unregulated signals without stop loss",
        "High risk leverage resulting in blown accounts",
        "Fake screenshot hype with no historical proof",
        "Zero money-back or refund accountability",
      ],
      goodTitle: `TradeX Knowledge (@${TELEGRAM_USERNAME})`,
      goodItems: [
        "Strict 1-2% position sizing & institutional SL",
        "Full technical breakdown & chart analysis",
        "Proven 89.4% verified win rate across 4,800+ pips",
        "100% Full Refund if not profitable in 30 days",
      ],
    },
  ];

  return (
    <section id="quote" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#020403] border-t border-[#00ff66]/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Featured Quote Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-[#040f07] via-[#07190c] to-[#040f07] border border-[#00ff66]/50 shadow-[0_0_45px_rgba(0,255,102,0.2)] text-center mb-20 overflow-hidden"
        >
          <div className="absolute top-4 left-6 opacity-20 text-[#00ff66]">
            <Quote className="w-20 h-20" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-[#00ff66]/15 border border-[#00ff66]/40 text-xs font-black text-[#00ff66] tracking-widest uppercase inline-flex items-center gap-2 mb-6">
              <BookOpen className="w-4 h-4" />
              THE TRADEX GOLDEN RULE
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight italic">
              "{HIGHLIGHT_QUOTE}"
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-medium">
              Don't gamble your hard-earned capital on random Telegram channels. Partner with verified traders who stand behind their knowledge with a 30-day profitability guarantee.
            </p>
          </div>
        </motion.div>

        {/* Comparison Matrix */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Why Traders Switch to <span className="text-[#00ff66]">TradeX</span>
          </h3>
          <p className="text-gray-400 text-sm mt-2">The difference between retail gamble and institutional strategy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Free Tips side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[#0d0707] border border-red-500/30 text-left"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-red-500/10 text-red-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-red-400">{comparison[0].badTitle}</h4>
            </div>

            <ul className="space-y-4">
              {comparison[0].badItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* TradeX side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[#06180c] border-2 border-[#00ff66] shadow-[0_0_30px_rgba(0,255,102,0.25)] text-left relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#00ff66]/20 text-[#00ff66]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white">{comparison[0].goodTitle}</h4>
            </div>

            <ul className="space-y-4">
              {comparison[0].goodItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-white font-medium">
                  <CheckCircle className="w-5 h-5 text-[#00ff66] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <TelegramButton
            size="lg"
            text={`Get Knowledge-Driven Signals @${TELEGRAM_USERNAME}`}
          />
        </div>

      </div>
    </section>
  );
}
