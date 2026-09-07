"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from './CartProvider';
import { Home, Coffee, ShoppingBag, Phone } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { cartCount, toggleCart } = useCart();

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Menu', href: '/#menu', icon: Coffee },
    { label: 'Contact', href: '/#contact', icon: Phone },
  ];

  return (
    <nav className="mobile-bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
        
        return (
          <Link href={item.href} key={item.label} className={`bottom-nav-item ${isActive ? 'active' : ''}`}>
            <Icon size={24} strokeWidth={isActive ? 2 : 1.5} />
            <span>{item.label}</span>
          </Link>
        );
      })}
      
      <button className="bottom-nav-item" onClick={toggleCart} aria-label="Cart">
        <div className="bottom-nav-cart-icon">
          <ShoppingBag size={24} strokeWidth={1.5} />
          {cartCount > 0 && (
            <span className="bottom-nav-badge">{cartCount}</span>
          )}
        </div>
        <span>Cart</span>
      </button>
    </nav>
  );
}
