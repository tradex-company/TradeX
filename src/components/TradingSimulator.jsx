import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, Clock, ArrowUpRight, Zap, Target } from "lucide-react";
import { TELEGRAM_USERNAME } from "../constants";

const ASSETS = [
  { id: "XAUUSD", name: "GOLD / XAUUSD", price: "$2,386.40", pips: "+145 Pips", tp: "TP2 HIT", status: "WIN" },
  { id: "BTCUSD", name: "BITCOIN / BTCUSD", price: "$64,820.00", pips: "+890 Pips", tp: "TP3 HIT", status: "WIN" },
  { id: "EURUSD", name: "EUR / USD", price: "1.08920", pips: "+65 Pips", tp: "TP1 HIT", status: "WIN" },
];

export default function TradingSimulator() {
  const [selectedAsset, setSelectedAsset] = useState(ASSETS[0]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = 320);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 320;
    };
    window.addEventListener("resize", handleResize);

    let offset = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Grid
      ctx.strokeStyle = "rgba(0, 255, 102, 0.07)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Generate green candlestick chart data
      const barWidth = 14;
      const spacing = 22;
      const totalBars = Math.floor(width / spacing) + 2;

      offset += 0.35;
      if (offset > spacing) offset = 0;

      ctx.shadowBlur = 12;
      ctx.shadowColor = "#00ff66";

      for (let i = 0; i < totalBars; i++) {
        const x = i * spacing - offset;
        const seed = i + Math.floor(offset / spacing);
        const noise = Math.sin(seed * 0.4) * 45 + Math.cos(seed * 0.8) * 25;
        
        // Upward trending base line
        const trend = (i / totalBars) * 60;
        const candleCenter = height - 120 - noise - trend;
        const candleHeight = 18 + Math.abs(Math.sin(seed) * 35);
        const wickHeight = candleHeight + 15 + Math.abs(Math.cos(seed) * 20);

        const isUp = seed % 5 !== 0; // 80% green candles

        ctx.strokeStyle = isUp ? "#00ff66" : "#ef4444";
        ctx.fillStyle = isUp ? "#00ff66" : "#ef4444";

        // Wick
        ctx.beginPath();
        ctx.moveTo(x + barWidth / 2, candleCenter - wickHeight / 2);
        ctx.lineTo(x + barWidth / 2, candleCenter + wickHeight / 2);
        ctx.stroke();

        // Body
        ctx.fillRect(x, candleCenter - candleHeight / 2, barWidth, candleHeight);
      }

      // Draw TP Line
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "#00ff66";
      ctx.setLineDash([6, 6]);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 80);
      ctx.lineTo(width, 80);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw TP Badge text
      ctx.fillStyle = "#00ff66";
      ctx.font = "bold 12px Plus Jakarta Sans, sans-serif";
      ctx.fillText("TARGET TP2 HIT [ +145 PIPS ]", width - 190, 72);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedAsset]);

  return (
    <section id="signals" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#020403]">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#05180c] border border-[#00ff66]/30 text-xs font-bold text-[#00ff66] uppercase tracking-widest mb-4">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>REAL-TIME MARKET MODEL</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white px-2">
            Institutional Signal <span className="text-[#00ff66]">Execution Engine</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-400 px-2">
            Every trade posted on Telegram <span className="text-[#00ff66] font-bold">@{TELEGRAM_USERNAME}</span> comes with entry, TP, and SL.
          </p>
        </div>

        {/* Simulator Card Container */}
        <div className="rounded-3xl bg-[#050c07] border border-[#00ff66]/20 p-4 sm:p-6 md:p-8 shadow-[0_0_40px_rgba(0,255,102,0.15)]">
          
          {/* Asset Selector Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-[#00ff66]/20">
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {ASSETS.map((asset) => (
                <button
                  key={asset.id}
                  onClick={() => setSelectedAsset(asset)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    selectedAsset.id === asset.id
                      ? "bg-[#00ff66] text-black shadow-[0_0_20px_rgba(0,255,102,0.5)]"
                      : "bg-[#0a1b10] text-gray-300 hover:text-white border border-[#00ff66]/20"
                  }`}
                >
                  {asset.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#00ff66] animate-ping" />
                <span className="text-xs">Live</span>
              </div>
              <div className="px-2 py-1 sm:px-3 sm:py-1 rounded-lg bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66] font-bold text-xs sm:text-sm">
                {selectedAsset.pips}
              </div>
            </div>
          </div>

          {/* Interactive Canvas Chart */}
          <div className="relative w-full rounded-2xl bg-[#020603] border border-[#00ff66]/20 overflow-hidden mb-4 sm:mb-6">
            <canvas ref={canvasRef} className="w-full block" />

            {/* Overlaid Telegram Signal Notification Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={selectedAsset.id}
              className="absolute top-2 sm:top-4 left-2 sm:left-4 p-3 sm:p-4 rounded-xl bg-[#07190c]/95 border border-[#00ff66]/40 backdrop-blur-md max-w-xs text-xs sm:text-sm"
            >
              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <span className="font-extrabold text-[#00ff66] text-xs">TELEGRAM ALERT</span>
                <span className="text-gray-500 text-xs">Now</span>
              </div>
              <div className="font-bold text-white mb-1">
                BUY {selectedAsset.id}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Target className="w-3 h-3 text-[#00ff66]" />
                <span>Status: <strong className="text-[#00ff66] text-xs">{selectedAsset.tp}</strong></span>
              </div>
            </motion.div>
          </div>

          {/* Signal Stats Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
            <div className="p-3 sm:p-4 rounded-xl bg-[#0a1b10] border border-[#00ff66]/20 shadow-[0_0_15px_rgba(0,255,102,0.1)]">
              <span className="text-xs text-gray-400 block font-medium">AVERAGE RR</span>
              <span className="text-lg sm:text-xl font-black text-white">1 : 3.5</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-[#0a1b10] border border-[#00ff66]/20 shadow-[0_0_15px_rgba(0,255,102,0.1)]">
              <span className="text-xs text-gray-400 block font-medium">30-DAY GUARANTEE</span>
              <span className="text-lg sm:text-xl font-black text-[#00ff66]">100% COVERED</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-[#0a1b10] border border-[#00ff66]/20 shadow-[0_0_15px_rgba(0,255,102,0.1)]">
              <span className="text-xs text-gray-400 block font-medium">TELEGRAM</span>
              <span className="text-lg sm:text-xl font-black text-white">@{TELEGRAM_USERNAME}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
