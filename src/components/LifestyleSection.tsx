import React from 'react';

const LifestyleSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 leading-tight">
              Stworzone 
              <span className="block text-emerald-600">na każdą drogę</span>
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed">
              Od porannych dojazdów po weekendowe wypady — nasze buty dopasowują się do Twojego stylu życia. 
              Doświadcz wyjątkowego komfortu, który dotrzymuje kroku.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">5 000+</h3>
                <p className="text-stone-600">Przemierzonych mil</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">98%</h3>
                <p className="text-stone-600">Satysfakcji klientów</p>
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Bieganie"
                loading="lazy"
                decoding="async"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <img
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Miasto"
                loading="lazy"
                decoding="async"
                className="w-full h-48 object-cover rounded-2xl"
              />
            </div>
            <div className="space-y-4 pt-12">
              <img
                src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Praca"
                loading="lazy"
                decoding="async"
                className="w-full h-48 object-cover rounded-2xl"
              />
              <img
                src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Przygoda"
                loading="lazy"
                decoding="async"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;