import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const STATS = [
  { to: 5000, suffix: "+", label: "Members" },
  { to: 95, suffix: "%", label: "Accuracy" },
  { to: 24, suffix: "/7", label: "Support" },
  { to: 1000, suffix: "+", label: "Trades" },
];

function Counter({ to, suffix, duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.35)] px-6 py-12 sm:px-12">
          <div
            className="absolute inset-0 rounded-3xl opacity-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(600px circle at 20% 0%, rgba(59,130,246,0.12), transparent 60%), radial-gradient(600px circle at 80% 100%, rgba(16,185,129,0.12), transparent 60%)",
            }}
          />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  <Counter to={stat.to} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm sm:text-base text-slate-400 tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
