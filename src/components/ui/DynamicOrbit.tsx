"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function DynamicOrbit() {
  const [text, setText] = useState("Endocrinologia");
  const words = ["Endocrinologia", "Metabologia"];

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => (prev === words[0] ? words[1] : words[0]));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Grade de Fundo (Grid) */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: `linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)`, 
           backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative flex items-center justify-center w-[500px] h-[500px]">
        {/* Círculo Externo */}
        <div className="absolute w-full h-full border border-brand-dark/5 rounded-full" />
        
        {/* Círculo Médio com Ponto Girando */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[70%] h-[70%] border border-brand-dark/10 rounded-full"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-gold rounded-full shadow-[0_0_10px_#C5A059]" />
        </motion.div>

        {/* Círculo Interno Pontilhado */}
        <div className="absolute w-[45%] h-[45%] border border-dashed border-brand-gold/30 rounded-full" />

        {/* Texto Central Dinâmico */}
        <div className="relative z-10 text-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
              className="font-serif italic text-brand-gray text-xl block"
            >
              {text}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Pontos Estáticos Decorativos */}
        <div className="absolute top-[20%] right-[15%] w-1.5 h-1.5 bg-gray-400 rounded-full opacity-40" />
        <div className="absolute bottom-[25%] left-[10%] w-1 h-1 bg-gray-300 rounded-full opacity-40" />
      </div>
    </div>
  );
}