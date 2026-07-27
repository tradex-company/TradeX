import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FloatingTelegram from "./components/FloatingTelegram";

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-[#00ff66] selection:text-black font-sans antialiased overflow-x-hidden">
      <Hero />
      <Footer />
      <FloatingTelegram />
    </div>
  );
}
