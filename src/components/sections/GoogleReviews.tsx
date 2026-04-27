export default function GoogleReviews() {
    const reviews = [
      { name: "Flavio Ricieri Carneiro", text: "Passo em consulta com o Dr Vitor desde o início desse ano... já emagreci 15 quilos de forma saudável. Mudou minha vida.", date: "5 meses atrás" },
      { name: "Lucas Rodrigues", text: "Ótimo profissional, atencioso, técnico e empático com os seus pacientes.", date: "Recente" }
    ];
  
    return (
      <section className="py-24 bg-brand-beige px-6 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl font-serif font-bold">5.0</span>
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
              </div>
              <p className="text-xs tracking-widest text-brand-gray uppercase">76 Avaliações no Google Business</p>
            </div>
            <a 
              href="https://www.google.com/search?q=dr+vitor+de+castro" 
              target="_blank"
              className="text-[10px] font-bold tracking-[0.2em] border border-brand-dark px-6 py-3 hover:bg-brand-dark hover:text-white transition-all"
            >
              VER TODAS AS AVALIAÇÕES
            </a>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white p-8 shadow-sm border border-brand-gold/5">
                <div className="flex justify-between mb-4">
                  <span className="font-sans font-bold text-sm">{r.name}</span>
                  <span className="text-brand-gold text-xs">★★★★★</span>
                </div>
                <p className="text-brand-gray text-sm leading-relaxed italic">&#34;{r.text}&ldquo;</p>
                <p className="mt-4 text-[10px] text-gray-400 uppercase tracking-tighter">{r.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }