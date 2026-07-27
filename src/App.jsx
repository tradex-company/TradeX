import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import FloatingTelegram from "./components/FloatingTelegram";

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-[#00ff66] selection:text-black font-sans antialiased overflow-x-hidden">
      <Hero />
      <Features />
      <CTA />
      <FloatingTelegram />
    </div>
  );
}
