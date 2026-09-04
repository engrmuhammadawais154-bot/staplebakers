import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <header className="header">
          <div className="container nav-container">
            <Link href="/" className="logo">
              <img src="/staple bakers-04.png" alt="Staple Bakers Logo" />
            </Link>
            <nav>
              <ul className="nav-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="#menu">Menu</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#contact">Contact</Link></li>
              </ul>
            </nav>
            <Link href="#order" className="btn btn-primary">Order Now</Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col footer-brand">
                <Link href="/" className="footer-logo">
                  <img src="/staple bakers-01.png" alt="Staple Bakers Dark Logo" />
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
      </body>
    </html>
  );
}
