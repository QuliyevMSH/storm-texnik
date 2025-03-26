
import { Star, ShieldCheck, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center parallax"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="section-title text-white">Haqqımızda</h2>
          <p className="section-subtitle text-gray-300">
            Ştorm 2022-ci ildən bəri yüksək keyfiyyətli avtomobil yuma və təmir xidmətləri göstərir. Peşəkar komandamız və müasir avadanlıqlarımızla biz müştərilərimizə ən yaxşı xidməti təqdim edirik.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
            <div className="flex items-center justify-center w-16 h-16 bg-storm-600/20 rounded-xl mb-6 mx-auto">
              <Star className="h-8 w-8 text-storm-400" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Premium Xidmət</h3>
            <p className="text-gray-300 text-center">
              Müştərilərimizə ən yüksək keyfiyyətli xidmət göstərmək məqsədimizdir. Biz hər bir avtomobilə xüsusi diqqət göstəririk.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
            <div className="flex items-center justify-center w-16 h-16 bg-storm-600/20 rounded-xl mb-6 mx-auto">
              <Users className="h-8 w-8 text-storm-400" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Peşəkar Komanda</h3>
            <p className="text-gray-300 text-center">
              Təcrübəli komandamız ən son texnologiyalar və metodlarla işləyir. Bizim mütəxəssislərimiz avtomobilinizə ən yaxşı qayğını göstərəcək.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
            <div className="flex items-center justify-center w-16 h-16 bg-storm-600/20 rounded-xl mb-6 mx-auto">
              <ShieldCheck className="h-8 w-8 text-storm-400" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Keyfiyyət Zəmanəti</h3>
            <p className="text-gray-300 text-center">
              Göstərdiyimiz bütün xidmətlərə zəmanət veririk. Əgər nəticədən məmnun qalmasanız, problemi dərhal həll edəcəyik.
            </p>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
            <h4 className="text-3xl font-bold text-storm-400 mb-2">10+</h4>
            <p className="text-gray-300">İllik Təcrübə</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
            <h4 className="text-3xl font-bold text-storm-400 mb-2">5+</h4>
            <p className="text-gray-300">Peşəkar Mütəxəssis</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
            <h4 className="text-3xl font-bold text-storm-400 mb-2">100+</h4>
            <p className="text-gray-300">Məmnun Müştəri</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
            <h4 className="text-3xl font-bold text-storm-400 mb-2">100+</h4>
            <p className="text-gray-300">Tamamlanmış İş</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
