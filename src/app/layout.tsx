import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { CartProvider } from "../components/CartProvider";
import Header from "../components/Header";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Staple Bakers | Artisanal Bakery",
  description: "Handcrafted pastries, fresh sourdough, and the finest coffee. Order online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <footer className="footer">
            <div className="container">
              <div className="footer-grid">
                <div className="footer-col footer-brand">
                  <Link href="/" className="footer-logo">
                    <img src="/staple bakers-03.png" alt="Staple Bakers Dark Logo" />
                  </Link>
                  <p>Artisanal baked goods crafted with love, precision, and the finest ingredients.</p>
                </div>
                <div className="footer-col">
                  <h4>Explore</h4>
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#menu">Our Menu</Link></li>
                    <li><Link href="#about">Our Story</Link></li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4>Visit Us</h4>
                  <ul>
                    <li>123 Bakery Lane</li>
                    <li>New York, NY 10012</li>
                    <li>Mon-Sat: 7am - 5pm</li>
                    <li>Sun: 8am - 3pm</li>
                  </ul>
                </div>
              </div>
              <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Staple Bakers. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
