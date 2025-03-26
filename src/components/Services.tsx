
import { Car, Droplets, Wrench, SprayCan, Wind, Settings, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Droplets className="h-10 w-10 text-storm-600" />,
    title: "Premium Avtoyuma",
    description: "Yüksək keyfiyyətli şampun və kimyəvi məhsullarla avtomobilinizi təmizləyirik.",
    time: "30 - 120 dəqiqə"
  },
  {
    icon: <SprayCan className="h-10 w-10 text-storm-600" />,
    title: "Detayling",
    description: "Avtomobilinizin hər bir detayına diqqət yetirərək mükəmməl təmizlik təmin edirik.",
    time: "30 - 120 dəqiqə"
  },
  {
    icon: <Wind className="h-10 w-10 text-storm-600" />,
    title: "Daxili Təmizlik",
    description: "Avtomobilinizin salonunu ən kiçik detallara qədər təmizləyirik.",
    time: "1 - 3 gün"
  },
  {
    icon: <Wrench className="h-10 w-10 text-storm-600" />,
    title: "Mexaniki Təmir",
    description: "Mühərrik, transmissiya və digər mexaniki hissələrin peşəkar təmiri.",
    time: "1 - 2 gün"
  },
  {
    icon: <Settings className="h-10 w-10 text-storm-600" />,
    title: "Diaqnostika",
    description: "Ən son avadanlıqlarla avtomobilinizin tam diaqnostikası.",
    time: "2 - 5 saat"
  },
  {
    icon: <Car className="h-10 w-10 text-storm-600" />,
    title: "Poliş və Vosklama",
    description: "Avtomobilinizin parlaq və təmiz görünməsini təmin edirik.",
    time: "20 dəqiqə"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title text-gray-900">Xidmətlərimiz</h2>
          <p className="section-subtitle">
            Ştorm-da biz avtomobiliniz üçün premium xidmətlər təklif edirik. Təcrübəli komandamız avtomobilinizə lazımi qayğını göstərəcək.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-slide-up" 
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <Card className="h-full card-hover border border-gray-200">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center text-sm text-storm-600">
                    <Clock size={16} className="mr-1" />
                    <span>{service.time}</span>
                  </div>
                  <a href="#contact" className="text-sm text-storm-600 hover:text-storm-800 hover:underline">
                    Daha ətraflı →
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
