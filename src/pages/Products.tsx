import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/cards/ProductCard";
import CTASection from "@/components/sections/CTASection";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        
        <div className="container container-padding relative">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="section-label">My Products</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="mb-6">Software I've built</h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="section-description">
                These are the products I've created under krishbuilds. Each one solves 
                a real problem and is built with care and attention to detail.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="flex gap-4 mt-8">
                <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-lg group">
                  <Link to="/services">
                    Need something custom?
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20">
        <div className="container container-padding">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Coming Soon */}
          <AnimatedSection delay={0.5} className="mt-16 text-center">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground"
              whileHover={{ scale: 1.02 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              More products in development
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection 
        title="Want to collaborate?"
        description="I'm always open to interesting projects and partnerships. Let's build something great together."
        primaryAction={{ text: "Let's Talk", href: "/contact" }}
        secondaryAction={{ text: "View Services", href: "/services" }}
      />
    </Layout>
  );
};

export default Products;
