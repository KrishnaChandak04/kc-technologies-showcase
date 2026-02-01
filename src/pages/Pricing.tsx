import { Link } from "react-router-dom";
import { Check, ArrowRight, Zap, Users, Rocket } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const productPlans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small teams",
    price: 29,
    period: "per user/month",
    popular: false,
    features: [
      { text: "Up to 5 team members", included: true },
      { text: "Basic analytics dashboard", included: true },
      { text: "5 workflow automations", included: true },
      { text: "Email support", included: true },
      { text: "API access", included: false },
      { text: "Custom integrations", included: false },
    ],
    cta: "Start Free Trial",
    ctaVariant: "outline" as const,
  },
  {
    name: "Professional",
    description: "Best for growing businesses",
    price: 79,
    period: "per user/month",
    popular: true,
    features: [
      { text: "Up to 25 team members", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Unlimited automations", included: true },
      { text: "Priority support", included: true },
      { text: "API access", included: true },
      { text: "Custom integrations", included: true },
    ],
    cta: "Start Free Trial",
    ctaVariant: "default" as const,
  },
  {
    name: "Enterprise",
    description: "For larger organizations",
    price: null,
    priceLabel: "Custom",
    period: "tailored pricing",
    popular: false,
    features: [
      { text: "Unlimited team members", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Unlimited automations", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "API access", included: true },
      { text: "Custom integrations", included: true },
    ],
    cta: "Contact Me",
    ctaVariant: "outline" as const,
  },
];

const faqs = [
  {
    question: "Do you offer free trials?",
    answer: "Yes! All product plans include a 14-day free trial with full access. No credit card required."
  },
  {
    question: "What about custom project pricing?",
    answer: "For custom development work, I provide quotes based on project scope. Reach out with your idea and I'll give you a transparent estimate."
  },
  {
    question: "Do you offer student/startup discounts?",
    answer: "Absolutely! I'm a student founder myself, so I understand budget constraints. Let's talk about what works for you."
  },
  {
    question: "What payment methods do you accept?",
    answer: "For products: all major credit cards. For services: we can discuss payment terms that work for both of us."
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        
        <div className="container container-padding relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
              Pricing
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up delay-75">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-150">
              Choose a plan for my products, or reach out for custom project pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Product Pricing */}
      <section className="pb-20">
        <div className="container container-padding">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">Product Plans</h2>
            <p className="text-muted-foreground">For Analytics Pro & Workflow Hub</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {productPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={cn(
                  "relative rounded-xl border bg-card p-8",
                  plan.popular 
                    ? "border-primary shadow-lg ring-1 ring-primary" 
                    : "border-border",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    {plan.price !== null ? (
                      <>
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-muted-foreground text-sm">/month</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold">{plan.priceLabel}</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{plan.period}</p>
                </div>

                <Button 
                  asChild 
                  variant={plan.ctaVariant} 
                  className={cn("w-full mb-6", plan.popular && "bg-primary hover:bg-primary/90")}
                >
                  <Link to="/contact">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={cn(
                        "h-5 w-5 flex-shrink-0 mt-0.5",
                        feature.included ? "text-primary" : "text-muted-foreground/30"
                      )} />
                      <span className={cn(
                        "text-sm",
                        feature.included ? "text-foreground" : "text-muted-foreground/50 line-through"
                      )}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Projects */}
      <section className="pb-20">
        <div className="container container-padding">
          <div className="max-w-4xl mx-auto bg-muted/30 rounded-2xl p-8 md:p-12 border border-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Rocket className="h-4 w-4" />
                  Custom Projects
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need something built?</h2>
                <p className="text-muted-foreground mb-6">
                  For custom development projects, I provide transparent pricing based on scope 
                  and complexity. Let's discuss your idea and I'll give you a fair quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="h-12 px-8 rounded-lg">
                    <Link to="/contact">
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-lg">
                    <Link to="/services">View Services</Link>
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, label: "Fast Turnaround" },
                  { icon: Users, label: "Flexible Terms" },
                  { icon: Check, label: "Transparent Pricing" },
                  { icon: Rocket, label: "Quality Work" }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="bg-card rounded-xl p-4 border border-border text-center">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-2">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-medium">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-up delay-75">
              Frequently asked questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border animate-fade-up"
                style={{ animationDelay: `${200 + index * 50}ms` }}
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="relative rounded-2xl bg-primary px-8 py-16 md:px-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Whether you want to use my products or build something custom, let's chat.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 h-12 px-8 rounded-lg"
              >
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 h-12 px-8 rounded-lg bg-transparent"
              >
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
