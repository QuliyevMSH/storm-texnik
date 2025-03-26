
import { Instagram, Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">Ştorm</h2>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4">Premium avtoyuma və avtomobil təmir xidmətləri.</p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://wa.me/+994507869455" className="p-2 rounded-full bg-gray-800 hover:bg-storm-600 transition-colors">
                <Phone size={16} />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-storm-600 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-storm-600 transition-colors">
                <Heart size={16} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-3">Xidmətlər</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li><a className="hover:text-storm-400 transition-colors">Avtoyuma</a></li>
              <li><a className="hover:text-storm-400 transition-colors">Detayling</a></li>
              <li><a className="hover:text-storm-400 transition-colors">Poliş</a></li>
              <li><a className="hover:text-storm-400 transition-colors">Mexanik təmir</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-3">Linklər</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-storm-400 transition-colors">Haqqımızda</a></li>
              <li><a href="#gallery" className="hover:text-storm-400 transition-colors">Qalereya</a></li>
              <li><a href="#contact" className="hover:text-storm-400 transition-colors">Əlaqə</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-3">Əlaqə</h3>
            <address className="not-italic text-xs sm:text-sm space-y-1 sm:space-y-2">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-storm-400 flex-shrink-0" />
                <span>Beyləqan rayonu - PMK, Füzuli yolu <br /> `Dost Qapısı`
                restoranının arxası</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-storm-400 flex-shrink-0" />
                <span>+994 50 786 94 55</span>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs sm:text-sm">
          <p>&copy; {currentYear} Ştorm. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
