import DynamicOrbit from "../ui/DynamicOrbit";
import { HERO_CONTENT, CLINICS } from "@/constants/content";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-beige">
      {/* Grade de Fundo Global da Seção */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)`, 
           backgroundSize: '50px 50px' }}>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16">
          
          {/* Lado Esquerdo: Conteúdo (Ocupa 7 colunas) */}
          <div className="lg:col-span-7">
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[1px] w-12 bg-brand-gold"></div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-brand-gray font-sans font-semibold">
                  {HERO_CONTENT.crm}
                </span>
              </div>
              
              <h1 className="text-6xl md:text-[5.5rem] font-serif leading-[1.05] text-brand-dark tracking-tight">
                Medicina <br />
                <span className="italic text-brand-gold font-normal">de precisão</span> <br />
                <span className="font-light">para um corpo</span> <br />
                <span className="italic font-light">em equilíbrio.</span>
              </h1>
            </header>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
              <p className="max-w-[320px] text-brand-gray leading-relaxed font-sans text-sm md:text-base opacity-80">
                {HERO_CONTENT.subtitle}
              </p>
              
              <div className="flex flex-col gap-4 w-full md:w-auto">
                {CLINICS.map((clinic) => (
                  <a 
                    key={clinic.city} 
                    href={clinic.whatsapp} 
                    target="_blank"
                    className="group bg-brand-dark text-white px-8 py-5 flex items-center justify-between gap-10 hover:bg-brand-gold transition-all duration-500 shadow-2xl shadow-brand-dark/10"
                  >
                    <span className="text-[10px] tracking-[0.2em] font-sans font-bold uppercase">
                      CONSULTA {clinic.city}
                    </span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                ))}
                <p className="text-[9px] tracking-widest text-brand-gray italic uppercase opacity-60">
                  ⚠️ Atendimento exclusivamente particular
                </p>
              </div>
            </div>
          </div>

          {/* Lado Direito: O Elemento Dinâmico (Ocupa 5 colunas) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative">
            <div className="w-full aspect-square max-w-[600px]">
              <DynamicOrbit />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}