import Logo from "./Logo";
import TelegramButton from "./TelegramButton";
import { TELEGRAM_USERNAME, HIGHLIGHT_QUOTE, GUARANTEE_TEXT } from "../constants";
import { ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#000000] border-t border-[#00ff66]/20">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl bg-[#05150a] border-2 border-[#00ff66] p-6 sm:p-8 md:p-12 text-center shadow-[0_0_40px_rgba(0,255,102,0.25)]">
          <div className="flex justify-center mb-3 sm:mb-4">
            <Logo size={56} />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00ff66] text-black text-xs font-black uppercase mb-4 sm:mb-6">
            <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>30-DAY PROFITABILITY GUARANTEE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight px-2">
            Ready to Start Trading <span className="text-[#00ff66]">Smarter?</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white font-extrabold italic max-w-2xl mx-auto px-2">
            "{HIGHLIGHT_QUOTE}"
          </p>

          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#00ff66] font-extrabold max-w-xl mx-auto px-2">
            {GUARANTEE_TEXT}
          </p>

          <div className="mt-6 sm:mt-8 flex justify-center px-2">
            <TelegramButton
              size="xl"
              text={`Join @${TELEGRAM_USERNAME} on Telegram`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
