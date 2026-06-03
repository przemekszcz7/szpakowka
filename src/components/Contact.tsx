import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section 
      id="kontakt" 
      className="bg-forest py-20 md:py-28 lg:py-32 text-cream overflow-hidden border-b border-gold/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Coordinates */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div>
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold block mb-2">
                Napisz lub Zadzwoń
              </span>
              <h2 className="font-serif text-3xl md:text-5xl tracking-tight font-semibold">
                Zapraszamy
              </h2>
              <div className="w-12 h-[1.5px] bg-gold mt-4 mb-8" />
              <p className="font-sans font-light text-cream/70 text-sm md:text-base leading-relaxed max-w-md">
                Gospodarze Gościńca Szpakówka czekają na Twoje zapytanie. Odpowiemy ze szczegółami, 
                podpowiemy w kwestii dojazdu i przygotujemy dom na Wasz niezapomniany leśny wypoczynek.
              </p>
            </div>

            {/* Contact Grid Block with Rule lines */}
            <div className="space-y-6">
              
              {/* Address */}
              <motion.div 
                className="border-t border-rule/35 pt-5 flex items-start gap-4 group"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 450, damping: 20 }}
              >
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <div className="space-y-1">
                  <span className="block font-sans text-[10px] tracking-widest uppercase font-semibold text-gold">
                    Adres Gościńca
                  </span>
                  <p className="font-sans font-light text-sm text-cream/95">
                    ul. Fabryczna 16A, Czeremcha 17-240
                  </p>
                </div>
              </motion.div>

              {/* Telephone */}
              <motion.div 
                className="border-t border-rule/35 pt-5 flex items-start gap-4 group"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 450, damping: 20 }}
              >
                <Phone className="w-4 h-4 text-gold shrink-0 mt-1" />
                <div className="space-y-1">
                  <span className="block font-sans text-[10px] tracking-widest uppercase font-semibold text-gold">
                    Telefon do Rezerwacji
                  </span>
                  <a 
                    href="tel:609961235" 
                    className="block font-sans font-light text-sm text-cream group-hover:text-gold transition-colors duration-250"
                  >
                    609 961 235
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="border-t border-rule/35 pt-5 flex items-start gap-4 group"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 450, damping: 20 }}
              >
                <Mail className="w-4 h-4 text-gold shrink-0 mt-1" />
                <div className="space-y-1">
                  <span className="block font-sans text-[10px] tracking-widest uppercase font-semibold text-gold">
                    Adres E-Mail
                  </span>
                  <a 
                    href="mailto:mal.kopanska@gmail.com" 
                    className="block font-sans font-light text-sm text-cream group-hover:text-gold transition-colors duration-250"
                  >
                    mal.kopanska@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Separator base line */}
              <div className="border-t border-rule/35 pt-5" />

            </div>

            {/* Social connection with elegant styling */}
            <div className="pt-2">
              <motion.a 
                href="https://www.facebook.com/profile.php?id=61573271608639"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-gold/40 text-cream/95 text-xs font-sans uppercase tracking-[0.16em] hover:bg-gold hover:text-forest hover:border-gold transition-all duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <Facebook className="w-4 h-4 text-gold" />
                <span>Odwiedź Nasz Facebook</span>
              </motion.a>
            </div>

          </motion.div>

          {/* Right Column: Google Maps iframe with motion hover wrapper */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="relative border border-gold/25 shadow-2xl overflow-hidden p-1 bg-forest-mid/30">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.425303233919!2d23.345934477105683!3d52.50764183714403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47203589b5ad00c7%3A0x988e274f1fa64d0d!2sFabryczna%2016A%2C%2017-240%20Czeremcha!5e0!3m2!1spl!2spl!4v1780470091861!5m2!1spl!2spl" 
                width="100%" 
                height="420" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer"
                title="Lokalizacja Gościńca Szpakówka na mapie"
                className="w-full h-[420px] rounded-none filter brightness-90 contrast-105"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
