import { useState, useTransition, FormEvent } from 'react';
import { X, Calendar as CalendarIcon, Users, Phone, Mail, User, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomId?: string;
}

export default function BookingModal({ isOpen, onClose, selectedRoomId = 'all' }: BookingModalProps) {
  const [roomId, setRoomId] = useState(selectedRoomId);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const rooms = [
    { id: 'all', name: 'Wybierz pokój...', price: 0 },
    { id: 'wooden-room', name: 'Apartament Modrzewiowy (2-4 os.)', price: 280 },
    { id: 'terrace-studio', name: 'Studio z widokiem na Taras (2 os.)', price: 220 },
    { id: 'forest-suite', name: 'Pokój Pod Lasem (2-3 os.)', price: 240 },
  ];

  const calculateDays = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const timeDiff = end.getTime() - start.getTime();
    if (timeDiff <= 0) return 0;
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  const days = calculateDays();
  const selectedRoom = rooms.find((r) => r.id === roomId);
  const totalPrice = selectedRoom && selectedRoom.price > 0 ? selectedRoom.price * days : 0;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !checkIn || !checkOut || roomId === 'all') {
      alert('Proszę wypełnić wszystkie pola i wybrać pokój.');
      return;
    }

    startTransition(async () => {
      // Simulate real premium booking sending flow (usually proxies to server API)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm" 
          id="booking-modal"
        >
          <motion.div 
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative w-full max-w-2xl bg-cream border border-rule text-charcoal shadow-2xl overflow-hidden flex flex-col md:max-h-[90vh]"
          >
            
            {/* Header decoration */}
            <div className="h-1 bg-gold w-full" />

            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-muted-color hover:text-gold transition-colors focus:outline-none cursor-pointer z-10"
              aria-label="Zamknij"
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <div className="p-6 md:p-10 overflow-y-auto">
              {!isSubmitted ? (
                <div className="space-y-6">
                  <div>
                    <span className="font-sans text-[11px] tracking-[0.14em] uppercase text-gold block mb-1">
                      Rezerwacja pobytu
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-forest font-semibold tracking-tight">
                      Zaplanuj swój odpoczynek
                    </h2>
                    <div className="w-12 h-[1px] bg-gold mt-3 mb-4" />
                    <p className="font-sans font-light text-muted-color text-sm leading-relaxed">
                      Wyślij niezobowiązujące zapytanie o rezerwację w Gościńcu Szpakówka. 
                      Potwierdzimy dostępność i skontaktujemy się z Tobą w ciągu kilku godzin.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Room Select */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] tracking-wider uppercase font-medium text-muted-color">
                        Wybierz zakwaterowanie
                      </label>
                      <select
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                        required
                        className="w-full bg-white/60 border border-rule px-4 py-3 text-sm focus:outline-none focus:border-gold italic font-sans"
                      >
                        {rooms.map((room) => (
                          <option key={room.id} value={room.id}>
                            {room.name} {room.price > 0 ? `— od ${room.price} PLN / doba` : ''}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Dates & Guests Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-[10px] tracking-wider uppercase font-medium text-muted-color">
                          Data przyjazdu
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full bg-white/60 border border-rule pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:border-gold font-sans focus:ring-0 appearance-none"
                          />
                          <CalendarIcon className="w-4 h-4 text-muted-color absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[10px] tracking-wider uppercase font-medium text-muted-color">
                          Data wyjazdu
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            required
                            min={checkIn || new Date().toISOString().split('T')[0]}
                            className="w-full bg-white/60 border border-rule pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:border-gold font-sans focus:ring-0 appearance-none"
                          />
                          <CalendarIcon className="w-4 h-4 text-muted-color absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[10px] tracking-wider uppercase font-medium text-muted-color">
                          Liczba gości
                        </label>
                        <div className="relative">
                          <select
                            value={guests}
                            onChange={(e) => setGuests(Number(e.target.value))}
                            className="w-full bg-white/60 border border-rule pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:border-gold font-sans focus:ring-0"
                          >
                            {[1, 2, 3, 4, 5].map((g) => (
                              <option key={g} value={g}>
                                {g} {g === 1 ? 'osoba' : g < 5 ? 'osoby' : 'osób'}
                              </option>
                            ))}
                          </select>
                          <Users className="w-4 h-4 text-muted-color absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Estimate box */}
                    <AnimatePresence>
                      {days > 0 && selectedRoom && selectedRoom.price > 0 && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-forest-light/10 border border-forest-light/30 p-4 flex justify-between items-center overflow-hidden"
                        >
                          <div className="flex items-start gap-2.5">
                            <Info className="w-4 h-4 text-forest-light mt-0.5 shrink-0" />
                            <div>
                              <p className="text-xs font-medium text-forest font-sans">Podsumowanie wstępne</p>
                              <p className="text-xs text-muted-color font-sans">{days} {days === 1 ? 'doba' : 'doby/noclegi'} x {selectedRoom.price} PLN</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-muted-color block font-sans">Szacunkowy koszt</span>
                            <span className="font-serif font-semibold text-lg text-forest">{totalPrice} PLN</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Contact info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-[10px] tracking-wider uppercase font-medium text-muted-color">
                          Imię i nazwisko
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Jan Kowalski"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full bg-white/60 border border-rule pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:border-gold font-sans"
                          />
                          <User className="w-4 h-4 text-muted-color absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[10px] tracking-wider uppercase font-medium text-muted-color">
                          Numer telefonu
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            placeholder="609 961 235"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="w-full bg-white/60 border border-rule pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:border-gold font-sans"
                          />
                          <Phone className="w-4 h-4 text-muted-color absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[10px] tracking-wider uppercase font-medium text-muted-color">
                        E-mail kontaktowy
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="mal.kopanska@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full bg-white/60 border border-rule pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:border-gold font-sans"
                        />
                        <Mail className="w-4 h-4 text-muted-color absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[10px] tracking-wider uppercase font-medium text-muted-color">
                        Wiadomość / Życzenia specjalne
                      </label>
                      <textarea
                        placeholder="Chętnie dowiemy się więcej o Twoich planach (np. godzina przyjazdu, łóżeczko dla dziecka, alergie)..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                        className="w-full bg-white/60 border border-rule px-4 py-3 text-sm focus:outline-none focus:border-gold font-sans resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isPending}
                      className="w-full py-4 mt-2 bg-forest text-cream font-sans text-xs tracking-[0.14em] uppercase hover:bg-gold hover:text-forest transition-colors duration-305 font-medium tracking-wider cursor-pointer"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {isPending ? 'Wysyłanie zapytania...' : 'Złóż zapytanie o rezerwację'}
                    </motion.button>
                  </form>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-6 animate-fadeIn"
                >
                  <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto text-gold">
                    <CalendarIcon className="w-8 h-8" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-serif text-3xl text-forest font-semibold">Dziękujemy, {name}!</h3>
                    <p className="text-sm text-gold tracking-wide uppercase font-sans font-medium">Zapytanie zostało pomyślnie wysłane</p>
                  </div>
                  <div className="w-12 h-[1px] bg-gold mx-auto" />
                  <p className="font-sans font-light text-muted-color text-sm leading-relaxed max-w-sm mx-auto">
                    Twoje zgłoszenie dotyczące pokoju <strong className="text-forest font-medium">{selectedRoom?.name}</strong> zostało przekazane gospodarzom. 
                    Skontaktujemy się z Tobą telefonicznie na numer <strong className="text-forest font-medium">{phone}</strong> lub mailowo na adres <strong className="text-forest font-medium">{email}</strong> w celu sfinalizowania rezerwacji.
                  </p>
                  <div className="bg-forest/5 py-3.5 px-5 rounded-sm inline-block border border-rule/30">
                    <p className="text-xs font-mono text-muted-color font-medium">KOD REFERENCYJNY: SZP-{Math.floor(Math.random() * 90000 + 10000)}</p>
                  </div>
                  <div className="pt-4">
                    <motion.button
                      onClick={() => {
                        setIsSubmitted(false);
                        onClose();
                      }}
                      className="px-8 py-3 bg-forest text-cream font-sans text-xs tracking-widest uppercase hover:bg-gold hover:text-forest transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      Zamknij okno
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
