import { Trees, Compass, Calendar, Moon } from 'lucide-react';
import { motion } from 'motion/react';

export default function Intro() {
  return (
    <section 
      id="intro" 
      className="bg-cream py-20 md:py-28 lg:py-32 overflow-hidden text-charcoal border-b border-rule/20 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (60% equivalent: 7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-forest-light font-semibold block">
              Zwolnij bieg życia
            </span>

            {/* Accent quotation */}
            <blockquote className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-forest leading-relaxed font-semibold">
              „Magiczne miejsce, gdzie czas zwalnia — otulina Puszczy Białowieskiej tuż za progiem.”
            </blockquote>

            <div className="w-16 h-[1.5px] bg-gold" />

            {/* Body Description */}
            <div className="font-sans font-light text-muted-color text-base md:text-lg leading-relaxed space-y-6 max-w-2xl">
              <p>
                W sercu malowniczego Podlasia, na samym skraju puszczańskich lasów, stworzyliśmy azyl 
                dla poszukujących ciszy i autentyczności. Gościniec Szpakówka w Czeremsze to oaza 
                spokoju, w której szum prastarych dębów i śpiew ptaków zastępują gwarny rytm współczesnego świata.
              </p>
              <p>
                To miejsce zrodzone z miłości do natury i lokalnego rzemiosła. Nasze wnętrza łączą surowe, 
                szlachetne drewno z subtelnym komfortem, dając przestrzeń do głębokiego odprężenia umysłu i ciała. 
                Niezależnie od tego, czy planujesz piesze wycieczki po rezerwatach, rowerowe wyprawy, czy leniwe 
                popołudnia z książką — Szpakówka otuli Cię leśnym spokojem.
              </p>
            </div>
          </motion.div>

          {/* Right Column (40% equivalent: 5 cols) - Designed as a beautiful editorial info badge */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Premium Handwired Geometric Card */}
            <div className="deco-corners border border-gold/25 bg-white/60 p-8 md:p-10 space-y-8 relative overflow-hidden backdrop-blur-sm shadow-sm">
              <div className="absolute right-0 bottom-0 top-0 left-0 forest-vector-pattern pointer-events-none" />
              
              <div className="space-y-2 relative z-10">
                <Trees className="w-7 h-7 text-gold mb-2" />
                <h3 className="font-serif text-xl md:text-2xl text-forest font-semibold">Mikroklimat Szpakówki</h3>
                <p className="font-sans font-light text-muted-color text-xs leading-relaxed">
                  Czyste powietrze o wysokiej zawartości olejków eterycznych oraz brak zanieczyszczenia światłem sprzyjają głębokiemu, regenerującemu nastrojowi.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 relative z-10 pt-4 border-t border-gold/15">
                <div className="space-y-1">
                  <span className="font-serif text-gold text-lg italic block">0%</span>
                  <span className="font-sans text-[10px] tracking-wider uppercase text-muted-color block">Pośpiechu</span>
                </div>
                <div className="space-y-1">
                  <span className="font-serif text-gold text-lg italic block">100%</span>
                  <span className="font-sans text-[10px] tracking-wider uppercase text-muted-color block">Ciszy Leśnej</span>
                </div>
              </div>
            </div>

            {/* Badges Container beneath the custom decorative card */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-2 justify-start">
              <motion.span 
                className="font-sans text-[10px] tracking-widest uppercase font-medium text-forest-light flex items-center gap-2 bg-white/40 px-3.5 py-1.5 border border-gold/15"
                whileHover={{ scale: 1.05 }}
              >
                <Compass className="w-3.5 h-3.5 text-gold" />
                Otulina Puszczy
              </motion.span>
              <motion.span 
                className="font-sans text-[10px] tracking-widest uppercase font-medium text-forest-light flex items-center gap-2 bg-white/40 px-3.5 py-1.5 border border-gold/15"
                whileHover={{ scale: 1.05 }}
              >
                <Trees className="w-3.5 h-3.5 text-gold" />
                Green Velo Route
              </motion.span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
