import Link from "next/link";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Classic Butter Croissant",
      desc: "Flaky, golden, and baked fresh every morning with premium European butter.",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1555507036-ab1f40ce88f4?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Artisan Sourdough Loaf",
      desc: "Naturally leavened with our 10-year-old starter for the perfect crust and crumb.",
      price: "$8.00",
      image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Almond Pain au Chocolat",
      desc: "Twice-baked chocolate croissant topped with toasted almonds and powdered sugar.",
      price: "$5.50",
      image: "https://images.unsplash.com/photo-1623910271017-76856cdae78f?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <section className="hero">
        <div className="container hero-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div className="hero-content">
            <h1 className="hero-title">Your daily <span>staple</span> for extraordinary bakes.</h1>
            <p className="hero-subtitle">
              We believe every morning deserves a masterpiece. Discover our handcrafted selection of artisanal pastries and breads.
            </p>
            <div className="hero-actions">
              <Link href="#menu" className="btn btn-primary">View Menu</Link>
              <Link href="#about" className="btn btn-outline">Our Story</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/staple bakers-02.png" alt="Staple Bakers Croissant Logo" style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      <section id="menu" className="featured">
        <div className="container">
          <div className="section-header">
            <h2>Our Signature Bakes</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-navy-light)' }}>
              Baked fresh daily using only the finest ingredients. Available for pickup or local delivery.
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
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
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
