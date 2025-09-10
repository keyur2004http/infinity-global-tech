import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  itemCount: number;
  onClick: () => void;
}

export const ProductCard = ({ 
  title, 
  category, 
  description, 
  image, 
  itemCount, 
  onClick 
}: ProductCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden cursor-pointer bg-gradient-card border-accent/20 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-[1.02] animate-fade-in"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
        <Badge 
          variant="secondary" 
          className="absolute top-4 right-4 bg-primary/20 text-primary-glow border-primary/30 backdrop-blur-sm"
        >
          {itemCount} Items
        </Badge>
      </div>
      
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="border-primary/30 text-primary-glow">
            {category}
          </Badge>
        </div>
        
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary-glow transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="pt-2 flex items-center text-primary text-sm font-medium">
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            View Collection →
          </span>
        </div>
      </div>
      
      <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 rounded-lg transition-all duration-500 pointer-events-none" />
    </Card>  
  );
};