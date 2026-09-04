"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from './CartProvider';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, toggleCart, isCartOpen, items, updateQuantity, removeFromCart, cartTotal } = useCart();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const handleCheckout = () => {
    if (items.length === 0) return;
    
    // Generate WhatsApp Message
    let message = "Hi Staple Bakers! I would like to place an order:\n\n";
    items.forEach(item => {
      message += `- ${item.quantity}x ${item.name} (${item.size}) - Rs ${item.price * item.quantity}\n`;
    });
    message += `\n*Total: Rs ${cartTotal}*`;
    
    const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <header className="header">
        <div className="container nav-container">
          <Link href="/" className="logo">
            <img src="/staple bakers-04.png" alt="Staple Bakers Logo" />
          </Link>
          
          <nav className={`nav-links-wrap ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
              <li><Link href="#menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</Link></li>
              <li><Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link></li>
              <li><Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <button className="cart-btn" onClick={toggleCart} aria-label="Toggle Cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            
            <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen ? (
                  <><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></>
                ) : (
                  <><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Cart Drawer */}
      <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={toggleCart}></div>
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart" onClick={toggleCart}>✕</button>
        </div>
        
        <div className="cart-items">
          {items.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p className="cart-item-size">{item.size}</p>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <span className="cart-item-price">Rs {item.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>Rs {cartTotal}</span>
            </div>
            <button className="btn btn-primary checkout-btn" onClick={handleCheckout}>
              Order via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
