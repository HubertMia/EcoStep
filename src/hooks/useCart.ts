import { useState, useEffect } from 'react';
import { CartItem, Product } from '../types';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem('cartItems');
      const parsed = raw ? JSON.parse(raw) : null;
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product, selectedColor: string, selectedSize: string) => {
    setCartItems(prev => {
      const existingItem = prev.find(
        item => item.id === product.id && 
        item.selectedColor === selectedColor && 
        item.selectedSize === selectedSize
      );

      if (existingItem) {
        return prev.map(item =>
          item.id === product.id && 
          item.selectedColor === selectedColor && 
          item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { 
        ...product, 
        quantity: 1, 
        selectedColor, 
        selectedSize 
      }];
    });
  };

  const removeFromCart = (id: string, selectedColor: string, selectedSize: string) => {
    setCartItems(prev => prev.filter(
      item => !(item.id === id && item.selectedColor === selectedColor && item.selectedSize === selectedSize)
    ));
  };

  const updateQuantity = (id: string, selectedColor: string, selectedSize: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, selectedColor, selectedSize);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.selectedColor === selectedColor && item.selectedSize === selectedSize
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getTotalItems = () => cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const getTotalPrice = () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen
  };
};