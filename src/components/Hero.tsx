import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onDiscoverClick: () => void;
}

export default function Hero({ onDiscoverClick }: HeroProps) {
  return (
    <header className="relative w-full h-[100svh] min-h-[600px] bg-forest overflow-hidden flex items-end">
      {/* Background Image with elegant pan zoom animation */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.03, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat select-none"
        style={{
          backgroundImage: `url('https://i.ibb.co/C5MYhYjR/687031133-122179316852775720-2804873122179729048-n.jpg')`,
        }}
      />

      {/* Overlay - elegant atmospheric gradient */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'linear-gradient(to bottom, rgba(10, 20, 10, 0.25) 0%, rgba(10, 20, 10, 0.4) 50%, rgba(10, 20, 10, 0.8) 100%)'
        }}
      />

      {/* Bottom Left Content Block */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-[10vh] pt-[120px] flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="max-w-4xl space-y-7 text-left">
          <div className="space-y-4">
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-xs tracking-[0.25em] uppercase text-gold-light/95 font-medium block"
            >
              Otulina Puszczy Białowieskiej
            </motion.span>
            
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif leading-[1.05] text-white tracking-tight font-semibold"
                style={{ fontSize: 'clamp(3rem, 7vw, 6.2rem)' }} 
              >
                Gościniec Szpakówka
              </motion.h1>
            </div>
          </div>

          {/* Animated Gold line expand */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1.5px] bg-gold"
          />

          <motion.p 
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 0.85 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-light text-cream text-base md:text-lg lg:text-xl tracking-wide max-w-xl"
          >
            Puszcza Białowieska · Cisza · Natura
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2"
          >
            <motion.button
              onClick={onDiscoverClick}
              className="cursor-pointer inline-flex items-center justify-center px-8 py-4 border border-white/60 text-cream font-sans text-xs tracking-[0.15em] uppercase bg-transparent hover:bg-gold hover:border-gold hover:text-forest transition-all duration-400 font-medium"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Odkryj miejsce
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hidden md:flex flex-col items-center gap-2 group self-end pb-2 cursor-pointer select-none"
          onClick={onDiscoverClick}
          whileHover={{ opacity: 1, y: 3 }}
        >
          <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold-light group-hover:text-gold transition-colors duration-200">
            Przewiń
          </span>
          <ChevronDown className="w-5 h-5 text-gold animate-bounce" />
        </motion.div>
      </div>

      {/* Extra decor vertical accent line */}
      <div className="absolute right-0 bottom-0 top-0 w-[1px] bg-gradient-to-b from-transparent via-gold/15 to-transparent hidden lg:block" />
    </header>
  );
}
