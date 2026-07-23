import { motion } from "framer-motion";
import { Star, ShieldCheck, CheckCircle2, Quote } from "lucide-react";
import { TELEGRAM_USERNAME } from "../constants";

const TESTIMONIALS = [
  {
    name: "Alexander M.",
    location: "London, UK",
    profit: "+$3,420 Profit in 24 Days",
    comment: "The 30-day profitability guarantee gave me the confidence to join. I was up 34% in my first month following @Tradexbyabhi signals strictly!",
    rating: 5,
    pair: "Gold & Forex",
  },
  {
    name: "David K.",
    location: "Dubai, UAE",
    profit: "+$7,850 Profit in 30 Days",
    comment: "Free tips in other groups blew 2 accounts before. The TradeX quote 'Free tips can be the most expensive mistake' hit home. Best decision ever.",
    rating: 5,
    pair: "BTC & XAUUSD",
  },
  {
    name: "Elena R.",
    location: "Singapore",
    profit: "+$1,940 Profit in 18 Days",
    comment: "Super disciplined risk management. 100% transparent. No hype, just consistent green trade setups delivered right to my Telegram.",
    rating: 5,
    pair: "EURUSD & GBPUSD",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#020403] border-t border-[#00ff66]/10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#05180c] border border-[#00ff66]/40 text-xs font-bold text-[#00ff66] uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>VERIFIED TELEGRAM COMMUNITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Traders Making Real <span className="text-[#00ff66]">Profits Daily</span>
          </h2>
          <p className="mt-3 text-gray-300">
            Real feedback from members on Telegram handle <span className="text-[#00ff66] font-bold">@{TELEGRAM_USERNAME}</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-[#05140b] border border-[#00ff66]/25 hover:border-[#00ff66] transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between text-left relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#00ff66] gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#00ff66]" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#00ff66]/10 text-[#00ff66] text-xs font-bold border border-[#00ff66]/30">
                    {t.pair}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66] font-extrabold text-sm mb-4 inline-block">
                  {t.profit}
                </div>

                <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#00ff66]/15 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.location}</div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#00ff66] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Trader</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
