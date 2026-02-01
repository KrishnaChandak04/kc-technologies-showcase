import { Feature } from "@/data/products";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  feature: Feature;
  index?: number;
  color?: string;
}

const FeatureCard = ({ feature, index = 0, color = "from-blue-500 to-cyan-500" }: FeatureCardProps) => {
  const Icon = feature.icon;

  return (
    <div
      className={cn(
        "group relative p-8 rounded-3xl",
        "bg-card border border-border/50",
        "hover-lift transition-all duration-500",
        "animate-fade-up"
      )}
      style={{ animationDelay: `${300 + index * 100}ms` }}
    >
      {/* Hover gradient overlay */}
      <div className={cn(
        "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500",
        "bg-gradient-to-br",
        color
      )} />

      {/* Icon with glow */}
      <div className="relative mb-6">
        <div className={cn(
          "absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity",
          "bg-gradient-to-br",
          color
        )} />
        <div className={cn(
          "relative inline-flex items-center justify-center w-14 h-14 rounded-xl",
          "bg-gradient-to-br",
          color,
          "text-white shadow-lg"
        )}>
          <Icon className="h-7 w-7" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
        {feature.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {feature.description}
      </p>

      {/* Corner accent */}
      <div className={cn(
        "absolute top-0 right-0 w-24 h-24 rounded-tr-3xl opacity-0 group-hover:opacity-10 transition-opacity",
        "bg-gradient-to-br",
        color
      )} />
    </div>
  );
};

export default FeatureCard;
