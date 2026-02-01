import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryAction?: { text: string; href: string };
  secondaryAction?: { text: string; href: string };
}

const CTASection = ({
  title = "Let's build something together",
  description = "Whether you need a product, a custom solution, or just want to chat about ideas.",
  primaryAction = { text: "Get in Touch", href: "/contact" },
  secondaryAction = { text: "View My Work", href: "/products" }
}: CTASectionProps) => {
  return (
    <section className="section-padding">
      <div className="container container-padding">
        <AnimatedSection>
          <div className="relative rounded-2xl bg-card border border-border px-8 py-16 md:px-16 md:py-20 overflow-hidden shadow-lg">
            {/* Decorative gradient orbs */}
            <motion.div 
              className="absolute top-0 right-0 w-80 h-80 bg-primary/[0.08] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.08, 0.12, 0.08],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-64 h-64 bg-primary/[0.06] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.06, 0.1, 0.06],
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.015]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="h-12 px-8 rounded-lg shadow-lg group"
                >
                  <Link to={primaryAction.href}>
                    {primaryAction.text}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 rounded-lg"
                >
                  <Link to={secondaryAction.href}>{secondaryAction.text}</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
