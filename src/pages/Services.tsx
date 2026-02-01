import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Rocket, Settings, Zap, CheckCircle2, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description: "Full-stack web applications tailored to your specific needs. From simple landing pages to complex SaaS platforms.",
    features: ["React & TypeScript", "Django & FastAPI backends", "Database design", "API integrations"],
    popular: true
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love. I focus on creating designs that are both functional and visually stunning.",
    features: ["User research", "Wireframing", "Prototyping", "Design systems"],
    popular: false
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Got a startup idea? I'll help you build a minimum viable product quickly so you can validate your concept and start getting users.",
    features: ["Rapid prototyping", "Market validation", "Iterative development", "Launch support"],
    popular: true
  },
  {
    icon: Settings,
    title: "Technical Consulting",
    description: "Need guidance on architecture, tech stack, or development strategy? I can help you make the right decisions.",
    features: ["Architecture review", "Tech stack selection", "Code audits", "Performance optimization"],
    popular: false
  }
];

const process = [
  { step: "01", title: "Discovery", description: "We discuss your project, goals, and requirements to understand exactly what you need." },
  { step: "02", title: "Planning", description: "I create a detailed plan with timelines, milestones, and deliverables for your approval." },
  { step: "03", title: "Development", description: "I build your project with regular updates and opportunities for feedback along the way." },
  { step: "04", title: "Launch", description: "We deploy your project and I provide support to ensure a smooth launch." }
];

const testimonials = [
  {
    quote: "Working with krishbuilds was a great experience. They delivered exactly what we needed, on time.",
    author: "Happy Client",
    role: "Startup Founder"
  },
  {
    quote: "The quality of work exceeded our expectations. Highly recommend for any web development project.",
    author: "Satisfied Customer",
    role: "Small Business Owner"
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        
        <div className="container container-padding relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <p className="section-label">Services</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="mb-6">Let's bring your ideas to life</h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="section-description mx-auto">
                I offer a range of development and design services to help you build 
                amazing products. From quick MVPs to full-scale applications.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Button asChild size="lg" className="h-12 px-8 rounded-lg group">
                  <Link to="/contact">
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-lg">
                  <Link to="/products">See My Work</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container container-padding">
          <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.title}>
                  <div
                    className={cn(
                      "relative bg-card rounded-xl p-8 border card-interactive h-full",
                      service.popular ? "border-primary/50 ring-1 ring-primary/20" : "border-border"
                    )}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 right-6">
                        <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="icon-container icon-container-md mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <AnimatedSection>
              <p className="section-label">How I Work</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="mb-4">Simple, transparent process</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="section-description mx-auto">
                From idea to launch, here's how we'll work together.
              </p>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" staggerDelay={0.1}>
            {process.map((item, index) => (
              <StaggerItem key={item.step}>
                <div className="relative bg-card rounded-xl p-6 border border-border h-full">
                  <div className="text-5xl font-bold text-primary/10 mb-4">{item.step}</div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-border">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <AnimatedSection>
              <p className="section-label">Client Feedback</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="mb-4">What clients say</h2>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.15}>
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="bg-card rounded-xl p-8 border border-border h-full">
                  <MessageSquare className="h-8 w-8 text-primary/20 mb-4" />
                  <blockquote className="text-lg mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <AnimatedSection delay={0.4} className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              * Placeholder testimonials - will be updated with real client feedback
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="pb-20">
        <div className="container container-padding">
          <AnimatedSection>
            <motion.div 
              className="max-w-3xl mx-auto text-center bg-primary/5 rounded-2xl p-8 border border-primary/10"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Flexible Pricing</h3>
              <p className="text-muted-foreground mb-6">
                Every project is unique. I offer flexible pricing based on scope, complexity, 
                and timeline. Let's discuss your project and I'll provide a transparent quote.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="h-12 px-8 rounded-lg group">
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Ready to start your project?"
        description="Let's discuss your idea and see how I can help bring it to life."
        primaryAction={{ text: "Get in Touch", href: "/contact" }}
        secondaryAction={{ text: "View My Products", href: "/products" }}
      />
    </Layout>
  );
};

export default Services;
