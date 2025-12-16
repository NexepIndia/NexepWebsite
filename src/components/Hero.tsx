import { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, Globe, Target, Shield } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Our Purpose",
      text: '"Together, we pioneer bold, sustainable innovations that safeguard our planet, protect every life, and elevate human thriving—forging unbreakable partnerships for profound impact and a thriving future."',
      color: "text-amber-400",
      bgColor: "from-amber-500/20 via-amber-500/5 to-transparent",
      borderColor: "border-amber-500/30",
      icon: Target, // Changed to common icon
    },
    {
      title: "Our Vision",
      text: '"To lead in creating sustainable growth alongside our customers, delivering innovative solutions that drive environmental responsibility, Safe Atmosphere & operational efficiency, and shared success for a cleaner, more resilient future."',
      color: "text-emerald-400",
      bgColor: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      borderColor: "border-emerald-500/30",
      icon: Globe, // Changed to common icon
    },
    {
      title: "Our Mission",
      text: '"To empower organizations worldwide with groundbreaking innovations that amplify their ESG impact—delivering scalable, resilient solutions in environmental restoration, social equity, and ethical governance, through agile collaboration and relentless ingenuity."',
      color: "text-cyan-400",
      bgColor: "from-cyan-500/20 via-cyan-500/5 to-transparent",
      borderColor: "border-cyan-500/30",
      icon: Shield, // Changed to common icon
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  const CurrentIcon = slides[currentSlide].icon;

  return (
    // Added z-0 to base container
    <div className="relative z-0 bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 text-white min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* Background decoration - Pointer events none ensures clicks pass through */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content Container - z-10 ensures it sits on top */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-green-100">
            Driving Sustainable Impact Through Next-Gen Engineering Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100/80 leading-relaxed font-light">
            Nexep India Pvt Ltd delivers cutting-edge automation, control systems, and instrumentation solutions for the process industries
          </p>
          
          {/* Buttons - Explicitly clickable */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <button
              onClick={() => onNavigate('products')}
              className="cursor-pointer group inline-flex items-center justify-center px-8 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg shadow-blue-900/20"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="cursor-pointer inline-flex items-center justify-center px-8 py-3 bg-transparent text-white rounded-full font-bold hover:bg-white/10 transition-colors border-2 border-white/30 backdrop-blur-sm"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Slider Card */}
        <div className="mt-12 relative max-w-5xl mx-auto perspective-1000">
          <div 
            className={`relative backdrop-blur-xl rounded-3xl p-8 md:p-14 border transition-all duration-700 ease-in-out shadow-2xl overflow-hidden
              bg-gradient-to-br ${slides[currentSlide].bgColor} ${slides[currentSlide].borderColor}
            `}
            style={{ minHeight: '320px' }}
          >
            {/* Background Icon */}
            <div className="absolute -right-10 -bottom-10 transition-all duration-700 transform rotate-12 opacity-100 pointer-events-none">
               <CurrentIcon className={`w-64 h-64 opacity-20 text-white`} />
            </div>

            <div key={currentSlide} className="relative z-10 flex flex-col justify-center items-center h-full animate-[fadeInUp_0.7s_ease-out]">
              <div className="flex items-center gap-2 mb-6">
                 <CurrentIcon className={`w-6 h-6 ${slides[currentSlide].color}`} />
                 <h3 className={`font-bold tracking-[0.2em] uppercase text-sm md:text-base ${slides[currentSlide].color}`}>
                  {slides[currentSlide].title}
                </h3>
              </div>
              <p className="text-xl md:text-3xl font-light italic leading-relaxed text-white/90 text-center mb-10 drop-shadow-md">
                {slides[currentSlide].text}
              </p>
              <button 
                onClick={() => onNavigate('core-values')}
                className="cursor-pointer group inline-flex items-center text-sm font-semibold text-white/70 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-6 py-2 rounded-full border border-white/10 hover:border-white/30"
              >
                About our core values
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    index === currentSlide ? `w-8 bg-white` : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}