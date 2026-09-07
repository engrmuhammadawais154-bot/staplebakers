"use client";

import React, { useState } from 'react';
import { useCart } from '../../../components/CartProvider';
import { Product } from '../../../data/products';
import { motion, AnimatePresence } from 'framer-motion';

export default function AddToCartDetail({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<'500g' | '1000g'>('500g');
  const { addToCart } = useCart();
  
  const currentPrice = selectedSize === '500g' ? product.price500 : product.price1000;

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${selectedSize}`,
      productId: product.id,
      name: product.name,
      size: selectedSize,
      price: currentPrice,
      quantity: 1,
      image: product.image
    });
  };

  return (
    <div className="pdp-add-to-cart-section">
      <div className="pdp-size-selector">
        <h4 style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>Select Size</h4>
        <div className="size-selector">
          <button 
            className={`size-btn ${selectedSize === '500g' ? 'active' : ''}`}
            onClick={() => setSelectedSize('500g')}
            style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', transition: 'all 0.3s ease' }}
          >
            500g
          </button>
          <button 
            className={`size-btn ${selectedSize === '1000g' ? 'active' : ''}`}
            onClick={() => setSelectedSize('1000g')}
            style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', transition: 'all 0.3s ease' }}
          >
            1000g
          </button>
        </div>
      </div>

      <div className="pdp-action-bar" style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Total Price</span>
          <AnimatePresence mode="wait">
            <motion.span 
              key={currentPrice}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="pdp-price"
              style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--color-text)' }}
            >
              Rs {currentPrice}
            </motion.span>
          </AnimatePresence>
        </div>
        
        <motion.button 
          className="btn btn-primary pdp-btn" 
          onClick={handleAddToCart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}
        >
          Add to Order
        </motion.button>
      </div>
    </div>
  );
}
