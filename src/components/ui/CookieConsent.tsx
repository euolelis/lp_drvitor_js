"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies anteriormente
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md z-[110]"
        >
          <div className="bg-brand-dark/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10">
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <h4 className="text-white font-serif italic text-lg">Privacidade e Cookies</h4>
                <p className="text-[11px] leading-relaxed text-white/60 font-sans uppercase tracking-wider">
                  Este site utiliza cookies para melhorar sua experiência e garantir a segurança dos seus dados, em conformidade com a LGPD. Ao continuar navegando, você concorda com nossa política de privacidade.
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={acceptCookies}
                  className="flex-1 bg-brand-gold text-brand-dark text-[10px] font-bold tracking-[0.2em] py-3 rounded-lg hover:bg-white transition-colors uppercase"
                >
                  Aceitar Termos
                </button>
                <a 
                  href="/politica-de-privacidade" 
                  className="text-[9px] text-white/40 hover:text-brand-gold transition-colors underline tracking-widest uppercase"
                >
                  Ler Política
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}