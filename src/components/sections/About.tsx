"use client";
import { STATS } from "@/constants/content";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="relative py-20 lg:py-48 px-6 lg:px-20 bg-brand-beige overflow-hidden">
      {/* Elemento Decorativo de Fundo - Escondido em telas muito pequenas para evitar scroll lateral */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60%] h-[80%] border border-brand-gold/5 rounded-full pointer-events-none -mr-[20%] hidden md:block" />

      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-13 gap-16 lg:gap-0 items-center">
          
          {/* BLOCO DE TEXTO - Ordem 2 no Mobile, 1 no Desktop */}
          <div className="lg:col-span-5 z-20 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-gold text-[10px] tracking-[0.5em] font-sans uppercase mb-6 block text-center lg:text-left">
                01 — Excelência Médica
              </span>
              <h2 className="text-4xl md:text-7xl font-serif leading-[1.1] text-brand-dark mb-8 md:mb-12 text-center lg:text-left">
                Um olhar <br />
                <span className="italic text-brand-gold font-light">atento</span> ao que <br />
                o corpo comunica.
              </h2>
              
              <div className="space-y-6 md:space-y-8 text-brand-gray font-sans text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                <p className="text-brand-dark font-serif italic text-lg md:text-xl leading-snug border-l-2 lg:border-l border-brand-gold/30 pl-6 md:pl-8">
                  &quot;Endocrinologia é, antes de tudo, escutar com profundidade. Cada hormônio conta uma história.&quot;
                </p>
                <div className="pl-6 md:pl-8 space-y-4">
                  <p>
                    Nascido na cidade de Ubá-MG, Formado pela Universidade de Vassouras-RJ, Pós-Graduado em Endocrinologia e Metabologia.
                  </p>
                  <p>
                    Meu objetivo é trazer conscientização em saúde e envelhecimento saudável, proporcionando qualidade de vida para meus pacientes, com uma medicina personalizada e sem mistérios.
                  </p>
                  <p>
                    Penso que a decisão em todas condutas seja produto da troca entre paciente e médico e levo isso como objetivo profissional.
                  </p>
                  <p className="font-bold text-brand-dark">
                    Quanto melhor orientado o paciente é, mais fácil fica para atingirmos, juntos, o objetivo desejado.
                  </p>
                </div>
                <div className="pt-6 pl-6 md:pl-8 text-center lg:text-left">
                  <a href="#contato" className="text-[10px] font-bold tracking-[0.3em] text-brand-dark border-b border-brand-gold pb-2 hover:text-brand-gold transition-colors">
                    SOLICITAR AGENDAMENTO
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* BLOCO VISUAL - Ordem 1 no Mobile, 2 no Desktop */}
          <div className="lg:col-span-8 relative flex justify-center items-center min-h-[500px] md:min-h-[700px] order-1 lg:order-2">
            
            {/* Foto do Doutor */}
            <div className="relative w-full max-w-[320px] md:max-w-[550px] aspect-[4/5] z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="relative w-full h-full"
              >
                <Image 
                  src="/dr-vitor-about.jpeg" 
                  alt="Dr. Vitor de Castro"
                  fill
                  className="object-contain z-10"
                  priority
                  sizes="(max-width: 768px) 320px, 550px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-beige via-transparent to-transparent z-20" />
              </motion.div>
            </div>

            {/* STATS FLUTUANTES - Ajustados com scale no mobile */}
            <div className="absolute inset-0 z-30 pointer-events-none">
              
              {/* Card 01 - Superior Direito */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[5%] right-[0%] lg:top-[10%] lg:right-[5%] bg-white/60 backdrop-blur-md p-4 md:p-8 shadow-xl border border-white/50 rounded-2xl md:rounded-3xl scale-75 md:scale-100"
              >
                <div className="text-3xl md:text-5xl font-serif text-brand-dark mb-1">{STATS[0].value}</div>
                <div className="text-[8px] md:text-[9px] tracking-[0.3em] text-brand-gold uppercase font-bold">{STATS[0].label}</div>
              </motion.div>

              {/* Card 02 - Inferior Esquerdo */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[10%] left-[-5%] lg:bottom-[15%] lg:left-[0%] bg-brand-dark p-6 md:p-10 shadow-2xl rounded-2xl md:rounded-3xl scale-75 md:scale-100"
              >
                <div className="text-3xl md:text-5xl font-serif text-brand-gold mb-1">{STATS[1].value}</div>
                <div className="text-[8px] md:text-[9px] tracking-[0.3em] text-white/40 uppercase font-bold">{STATS[1].label}</div>
              </motion.div>

              {/* Card 03 - Lateral Direita */}
              <motion.div 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[45%] -right-[8%] lg:top-[55%] lg:-right-[5%] bg-white/80 backdrop-blur-xl p-4 md:p-8 shadow-xl border border-brand-gold/10 rounded-2xl md:rounded-3xl scale-75 md:scale-100"
              >
                <div className="text-2xl md:text-4xl font-serif text-brand-dark mb-1">{STATS[2].value}</div>
                <div className="text-[8px] md:text-[9px] tracking-[0.3em] text-brand-gold uppercase font-bold">{STATS[2].label}</div>
              </motion.div>

            </div>

            {/* Monograma de Fundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] lg:text-[25rem] font-serif text-brand-gold/[0.03] select-none -z-10 font-bold">
              VC
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}