import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/animated-section";

const testimonials = [
  {
    quote: "krishbuilds transformed how we analyze our data. Their Analytics Pro platform gave us insights we never knew we needed.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc."
  },
  {
    quote: "Workflow Hub saved our team countless hours every week. The automation capabilities are exactly what we needed to scale efficiently.",
    author: "Michael Chen",
    role: "Operations Director",
    company: "GrowthLabs"
  },
  {
    quote: "The team at krishbuilds truly listens to their customers. They delivered beyond our expectations.",
    author: "Emily Rodriguez",
    role: "CTO",
    company: "InnovateCo"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection>
            <p className="section-label">Testimonials</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mb-4">Trusted by industry leaders</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="section-description mx-auto">
              See what our customers have to say about working with us.
            </p>
          </AnimatedSection>
        </div>

        {/* Testimonial */}
        <AnimatedSection delay={0.3} className="max-w-3xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
            {/* Quote icon */}
            <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/10" />

            {/* Content with animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <blockquote className="relative z-10 text-xl md:text-2xl font-medium leading-relaxed mb-8 text-foreground">
                  "{testimonials[current].quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {testimonials[current].author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonials[current].author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[current].role}, {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prev} 
                className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={next} 
                className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === current 
                    ? "bg-primary w-8" 
                    : "bg-border hover:bg-muted-foreground/30 w-2"
                )}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
