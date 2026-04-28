"use client";
import { STATS } from "@/constants/content";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="relative py-32 lg:py-48 px-6 lg:px-20 bg-brand-beige overflow-hidden">
      {/* Elemento Decorativo de Fundo */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60%] h-[80%] border border-brand-gold/5 rounded-full pointer-events-none -mr-[20%]" />

      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-13 gap-12 lg:gap-0 items-center">
          
          <div className="lg:col-span-5 z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-gold text-[10px] tracking-[0.5em] font-sans uppercase mb-6 block">
                01 — Excelência Médica
              </span>
              <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] text-brand-dark mb-12">
                Um olhar <br />
                <span className="italic text-brand-gold font-light">atento</span> ao que <br />
                o corpo comunica.
              </h2>
              
              <div className="space-y-8 text-brand-gray font-sans text-base leading-relaxed max-w-md">
                <p className="text-brand-dark font-serif italic text-xl leading-snug border-l border-brand-gold/30 pl-8">
                  &quot;Endocrinologia é, antes de tudo, escutar com profundidade. Cada hormônio conta uma história.&quot;
                </p>
                <p className="pl-8">
                  Formado pela Formado pela Universidade de Vassouras-RJ, Pós-Graduado em Endocrinologia e Metabologia, o Dr. Vitor tem objetivo é trazer conscientização em saúde e envelhecimento saudável, proporcionando qualidade de vida para meus pacientes, com uma medicina baseada em evidencias e sem mistérios.


                </p>
                <div className="pt-4 pl-8">
                  <a href="#contato" className="text-[10px] font-bold tracking-[0.3em] text-brand-dark border-b border-brand-gold pb-2 hover:text-brand-gold transition-colors">
                    SOLICITAR AGENDAMENTO
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* BLOCO VISUAL (Ocupa 8/13 - Proporção Maior) */}
          <div className="lg:col-span-8 relative flex justify-center items-center min-h-[700px]">
            
            {/* Foto do Doutor com Máscara Suave */}
            <div className="relative w-full max-w-[550px] aspect-[4/5] z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="relative w-full h-full"
              >
                <Image 
                  src="/dr-vitor-about.png" 
                  alt="Dr. Vitor de Castro"
                  fill
                  className="object-contain z-10"
                  priority
                />
                {/* Sombra interna para profundidade */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-beige via-transparent to-transparent z-20" />
              </motion.div>
            </div>

            {/* STATS FLUTUANTES */}
            <div className="absolute inset-0 z-30">
              
              {/* Card 01 - Superior Direito (Foco na Prática) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] right-[5%] bg-white/40 backdrop-blur-md p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50 rounded-3xl"
              >
                <div className="text-5xl font-serif text-brand-dark mb-1">{STATS[0].value}</div>
                <div className="text-[9px] tracking-[0.3em] text-brand-gold uppercase font-bold">{STATS[0].label}</div>
              </motion.div>

              {/* Card 02 - Inferior Esquerdo (Destaque de Autoridade) */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[15%] left-[0%] bg-brand-dark p-10 shadow-[0_30px_60px_rgba(0,0,0,0.2)] rounded-3xl"
              >
                <div className="text-5xl font-serif text-brand-gold mb-1">{STATS[1].value}</div>
                <div className="text-[9px] tracking-[0.3em] text-white/40 uppercase font-bold">{STATS[1].label}</div>
              </motion.div>

              {/* Card 03 - Lateral Direita (Satisfação) */}
              <motion.div 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[55%] -right-[5%] bg-white/80 backdrop-blur-xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-brand-gold/10 rounded-3xl"
              >
                <div className="text-4xl font-serif text-brand-dark mb-1">{STATS[2].value}</div>
                <div className="text-[9px] tracking-[0.3em] text-brand-gold uppercase font-bold">{STATS[2].label}</div>
              </motion.div>

            </div>

            {/* Monograma de Fundo (Marca d'água de luxo) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25rem] font-serif text-brand-gold/[0.03] select-none -z-10 font-bold">
              VC
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}