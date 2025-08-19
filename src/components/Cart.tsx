import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { formatCurrency } from '../utils/format';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, color: string, size: string, quantity: number) => void;
  onRemoveItem: (id: string, color: string, size: string) => void;
  totalPrice: number;
}

const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  totalPrice
}) => {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = (document.activeElement as HTMLElement) || null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab') {
        const dialog = panelRef.current;
        if (!dialog) return;
        const focusables = dialog.querySelectorAll<HTMLElement>(
          'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey) {
          if (active === first || !dialog.contains(active)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (active === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // focus first interactive element
    requestAnimationFrame(() => {
      const dialog = panelRef.current;
      if (!dialog) return;
      const focusables = dialog.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables[0]) focusables[0].focus();
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      
      {/* Cart Panel */}
      <div
        ref={panelRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 id="cart-title" className="text-xl font-bold text-stone-900">Twój koszyk</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              aria-label="Zamknij koszyk"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-stone-300 mb-4" />
                <h3 className="text-lg font-medium text-stone-900 mb-2">Twój koszyk jest pusty</h3>
                <p className="text-stone-600">Dodaj produkty, aby rozpocząć.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-stone-900">{item.name}</h3>
                      <p className="text-sm text-stone-600">{item.selectedColor} • Rozmiar {item.selectedSize}</p>
                      <p className="text-lg font-bold text-stone-900">{formatCurrency(item.price)}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center mt-2 space-x-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-stone-300 rounded-full hover:bg-stone-100"
                          aria-label="Zmniejsz ilość"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-stone-300 rounded-full hover:bg-stone-100"
                          aria-label="Zwiększ ilość"
                        >
                          <Plus size={16} />
                        </button>
                        <button
                          onClick={() => onRemoveItem(item.id, item.selectedColor, item.selectedSize)}
                          className="ml-4 text-red-500 hover:text-red-700 text-sm"
                        >
                          Usuń
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Checkout Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Suma:</span>
                <span className="text-2xl font-bold text-emerald-600">{formatCurrency(totalPrice)}</span>
              </div>
              <button className="w-full bg-emerald-600 text-white py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors">
                Przejdź do kasy
              </button>
              <p className="text-center text-sm text-stone-600 mt-2">
                Darmowa dostawa od 75$
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;