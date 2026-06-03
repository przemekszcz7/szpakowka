import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = [
    {
      id: 'terrace-relax',
      url: 'https://i.ibb.co/9mB1c8Lp/657176288-122174706218775720-7866535774035059476-n.jpg',
      caption: 'Relaks na modrzewiowym tarasie guesthousu',
      area: 'large-left',
    },
    {
      id: 'basket-mushrooms',
      url: 'https://i.ibb.co/ZzQSWb0T/706464511-122181905468775720-7248163327217030561-n.jpg',
      caption: 'Świeże puszczańskie kurki i borowiki zebrane tuż przy obiekcie',
      area: 'rm-top',
    },
    {
      id: 'rustic-detail',
      url: 'https://i.ibb.co/Q3SdxnNz/621758655-122168228264775720-8104554079564371434-n.jpg',
      caption: 'Ciepłe, rustykalne akcenty dekoracyjne na werandzie',
      area: 'rm-bottom',
    },
    {
      id: 'cottage-winter',
      url: 'https://i.ibb.co/jPFCT6k7/706277458-122181905426775720-4575750608895187384-n.jpg',
      caption: 'Gościniec Szpakówka w urokliwej zimowej szacie',
      area: 'full-mid',
    },
    {
      id: 'tea-relax',
      url: 'https://i.ibb.co/LdwVjKWF/657151181-122174706260775720-705709045460466866-n.jpg',
      caption: 'Poranny napar z ziół na surowym pniu leśnego drewna',
      area: 'bottom-left',
    },
    {
      id: 'bedroom-slats',
      url: 'https://i.ibb.co/1YDrXfSs/706504952-122181905636775720-2992646870460140423-n.jpg',
      caption: 'Przestronne, jasne i pachnące sosną sypialnie',
      area: 'bottom-mid',
    },
    {
      id: 'cabin-exterior',
      url: 'https://i.ibb.co/Z6TzKpnY/706456999-122181905774775720-961258647215444888-n.jpg',
      caption: 'Malowniczo wtopiona w las architektura Gościńca',
      area: 'bottom-right',
    },
    // Additionals to allow comprehensive browsing in the gorgeous lightbox:
    {
      id: 'forest-path',
      url: 'https://i.ibb.co/6q8Qwf1/706317306-122181905816775720-7898434931931285480-n.jpg',
      caption: 'Cicha ścieżka spacerowa i szlak rowerowy w otulinie Puszczy',
      area: 'extra-1',
    },
    {
      id: 'living-dining',
      url: 'https://i.ibb.co/QqzgCCH/620063150-122168228204775720-1098894039089119604-n.jpg',
      caption: 'Komfortowa strefa wspólna z aneksem kuchennym i jadalnią',
      area: 'extra-2',
    }
  ];

  // Grid style layout definitions for desktop. We fall back to 1 column / clean grid on mobile.
  const gridLayout = {
    gridTemplateAreas: `
      "large-left large-left large-left large-left rm-top rm-top rm-top rm-top rm-top rm-top rm-top rm-top"
      "large-left large-left large-left large-left rm-bottom rm-bottom rm-bottom rm-bottom rm-bottom rm-bottom rm-bottom rm-bottom"
      "full-mid full-mid full-mid full-mid full-mid full-mid full-mid full-mid full-mid full-mid full-mid full-mid"
      "bottom-left bottom-left bottom-left bottom-mid bottom-mid bottom-mid bottom-mid bottom-right bottom-right bottom-right bottom-right bottom-right"
    `
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section 
      id="galeria" 
      className="bg-charcoal py-20 md:py-28 lg:py-32 text-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title Area */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-left"
        >
          <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold block mb-2">
            Zatrzymaj Chwilę w Kadrze
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight font-semibold">
            Galeria Szpakówki
          </h2>
          <div className="w-12 h-[1.5px] bg-gold mt-4" />
        </motion.div>

        {/* Desktop Editorial Mosaic Layout */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          className="hidden md:grid grid-cols-12 gap-[3px] auto-rows-[280px] bg-charcoal/20"
          style={gridLayout}
        >
          {images.slice(0, 7).map((img, index) => (
            <motion.div
              key={img.id}
              variants={{
                hidden: { opacity: 0, scale: 0.96, y: 15 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden group cursor-pointer"
              style={{ gridArea: img.area }}
              onClick={() => setLightboxIndex(index)}
              whileHover={{ scale: 0.995 }}
            >
              {/* Photo with subtle parallax zoom */}
              <motion.img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover transition-all duration-750 filter group-hover:brightness-[0.82] rounded-none select-none"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Minimal Designer Hover Indicator */}
              <div className="absolute top-4 right-4 p-2.5 bg-charcoal/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gold/15">
                <Maximize2 className="w-4 h-4 text-gold" />
              </div>

              {/* Subtitle snippet on image caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/45 to-transparent translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none">
                <p className="font-sans text-xs tracking-wide text-cream/95">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Grid Layout */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
          className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-2"
        >
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="relative h-[220px] overflow-hidden group cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover rounded-none select-none"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-sans text-xs tracking-wide text-cream">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra text detail under the gallery */}
        <div className="mt-10 text-center">
          <p className="font-sans font-light text-xs text-cream/40 tracking-wider">
            Kliknij na dowolne zdjęcie, by otworzyć interaktywną galerię w pełnym ekranie
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto py-2">
              <div className="text-cream font-sans text-xs tracking-[0.2em] uppercase">
                Szpakówka <span className="text-gold font-bold">·</span> Galeria <span className="text-cream/50">({lightboxIndex + 1} / {images.length})</span>
              </div>
              
              <motion.button
                onClick={() => setLightboxIndex(null)}
                className="p-2 text-cream hover:text-gold cursor-pointer"
                aria-label="Zamknij"
                whileHover={{ rotate: 90, scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <X className="w-8 h-8" strokeWidth={1.5} />
              </motion.button>
            </div>

            {/* Active Image and Controls */}
            <div className="relative flex items-center justify-center flex-1 w-full max-w-6xl mx-auto my-4 touch-pan-y">
              {/* Prev Trigger */}
              <motion.button
                onClick={handlePrev}
                className="absolute left-0 md:left-4 z-10 p-3 bg-black/45 text-cream hover:text-gold transition-colors hover:bg-black/65 rounded-none cursor-pointer"
                aria-label="Poprzednie"
                whileHover={{ x: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-8 h-8" strokeWidth={1} />
              </motion.button>

              {/* Picture Display with fine fade motion */}
              <div className="max-h-[70vh] md:max-h-[75vh] max-w-full flex flex-col justify-center select-none overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={lightboxIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    src={images[lightboxIndex].url}
                    alt={images[lightboxIndex].caption}
                    className="max-h-[65vh] object-contain mx-auto shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>

              {/* Next Trigger */}
              <motion.button
                onClick={handleNext}
                className="absolute right-0 md:right-4 z-10 p-3 bg-black/45 text-cream hover:text-gold transition-colors hover:bg-black/65 rounded-none cursor-pointer"
                aria-label="Następne"
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-8 h-8" strokeWidth={1} />
              </motion.button>
            </div>

            {/* Caption / Bottom Area */}
            <div className="w-full max-w-xl mx-auto text-center pb-4 space-y-3">
              <AnimatePresence mode="wait">
                <motion.p 
                  key={lightboxIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="font-serif italic text-lg md:text-xl text-gold-light tracking-wide leading-relaxed"
                >
                  {images[lightboxIndex].caption}
                </motion.p>
              </AnimatePresence>
              
              <div className="flex justify-center gap-1.5 h-3 items-center">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightboxIndex(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      lightboxIndex === idx ? 'bg-gold w-3' : 'bg-cream/20'
                    }`}
                    aria-label={`Skocz do zdjęcia ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
