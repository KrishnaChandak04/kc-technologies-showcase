import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container section-padding container-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary transition-transform group-hover:scale-105">
                <span className="text-sm font-bold text-white">kb</span>
              </div>
              <span className="text-lg font-semibold">krishbuilds</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Student founder building software products and helping businesses bring their ideas to life.
            </p>
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
                    className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Products & Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Work</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { name: "Products", path: "/products" },
                { name: "Services", path: "/services" },
                { name: "Case Studies", path: "/case-studies" }
              ].map((item) => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "LinkedIn", path: "https://www.linkedin.com/in/krishna-chandak-85294432b" },
                { name: "GitHub", path: "https://github.com/krishnaChandak044" }
              ].map((item) => (
                item.path.startsWith("/") ? (
                  <Link 
                    key={item.name}
                    to={item.path} 
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a 
                    key={item.name}
                    href={item.path} 
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h4 className="text-sm font-semibold">Stay Updated</h4>
            <p className="text-sm text-background/70">
              Get updates on new products and projects.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 h-9 text-sm focus:border-primary"
              />
              <Button type="submit" size="sm" className="h-9 px-4">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/50 flex items-center gap-1">
              © {new Date().getFullYear()} krishbuilds. Built with{" "}
              <Heart className="h-3 w-3 text-red-400 fill-red-400" />
              by a student founder.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-background/50 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-background/50 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
