import React, { useEffect, useState } from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

const Hero: React.FC = () => {
  const line1 = 'Krocz naprzód';
  const line2 = 'Odpowiedzialnie';
  const totalLength = line1.length + line2.length;

  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    const typingSpeed = 80;
    const deletingSpeed = 50;

    if (!isDeleting && index < totalLength) {
      timer = window.setTimeout(() => setIndex((i) => i + 1), typingSpeed);
    } else if (!isDeleting && index === totalLength) {
      timer = window.setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && index > 0) {
      timer = window.setTimeout(() => setIndex((i) => i - 1), deletingSpeed);
    } else if (isDeleting && index === 0) {
      timer = window.setTimeout(() => setIsDeleting(false), 400);
    }

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [index, isDeleting, totalLength]);

  const firstLineCount = Math.min(index, line1.length);
  const secondLineCount = Math.max(0, Math.min(index - line1.length, line2.length));
  const firstLineText = line1.slice(0, firstLineCount);
  const secondLineText = line2.slice(0, secondLineCount);

  const caretOnFirst = !isDeleting && index <= line1.length ? true : isDeleting && index < line1.length;

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-medium mb-6">
              <Leaf size={16} className="mr-2" />
              Neutralni węglowo od pierwszego dnia
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
              <span className="inline-flex items-baseline">
                {firstLineText}
                {caretOnFirst && (
                  <span className="ml-1 inline-block w-0.5 h-8 bg-stone-900 animate-pulse align-middle"></span>
                )}
              </span>
              <span className="block text-gradient">
                {secondLineText}
                {!caretOnFirst && index > line1.length && (
                  <span className="ml-1 inline-block w-0.5 h-8 bg-emerald-600 animate-pulse align-middle"></span>
                )}
              </span>
            </h1>
            
            <p className="text-xl text-stone-600 mb-8 leading-relaxed max-w-2xl">
              Premiumowe obuwie tworzone z odnawialnych materiałów. 
              Doświadcz wyjątkowego komfortu i pozytywnego wpływu na planetę.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#products"
                className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Zobacz kolekcję
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="#about"
                className="inline-flex items-center px-8 py-4 bg-white text-stone-900 font-semibold rounded-full hover:bg-stone-50 transition-all duration-300 border-2 border-stone-200 hover:border-stone-300"
              >
                Nasza historia
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Styl życia zrównoważonego obuwia"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-100 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-stone-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;