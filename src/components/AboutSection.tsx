import React from 'react';
import { Leaf, Recycle, Award, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Zrównoważone materiały',
      description: 'Każda para powstaje z materiałów odnawialnych, recyklingowanych i biopochodnych, ograniczając wpływ na środowisko.'
    },
    {
      icon: Recycle,
      title: 'Neutralność węglowa',
      description: 'Neutralizujemy 100% naszego śladu węglowego dzięki zweryfikowanym projektom środowiskowym i odnawialnej energii.'
    },
    {
      icon: Award,
      title: 'Wysoka jakość',
      description: 'Rygorystycznie testowane pod kątem trwałości, komfortu i wydajności w każdych warunkach.'
    },
    {
      icon: Heart,
      title: 'Etyczna produkcja',
      description: 'Godne wynagrodzenie, bezpieczne warunki pracy i współpraca z certyfikowanymi dostawcami.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
            Lepsze dla Ciebie,
            <span className="block text-gradient">Lepsze dla Ziemi</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
            Wierzymy, że świetne buty nie powinny kosztować Ziemi. Dlatego na nowo wymyśliliśmy 
            obuwie od podstaw, korzystając z innowacyjnych materiałów i zrównoważonych praktyk, 
            by w każdym kroku łączyć komfort z troską o środowisko.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 text-center animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon size={32} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">{value.title}</h3>
              <p className="text-stone-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
          <h3 className="text-3xl font-bold text-stone-900 mb-12">Nasz wpływ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="animate-fadeIn" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              <div className="text-5xl font-bold text-emerald-600 mb-3">2.5M+</div>
              <div className="text-stone-600 text-lg">Butelki z plastiku poddane recyklingowi</div>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
              <div className="text-5xl font-bold text-emerald-600 mb-3">100%</div>
              <div className="text-stone-600 text-lg">Neutralna węglowo wysyłka</div>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
              <div className="text-5xl font-bold text-emerald-600 mb-3">50K+</div>
              <div className="text-stone-600 text-lg">Zadowoleni klienci</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;