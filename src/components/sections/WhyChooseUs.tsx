import { Lightbulb, Shield, Users, Rocket } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies to deliver solutions that set you apart."
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Enterprise-grade security and 99.9% uptime you can depend on."
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our priority. We build what matters to you."
  },
  {
    icon: Rocket,
    title: "Scalability",
    description: "Solutions that grow alongside your business needs."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection>
            <p className="section-label">Why krishbuilds</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mb-4">Built for success</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="section-description mx-auto">
              We're not just building software—we're building partnerships that drive results.
            </p>
          </AnimatedSection>
        </div>

        {/* Values Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" staggerDelay={0.1}>
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <StaggerItem key={value.title}>
                <div className="relative p-6 rounded-xl bg-card border border-border card-interactive h-full">
                  {/* Icon */}
                  <div className="icon-container icon-container-sm mb-4">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyChooseUs;
