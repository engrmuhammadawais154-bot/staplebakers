"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from './CartProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Plus, Minus, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, toggleCart, isCartOpen, items, updateQuantity, cartTotal } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const handleCheckout = () => {
    if (items.length === 0) return;
    
    let message = "Hi Staple Bakers! I would like to place an order:\n\n";
    items.forEach(item => {
      message += `- ${item.quantity}x ${item.name} (${item.size}) - Rs ${item.price * item.quantity}\n`;
    });
    message += `\n*Total: Rs ${cartTotal}*`;
    
    const whatsappUrl = `https://wa.me/923209739217?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link href="/" className="logo">
            <img src="/staple bakers-04.png" alt="Staple Bakers Logo" />
          </Link>
          
          <nav className="nav-links-wrap desktop-only">
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#menu">Menu</Link></li>
              <li><Link href="#about">Our Story</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <button className="cart-btn" onClick={toggleCart} aria-label="Toggle Cart">
              <ShoppingBag size={22} strokeWidth={1.5} />
              {cartCount > 0 && (
                <motion.span 
                  className="cart-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={cartCount}
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
            
            <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Menu" style={{ zIndex: 1002 }}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(252, 251, 249, 0.95)',
              zIndex: 1001,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem'
            }}
          >
            <motion.ul 
              style={{ listStyle: 'none', textAlign: 'center', gap: '2.5rem', display: 'flex', flexDirection: 'column' }}
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
            >
              {[
                { label: 'Home', href: '/' },
                { label: 'Menu', href: '#menu' },
                { label: 'Our Story', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link, i) => (
                <motion.li 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                  }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--color-text)', textDecoration: 'none', letterSpacing: '-0.02em' }}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div 
              style={{ marginTop: 'auto', textAlign: 'center' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <img src="/staple bakers-04.png" alt="Staple Bakers" style={{ height: '40px', opacity: 0.5 }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              className="cart-overlay open" 
              onClick={toggleCart}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div 
              className="cart-drawer open"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{ transform: 'none' }} // Override native css transform
            >
              <div className="cart-header">
                <h2>Your Cart</h2>
                <button className="close-cart" onClick={toggleCart}>
                  <X size={24} />
                </button>
              </div>
              
              <div className="cart-items">
                {items.length === 0 ? (
                  <motion.div 
                    className="empty-cart"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <ShoppingBag size={48} strokeWidth={1} style={{ opacity: 0.2, margin: '0 auto 1rem' }} />
                    <p>Your cart is empty.</p>
                  </motion.div>
                ) : (
                  <AnimatePresence>
                    {items.map((item, i) => (
                      <motion.div 
                        key={item.id} 
                        className="cart-item"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                          <h4>{item.name}</h4>
                          <p className="cart-item-size">{item.size}</p>
                          <div className="cart-item-actions">
                            <div className="quantity-controls">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                <Minus size={14} />
                              </button>
                              <span>{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                <Plus size={14} />
                              </button>
                            </div>
                            <span className="cart-item-price">Rs {item.price * item.quantity}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>
              
              {items.length > 0 && (
                <motion.div 
                  className="cart-footer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <div className="cart-total">
                    <span>Total</span>
                    <span>Rs {cartTotal}</span>
                  </div>
                  <button className="btn btn-primary checkout-btn" onClick={handleCheckout}>
                    Order via WhatsApp <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                  </button>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
