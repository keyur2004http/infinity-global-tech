
"use client"
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";

/* ───────────────── TYPES ───────────────── */
interface Service {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  modalItems: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    features: string[];
  }[];

}

/* ───────────────── DATA ───────────────── */
const services: Service[] = [
  {
    id: "logo-design",
    title: "Logo Design",
    subtitle: "Creative brand-focused logo designs",
    image: "./Assets/portfolio/logo-design.png",
    modalItems: [
      {
        title: "Chachan Brand Logo",
        subtitle: "Minimal & Elegant",
        description:
          "A clean and minimal logo designed to represent brand identity with modern typography.",
        image: "./Assets/portfolio/Logoes/chachan.png",
        features: [
          "Vector based logo",
          "Print & digital ready",
          "Scalable design",
          "Brand consistency",
        ],
      },
      {
        title: "Power Gym Logo",
        subtitle: "Bold & Energetic",
        description:
          "A strong and energetic logo representing power, fitness, and strength.",
        image: "./Assets/portfolio/Logoes/Power Gym.png",
        features: [
          "Bold typography",
          "High contrast colors",
          "Merchandise ready",
          "Brand recall focused",
        ],
      },
    ],
  },

  {
    id: "business-card",
    title: "Card Design",
    subtitle: "Professional & premium card designs",
    image: "/Assets/portfolio/Business-Card/coffee-card.png",
    modalItems: [
      {
        title: "Reese Miller Card",
        subtitle: "Creative Business Card",
        description:
          "A modern artistic business card with abstract elements and premium color contrast.",
        image: "/Assets/portfolio/Business-Card/reese-miller-card.png",
        features: [
          "Abstract artistic background",
          "Modern logo placement",
          "Clean typography",
          "High-contrast color scheme",
        ],
      },
      {
        title: "Borcelle Construction",
        subtitle: "Corporate Card Design",
        description:
          "A strong corporate business card designed for construction and industrial brands.",
        image: "/Assets/portfolio/Business-Card/borcelle-card.png",
        features: [
          "Professional corporate layout",
          "Industry-focused visuals",
          "Clear contact hierarchy",
          "Print-ready CMYK design",
        ],
      },
      {
        title: "Secure Life",
        subtitle: "Insurance Business Card",
        description:
          "A minimal and trustworthy business card designed for insurance advisors.",
        image: "/Assets/portfolio/Business-Card/secure-life.png",
        features: [
          "Minimal premium layout",
          "Trust-focused branding",
          "Elegant monochrome palette",
          "Sharp iconography & spacing",
        ],
      },
    ],
  },

  {
    id: "web-design",
    title: "Web Design",
    subtitle: "Responsive & scalable website solutions",
    image: "./Assets/portfolio/Website/web.png",
    modalItems: [
      {
        title: "Mahadev Fashions",
        subtitle: "E-commerce Website",
        description:
          "A professional e-commerce website with admin panel and secure checkout.",
        image: "/Assets/portfolio/Website/mahadev-fashion.png",
        features: [
          "Fully responsive",
          "Admin panel",
          "SEO friendly",
          "Secure payments",
        ],
      },
      {
        title: "Samore Masala",
        subtitle: "Product Showcase Website",
        description:
          "A visually rich website for spice brand storytelling and product display.",
        image: "/Assets/portfolio/Website/samore.png",
        features: [
          "Product showcase",
          "Fast loading",
          "Clean UI",
          "Mobile-first design",
        ],
      },
    ],
  },

  {
    id: "poster-design",
    title: "Poster Design",
    subtitle: "High-impact posters for brands & campaigns",
    image: "./Assets/portfolio/Poster/cover.jpg",

    modalItems: [
      {
        title: "Travel Agency Posters",
        subtitle: "Tour packages & promotional creatives",
        description:
          "A series of eye-catching promotional posters designed for a travel agency. These posters highlight tour packages, destinations, pricing, and festive giveaways with high visual appeal to boost engagement and inquiries.",
        image: "/Assets/portfolio/Poster/travels.png",
        features: [
          "Destination-focused visuals",
          "Clear pricing & CTA placement",
          "Print & digital ready formats",
        ],
      },

      {
        title: "Infinity Global Tech Posters",
        subtitle: "Business promotion & lead generation",
        description:
          "Custom-designed promotional posters created for Infinity Global Tech to generate quality leads across multiple business niches such as furniture, real estate, gym, travel, and café businesses on social media.",
        image: "/Assets/portfolio/Poster/infinity-posts.png",
        features: [
          "Industry-specific poster variations",
          "Lead-focused content layout",
          "Consistent brand identity"
        ],
      },
    ],
  }

];


/* ───────────────── MAIN SECTION ───────────────── */
interface PortfolioSectionProps {
  setIsModalOpen: (value: boolean) => void;
}

const PortfolioSection: FC<PortfolioSectionProps> = ({ setIsModalOpen }) => {
  const [open, setOpen] = useState<Service | null>(null);
  const [slide, setSlide] = useState(0);
  const detailsRef = useRef<HTMLDivElement | null>(null);


  const nextSlide = (len: number) =>
    setSlide((s) => (s + 1) % len);

  const prevSlide = (len: number) =>
    setSlide((s) => (s - 1 + len) % len);

  return (
    <section
      id="/portfolio"
      className="w-full py-24 text-gray-900 relative bg-cover bg-no-repeat">
      <div
        className="max-w-6xl mx-auto px-2">

        {/* TITLE */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold mb-3">
            Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of our creative work showcasing branding, design,
            and digital experiences.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-8 ">
          {/* <div className="absolute -left-20 top-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" /> */}


          {/* Floating icons */}
          <span className="absolute top-10 left-10 w-6 h-6 bg-cyan-900/20 rounded-full animate-floatSlow" />
          <span className="absolute top-24 left-32 w-3 h-3 bg-cyan-900/20 rounded-full animate-float" />

          <span className="absolute top-1/2 -left-6 w-10 h-10 bg-cyan-900/10 rounded-full animate-floatSlow" />
          <span className="absolute bottom-24 left-24 w-4 h-4 bg-cyan-900/20 rounded-full animate-floatFast" />
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}   // 👈 IMPORTANT CHANGE
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }} // micro animation only
              className="bg-gradient-to-br from-cyan-950 via-cyan-900 to-cyan-700 cursor-point  text-white rounded-2xl p-6 shadow-xl border-round-xl"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div>
                  <h3 className="text-[18px] sm:text-2xl font-bold">
                    {service.title}
                  </h3>
                  <p className="text-xs text-white mt-1 font-bold">
                    {service.subtitle}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                      setOpen(service);
                      setSlide(0);
                      setIsModalOpen(true);
                    }}

                    className="mt-6 px-6 py-2 bg-white text-gray-900 rounded-full font-semibold hover:scale-105 transition cursor-pointer"
                  >
                    View Work
                  </motion.button>
                </div>

                <motion.div
                  className="flex-1 flex justify-end"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="sm:w-[150px] h-auto w-[100px] h-[auto] object-contain rounded-2xl"
                  />
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <PortfolioModal
          data={open}
          slide={slide}
          setSlide={setSlide}
          next={() => nextSlide(open.modalItems.length)}
          prev={() => prevSlide(open.modalItems.length)}
          close={() => {
            setOpen(null);
            setIsModalOpen(false);
          }}
        />
      )}
    </section>
  );
};


export default PortfolioSection;

/* ───────────────── MODAL ───────────────── */
interface ModalProps {

  data: Service;
  slide: number;
  setSlide: (i: number) => void;
  next: () => void;
  prev: () => void;
  close: () => void;
}

const PortfolioModal: FC<ModalProps> = ({
  data,
  slide,
  setSlide,
  next,
  prev,
  close,

}
) => {
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const currentItem = data.modalItems[slide];
  const hasMultipleImages = data.modalItems.length > 1;

const touchStartX = useRef<number | null>(null);

const handleTouchStart = (e: React.TouchEvent) => {
  touchStartX.current = e.touches[0].clientX;
};

const handleTouchEnd = (e: React.TouchEvent) => {
  if (touchStartX.current === null || !hasMultipleImages) return;

  const touchEndX = e.changedTouches[0].clientX;
  const diff = touchStartX.current - touchEndX;

  if (Math.abs(diff) > 50) {
    diff > 0 ? next() : prev();
  }

  touchStartX.current = null;
};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-6"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl max-h-[100dvh] h-full
        sm:h-auto shadow-2xl relative overflow-hidden"
      >
        {/* CLOSE */}
        <button

          onClick={close}

          className="absolute top-4 right-4 md:text-gray-100 sm:text-cyan-900 hover:text-gray-300 text-2xl cursor-pointer z-10"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 h-full">

          {/* IMAGE */}
          <div
  className="relative bg-gray-100 p-2 sm:p-8 flex flex-col items-center justify-center border-r"
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
>
  <div className="relative w-full h-[35svh] sm:h-[420px] rounded-xl overflow-hidden flex items-center justify-center">

    {/* DESKTOP LEFT BUTTON */}
    {hasMultipleImages && (
      <button
        onClick={prev}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 hover:bg-white shadow-md"
      >
        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    )}

    {/* IMAGE */}
    <img
      src={currentItem.image}
      alt={currentItem.title}
      className="max-h-full max-w-full object-contain select-none"
      draggable={false}
    />

    {/* DESKTOP RIGHT BUTTON */}
    {hasMultipleImages && (
      <button
        onClick={next}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 hover:bg-white shadow-md"
      >
        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    )}

    {/* IMAGE COUNTER */}
    {hasMultipleImages && (
      <div className="absolute bottom-3 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
        {slide + 1} / {data.modalItems.length}
      </div>
    )}
  </div>

  {/* MOBILE SWIPE HINT */}
  {hasMultipleImages && (
    <p className="mt-3 text-xs text-gray-500 md:hidden">
      Swipe left or right to view more
    </p>
  )}
</div>


          {/* DETAILS — ORDER UNCHANGED */}
          <div className="p-6 sm:p-10 bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-500 flex flex-col justify-center">

            <h2 className="text-3xl font-semibold mb-1 text-gray-300">
              {currentItem.title}
            </h2>

            <p className="text-gray-300 text-sm font-medium mb-2">
              {currentItem.subtitle}
            </p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.3 }}
              className="h-[2px] bg-gray-100 rounded-full mb-6"
            />

            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              {currentItem.description}
            </p>

            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Features
            </h3>

            <ul className="space-y-4">
              {currentItem.features.map((f, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 mt-1" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </motion.div>
    </motion.div>

  );
};
