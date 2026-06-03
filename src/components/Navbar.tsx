import { useState, useEffect } from 'react';
import { Facebook, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Pokoje', href: '#pokoje' },
    { label: 'Okolica', href: '#okolica' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-forest/90 backdrop-blur-md border-b border-gold/30 py-4 shadow-lg'
          : 'bg-gradient-to-b from-black/75 to-transparent py-6 md:py-8'
      }`}
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#" 
          className="flex items-baseline gap-2.5 group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-serif text-2xl md:text-3xl text-cream tracking-tight font-semibold group-hover:text-gold-light transition-colors duration-300">
            Szpakówka
          </span>
          <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold font-medium">
            Gościniec
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <div className="flex items-center gap-6 lg:gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="font-sans text-[11px] tracking-[0.14em] uppercase text-cream/90 hover:text-gold hover-gold-line pb-1 transition-colors duration-200 block"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-gold/35" />

          {/* Facebook Link */}
          <motion.a
            href="https://www.facebook.com/profile.php?id=61573271608639"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream hover:text-gold p-1"
            aria-label="Śledź nas na Facebooku"
            whileHover={{ scale: 1.25, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <Facebook className="w-4 h-4" />
          </motion.a>

          {/* Book Button */}
          <motion.button
            onClick={onBookClick}
            className="cursor-pointer border border-gold text-gold font-sans text-[11px] tracking-[0.14em] uppercase px-5 py-2.5 bg-transparent hover:bg-gold hover:text-forest transition-all duration-300 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            Rezerwuj
          </motion.button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button
            onClick={onBookClick}
            className="cursor-pointer border border-gold text-gold font-sans text-[10px] tracking-[0.1em] uppercase px-3 py-1.5 hover:bg-gold hover:text-forest transition-all"
            whileTap={{ scale: 0.95 }}
          >
            Rezerwuj
          </motion.button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-cream p-1 focus:outline-none"
            aria-label="Spis menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-forest/95 backdrop-blur-lg border-b border-gold/20 absolute top-full left-0 w-full px-6 py-6 space-y-6 flex flex-col items-center text-center shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-4 w-full">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-[12px] tracking-[0.14em] uppercase text-cream/90 hover:text-gold py-2 border-b border-white/5 w-full block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <motion.div 
              className="flex items-center gap-6 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=61573271608639"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-gold flex items-center gap-2 font-sans text-xs uppercase tracking-widest"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4 text-gold animate-pulse" strokeWidth={1.5} />
                <span>Facebook</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
