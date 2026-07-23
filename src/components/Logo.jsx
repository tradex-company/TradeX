import { useId } from "react";
import { motion } from "framer-motion";

export default function Logo({
  size = 56,
  animated = true,
  showWordmark = false,
  className = "",
}) {
  const uid = useId();
  const ringId = `tx-ring-${uid}`;
  const glowId = `tx-glow-${uid}`;
  const textId = `tx-text-${uid}`;
  const lineId = `tx-line-${uid}`;

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div
        className="relative shrink-0"
        style={{ width: size, height: size }}
      >
        {/* Neon green ambient glow behind logo */}
        <div
          className={`absolute inset-[-30%] rounded-full bg-gradient-to-br from-[#00ff66]/40 via-[#10b981]/30 to-transparent blur-xl ${
            animated ? "animate-pulse-glow" : ""
          }`}
          aria-hidden="true"
        />

        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          className="relative"
          role="img"
          aria-label="TradeX logo"
        >
          <defs>
            <linearGradient id={ringId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ff66" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <radialGradient id={glowId} cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#0a1a10" />
              <stop offset="100%" stopColor="#020403" />
            </radialGradient>
            <linearGradient id={textId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#00ff66" />
            </linearGradient>
            <linearGradient id={lineId} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#00ff66" />
            </linearGradient>
          </defs>

          {/* base cyber dark disc */}
          <circle cx="50" cy="50" r="46" fill={`url(#${glowId})`} />
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke={`url(#${ringId})`}
            strokeWidth="2"
            opacity="0.9"
          />

          {/* rotating dashed orbit ring */}
          <motion.circle
            cx="50"
            cy="50"
            r="41"
            fill="none"
            stroke={`url(#${ringId})`}
            strokeWidth="1"
            strokeDasharray="2 8"
            opacity="0.6"
            animate={animated ? { rotate: 360 } : undefined}
            transition={
              animated
                ? { duration: 12, repeat: Infinity, ease: "linear" }
                : undefined
            }
            style={{ transformOrigin: "50px 50px" }}
          />

          {/* upward trend line */}
          <motion.path
            d="M22,64 L36,56 L46,61 L60,40 L74,47 L82,28"
            fill="none"
            stroke={`url(#${lineId})`}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
            initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
            animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
            transition={
              animated ? { duration: 1.5, ease: "easeOut", delay: 0.2 } : undefined
            }
          />
          <circle cx="82" cy="28" r="3.5" fill="#00ff66">
            {animated && (
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="1.8s"
                repeatCount="indefinite"
              />
            )}
          </circle>

          {/* TX monogram */}
          <text
            x="50"
            y="60"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontWeight="900"
            fontSize="26"
            letterSpacing="-1"
            fill={`url(#${textId})`}
          >
            TX
          </text>
        </svg>
      </div>

      {showWordmark && (
        <span className="text-2xl font-black tracking-tight text-white">
          Trade<span className="text-[#00ff66] drop-shadow-[0_0_8px_rgba(0,255,102,0.6)]">X</span>
        </span>
      )}
    </div>
  );
}
