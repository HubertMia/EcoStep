import React from 'react';
import { Star, Shield, Heart } from 'lucide-react';
import { Review } from '../types';

interface ReviewsSectionProps {
  reviews: Review[];
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-stone-300'}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
            Uwielbiane przez klientów
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="flex mr-4">
              {renderStars(5)}
            </div>
            <span className="text-xl text-stone-600">4.8/5 na podstawie 10 000+ opinii</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-stone-50 p-8 rounded-2xl opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="flex items-center mb-1">
                    <h3 className="font-semibold text-stone-900 mr-2">{review.name}</h3>
                    {review.verified && (
                      <Shield size={16} className="text-emerald-600" />
                    )}
                  </div>
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-stone-700 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <Shield size={24} className="text-emerald-600 mr-2" />
              <span className="text-stone-700">Zweryfikowane opinie</span>
            </div>
            <div className="flex items-center justify-center">
              <Star size={24} className="text-yellow-400 fill-current mr-2" />
              <span className="text-stone-700">Zwroty do 30 dni</span>
            </div>
            <div className="flex items-center justify-center">
              <Heart size={24} className="text-red-500 fill-current mr-2" />
              <span className="text-stone-700">Gwarancja 2 lata</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;