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
      <div className="pdp-action-bar-integrated">
        <div className="pdp-price-col">
          <span className="price-label">Total</span>
          <AnimatePresence mode="wait">
            <motion.span 
              key={currentPrice}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="pdp-price-display"
            >
              Rs {currentPrice}
            </motion.span>
          </AnimatePresence>
        </div>
        
        <div className="pdp-controls-col">
          <div className="pdp-inline-size-selector">
            <button 
              className={`pdp-size-pill ${selectedSize === '500g' ? 'active' : ''}`}
              onClick={() => setSelectedSize('500g')}
            >
              500g
            </button>
            <button 
              className={`pdp-size-pill ${selectedSize === '1000g' ? 'active' : ''}`}
              onClick={() => setSelectedSize('1000g')}
            >
              1000g
            </button>
          </div>

          <motion.button 
            className="btn btn-primary pdp-add-btn" 
            onClick={handleAddToCart}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Add to Order
          </motion.button>
        </div>
      </div>
    </div>
  );
}
