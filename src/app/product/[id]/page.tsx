import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById } from "../../../data/products";
import AddToCartDetail from "./AddToCartDetail";

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
      <div className="pdp-hero">
        <Link href="/#menu" className="btn btn-outline" style={{ display: 'inline-flex', marginBottom: '2rem' }}>
          &larr; Back to Menu
        </Link>
        
        <div className="pdp-split">
          <div className="pdp-image-col">
            <div className="pdp-main-image-wrap">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                priority
                sizes="(max-width: 768px) 100vw, 50vw" 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            
            <div className="pdp-mascot-hint">
              <Image src={mascotImg} alt="Mascot" width={150} height={150} style={{ objectFit: 'contain' }} />
              <div className="mascot-speech">
                <p>Perfect pairing: <br/><strong>{product.pairing}</strong></p>
              </div>
            </div>
          </div>
          
          <div className="pdp-info-col">
            <h1 className="pdp-title">{product.name}</h1>
            <p className="pdp-long-desc">{product.longDescription}</p>
            
            <div className="pdp-details">
              <div className="pdp-detail-section">
                <h3>Tasting Notes</h3>
                <p>{product.tastingNotes}</p>
              </div>
              
              <div className="pdp-detail-section">
                <h3>Ingredients & Provenance</h3>
                <p>{product.ingredients}</p>
              </div>
              
              <div className="pdp-detail-section allergen-alert">
                <h3>Allergen Information</h3>
                <p>{product.allergens}</p>
              </div>
            </div>

            <AddToCartDetail product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
