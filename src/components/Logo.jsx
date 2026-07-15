import { useId } from "react";
import { motion } from "framer-motion";

/**
 * Placeholder brand mark for TradeX.
 *
 * Pure SVG + CSS, no external image assets. Swap this component's markup
 * out for the real logo later — every consumer just renders <Logo />.
 */
export default function Logo({
  size = 56,
  animated = true,
  showWordmark = false,
  className = "",
}) {
  const uid = useId();
  const ringId = `tx-ring-${uid}`;
  const glowId = `tx-glow-${uid}`;
  const darkId = `tx-dark-${uid}`;
  const textId = `tx-text-${uid}`;
  const lineId = `tx-line-${uid}`;

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div
        className="relative shrink-0"
        style={{ width: size, height: size }}
      >
        {/* soft ambient glow behind the mark */}
        <div
          className={`absolute inset-[-30%] rounded-full bg-gradient-to-br from-blue-500/40 via-emerald-500/30 to-blue-500/0 blur-xl ${
            animated ? "animate-glow" : ""
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
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <radialGradient id={glowId} cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#05070d" />
            </radialGradient>
            <linearGradient id={textId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
            <linearGradient id={lineId} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* base glass disc */}
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
            opacity="0.55"
            animate={animated ? { rotate: 360 } : undefined}
            transition={
              animated
                ? { duration: 14, repeat: Infinity, ease: "linear" }
                : undefined
            }
            style={{ transformOrigin: "50px 50px" }}
          />

          {/* upward trend line, drawn on mount */}
          <motion.path
            d="M22,64 L36,56 L46,61 L60,40 L74,47 L82,28"
            fill="none"
            stroke={`url(#${lineId})`}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
            initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
            animate={animated ? { pathLength: 1, opacity: 0.9 } : undefined}
            transition={
              animated ? { duration: 1.6, ease: "easeOut", delay: 0.2 } : undefined
            }
          />
          <circle cx="82" cy="28" r="3.2" fill="#34d399">
            {animated && (
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="2.5s"
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
            fontWeight="800"
            fontSize="27"
            letterSpacing="-1"
            fill={`url(#${textId})`}
          >
            TX
          </text>
        </svg>
      </div>

      {showWordmark && (
        <span className="text-2xl font-extrabold tracking-tight text-white">
          Trade<span className="text-emerald-400">X</span>
        </span>
      )}
    </div>
  );
}
