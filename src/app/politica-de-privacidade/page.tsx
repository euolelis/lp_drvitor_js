import React from "react";
import Link from "next/link";

export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-brand-beige py-32 px-6 lg:px-20 font-sans">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[10px] tracking-widest text-brand-gold font-bold uppercase mb-12 block hover:opacity-70 transition-opacity">
          ← Voltar para o início
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-12">
          Política de <span className="italic text-brand-gold">Privacidade</span>
        </h1>

        <div className="space-y-8 text-brand-gray leading-relaxed text-sm">
          <section>
            <h2 className="text-brand-dark font-bold uppercase tracking-widest text-xs mb-4">1. Coleta de Dados</h2>
            <p>
              Este site coleta informações básicas de navegação e dados fornecidos voluntariamente através do contato via WhatsApp para fins de agendamento de consultas médicas com o Dr. Vitor de Castro.
            </p>
          </section>

          <section>
            <h2 className="text-brand-dark font-bold uppercase tracking-widest text-xs mb-4">2. Uso das Informações</h2>
            <p>
              Os dados coletados são utilizados exclusivamente para o atendimento ao paciente, em conformidade com a Lei Geral de Proteção de Dados (LGPD) e o sigilo médico.
            </p>
          </section>

          <section>
            <h2 className="text-brand-dark font-bold uppercase tracking-widest text-xs mb-4">3. Cookies</h2>
            <p>
              Utilizamos cookies para melhorar a performance do site e entender como os visitantes interagem com nosso conteúdo.
            </p>
          </section>

          <p className="pt-12 text-[10px] opacity-50 uppercase tracking-tighter">
            Última atualização: Maio de 2024
          </p>
        </div>
      </div>
    </main>
  );
}