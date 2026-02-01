import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getProductById, products } from "@/data/products";
import { cn } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const Icon = product.icon;
  const otherProducts = products.filter(p => p.id !== product.id);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />

        <div className="container container-padding relative">
          {/* Back Link */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 animate-fade-up"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 animate-fade-up delay-75">
                <Icon className="h-7 w-7" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-up delay-100">
                {product.name}
              </h1>
              <p className="text-xl text-primary font-medium mb-6 animate-fade-up delay-150">
                {product.tagline}
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-up delay-200">
                {product.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
                <Button asChild size="lg" className="h-12 px-8 rounded-lg">
                  <Link to="/contact">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {/* <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-lg">
                  <Link to="/pricing">View Pricing</Link>
                </Button> */}
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-card rounded-xl p-8 border border-border animate-fade-up delay-200">
              <h3 className="text-lg font-semibold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 animate-fade-up">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-up delay-75">
              Everything you need
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-up delay-150">
              Powerful features to transform your workflow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {product.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-card rounded-xl p-6 border border-border hover-lift transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${200 + index * 75}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4">
                    <FeatureIcon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="relative rounded-2xl bg-primary px-8 py-16 md:px-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to get started with {product.name}?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 h-12 px-8 rounded-lg"
              >
                <Link to="/contact">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 h-12 px-8 rounded-lg bg-transparent"
              >
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      {otherProducts.length > 0 && (
        <section className="section-padding bg-muted/30">
          <div className="container container-padding">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Explore more products
              </h2>
              <p className="text-muted-foreground">
                Discover our other solutions for your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {otherProducts.map((p) => {
                const OtherIcon = p.icon;
                return (
                  <Link
                    key={p.id}
                    to={`/products/${p.id}`}
                    className="group flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover-lift transition-all duration-300"
                  >
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                      <OtherIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {p.tagline}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
