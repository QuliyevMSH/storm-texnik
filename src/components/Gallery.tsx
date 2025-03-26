
import { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "https://i.pinimg.com/736x/a7/50/1c/a7501cc591d0d3a8c7ba4e856fa1ffa8.jpg",
    alt: "Car detailing - polishing"
  },
  {
    src: "https://i.pinimg.com/736x/39/3c/44/393c44ea2f5feba4b985d7f87b323f30.jpg",
    alt: "Car washing"
  },
  {
    src: "https://i.pinimg.com/736x/3b/55/3c/3b553c431e1e9efe7619d5b2ebf18c9d.jpg",
    alt: "Car interior detailingssss"
  },
  {
    src: "https://i.pinimg.com/736x/e3/92/31/e3923180dfbab7d3664c57ed88f2d3fb.jpg",
    alt: "Car mechanical repair"
  },
  {
    src: "https://i.pinimg.com/736x/5c/5e/ae/5c5eaef1bbbead698d4d4bee552705fa.jpg",
    alt: "Tire service"
  },
  {
    src: "https://i.pinimg.com/736x/0e/d1/f9/0ed1f9f0d6cfd853ae3e89f6afe7658d.jpg",
    alt: "Engine repair"
  }
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-12 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold mb-2 sm:mb-6 text-gray-900">Qalereya</h2>
          <p className="text-xs sm:text-base section-subtitle mb-6 sm:mb-12">
            İşimizin keyfiyyətini görmək üçün son görülən işlərdən nümunələr ilə tanış olun. Hər bir detalın diqqətlə işləndiyini görəcəksiniz.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mt-6 sm:mt-12">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="cursor-pointer overflow-hidden rounded-lg sm:rounded-xl group opacity-0 animate-slide-up" 
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white text-xs sm:text-sm font-medium">Böyüt</span>
                    </div>
                  </AspectRatio>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-contain max-h-[80vh]"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                    onClick={() => setSelectedImageIndex(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
