import { Target, Eye, Zap, Trophy, Clock, Flame, Code2, Lightbulb, Heart, ArrowRight, Quote, Mail, Linkedin, Github, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const stats = [
  { value: "24/7", label: "Building Mode", icon: Zap },
  { value: "2+", label: "Years Learning", icon: Clock },
  { value: "100%", label: "Dedication", icon: Flame },
  { value: "∞", label: "Curiosity", icon: Lightbulb }
];

const principles = [
  {
    icon: Target,
    title: "Impact Over Everything",
    description: "I don't build for the sake of building. Every line of code I write serves a purpose—to solve a real problem for real people."
  },
  {
    icon: Trophy,
    title: "Relentless Execution",
    description: "Ideas are easy. Execution is everything. I ship fast, iterate faster, and don't stop until it works perfectly."
  },
  {
    icon: Heart,
    title: "Obsessive Quality",
    description: "Good enough isn't good enough. I obsess over the details others overlook because that's where great products are made."
  },
  {
    icon: Code2,
    title: "First Principles Thinking",
    description: "I break down complex problems to their core and rebuild solutions from the ground up. No assumptions, just logic."
  }
];

const journey = [
  { 
    year: "2022", 
    title: "The Spark", 
    description: "Wrote my first line of code and something clicked. Programming wasn't just logic—it was power to create anything I could imagine.",
    highlight: true
  },
  { 
    year: "2023", 
    title: "From Learning to Building", 
    description: "Stopped doing tutorials. Started building real projects. Failed a lot. Learned even more. Every failure was a lesson that pushed me forward."
  },
  { 
    year: "2023", 
    title: "First Real Impact", 
    description: "Delivered my first project that actually helped someone run their business better. That feeling of impact? Addictive.",
    highlight: true
  },
  { 
    year: "2024", 
    title: "krishbuilds is Born", 
    description: "Formalized my work under one brand. Not just a portfolio—a commitment to building products that matter."
  },
  { 
    year: "Now", 
    title: "Building for Impact", 
    description: "Every day, I wake up with one goal: ship something that makes a real difference. The journey is just getting started.",
    highlight: true
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section - Personal & Impactful */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
        
        <div className="container container-padding relative">
          <div className="max-w-4xl mx-auto">
            {/* Intro badge */}
            <AnimatedSection>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
                whileHover={{ scale: 1.02 }}
              >
                <Flame className="h-4 w-4" />
                Builder • Creator • Problem Solver
              </motion.div>
            </AnimatedSection>

            {/* Main headline */}
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                I build things that
                <span className="block text-primary">actually matter.</span>
              </h1>
            </AnimatedSection>

            {/* Core message */}
            <AnimatedSection delay={0.2}>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                Not just another developer. I'm obsessed with creating software that 
                solves real problems and makes a tangible impact in people's lives. 
                When others see obstacles, I see opportunities to build something meaningful.
              </p>
            </AnimatedSection>

            {/* Philosophy quote */}
            <AnimatedSection delay={0.3}>
              <div className="relative bg-card/50 border border-border rounded-2xl p-8 mb-10">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
                <blockquote className="text-lg italic text-foreground/90 pl-6">
                  "The world doesn't need more software. It needs more software that 
                  actually solves problems. That's what I'm here to build."
                </blockquote>
              </div>
            </AnimatedSection>

            {/* Social links */}
            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-sm text-muted-foreground">Connect with me:</span>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/krishna-chandak-85294432b", label: "LinkedIn" },
                    { icon: Github, href: "https://github.com/krishnaChandak044", label: "GitHub" }
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="h-4 w-4" />
                      </motion.a>
                    );
                  })}
                </div>
                <div className="flex gap-2 ml-2">
                  <Button asChild variant="outline" size="sm">
                    <Link to="/contact">
                      <Mail className="h-4 w-4 mr-2" />
                      Let's Talk
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="group">
                    <a href="/resume.pdf" download>
                      <Download className="h-4 w-4 mr-2" />
                      Resume
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-20">
        <div className="container container-padding">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto" staggerDelay={0.1}>
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <StaggerItem key={stat.label}>
                  <motion.div 
                    className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/30 transition-colors"
                    whileHover={{ y: -4 }}
                  >
                    <Icon className="h-5 w-5 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission & Vision - Redesigned */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <AnimatedSection>
                <p className="section-label">Purpose</p>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2>Why I Do This</h2>
              </AnimatedSection>
            </div>

            <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
              <StaggerItem>
                <motion.div 
                  className="bg-card rounded-2xl p-8 border border-border h-full relative overflow-hidden group"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">The Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To build software that doesn't just exist—but <strong className="text-foreground">transforms</strong>. 
                      Every project I take on must answer one question: "Will this make someone's life better?"
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
              
              <StaggerItem>
                <motion.div 
                  className="bg-card rounded-2xl p-8 border border-border h-full relative overflow-hidden group"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">The Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To prove that you don't need permission to make an impact. 
                      Age, background, resources—none of it matters when you have 
                      <strong className="text-foreground"> dedication and a laptop</strong>.
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <AnimatedSection>
              <p className="section-label">Philosophy</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="mb-4">How I Operate</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="section-description mx-auto">
                These aren't just values on a page. They're non-negotiables that drive every decision I make.
              </p>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <StaggerItem key={principle.title}>
                  <motion.div 
                    className="bg-card rounded-xl p-6 border border-border h-full group hover:border-primary/30 transition-all"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{principle.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Journey Timeline - Enhanced */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <AnimatedSection>
              <p className="section-label">The Journey</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2>From Curiosity to Obsession</h2>
            </AnimatedSection>
          </div>

          <div className="max-w-2xl mx-auto">
            {journey.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative flex gap-6 pb-8 last:pb-0">
                  {/* Timeline connector */}
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm border-2 ${
                        item.highlight 
                          ? "bg-primary text-primary-foreground border-primary" 
                          : "bg-card text-foreground border-border"
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.year}
                    </motion.div>
                    {index < journey.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-3" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <motion.div 
                    className={`bg-card rounded-xl p-6 border flex-1 ${
                      item.highlight ? "border-primary/30" : "border-border"
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    <h4 className="font-semibold mb-2 text-lg">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Me Apart */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 md:p-12 border border-primary/20">
                <h3 className="text-2xl font-bold mb-6">What Makes Me Different?</h3>
                <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                  <div className="space-y-4">
                    <p>
                      <strong className="text-foreground">I'm not just writing code—I'm solving problems.</strong> Every 
                      project starts with understanding the "why" before the "how."
                    </p>
                    <p>
                      <strong className="text-foreground">I ship.</strong> While others are stuck in planning paralysis, 
                      I believe in building, testing, and iterating. Done is better than perfect.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p>
                      <strong className="text-foreground">I care obsessively.</strong> Your project isn't just another 
                      item on my list. It's something I'll think about at 2 AM.
                    </p>
                    <p>
                      <strong className="text-foreground">I'm hungry.</strong> Not content with "good enough." 
                      Every day is a chance to build something better than yesterday.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-primary/20">
                  <Button asChild size="lg" className="group">
                    <Link to="/products">
                      See What I've Built
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Live Project Demos */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <AnimatedSection>
              <p className="section-label">Currently Building</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2>Projects in Development</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="section-description mx-auto">
                Here's what I'm actively working on. These are real products designed to solve real problems.
              </p>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.15}>
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <StaggerItem key={product.id}>
                  <motion.div 
                    className="bg-card rounded-2xl border border-border overflow-hidden group hover:border-primary/30 transition-all"
                    whileHover={{ y: -4 }}
                  >
                    {/* Preview placeholder */}
                    <div className={`h-40 bg-gradient-to-br ${product.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Icon className="h-12 w-12 mx-auto mb-2 opacity-90" />
                          <span className="text-xs font-medium uppercase tracking-wider opacity-75">Preview Coming Soon</span>
                        </div>
                      </div>
                      {/* Status badge */}
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                        🚧 In Development
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">{product.tagline}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <Button asChild variant="outline" size="sm" className="group/btn">
                          <Link to={`/products/${product.id}`}>
                            Learn More
                            <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <AnimatedSection delay={0.3} className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/products">
                View All Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Ready to build something impactful?"
        description="Whether it's a product idea, a collaboration, or just a conversation—I'm always excited to connect with people who want to make things happen."
        primaryAction={{ text: "Let's Talk", href: "/contact" }}
        secondaryAction={{ text: "View Services", href: "/services" }}
      />
    </Layout>
  );
};

export default About;
