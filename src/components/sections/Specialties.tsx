import { SPECIALTIES } from "@/constants/content";

export default function Specialties() {
  return (
    <section className="bg-brand-dark text-white py-32 px-6 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <span className="text-brand-gold text-xs tracking-[0.3em] font-sans uppercase">02 — Especialidades</span>
            <h2 className="text-5xl md:text-7xl font-serif mt-6">
              Áreas de <br />
              <span className="italic text-brand-gold">atuação.</span>
            </h2>
          </div>
          <p className="max-w-xs text-gray-400 text-sm leading-relaxed font-sans">
            Cada especialidade é conduzida com protocolo próprio, atualizado conforme as diretrizes mais recentes da literatura internacional.
          </p>
        </div>

        <div className="grid grid-cols-1">
          {SPECIALTIES.map((item) => (
            <div 
              key={item.id} 
              className="group border-t border-white/10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/[0.02] transition-colors px-4"
            >
              <div className="flex items-center gap-8 md:gap-16 mb-4 md:mb-0">
                <span className="font-serif italic text-brand-gold text-xl">{item.id}</span>
                <h3 className="text-2xl md:text-4xl font-serif group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h3>
              </div>
              
              <div className="flex flex-col md:items-end gap-4">
                <p className="max-w-xs text-gray-400 text-xs md:text-sm md:text-right">
                  {item.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[9px] border border-white/20 px-2 py-1 uppercase tracking-tighter text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}