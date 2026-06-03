import { Facebook, Trees } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8 border-t border-gold/15 relative overflow-hidden">
      {/* Decorative vertical golden accents */}
      <div className="absolute right-[5%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/15 via-transparent to-transparent hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start pb-12">
          
          {/* Left Block: Logo & tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight block">
              Gościniec Szpakówka
            </span>
            <p className="font-sans font-light text-xs md:text-sm text-cream/50 tracking-wide">
              Czeremcha · Podlasie · Puszcza Białowieska
            </p>
          </motion.div>

          {/* Right Block: Navigation & Social */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col md:items-end justify-between gap-6"
          >
            {/* Quick links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { label: 'Pokoje', href: '#pokoje' },
                { label: 'Okolica', href: '#okolica' },
                { label: 'Galeria', href: '#galeria' },
                { label: 'Kontakt', href: '#kontakt' }
              ].map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="font-sans text-[11px] tracking-[0.14em] uppercase text-cream/70 hover:text-gold hover-gold-line pb-0.5 transition-colors block"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social profiles */}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://www.facebook.com/profile.php?id=61573271608639"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-gold p-2 border border-white/5 bg-white/5 hover:bg-gold/10"
                aria-label="Śledź Gościniec Szpakówka na Facebook"
                whileHover={{ scale: 1.12, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-4 h-4 text-gold" strokeWidth={1.5} />
              </motion.a>
            </div>
          </motion.div>

        </div>

        {/* Divider and copyright area */}
        <div className="border-t border-rule/25 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[11px] text-cream/40 font-light tracking-wide">
            &copy; {currentYear} Gościniec Szpakówka. Wszelkie prawa zastrzeżone.
          </p>

          <div className="flex items-center gap-1.5 opacity-40 font-serif italic text-xs text-gold-light select-none">
            <Trees className="w-3.5 h-3.5 text-gold shrink-0" />
            <span>Z miłości do natury i ciszy lasu</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
