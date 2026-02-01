import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Code, Users, TrendingUp, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";
import { cn } from "@/lib/utils";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  technologies: string[];
  duration: string;
  featured: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: "orderly-dms",
    title: "Orderly - Distribution Management System",
    client: "krishbuilds",
    category: "Enterprise SaaS • Beta Testing",
    description: "A complete order and inventory management ecosystem with a web admin portal, salesperson mobile app, and delivery tracking app—currently in beta with real distributors.",
    challenge: "Distributors were struggling with disconnected systems for orders, inventory, and deliveries. Manual processes led to stockouts, delivery delays, and poor visibility across the supply chain.",
    solution: "Developed a unified 3-platform solution: React web dashboard for admins with real-time analytics, React Native apps for sales reps (order capture, route planning) and delivery personnel (proof of delivery, GPS tracking).",
    results: [
      { metric: "Order accuracy", value: "99.2%" },
      { metric: "Delivery time", value: "-40%" },
      { metric: "Stock visibility", value: "Real-time" }
    ],
    technologies: ["React", "React Native", "Django", "FastAPI", "Python", "PostgreSQL"],
    duration: "Beta Testing",
    featured: true
  },
  {
    id: "dilcare-eldercare",
    title: "DilCare - AI-Powered Eldercare Companion",
    client: "krishbuilds",
    category: "HealthTech • Beta Testing",
    description: "An emotionally intelligent eldercare ecosystem that bridges the care gap for aging parents, combining AI health companions with family connectivity and community support.",
    challenge: "75% of adult children worry daily about aging parents' health. 50% of chronic patients miss life-saving doses, and 1 in 3 seniors fall annually while alone. Existing health apps feel clinical and intimidating.",
    solution: "Built a React Native app with voice-first AI interactions, parent-child account linking for remote monitoring, automated medication reminders, emergency alerts, and an emotional-first UX that feels calm and supportive rather than clinical.",
    results: [
      { metric: "Medication adherence", value: "+85%" },
      { metric: "Family peace of mind", value: "4.9★" },
      { metric: "Daily active users", value: "92%" }
    ],
    technologies: ["React Native", "Python", "Django", "FastAPI", "AI/ML", "Voice Recognition"],
    duration: "Beta Testing",
    featured: true
  },
  {
    id: "orderly-mobile",
    title: "Orderly Mobile Suite",
    client: "krishbuilds",
    category: "Mobile Apps • Beta Testing",
    description: "Companion mobile applications for Orderly DMS—empowering field sales and delivery teams with offline-capable, GPS-enabled tools.",
    challenge: "Field teams needed reliable mobile tools that work in areas with poor connectivity while staying synced with the central system.",
    solution: "Built offline-first React Native apps with background sync, route optimization, digital signatures for proof of delivery, and real-time inventory checks.",
    results: [
      { metric: "Field productivity", value: "+60%" },
      { metric: "Offline reliability", value: "100%" },
      { metric: "Route efficiency", value: "+35%" }
    ],
    technologies: ["React Native", "Python", "FastAPI", "Offline Storage", "GPS"],
    duration: "Beta Testing",
    featured: false
  }
];

const CaseStudies = () => {
  const featuredStudies = caseStudies.filter(s => s.featured);
  const otherStudies = caseStudies.filter(s => !s.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        
        <div className="container container-padding relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
              Case Studies
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-up delay-75">
              What Our Beta Testers Say
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-150">
              Real feedback from real-world test users. These results are from our beta testing phase 
              with actual distributors and families using our products.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="pb-20">
        <div className="container container-padding">
          <div className="space-y-12 max-w-5xl mx-auto">
            {featuredStudies.map((study, index) => (
              <div
                key={study.id}
                className={cn(
                  "grid lg:grid-cols-2 gap-8 items-start",
                  "animate-fade-up"
                )}
                style={{ animationDelay: `${150 + index * 100}ms` }}
              >
                {/* Image placeholder */}
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-border flex items-center justify-center">
                  <div className="text-center">
                    <Code className="h-12 w-12 text-primary/40 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Project Screenshot</p>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {study.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {study.duration}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">by {study.client}</p>
                  <p className="text-muted-foreground mb-6">{study.description}</p>

                  {/* Results from beta testers */}
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">Beta Tester Results</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result) => (
                      <div key={result.metric} className="text-center p-3 rounded-lg bg-muted/50">
                        <div className="text-lg font-bold text-primary">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 rounded bg-card border border-border text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button asChild variant="outline" size="sm">
                    <Link to="/contact">
                      Discuss Similar Project
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {otherStudies.length > 0 && (
        <section className="pb-20">
          <div className="container container-padding">
            <h2 className="text-2xl font-bold mb-8 text-center">More Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {otherStudies.map((study, index) => (
                <div
                  key={study.id}
                  className="bg-card rounded-xl p-6 border border-border hover-lift transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${200 + index * 75}ms` }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {study.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-0.5 rounded bg-muted text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-muted text-xs">
                        +{study.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Beta Testing Impact</h2>
              <p className="text-muted-foreground">Results from our real-world beta testing phase</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, value: "2", label: "Products Built" },
                { icon: Code, value: "5+", label: "Apps Delivered" },
                { icon: TrendingUp, value: "100%", label: "Client Satisfaction" },
                { icon: Clock, value: "<24h", label: "Response Time" }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className="bg-card rounded-xl p-6 border border-border text-center animate-fade-up"
                    style={{ animationDelay: `${200 + index * 75}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      <CTASection
        title="Want results like these?"
        description="Let's discuss your project and see how I can help you achieve your goals."
        primaryAction={{ text: "Start a Project", href: "/contact" }}
        secondaryAction={{ text: "View Services", href: "/services" }}
      />
    </Layout>
  );
};

export default CaseStudies;
