"use client";

import React, { useState } from 'react';
import { useCart } from '../../../components/CartProvider';
import { Product } from '../../../data/products';

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
        <h4>Select Size</h4>
        <div className="size-selector">
          <button 
            className={`size-btn ${selectedSize === '500g' ? 'active' : ''}`}
            onClick={() => setSelectedSize('500g')}
          >
            500g
          </button>
          <button 
            className={`size-btn ${selectedSize === '1000g' ? 'active' : ''}`}
            onClick={() => setSelectedSize('1000g')}
          >
            1000g
          </button>
        </div>
      </div>

      <div className="pdp-action-bar">
        <span className="pdp-price">Rs {currentPrice}</span>
        <button className="btn btn-primary pdp-btn" onClick={handleAddToCart}>
          Add to Order
        </button>
      </div>
    </div>
  );
}
