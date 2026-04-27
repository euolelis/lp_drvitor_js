import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Specialties from "@/components/sections/Specialties";
import GoogleReviews from "@/components/sections/GoogleReviews";
import WhatsAppFloating from "@/components/ui/WhatsAppFloating";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-beige">
      <Navbar />
      <main>
        <Hero />
        <About />
        <GoogleReviews /> 
        <Specialties />
        
       {/* Footer */}
<footer className="py-20 bg-brand-dark text-white/50 text-center border-t border-white/5">
  <div className="max-w-[1440px] mx-auto px-6">
    <div className="max-w-xs mx-auto mb-10">
      <div className="w-12 h-[1px] bg-brand-gold mx-auto mb-6"></div>
      <p className="text-[10px] tracking-[0.3em] uppercase mb-2 text-white">Dr. Vitor de Castro</p>
      <p className="text-[9px] tracking-widest">CRM 213499-SP</p>
    </div>
    
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
      <p className="text-[9px] tracking-widest uppercase">
        © 2026 — Todos os direitos reservados
      </p>
      

      <a 
        href="https://ia.lypmkt.com.br/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase hover:text-brand-gold transition-colors duration-300"
      >
        <span className="opacity-50">Desenvolvido por</span>
        <span className="font-bold text-white group-hover:text-brand-gold transition-colors">
        LYP IA® Soluções de Tecnologia e Marketing
        </span>
           <svg 
          width="10" 
          height="10" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
    </div>
  </div>
</footer>
      </main>
      <WhatsAppFloating />
    </div>
  );
}