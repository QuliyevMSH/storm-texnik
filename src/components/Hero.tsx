
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1563501942823-461eec7d4bfb?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
      </div>
      
      {/* Particles effect */}
      <Particles
        className="absolute inset-0"
        quantity={isMobile ? 50 : 100}
        ease={80}
        color="#ffffff"
        staticity={30}
      />
      
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-start text-white">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full px-2 py-1 text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-sm text-white mb-4 sm:mb-6 animate-fade-in">
            <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-storm-400 mr-1.5 sm:mr-2"></span>
            Premium Avtoyuma və Avtomobil Təmiri
          </span>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-4 sm:mb-6 animate-fade-in">
            Avtomobilinizə <span className="text-storm-400">Premium</span> Qulluq
          </h1>
          
          <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-200 max-w-xl animate-fade-in delay-200">
            Ştorm-da biz avtomobilinizə xüsusi diqqət və zəriflik göstəririk. Peşəkar komandamız ilə avtomobiliniz əvvəlkindən daha yaxşı görünəcək.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in delay-300">
            <Button asChild className="btn-primary group text-sm py-2 px-4 sm:py-3 sm:px-5">
              <a href="#services">
                Xidmətləri kəşf et
                <ArrowRight size={14} className="ml-1.5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button asChild variant="outline" className="btn-secondary text-sm py-2 px-4 sm:py-3 sm:px-5">
              <a href="https://wa.me/+994501234567">Bizimlə əlaqə</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
        <span className="text-white text-xs sm:text-sm mb-1 sm:mb-2">Aşağı sürüşdür</span>
        <div className="w-4 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
