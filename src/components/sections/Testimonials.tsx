export default function Testimonials() {
    const reviews = [
      { name: "Lucas Rodrigues", text: "Fui atendido de forma super competente, teve um cuidado muito diferente de qualquer outro médico que fui. Recomendo muito o Dr. Vitor." },
      { name: "Tom Veloso", text: "Tirou todas as dúvidas durante e depois da consulta. Excelente profissional, ser atendido por alguém com carisma e que saiba o que está fazendo não tem preço." }
    ];
  
    return (
      <section className="py-32 bg-white px-6 lg:px-20">
        <div className="max-w-[1440px] mx-auto text-center">
          <span className="text-brand-gold text-xs tracking-[0.3em] font-sans uppercase">03 — Pacientes</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-20">Confiança construída <br/><span className="italic text-brand-gold">consulta a consulta.</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {reviews.map((review, i) => (
              <div key={i} className="p-12 border border-brand-beige bg-brand-beige/30 relative">
                <span className="text-6xl font-serif text-brand-gold absolute top-4 left-6 opacity-30">&quot;</span>
                <p className="text-brand-gray font-sans leading-relaxed mb-8 relative z-10">{review.text}</p>
                <h4 className="font-serif italic text-brand-dark">{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }