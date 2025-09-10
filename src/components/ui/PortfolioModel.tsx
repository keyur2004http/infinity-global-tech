import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
interface ProductItem {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
  
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle: string;
  items: ProductItem[];
  initialIndex?: number;
}

export const ProductModal = ({ 
  isOpen, 
  onClose, 
  productTitle, 
  items, 
  initialIndex = 0 
}: ProductModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (!isAutoPlay || !isOpen || items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isOpen, items.length]);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];

  if (!currentItem) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="w-full max-w-5xl max-h-[90vh] p-0 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
      
      {/* Close Button */}
     
  
      {/* Left: Image Section */}
      <div className="md:w-1/2 w-full flex justify-center items-center  dark:bg-gray-100 p-6">
        <img
          src={currentItem.image}
          alt={currentItem.name}
          className="rounded-xl max-h-[320px] w-full object-contain transition-all duration-300"
        />
      </div>
      {/* Right: Content Section */}
      <div className="md:w-1/2 w-full p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col justify-between max-h-[90vh] overflow-y-auto">
        <div>
          <h2 className="text-2xl font-bold text-gray-500 dark:text-indigo-400">
            {currentItem.name}
          </h2>
          <p className="mt-2 text-base leading-relaxed transition-all duration-300">
            {currentItem.description}
          </p>
  
          {currentItem.features?.length > 0 && (
            <ul className="mt-4 space-y-2 text-sm">
              {currentItem.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-black mt-2"></span>
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>
  
        {/* Navigation */}
        {items.length > 1 && (
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={prevItem}
              className="bg-gray-900 hover:bg-gray-500 text-white px-4 py-2 rounded-full shadow cursor-pointer"
            >
              ← Prev
            </button>
            <button
              onClick={nextItem}
              className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-full shadow"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </DialogContent>
  </Dialog>
  

  );
};