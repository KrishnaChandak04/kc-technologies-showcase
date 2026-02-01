import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5 + i * 0.1,
      ease: "easeOut" as const,
    },
  }),
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
      
      {/* Subtle orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="orb orb-primary w-[600px] h-[600px] -top-64 -right-64"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.35, 0.45, 0.35],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="orb orb-secondary w-[400px] h-[400px] top-1/2 -left-48"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container relative container-padding">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Founder badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium text-primary mb-8"
            variants={itemVariants}
          >
            <Sparkles className="h-4 w-4" />
            Student Founder • Building the Future
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            variants={itemVariants}
          >
            I build products that{" "}
            <span className="text-gradient">solve real problems</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={itemVariants}
          >
            Hey, I'm a student entrepreneur building software products and helping 
            businesses bring their ideas to life. From concept to launch—let's create something great together.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            variants={itemVariants}
          >
            <Button asChild size="lg" className="h-12 px-8 text-base rounded-lg group">
              <Link to="/products">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base rounded-lg">
              <Link to="/contact">Let's Collaborate</Link>
            </Button>
          </motion.div>

          {/* What I do cards */}
          <motion.div 
            className="pt-10 border-t border-border"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Code, label: "Software Products", desc: "SaaS & Web Apps" },
                { icon: Rocket, label: "Client Projects", desc: "Custom Solutions" },
                { icon: Sparkles, label: "Open to Collabs", desc: "Let's Build Together" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={item.label} 
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-interactive"
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="icon-container icon-container-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-foreground">{item.label}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
