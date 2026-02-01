import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      <Link
        to={`/products/${product.id}`}
        className="group relative bg-card rounded-xl p-8 border border-border card-interactive block h-full"
      >
        {/* Status Badge */}
        {product.status === "launching-soon" && (
          <div className="absolute top-4 right-4">
            <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold">
              Launching Soon
            </span>
          </div>
        )}

        {/* Icon */}
        <div className="icon-container icon-container-md mb-5">
          <Icon className="h-6 w-6" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm font-medium text-primary mb-3">
          {product.tagline}
        </p>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {product.description}
        </p>

        {/* Features preview */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.benefits.slice(0, 3).map((benefit, i) => (
            <span 
              key={i}
              className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
            >
              {benefit}
            </span>
          ))}
        </div>

        {/* Link */}
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
