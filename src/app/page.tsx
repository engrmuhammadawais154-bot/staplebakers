"use client";

import Link from "next/link";
import Image from "next/image";
import ProductCard from "../components/ProductCard";
import { products as featuredProducts } from "../data/products";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <motion.div 
            className="hero-content"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1 variants={fadeUp} className="hero-title">
              Your daily <span>staple</span> for extraordinary bakes.
            </motion.h1>
            <motion.p variants={fadeUp} className="hero-subtitle">
              We believe every moment deserves a masterpiece. Discover our handcrafted selection of premium, freshly baked biscuits.
            </motion.p>
            <motion.div variants={fadeUp} className="hero-actions">
              <Link href="#menu" className="btn btn-primary">View Menu</Link>
              <Link href="#about" className="btn btn-outline">Our Story</Link>
            </motion.div>
          </motion.div>
          <div className="hero-image">
            <Image src="/mascot-02.png" alt="Staple Bakers Baker Mascot" width={600} height={600} style={{ objectFit: 'contain' }} priority />
          </div>
        </div>
      </section>

      <section id="menu" className="featured">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <h2>Our Signature Biscuits</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
              Baked fresh daily using only the finest ingredients. Available in convenient 500g and 1000g pouches.
            </p>
          </motion.div>
          
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <motion.div 
            style={{ display: 'flex', justifyContent: 'center', marginTop: '7rem', marginBottom: '2rem' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div style={{ textAlign: 'center', maxWidth: '400px' }}>
              <Image src="/mascot-01.png" alt="Sleeping Mascot" width={250} height={250} style={{ objectFit: 'contain', opacity: 0.9 }} />
              <h3 style={{ marginTop: '1.5rem', color: 'var(--color-text)', letterSpacing: '-0.01em' }}>Dreaming of the perfect bite?</h3>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="about" style={{ padding: 'var(--spacing-xxl) 0', backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
          <motion.div 
            style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <Image src="/mascot-03.png" alt="Mascot with Cupcake" width={380} height={380} style={{ objectFit: 'contain' }} />
          </motion.div>
          <motion.div 
            style={{ flex: 1, minWidth: '300px' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <h2 style={{ color: 'var(--color-bg)' }}>Our Story</h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(252, 251, 249, 0.8)', lineHeight: 1.8 }}>
              Born from a passion for perfect bakes, Staple Bakers started in a small home kitchen. 
              We spent years perfecting our biscuit recipes, ensuring every bite delivers that nostalgic, 
              melt-in-your-mouth experience. Today, we bring our handcrafted, premium biscuits straight 
              to your doorstep. No shortcuts, just pure, honest ingredients and a whole lot of love.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="contact" style={{ padding: 'var(--spacing-xxl) 0', textAlign: 'center' }}>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <h2>Get In Touch</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
              Have a special request or wholesale inquiry? We'd love to hear from you.
            </p>
          </motion.div>
          <motion.div 
            style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', marginTop: 'var(--spacing-lg)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <a href="mailto:hello@staplebakers.com" className="btn btn-outline">Email Us</a>
            <a href="https://wa.me/923209739217" target="_blank" className="btn btn-primary">WhatsApp Us</a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
