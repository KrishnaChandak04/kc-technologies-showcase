import { Mail, Clock, Linkedin, Twitter, Github, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/forms/ContactForm";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const contactInfo = [
  { icon: Mail, title: "Email", content: "krishnachandak444@gmail.com", href: "mailto:krishnachandak444@gmail.com" },
  { icon: MessageSquare, title: "Phone", content: "+91 7700099914", href: "tel:+917700099914" },
  { icon: Clock, title: "Availability", content: "Open to projects & collaborations", href: null }
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/krishna-chandak-85294432b", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/krishnaChandak044", label: "GitHub" }
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        
        <div className="container container-padding relative">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <p className="section-label">Get in Touch</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="mb-6">Let's talk about your project</h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="section-description mx-auto">
                Have an idea you want to build? Looking for a collaborator? Or just want to chat? 
                I'd love to hear from you.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20">
        <div className="container container-padding">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection>
                <h2 className="text-xl font-semibold mb-4">Ways to reach me</h2>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels.
                </p>
              </AnimatedSection>

              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const Wrapper = item.href ? "a" : "div";
                  const wrapperProps = item.href ? { href: item.href } : {};

                  return (
                    <StaggerItem key={item.title}>
                      <Wrapper
                        {...wrapperProps}
                        className={cn(
                          "flex items-start gap-4 p-4 rounded-xl bg-card border border-border",
                          item.href && "hover:border-primary/50 transition-colors cursor-pointer"
                        )}
                      >
                        <div className="icon-container icon-container-sm">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-0.5">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.content}</p>
                        </div>
                      </Wrapper>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>

              {/* Social Links */}
              <AnimatedSection delay={0.4}>
                <h4 className="text-sm font-semibold mb-3">Connect on social</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="h-4 w-4" />
                      </motion.a>
                    );
                  })}
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection delay={0.2} className="lg:col-span-3">
              <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <h2 className="text-xl font-semibold mb-2">Send me a message</h2>
                <p className="text-muted-foreground mb-6">
                  Tell me about your project or idea.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <AnimatedSection>
              <p className="section-label">FAQ</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="mb-4">Common questions</h2>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
            {[
              { q: "What types of projects do you take on?", a: "I work on web apps, SaaS products, MVPs, and custom software. If it can be built with modern web tech, I'm interested!" },
              { q: "How quickly can you start?", a: "It depends on my current workload, but I usually can start within 1-2 weeks. Let's discuss your timeline." },
              { q: "Do you work with startups?", a: "Absolutely! I love working with other founders and early-stage startups. We can discuss flexible arrangements." },
              { q: "Are you open to equity/partnership?", a: "For the right project, yes! I'm especially interested in collaborating with other ambitious founders." }
            ].map((faq, index) => (
              <StaggerItem key={index}>
                <div className="bg-card rounded-xl p-6 border border-border h-full">
                  <h4 className="font-semibold mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
