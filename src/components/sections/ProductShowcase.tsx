import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const ProductShowcase = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection>
            <p className="section-label">Our Products</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mb-4">Built for modern teams</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="section-description mx-auto">
              Powerful tools designed to help your business thrive.
            </p>
          </AnimatedSection>
        </div>

        {/* Product Cards */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto" staggerDelay={0.15}>
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <StaggerItem key={product.id}>
                <Link
                  to={`/products/${product.id}`}
                  className="group relative bg-card rounded-xl p-8 border border-border card-interactive block h-full"
                >
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
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* View All */}
        <AnimatedSection delay={0.5} className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary link-underline"
          >
            View all products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductShowcase;
