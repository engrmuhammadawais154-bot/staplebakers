"use client";

import React, { useState } from 'react';
import { useCart } from './CartProvider';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../data/products';
import { motion } from 'framer-motion';

export default function ProductCard({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<'500g' | '1000g'>('500g');
  const { addToCart } = useCart();
  
  const currentPrice = selectedSize === '500g' ? product.price500 : product.price1000;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating if the button is within a link area, though here it's separate.
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
    <motion.div 
      className="product-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <Link href={`/product/${product.id}`} style={{textDecoration: 'none', color: 'inherit', flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
        <div className="product-image-wrap">
          <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 320px" style={{ objectFit: 'cover' }} className="product-image" />
        </div>
        <div className="product-info" style={{paddingBottom: 0}}>
          <h3 className="product-title">{product.name}</h3>
          <p className="product-desc">{product.desc}</p>
        </div>
      </Link>
      
      <div className="product-info" style={{paddingTop: '0.5rem', flexGrow: 0}}>
        <div className="size-selector">
          <button 
            className={`size-btn ${selectedSize === '500g' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setSelectedSize('500g'); }}
          >
            500g
          </button>
          <button 
            className={`size-btn ${selectedSize === '1000g' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); setSelectedSize('1000g'); }}
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
    </motion.div>
  );
}
