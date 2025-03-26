import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Contact = () => {
  const isMobile = useIsMobile();

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6 text-gray-900">
            Əlaqə
          </h2>
          <p className="text-sm sm:text-base section-subtitle">
            Suallarınız varsa və ya xidmətlərimiz haqqında ətraflı məlumat almaq
            istəyirsinizsə, bizimlə əlaqə saxlayın. Sizə kömək etməkdən məmnun
            olarıq.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-8 sm:mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-5 sm:p-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-20 sm:h-20 bg-storm-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Phone className="h-7 w-7 sm:h-10 sm:w-10 text-storm-600" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              WhatsApp ilə birbaşa əlaqə
            </h3>

            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-lg">
              Növbə rezervasiyası, qiymət sorğusu və ya ümumi məlumat üçün
              WhatsApp vasitəsilə bizimlə əlaqə saxlayın. Tezliklə sizə cavab
              verəcəyik.
            </p>

            <Button
              asChild
              className="btn-primary w-full max-w-md text-sm sm:text-base py-4 sm:py-6"
            >
              <a
                href="https://wa.me/+994507869455"
                className="flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                +994 50 786 94 55 - Teymurxan
              </a>
            </Button>
          </div>

          <div className="bg-gray-50 p-5 sm:p-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-storm-100 flex items-center justify-center">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-storm-600" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-lg font-medium text-gray-900">
                    Ünvan
                  </h3>
                  <p className="text-xs sm:text-base text-gray-600 mt-1">
                    Beyləqan rayonu - PMK, Füzuli yolu <br /> `Dost Qapısı`
                    restoranının arxası
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-storm-100 flex items-center justify-center">
                  <Phone
                    size={16}
                    className="h-4 w-4 sm:h-5 sm:w-5 text-storm-600"
                  />
                </div>
                <div>
                  <h3 className="text-sm sm:text-lg font-medium text-gray-900">
                    Telefon
                  </h3>
                  <p className="text-xs sm:text-base text-gray-600 mt-1">
                    <a
                      href="tel:+994507869455"
                      className="flex items-center text-storm-600 text-xs lg:text-sm font-medium"
                    >
                      <span>+994 50 786 94 55</span>
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-storm-100 flex items-center justify-center">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-storm-600" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-lg font-medium text-gray-900">
                    İş saatları
                  </h3>
                  <div className="text-xs sm:text-base text-gray-600 mt-1">
                    <p>Hər gün:</p>
                    <p>9:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
