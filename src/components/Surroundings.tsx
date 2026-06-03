import { useState } from 'react';
import { ArrowLeft, Compass, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Surroundings() {
  const [activeGuide, setActiveGuide] = useState<'forest' | 'greenvelo' | null>(null);

  return (
    <section 
      id="okolica" 
      className="bg-cream py-20 md:py-28 lg:py-32 overflow-hidden text-charcoal relative border-b border-rule/20"
    >
      {/* Background page indicator */}
      <span className="absolute left-[6vw] top-[3vw] font-serif text-[10rem] md:text-[14rem] leading-none opacity-[0.05] select-none font-bold text-gold pointer-events-none">
        02
      </span>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 md:mb-20 text-left"
        >
          <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-forest-light font-semibold block mb-2">
            Zew Puszczy i Przyrody
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight font-semibold text-forest">
            Odkryj Okolicę
          </h2>
          <div className="w-12 h-[1.5px] bg-gold mt-4" />
        </motion.div>

        {/* Row divided by 1px Rule line */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-rule/40 border-t border-b border-rule/40 py-12 md:py-16 mb-16">
          
          {/* Item 1: Puszcza Białowieska */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 pb-8 md:pb-0 md:pr-12 lg:pr-16"
          >
            <div className="flex items-center gap-2 text-forest-light">
              <Compass className="w-4 h-4 text-gold" />
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-semibold">Rezerwat Biosfery</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-forest font-semibold">
              Puszcza Białowieska
            </h3>
            <p className="font-sans font-light text-muted-color text-sm md:text-base leading-relaxed">
              Ostatni pierwotny las niżu europejskiego leży na wyciągnięcie ręki. To unikalne królestwo żubra, 
              wiekowe dęby pamiętające królewskie polowania oraz dziesiątki kilometrów malowniczych, wyciszających szlaków.
            </p>
            <button
              onClick={() => setActiveGuide('forest')}
              className="cursor-pointer inline-flex items-center gap-1 font-sans text-xs uppercase tracking-[0.14em] text-gold hover:text-forest-light transition-colors font-medium border-b border-gold/40 pb-0.5"
            >
              Ciekawe punkty i szlaki →
            </button>
          </motion.div>

          {/* Item 2: Szlak Green Velo */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 pt-8 md:pt-0 md:pl-12 lg:pl-16"
          >
            <div className="flex items-center gap-2 text-forest-light">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-semibold">Turystyka Rowerowa</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-forest font-semibold">
              Synergia Green Velo
            </h3>
            <p className="font-sans font-light text-muted-color text-sm md:text-base leading-relaxed">
              Szlak rowerowy Green Velo przebiega bezpośrednio przez te nieskażone rejony Podlasia. 
              Dla miłośników dwóch kółek to idealna baza wypadowa do krajoznawczych tras wśród urokliwych drewnianych cerkwi i dolin rzecznych.
            </p>
            <button
              onClick={() => setActiveGuide('greenvelo')}
              className="cursor-pointer inline-flex items-center gap-1 font-sans text-xs uppercase tracking-[0.14em] text-gold hover:text-forest-light transition-colors font-medium border-b border-gold/40 pb-0.5"
            >
              Rekomendowane trasy rowerowe →
            </button>
          </motion.div>

        </div>

        {/* Dynamic Detail Overlay Guide with smooth height anims */}
        <AnimatePresence mode="wait">
          {activeGuide && (
            <motion.div 
              initial={{ opacity: 0, height: 0, y: -15 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-rule/50 p-6 md:p-8 mb-16 relative shadow-sm text-charcoal overflow-hidden deco-corners"
            >
              <button 
                onClick={() => setActiveGuide(null)}
                className="absolute top-4 right-4 text-xs font-sans text-muted-color hover:text-gold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer z-10"
              >
                <ArrowLeft className="w-3 h-3" /> Zamknij przewodnik
              </button>

              {activeGuide === 'forest' ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-medium block">Przewodnik Szpakówki</span>
                    <h4 className="font-serif text-xl md:text-2xl text-forest font-semibold">Perełki Puszczy Białowieskiej</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 font-sans font-light text-xs md:text-sm text-muted-color">
                    <motion.div whileHover={{ scale: 1.01 }} className="space-y-2 border-l border-gold/45 pl-4 py-1 transition-all">
                      <h5 className="font-serif text-base text-forest font-medium">Rezerwat Pokazowy Żubrów</h5>
                      <p className="leading-relaxed">Zlokalizowany pośród puszczańskich ostępów, pozwala zobaczyć majestatycznego króla puszczy w naturalnych warunkach (ok. 35 min drogi).</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} className="space-y-2 border-l border-gold/45 pl-4 py-1 transition-all">
                      <h5 className="font-serif text-base text-forest font-medium">Miejsce Mocy w Białowieży</h5>
                      <p className="leading-relaxed">Starodawne miejsce kultu dawnych Słowian z unikalnymi konfiguracjami drzew i silnym, odprężającym promieniowaniem geomagnetycznym.</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} className="space-y-2 border-l border-gold/45 pl-4 py-1 transition-all">
                      <h5 className="font-serif text-base text-forest font-medium">Szlak Dębów Królewskich</h5>
                      <p className="leading-relaxed">Ścieżka edukacyjna wiodąca pośród olbrzymich dębów liczących od 400 do 500 lat, nazwanych imionami królów Polski i Litwy.</p>
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-medium block">Rowerowe Trasy Podlasia</span>
                    <h4 className="font-serif text-xl md:text-2xl text-forest font-semibold">Wybrane Szlaki Green Velo</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 font-sans font-light text-xs md:text-sm text-muted-color">
                    <motion.div whileHover={{ scale: 1.01 }} className="space-y-2 border-l border-gold/45 pl-4 py-1 transition-all">
                      <h5 className="font-serif text-base text-forest font-medium">Pętla Czeremcha - Kleszczele</h5>
                      <p className="leading-relaxed">Spokojna trasa o długości 25 km, wiodąca przez urokliwe, drewniane podlaskie osady, lasy sosnowe oraz dolinę rzeki Nurzec.</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} className="space-y-2 border-l border-gold/45 pl-4 py-1 transition-all">
                      <h5 className="font-serif text-base text-forest font-medium">Kraina Otwartych Okiennic</h5>
                      <p className="leading-relaxed">Wyprawa rowerowa szlakiem dawnej architektury drewnianej, bogatych zdobień chałup oraz malowniczych dolin Narwi.</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.01 }} className="space-y-2 border-l border-gold/45 pl-4 py-1 transition-all">
                      <h5 className="font-serif text-base text-forest font-medium">Droga Synagogalna do Orli</h5>
                      <p className="leading-relaxed">Płaska, cicha trasa prowadząca do zabytkowej, monumentalnej synagogi w Orli, reprezentującej wielokulturową historię regionu.</p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Cinematic Full-Width Edge-To-Edge Panorama Image with elegant hover zoom */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-[320px] md:h-[480px] lg:h-[560px] overflow-hidden relative"
      >
        <motion.img 
          src="https://i.ibb.co/6q8Qwf1/706317306-122181905816775720-7898434931931285480-n.jpg" 
          alt="Magiczna leśna ścieżka w otulinie Puszczy Białowieskiej" 
          className="w-full h-full object-cover select-none"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 10, ease: "easeOut" }}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-forest/15 mix-blend-multiply pointer-events-none" />
      </motion.div>
    </section>
  );
}
