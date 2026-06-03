import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RoomsProps {
  onBookRoom: (roomId: string) => void;
}

export default function Rooms({ onBookRoom }: RoomsProps) {
  const [activeRoom, setActiveRoom] = useState(0);

  const roomDetails = [
    {
      id: 'wooden-room',
      name: 'Apartament Modrzewiowy',
      tabLabel: 'Apartament',
      desc: 'Sygnowany zapachem czystego modrzewia, z przestronnym łóżkiem małżeńskim, prywatną łazienką ze szlachetnymi wykończeniami oraz bezpośrednim dostępem do leśnego tarasu.',
      price: '280 PLN',
      capacity: '2 - 4 osoby',
      amenities: ['Prywatne wejście', 'Aneks kuchenny', 'Szybkie Wi-Fi', 'Widok na las']
    },
    {
      id: 'terrace-studio',
      name: 'Studio z widokiem na Taras',
      tabLabel: 'Studio',
      desc: 'Kameralna oaza dla dwojga. Duże, wysokie przeszklenia wpuszczają do wnętrza naturalne światło o świcie, a bezpośrednie sąsiedztwo przestronnej werandy zachęca do porannej jogi i kawy na łonie natury.',
      price: '220 PLN',
      capacity: '2 osoby',
      amenities: ['Łazienka en-suite', 'Zaparzacz do ziół', 'Dostęp do tarasu', 'Minimalistyczny kącik wypoczynkowy']
    },
    {
      id: 'forest-suite',
      name: 'Pokój Pod Lasem',
      tabLabel: 'Pokój',
      desc: 'Komfortowy pokój usytuowany w najbardziej zacisznej części domku, tuż na granicy sosnowego zagajnika. Przestrzeń urozmaicona tradycyjnymi podlaskimi tkactwami oraz minimalistycznymi akcentami.',
      price: '240 PLN',
      capacity: '2 - 3 osoby',
      amenities: ['Widok na Puszczę', 'Tradycyjne meble', 'Czajnik i naczynia', 'Regulowane oświetlenie nastrojowe']
    }
  ];

  return (
    <section 
      id="pokoje" 
      className="bg-forest py-20 md:py-28 lg:py-32 overflow-hidden text-cream relative"
    >
      {/* Decorative large page number - absolutely positioned background */}
      <span className="absolute right-[6vw] top-[3vw] font-serif text-[10rem] md:text-[14rem] leading-none opacity-[0.06] select-none font-bold text-white pointer-events-none">
        01
      </span>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Typography & Information (6 Cols on desktop) */}
          <div className="lg:col-span-6 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold/80 block mb-2">
                Odpoczynek Premium
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight font-semibold">
                Pokoje i Taras
              </h2>
              <div className="w-12 h-[1.5px] bg-gold mt-4 mb-6" />
              <p className="font-sans font-light text-cream/70 text-base md:text-lg leading-relaxed max-w-xl">
                Nasze sypialnie i strefy wypoczynkowe powstały z myślą o odcięciu się od zgiełku miasta. 
                Pachnące modrzewiem i świerkiem pokoje są świetlistą, cichą ramą dla otaczającej gościniec przyrody.
              </p>
            </motion.div>

            {/* Typographic highlights list with staggered entry */}
            <motion.div 
              className="space-y-3 pt-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.12
                  }
                }
              }}
            >
              {[
                "Nowe, pięknie wykończone pokoje o zapachu drewna",
                "Przestronny drewniany taras z meblami wypoczynkowymi",
                "Głęboka cisza przerywana jedynie odgłosami tętniącego lasu",
                "Otulenie Puszczy Białowieskiej z licznymi szlakami pieszymi"
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -15 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-gold font-light">—</span>
                  <span className="font-sans font-light text-sm tracking-wide text-cream/90">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Interactive Rooms tabs / details explorer */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-forest-mid/50 border border-gold/20 p-6 md:p-8 space-y-5 rounded-none max-w-xl shadow-xl backdrop-blur-sm relative"
            >
              {/* Subtle forest branch decoration inside card wrapper */}
              <div className="absolute right-3 top-3 opacity-10 select-none pointer-events-none">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
                  <path d="M12 2L19 9H5L12 2Z" />
                  <path d="M12 7L21 16H3L12 7Z" />
                  <path d="M12 13L23 22H1L12 13Z" />
                </svg>
              </div>

              <div className="flex border-b border-gold/10 pb-4 justify-between gap-2 overflow-x-auto scrollbar-none relative z-10">
                {roomDetails.map((room, idx) => (
                  <button
                    key={room.id}
                    onClick={() => setActiveRoom(idx)}
                    className="cursor-pointer font-sans text-[10px] tracking-widest uppercase pb-1.5 transition-all shrink-0 relative"
                  >
                    <span className={activeRoom === idx ? 'text-gold font-medium' : 'text-cream/50 hover:text-cream/85'}>
                      {room.tabLabel}
                    </span>
                    {activeRoom === idx && (
                      <motion.div 
                        layoutId="activeRoomBar" 
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab content panel with Framer Motion wait transition */}
              <div className="relative z-10 min-h-[180px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeRoom}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl md:text-2xl text-cream font-medium">
                        {roomDetails[activeRoom].name}
                      </h3>
                      <p className="font-sans font-light text-xs text-cream/80 leading-relaxed">
                        {roomDetails[activeRoom].desc}
                      </p>
                      
                      {/* Small luxury tags list */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {roomDetails[activeRoom].amenities.map((item, index) => (
                          <motion.span 
                            key={item} 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="text-[9px] font-sans tracking-wider uppercase bg-forest/80 border border-gold/15 px-2.5 py-1 text-cream/70"
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-gold/10 pt-4 mt-2">
                      <div>
                        <span className="text-[10px] uppercase font-sans tracking-wider text-cream/40 block font-medium">Pojemność i cena</span>
                        <span className="font-sans text-xs font-light tracking-wide">{roomDetails[activeRoom].capacity} — </span>
                        <strong className="font-serif text-gold text-base">{roomDetails[activeRoom].price}</strong>
                        <span className="text-[10px] text-cream/40 font-sans"> / noc</span>
                      </div>

                      <motion.button
                        onClick={() => onBookRoom(roomDetails[activeRoom].id)}
                        className="cursor-pointer inline-flex items-center gap-1.5 text-[10px] lg:text-[11px] tracking-widest uppercase font-sans text-gold hover:text-gold-light"
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      >
                        Wstępna rezerwacja <ArrowRight className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

          </div>

          {/* Right Side: Collage with slow smooth pan scale animations */}
          <div className="lg:col-span-6 flex flex-col gap-5 md:gap-6">
            
            {/* Top Portrait (vertical image) with premium framing */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-[320px] md:h-[420px] overflow-hidden border border-gold/15 relative group"
            >
              <div className="absolute inset-0 bg-forest/10 group-hover:bg-transparent transition-all duration-550 z-10" />
              <motion.img 
                src="https://i.ibb.co/1YDrXfSs/706504952-122181905636775720-2992646870460140423-n.jpg"
                alt="Jasne luksusowe sypialnie z oknami na puszczę"
                className="w-full h-full object-cover select-none"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Bottom Landscape (horizontal image) with matched framing */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-[220px] md:h-[260px] overflow-hidden border border-gold/15 relative group"
            >
              <div className="absolute inset-0 bg-forest/10 group-hover:bg-transparent transition-all duration-550 z-10" />
              <motion.img 
                src="https://i.ibb.co/QqzgCCH/620063150-122168228204775720-1098894039089119604-n.jpg"
                alt="Wspólny salon oraz przestrzeń śniadaniowa z widokiem na las"
                className="w-full h-full object-cover select-none"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
