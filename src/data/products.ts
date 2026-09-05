export type Product = {
  id: number;
  name: string;
  desc: string;
  price500: number;
  price1000: number;
  image: string;
  longDescription: string;
  tastingNotes: string;
  ingredients: string;
  allergens: string;
  pairing: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Butter Biscuits",
    desc: "Rich, melt-in-your-mouth classic butter biscuits baked to golden perfection.",
    price500: 1000,
    price1000: 2000,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600&auto=format&fit=crop",
    longDescription: "Our signature Butter Biscuits are a testament to the art of traditional baking. Crafted with the finest French cultured butter and baked until they achieve a delicate, crumbly texture, these biscuits melt instantly on the palate, leaving a rich, creamy aftertaste that lingers beautifully.",
    tastingNotes: "Rich, creamy, buttery with a hint of natural vanilla sweetness and a remarkably short, crumbly texture.",
    ingredients: "French Cultured Butter (Milk), Organic Wheat Flour, Unrefined Cane Sugar, Free-Range Eggs, Madagascar Vanilla Bean, Sea Salt.",
    allergens: "Contains Wheat, Dairy, and Eggs. May contain traces of nuts.",
    pairing: "Pairs perfectly with a delicate Earl Grey tea or a light roast morning coffee."
  },
  {
    id: 2,
    name: "Lotus Biscuits",
    desc: "Deliciously crisp biscuits infused with the unique caramelized taste of Lotus Biscoff.",
    price500: 1000,
    price1000: 2000,
    image: "https://images.unsplash.com/photo-1606041011872-596590462066?q=80&w=600&auto=format&fit=crop",
    longDescription: "Experience the irresistible crunch and deep caramelized flavor of our Lotus-infused biscuits. By delicately folding authentic Lotus Biscoff spread into our artisanal dough, we've created a deeply comforting biscuit with warm spice notes that crackle delightfully with every bite.",
    tastingNotes: "Deep caramel, warm cinnamon, toasted brown sugar, and a satisfyingly crisp snap.",
    ingredients: "Organic Wheat Flour, Lotus Biscoff Spread (Wheat, Soy), Brown Sugar, Vegan Butter, Cinnamon, Baking Soda.",
    allergens: "Contains Wheat and Soy. Dairy-free recipe. May contain traces of nuts.",
    pairing: "An absolute dream when dipped in a frothy Cappuccino or a spiced Chai Latte."
  },
  {
    id: 3,
    name: "Choco Biscuits",
    desc: "Decadent chocolate biscuits packed with rich cocoa flavor for the ultimate treat.",
    price500: 1000,
    price1000: 2000,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop",
    longDescription: "A dark, intense journey for true chocolate lovers. We blend single-origin Dutch cocoa with our signature dough to create a biscuit that borders on a brownie in its richness, yet retains the satisfying crumble of a masterfully baked biscuit. Flecked with sea salt to elevate the cocoa notes.",
    tastingNotes: "Intense dark chocolate, earthy cocoa nibs, balanced by a sharp hint of flaky sea salt.",
    ingredients: "Organic Wheat Flour, Single-Origin Dutch Cocoa Powder, French Butter (Milk), Dark Chocolate Chunks (70% Cacao), Cane Sugar, Flaky Sea Salt.",
    allergens: "Contains Wheat, Dairy, and Eggs. May contain traces of nuts.",
    pairing: "Best enjoyed alongside a bold, dark roast Espresso or a glass of cold milk."
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id.toString() === id);
}
