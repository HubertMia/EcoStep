import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
const LifestyleSection = lazy(() => import('./components/LifestyleSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ReviewsSection = lazy(() => import('./components/ReviewsSection'));
import Cart from './components/Cart';
import Footer from './components/Footer';
import { useCart } from './hooks/useCart';
import { products } from './data/products';
import { reviews } from './data/reviews';

function App() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen
  } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main id="main" className="pt-16">
        <Hero />
        <ProductsSection 
          products={products}
          onAddToCart={addToCart}
        />
        <Suspense fallback={<section className="py-20" aria-busy="true" aria-live="polite"></section>}>
          <LifestyleSection />
          <AboutSection />
          <ReviewsSection reviews={reviews} />
        </Suspense>
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
}

export default App;