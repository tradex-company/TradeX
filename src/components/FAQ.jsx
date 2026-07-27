import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";
import { TELEGRAM_USERNAME, GUARANTEE_TEXT, HIGHLIGHT_QUOTE } from "../constants";

const FAQS = [
  {
    q: "How does the 30-day profitability refund policy work?",
    a: GUARANTEE_TEXT + " Simply follow our daily signals posted on Telegram and strictly adhere to the recommended 1-2% risk parameters. If your account is not net profitable after 30 days, reach out for an instant 100% refund.",
  },
  {
    q: `What is the official Telegram channel handle?`,
    a: `Our only official Telegram username is @${TELEGRAM_USERNAME}. Always verify you are in the official group to avoid impersonators.`,
  },
  {
    q: "Why do you emphasize 'Free tips can be the most expensive mistake'?",
    a: `Because "${HIGHLIGHT_QUOTE}" Most free Telegram channels provide unmanaged, high-leverage signals to generate broker commissions, leading traders to blow their accounts. TradeX delivers quantitative, risk-managed setups with full structural analysis.`,
  },
  {
    q: "What markets do TradeX signals cover?",
    a: "We specialize in high-liquidity assets: Gold (XAU/USD), Major Forex Pairs (EUR/USD, GBP/USD, USD/JPY), and Top Crypto Assets (BTC/USD, ETH/USD).",
  },
  {
    q: "How many signals are provided per day?",
    a: "Quality over quantity. We send 2 to 5 high-probability entries daily during London and New York session opens.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#020403]">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#05180c] border border-[#00ff66]/40 text-xs font-bold text-[#00ff66] uppercase tracking-widest mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>TRANSPARENCY FIRST</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Frequently Asked <span className="text-[#00ff66]">Questions</span>
          </h2>
          <p className="mt-3 text-gray-300">Everything you need to know before joining @{TELEGRAM_USERNAME}.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#051209] border border-[#00ff66]/20 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-lg text-white hover:text-[#00ff66] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00ff66] transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-[#00ff66]/10 pt-4 font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
