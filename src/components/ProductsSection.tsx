import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductsSectionProps {
  products: Product[];
  onAddToCart: (product: Product, color: string, size: string) => void;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products, onAddToCart }) => {
  return (
    <section id="products" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
            Nasza kolekcja
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Każda para została zaprojektowana z użyciem zrównoważonych materiałów 
            i wykonana z myślą o długotrwałym komforcie. Jakość, którą czujesz i wartości, którym ufasz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fadeIn h-full"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'both' }}
            >
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;