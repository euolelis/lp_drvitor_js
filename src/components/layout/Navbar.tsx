"use client";
import React, { useState } from "react"; // Adicionado useState
import Link from "next/link";
import Logo from "../ui/Logo";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu mobile

  return (
    <nav className="fixed top-0 w-full z-[100] bg-brand-beige/80 backdrop-blur-md border-b border-brand-gold/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-20 flex justify-between items-center">
        
        {/* Logo no Canto Esquerdo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-dark rounded-sm flex items-center justify-center text-brand-gold font-serif text-xl group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-500">
            V
          </div>
          <div className="font-serif text-lg leading-tight text-brand-dark">
            Dr. Vitor <br /> 
            <span className="text-brand-gold italic font-light text-sm tracking-wide">de Castro</span>
          </div>
        </Link>
               {/* Menu Central (Desktop) */}
               <div className="hidden lg:flex items-center gap-10 text-[10px] tracking-[0.2em] font-sans font-bold text-brand-gray">
          <a href="#sobre" className="hover:text-brand-gold transition-colors">SOBRE</a>
          <a href="#especialidades" className="hover:text-brand-gold transition-colors">ATUAÇÃO</a>
          <a href="#contato" className="hover:text-brand-gold transition-colors">CONTATO</a>
          <div className="w-[1px] h-4 bg-brand-gold/20 mx-2"></div>
          
          {/* Link Instagram com SVG Nativo */}
          <a 
            href="https://instagram.com/drvitordecastro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-brand-gold transition-colors flex items-center gap-2"
            aria-label="Instagram do Dr. Vitor"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="hidden xl:inline">INSTAGRAM</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/5512988743885" 
            target="_blank"
            className="hidden sm:block bg-brand-dark text-white px-8 py-3 text-[10px] tracking-widest font-bold hover:bg-brand-gold hover:text-brand-dark transition-all duration-500 border border-brand-dark"
          >
            AGENDAR CONSULTA
          </a>
          
          {/* Botão Menu Mobile (Hambúrguer / X) */}
          <button 
            className="lg:hidden text-brand-dark p-2" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? (
              // Ícone de Fechar (X)
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              // Ícone de Hambúrguer
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile Overlay (Aparece apenas quando isOpen é true) */}
      {isOpen && (
        <div className="lg:hidden bg-brand-beige border-b border-brand-gold/10 px-6 py-8 flex flex-col gap-6 text-[11px] tracking-[0.2em] font-sans font-bold text-brand-gray animate-in slide-in-from-top duration-300">
          <a href="#sobre" onClick={() => setIsOpen(false)} className="hover:text-brand-gold transition-colors">SOBRE</a>
          <a href="#especialidades" onClick={() => setIsOpen(false)} className="hover:text-brand-gold transition-colors">ATUAÇÃO</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="hover:text-brand-gold transition-colors">CONTATO</a>
          <a 
            href="https://instagram.com/drvitordecastro" 
            target="_blank" 
            onClick={() => setIsOpen(false)}
            className="hover:text-brand-gold transition-colors flex items-center gap-2"
          >
            INSTAGRAM
          </a>
          <a 
            href="https://wa.me/5512988743885" 
            target="_blank"
            className="text-brand-dark border-t border-brand-gold/10 pt-6 flex items-center justify-between"
          >
            AGENDAR CONSULTA <span>→</span>
          </a>
        </div>
      )}
    </nav>
  );
}