import Link from "next/link";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Butter Biscuits",
      desc: "Rich, melt-in-your-mouth classic butter biscuits baked to golden perfection.",
      price500: "Rs 1000",
      price1000: "Rs 2000",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Lotus Biscuits",
      desc: "Deliciously crisp biscuits infused with the unique caramelized taste of Lotus Biscoff.",
      price500: "Rs 1000",
      price1000: "Rs 2000",
      image: "https://images.unsplash.com/photo-1606041011872-596590462066?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Choco Biscuits",
      desc: "Decadent chocolate biscuits packed with rich cocoa flavor for the ultimate treat.",
      price500: "Rs 1000",
      price1000: "Rs 2000",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop"
    }
  ];

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
            <img src="/staple bakers-02.png" alt="Staple Bakers Logo" style={{ objectFit: 'contain' }} />
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
              <div key={product.id} className="product-card">
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>
                  
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '0.85rem', background: 'rgba(11,16,33,0.05)', padding: '4px 8px', borderRadius: '4px', fontWeight: '500' }}>
                      500g: {product.price500}
                    </span>
                    <span style={{ fontSize: '0.85rem', background: 'rgba(11,16,33,0.05)', padding: '4px 8px', borderRadius: '4px', fontWeight: '500' }}>
                      1000g: {product.price1000}
                    </span>
                  </div>

                  <div className="product-footer">
                    <span className="product-price">From {product.price500}</span>
                    <button className="btn btn-accent" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Add to Order</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
            <Link href="#menu" className="btn btn-outline">View Full Menu</Link>
          </div>
        </div>
      </section>
    </>
  );
}
