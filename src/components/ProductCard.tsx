import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { formatCurrency } from '../utils/format';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, color: string, size: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const defaultSelectedSize = product.sizes[Math.floor(product.sizes.length / 2)] || product.sizes[0];
  const [selectedSize, setSelectedSize] = useState(defaultSelectedSize);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, selectedColor, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {product.originalPrice && (
          <div className="absolute top-6 left-6 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            Oszczędzasz {formatCurrency(product.originalPrice - product.price)}
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-stone-900 mb-3">{product.name}</h3>
        <p className="text-stone-600 mb-6 leading-relaxed">{product.description}</p>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 2).map((feature, index) => (
              <span
                key={index}
                className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-stone-700 mb-3">Kolor</label>
          <div className="flex gap-2 flex-wrap">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 font-medium ${
                  selectedColor === color
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
                aria-pressed={selectedColor === color}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-stone-700 mb-3">Rozmiar</label>
          <div className="grid grid-cols-3 gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-2.5 text-sm rounded-xl transition-all duration-200 font-medium ${
                  selectedSize === size
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
                aria-pressed={selectedSize === size}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price and Add to Cart */}
        <div className="mt-auto pt-2 flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="text-2xl font-bold text-stone-900">{formatCurrency(product.price)}</span>
            {product.originalPrice && (
              <span className="text-stone-500 line-through ml-2 text-base">{formatCurrency(product.originalPrice)}</span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
              isAdded
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-stone-900 text-white hover:bg-emerald-600 shadow-lg hover:shadow-xl'
            }`}
            aria-label="Dodaj do koszyka"
          >
            {isAdded ? (
              <>
                <Check size={18} className="mr-2" />
                Dodano
              </>
            ) : (
              <>
                <Plus size={18} className="mr-2" />
                Dodaj do koszyka
              </>
            )}
          </button>
        </div>
        <span className="sr-only" aria-live="polite">{isAdded ? 'Dodano do koszyka' : ''}</span>
      </div>
    </div>
  );
};

export default ProductCard;