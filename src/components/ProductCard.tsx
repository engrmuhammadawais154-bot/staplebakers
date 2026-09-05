"use client";

import React, { useState } from 'react';
import { useCart } from './CartProvider';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../data/products';

export default function ProductCard({ product }: { product: Product }) {
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
    <div className="product-card">
      <Link href={`/product/${product.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
        <div className="product-image-wrap">
          <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'cover' }} className="product-image" />
        </div>
        <div className="product-info" style={{paddingBottom: 0}}>
          <h3 className="product-title">{product.name}</h3>
          <p className="product-desc">{product.desc}</p>
        </div>
      </Link>
      
      <div className="product-info" style={{paddingTop: '0.5rem'}}>
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

        <div className="product-footer">
          <span className="product-price">Rs {currentPrice}</span>
          <button className="btn btn-accent" onClick={handleAddToCart}>
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
}
