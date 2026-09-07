import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById } from "../../../data/products";
import AddToCartDetail from "./AddToCartDetail";
import { ArrowLeft } from "lucide-react"; // Import Lucide icon for premium feel

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  // Use a different mascot depending on the product ID for a playful touch
  const mascotMap: Record<number, string> = {
    1: "/mascot-01.png", // Sleeping mascot for Butter Biscuits (relaxing)
    2: "/mascot-02.png", // Baker mascot for Lotus Biscuits
    3: "/mascot-03.png", // Cupcake mascot for Choco Biscuits
  };
  const mascotImg = mascotMap[product.id] || "/mascot-02.png";

  return (
    <div className="pdp-container">
      <div className="pdp-hero" style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 'var(--spacing-xl)' }}>
        <Link href="/#menu" className="btn btn-outline" style={{ display: 'inline-flex', marginBottom: '2rem', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-full)' }}>
          <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} /> Back to Menu
        </Link>
        
        <div className="pdp-split">
          <div className="pdp-image-col">
            <div className="pdp-main-image-wrap" style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', backgroundColor: '#F3F0EA', position: 'relative', height: '500px' }}>
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                priority
                sizes="(max-width: 768px) 100vw, 50vw" 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            
            <div className="pdp-mascot-hint" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
              <Image src={mascotImg} alt="Mascot" width={80} height={80} style={{ objectFit: 'contain' }} />
              <div className="mascot-speech">
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>Perfect pairing: <br/><strong style={{ color: 'var(--color-text)' }}>{product.pairing}</strong></p>
              </div>
            </div>
          </div>
          
          <div className="pdp-info-col">
            <h1 className="pdp-title" style={{ fontSize: '3rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>{product.name}</h1>
            <p className="pdp-long-desc" style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>{product.longDescription}</p>
            
            <div className="pdp-details" style={{ borderTop: '1px solid rgba(0,0,0,0.05)', marginBottom: '2rem' }}>
              <div className="pdp-detail-section" style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Tasting Notes</h3>
                <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>{product.tastingNotes}</p>
              </div>
              
              <div className="pdp-detail-section" style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Ingredients & Provenance</h3>
                <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>{product.ingredients}</p>
              </div>
              
              <div className="pdp-detail-section allergen-alert" style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Allergen Information</h3>
                <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-text)' }}>{product.allergens}</p>
              </div>
            </div>

            <AddToCartDetail product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
