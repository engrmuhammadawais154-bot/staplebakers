import Link from "next/link";
import Image from "next/image";
import ProductCard from "../components/ProductCard";
import { products as featuredProducts } from "../data/products";

export default function Home() {

  return (
    <>
      <section className="hero">
        <div className="container hero-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div className="hero-content">
            <h1 className="hero-title">Your daily <span>staple</span> for extraordinary bakes.</h1>
            <p className="hero-subtitle">
              We believe every moment deserves a masterpiece. Discover our handcrafted selection of premium, freshly baked biscuits.
            </p>
            <div className="hero-actions">
              <Link href="#menu" className="btn btn-primary">View Menu</Link>
              <Link href="#about" className="btn btn-outline">Our Story</Link>
            </div>
          </div>
          <div className="hero-image">
            <Image src="/mascot-02.png" alt="Staple Bakers Baker Mascot" width={500} height={500} style={{ objectFit: 'contain' }} priority />
          </div>
        </div>
      </section>

      <section id="menu" className="featured">
        <div className="container">
          <div className="section-header">
            <h2>Our Signature Biscuits</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-navy-light)' }}>
              Baked fresh daily using only the finest ingredients. Available in convenient 500g and 1000g pouches.
            </p>
          </div>
          
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
            <div style={{ textAlign: 'center', maxWidth: '400px' }}>
              <Image src="/mascot-01.png" alt="Sleeping Mascot" width={250} height={250} style={{ objectFit: 'contain', opacity: 0.9 }} />
              <h3 style={{ marginTop: '1.5rem', color: 'var(--color-navy)' }}>Dreaming of the perfect bite?</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
            <Image src="/mascot-03.png" alt="Mascot with Cupcake" width={350} height={350} style={{ objectFit: 'contain' }} />
          </div>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2>Our Story</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
              Born from a passion for perfect bakes, Staple Bakers started in a small home kitchen. 
              We spent years perfecting our biscuit recipes, ensuring every bite delivers that nostalgic, 
              melt-in-your-mouth experience. Today, we bring our handcrafted, premium biscuits straight 
              to your doorstep. No shortcuts, just pure, honest ingredients and a whole lot of love.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-navy-light)' }}>
              Have a special request or wholesale inquiry? We'd love to hear from you.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', marginTop: 'var(--spacing-lg)' }}>
            <a href="mailto:hello@staplebakers.com" className="btn btn-outline">Email Us</a>
            <a href="https://wa.me/923209739217" target="_blank" className="btn btn-primary">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
