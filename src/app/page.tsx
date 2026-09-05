import Link from "next/link";
import Image from "next/image";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Butter Biscuits",
      desc: "Rich, melt-in-your-mouth classic butter biscuits baked to golden perfection.",
      price500: 1000,
      price1000: 2000,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Lotus Biscuits",
      desc: "Deliciously crisp biscuits infused with the unique caramelized taste of Lotus Biscoff.",
      price500: 1000,
      price1000: 2000,
      image: "https://images.unsplash.com/photo-1606041011872-596590462066?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Choco Biscuits",
      desc: "Decadent chocolate biscuits packed with rich cocoa flavor for the ultimate treat.",
      price500: 1000,
      price1000: 2000,
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <section className="hero">
        <div className="container hero-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div className="hero-content" style={{ background: '#fff', padding: '2rem', border: 'var(--border-thick)', boxShadow: 'var(--shadow-lg)' }}>
            <h1 className="hero-title">Your daily <span style={{color: 'var(--color-accent)'}}>staple</span> for extraordinary bakes!</h1>
            <p className="hero-subtitle">
              We believe every moment deserves a masterpiece. Discover our handcrafted selection of premium, freshly baked biscuits.
            </p>
            <div className="hero-actions">
              <Link href="#menu" className="btn btn-primary">View Menu</Link>
              <Link href="#about" className="btn btn-outline">Our Story</Link>
            </div>
          </div>
          <div className="hero-image" style={{position: 'relative', zIndex: 10}}>
            <Image src="/mascot-02.png" alt="Staple Bakers Baker Mascot" width={500} height={500} style={{ objectFit: 'contain' }} priority />
          </div>
        </div>
      </section>

      <section id="menu" className="featured">
        <div className="container">
          <div className="section-header" style={{ background: '#fff', padding: '1.5rem', border: 'var(--border-thick)', display: 'inline-block', boxShadow: 'var(--shadow-md)', marginBottom: '3rem' }}>
            <h2 style={{margin: 0}}>Our Signature Biscuits</h2>
          </div>
          
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
             <div style={{ background: 'var(--color-yellow)', border: 'var(--border-thick)', padding: '2rem', borderRadius: '50%', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               <h3 style={{textAlign: 'center', marginBottom: '1rem'}}>Dreaming of a perfect bite?</h3>
               <Image src="/mascot-01.png" alt="Sleeping Mascot" width={300} height={300} style={{ objectFit: 'contain' }} />
             </div>
          </div>
        </div>
      </section>

      <section id="about" className="about" style={{ borderTop: 'var(--border-thick)', borderBottom: 'var(--border-thick)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <Image src="/mascot-03.png" alt="Mascot with Cupcake" width={400} height={400} style={{ objectFit: 'contain', filter: 'drop-shadow(8px 8px 0px rgba(0,0,0,1))' }} />
          </div>
          <div style={{ flex: 1, minWidth: '300px', background: '#fff', border: 'var(--border-thick)', padding: '2rem', color: 'var(--color-navy)', boxShadow: 'var(--shadow-lg)' }}>
            <h2 style={{color: 'var(--color-accent)'}}>Our Story</h2>
            <p>
              Born from a passion for perfect bakes, Staple Bakers started in a small home kitchen. 
              We spent years perfecting our biscuit recipes, ensuring every bite delivers that nostalgic, 
              melt-in-your-mouth experience. Today, we bring our handcrafted, premium biscuits straight 
              to your doorstep. No shortcuts, just pure, honest ingredients and a whole lot of love!
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
