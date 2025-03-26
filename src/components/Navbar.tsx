import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-2" : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
      <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'; // scroll-u yadda saxlamasın
    }
    window.scrollTo(0, 0); // klik zamanı scroll-u sıfırla
    window.location.reload(); // sonra yenilə
  }}
  className="flex items-center space-x-2"
>
  <span className="text-xl sm:text-2xl font-display font-bold text-storm-700">
    Ştorm
  </span>
</a>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a
            href="#services"
            className="text-xs lg:text-sm font-medium text-gray-700 hover:text-storm-600 transition-colors"
          >
            Xidmətlər
          </a>
          <a
            href="#about"
            className="text-xs lg:text-sm font-medium text-gray-700 hover:text-storm-600 transition-colors"
          >
            Haqqımızda
          </a>
          <a
            href="#gallery"
            className="text-xs lg:text-sm font-medium text-gray-700 hover:text-storm-600 transition-colors"
          >
            Qalereya
          </a>
          <a
            href="#contact"
            className="text-xs lg:text-sm font-medium text-gray-700 hover:text-storm-600 transition-colors"
          >
            Əlaqə
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+994507869455"
            className="flex items-center text-storm-600 text-xs lg:text-sm font-medium"
          >
            <Phone size={16} className="mr-1.5" />
            <span>+994 50 786 94 55</span>
          </a>
          <Button
            asChild
            className="btn-primary text-xs py-1.5 px-3 lg:text-sm lg:py-2 lg:px-4"
          >
            <a href="https://wa.me/+994507869455">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1.5"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Rezervasiya et
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-1.5 text-gray-700 hover:text-storm-600 transition-colors"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass animate-fade-in">
          <div className="container py-4 flex flex-col space-y-3">
            <a
              href="#services"
              className="text-sm text-gray-700 hover:text-storm-600 transition-colors py-1.5 px-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Xidmətlər
            </a>
            <a
              href="#about"
              className="text-sm text-gray-700 hover:text-storm-600 transition-colors py-1.5 px-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Haqqımızda
            </a>
            <a
              href="#gallery"
              className="text-sm text-gray-700 hover:text-storm-600 transition-colors py-1.5 px-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Qalereya
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-700 hover:text-storm-600 transition-colors py-1.5 px-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Əlaqə
            </a>
            <div className="pt-1.5 pb-1.5 border-t">
              <a
                href="tel:+994507869455"
                className="flex items-center text-storm-600 font-medium py-1.5 px-3 text-sm"
              >
                <Phone size={16} className="mr-1.5" />
                <span>+994 50 786 94 55</span>
              </a>
              <Button
                asChild
                className="btn-primary w-full mt-3 text-sm py-1.5"
              >
                <a
                  href="https://wa.me/+994507869455"
                  className="flex items-center justify-center"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1.5"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  Rezervasiya et
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
