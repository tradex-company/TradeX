import { motion } from "framer-motion";

const CANDLES = [
  { h: 28, o: 40, c: 60, up: true },
  { h: 22, o: 55, c: 35, up: false },
  { h: 34, o: 30, c: 58, up: true },
  { h: 18, o: 50, c: 44, up: false },
  { h: 40, o: 42, c: 68, up: true },
  { h: 24, o: 60, c: 50, up: false },
  { h: 30, o: 48, c: 66, up: true },
  { h: 20, o: 62, c: 52, up: false },
  { h: 38, o: 40, c: 70, up: true },
  { h: 26, o: 58, c: 46, up: false },
  { h: 44, o: 38, c: 74, up: true },
  { h: 22, o: 60, c: 50, up: false },
  { h: 32, o: 46, c: 64, up: true },
  { h: 28, o: 56, c: 44, up: false },
  { h: 42, o: 40, c: 72, up: true },
];

function CandlestickRow() {
  const width = 100 / CANDLES.length;
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-x-0 bottom-0 h-[38%] w-full opacity-[0.08] blur-[1px]"
      aria-hidden="true"
    >
      {CANDLES.map((c, i) => {
        const x = i * width + width / 2;
        const top = Math.min(c.o, c.c);
        const bodyHeight = Math.max(Math.abs(c.o - c.c), 2);
        const wickTop = 100 - c.h;
        return (
          <g key={i}>
            <line
              x1={x}
              x2={x}
              y1={wickTop}
              y2={100 - top + bodyHeight}
              stroke={c.up ? "#10b981" : "#3b82f6"}
              strokeWidth="0.4"
            />
            <rect
              x={x - width * 0.28}
              y={100 - top - bodyHeight}
              width={width * 0.56}
              height={bodyHeight}
              fill={c.up ? "#10b981" : "#3b82f6"}
            />
          </g>
        );
      })}
    </svg>
  );
}

function Sparkline({ className, d, duration = 3 }) {
  return (
    <svg
      viewBox="0 0 120 40"
      className={`${className} blur-[0.5px]`}
      aria-hidden="true"
    >
      <motion.path
        d={d}
        fill="none"
        stroke="url(#spark-grad)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0.04 }}
        animate={{ pathLength: 1, opacity: 0.12 }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="spark-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      </svg>

      {/* Base */}
      <div className="absolute inset-0 bg-[#010f04]" />

      {/* Subtle blurred grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] blur-[1px]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle blurred gradient blobs */}
      <div className="absolute -top-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-blue-500/08 blur-[130px]" />
      <div className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] rounded-full bg-emerald-500/06 blur-[140px]" />
      <div className="absolute bottom-[-10rem] left-1/4 w-[28rem] h-[28rem] rounded-full bg-blue-500/05 blur-[120px]" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#000000_88%)]" />

      {/* Very subtle animated sparkline charts */}
      <Sparkline
        className="absolute top-[14%] right-[8%] w-28 h-9 opacity-[0.08]"
        d="M2,30 L18,22 L34,26 L50,14 L66,18 L82,6 L100,10"
        duration={3.2}
      />
      <Sparkline
        className="absolute bottom-[30%] left-[6%] w-24 h-8 opacity-[0.08]"
        d="M2,20 L16,26 L30,16 L44,22 L58,8 L72,14 L100,4"
        duration={4}
      />

      {/* Candlestick silhouette along the bottom */}
      <CandlestickRow />
    </div>
  );
}
