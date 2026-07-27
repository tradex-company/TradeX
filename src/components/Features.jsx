import { Signal, ShieldCheck, LineChart, Users } from "lucide-react";
import { TELEGRAM_USERNAME, GUARANTEE_TEXT } from "../constants";

const FEATURES = [
  {
    icon: Signal,
    title: "Daily VIP Signals",
    desc: `Real-time Forex, Gold & Crypto entries posted directly to Telegram @${TELEGRAM_USERNAME} with exact entry, TP, and SL targets.`,
  },
  {
    icon: ShieldCheck,
    title: "30-Day Full Refund",
    desc: GUARANTEE_TEXT,
  },
  {
    icon: LineChart,
    title: "Market Analysis",
    desc: "In-depth technical market structure and institutional order flow breakdowns with every call.",
  },
  {
    icon: Users,
    title: "Active Community",
    desc: "Over 14,200 traders getting verified signal notifications daily.",
  },
];

export default function Features() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#000000] border-t border-[#00ff66]/20 shadow-[0_0_30px_rgba(0,255,102,0.15)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white px-2">
            Why Choose <span className="text-[#00ff66]">TradeX</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 text-center mt-2 font-bold px-2">
            Official Telegram: <span className="text-[#00ff66]">@{TELEGRAM_USERNAME}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-4 sm:p-5 md:p-6 rounded-2xl bg-[#080808] border-2 border-[#00ff66] shadow-[0_0_20px_rgba(0,255,102,0.2)] text-left hover:shadow-[0_0_30px_rgba(0,255,102,0.3)] transition-shadow duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00ff66] text-black flex items-center justify-center font-black mb-3 sm:mb-4">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white mb-2">{title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
