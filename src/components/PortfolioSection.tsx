"use client"
import { useState } from "react";
import { ProductCard } from "@/components/ui/PortfolioCard";
import { ProductModal } from "@/components/ui/PortfolioModel";


const PortfolioSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div id="portfolio"  className="min-h-screen bg-background">
    {/* Hero Section */}
    <div className="relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23aaaaaa' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
  
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20 z-10">
        <div className="text-center space-y-4">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-lg">
            Product Portfolio
          </h1>
  
          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Discover our collection of innovative digital products and solutions.
            Each project showcases cutting-edge technology and exceptional design.
          </p>
  
          {/* Decorative line */}
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
      </div>
    </div>
  
    {/* Products Grid */}
    <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-10 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {products.map((product, index) => (
          <div
            key={product.id}
            style={{ animationDelay: `${index * 100}ms` }}
            className="animate-fade-in cursor-pointer"
            onClick={() => openModal(product)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openModal(product);
            }}
          >
            <ProductCard
              id={product.id}
              title={product.title}
              category={product.category}
              description={product.description}
              image={product.image}
              itemCount={product.items.length}
              onClick={() => openModal(product)}
            />
          </div>
        ))}
      </div>
    </div>
  
    {/* Product Modal */}
    {selectedProduct && (
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        productTitle={selectedProduct.title}
        items={selectedProduct.items}
      />
    )}
  </div>
  



  )

};

export default PortfolioSection;

export interface ProductItem {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
}

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  items: ProductItem[];
}

export const products: Product[] = [
  {
    id: "logo-design",
    title: "Logo Design",
    category: "Brand Identity",
    description: "Creative and professional logo designs crafted to define brand identity and resonate with target audiences.",
    image: "./Assets/portfolio/logo-design.png",
    items: [
      {
        id: "chachan-stone",
        name: "Chachan Stone",
        image: "./Assets/portfolio/Logoes/chachan.png",
        description: "A refined lotus motif symbolizing purity and growth, tailored for a brand offering energy stones & bracelets.",
        features: [
          "Lotus-based minimal icon",
          "Symbol of purity and positive energy",
          "Soothing earthy color palette",
          "Designed for spiritual branding",
          "Optimized for print and digital use"
        ]
      },
      {
        id: "powerup-gym",
        name: "PowerUp Gym",
        image: "./Assets/portfolio/Logoes/Power Gym.png",
        description: "Bold and energetic logo designed for a modern fitness brand, using sharp lines and strong typeface.",
        features: [
          "Strong, energetic typography",
          "Sharp geometric lines",
          "Modern fitness-inspired identity",
          "Scalable for merch and signage",
          "Resonates with athletes and gym-goers"
        ]
      },
      {
        id: "kp",
        name: "KP (E-Commerce Wholesaler)",
        image: "./Assets/portfolio/Logoes/KP.png",
        description: "Overlapping K and P initials with a vibrant gradient and shopping cart symbolizing energy and trust.",
        features: [
          "Gradient from sunset orange to ocean blue",
          "Overlapping initial concept",
          "Shopping cart brand element",
          "Modern sans-serif typography",
          "Trustworthy e-commerce appeal"
        ]
      },
      {
        id: "sv",
        name: "SV Embroidery",
        image: "./Assets/portfolio/Logoes/sv.png",
        description: "Elegant initials inside an embroidery hoop with stitched flowers and a vertical needle.",
        features: [
          "Elegant serif initials",
          "Embroidery hoop concept",
          "Colorful floral accents",
          "Symbolizes creativity & tradition",
          "Works on packaging & labels"
        ]
      },
      {
        id: "nena",
        name: "Nena Beauty & Bridal",
        image: "./Assets/portfolio/Logoes/Nena.png",
        description: "An elegant female line illustration with flowing hair, capturing sophistication and timeless beauty.",
        features: [
          "Minimal line art style",
          "Feminine elegance & flow",
          "Graceful typography",
          "Luxury salon/bridal brand identity",
          "Premium and timeless appeal"
        ]
      },
      {
        id: "shivansh-lab",
        name: "Shivansh Diagnostic Lab",
        image: "./Assets/portfolio/Logoes/shivansh.png",
        description: "Logo with protective hand cradling medical icons (DNA, blood drop, test tube), symbolizing care & precision.",
        features: [
          "Medical DNA + blood + lab elements",
          "Protective caring hand concept",
          "Professional blue & red palette",
          "Symbolizes trust & healthcare accuracy",
          "Versatile for signage & reports"
        ]
      },
      {
        id: "ktp",
        name: "Kreative Tech Partners",
        image: "./Assets/portfolio/Logoes/Kp.png",
        description: "Minimalistic initials KTP with subtle leaf accents, blending creativity, innovation, and sustainability.",
        features: [
          "Modern serif typography",
          "Leaf accents for sustainability",
          "Minimal & elegant design",
          "Represents tech + creativity",
          "Corporate professional appeal"
        ]
      },
      {
        id: "wood-carft",
        name: "Wood Carft",
        image: "./Assets/portfolio/Logoes/woodcarft.png",
        description: "A strong lumberjack and wood-textured badge, reflecting rugged craftsmanship & reliability.",
        features: [
          "Vintage lumberjack emblem",
          "Wood-textured detailing",
          "Rustic badge style",
          "Symbolizes strength & tradition",
          "Perfect for carpentry & wood brands"
        ]
      }
    ]
  },
  {
    id: "business-card",
    title: "Business Card Design",
    category: "Branding",
    description: "Custom business cards designed to reflect brand identity, professionalism, and easy communication.",
    image: "./Assets/portfolio/business_card.png",
    items: [
      {
        id: "cafe-bliss-card",
        name: "Cafe Bliss Business Card",
        image: "/Assets/portfolio/coffee_businesscard.png",
        description: "Minimalist yet elegant design reflecting Cafe Bliss brand colors with clear contact details.",
        features: [
          "Coffee cup icon for brand recall",
          "Minimalist layout with whitespace",
          "Brand color palette integration",
          "Social media handles visible",
          "Professional typography for clarity"
        ]
      }
    ]
  },
  {
    id: "Website",
    title: "Web Design",
    category: "Site",
    description: "Best online store with easy to manage admin panle.",
    image: "./Assets/portfolio/web.png",
    items: [
      {
        id: "cafe-bliss-card",
        name: "MD Fashions",
        image: "/Assets/portfolio/home.png",
        description: "E-Commerce Website for women colothes.",
        features: [
          "Fully Responsive",
          "Secure Payment ",
          "Easy To Manage",
          "Custome Offers ",
          "Best User Experiens"
        ]
      }
    ]
  },

];
