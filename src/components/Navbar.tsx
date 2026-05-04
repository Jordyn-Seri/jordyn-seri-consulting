import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openKoalendar } from "@/lib/koalendar";

const navLinks = [
{ label: "Who I Help", href: "#who-i-help" },
{ label: "Services", href: "#services" },
{ label: "Impact", href: "#impact" },
{ label: "Experience", href: "#experience" },
{ label: "Testimonials", href: "#testimonials" },
{ label: "Credentials", href: "#credentials" },
{ label: "About", href: "#about" }];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openContactForm } = useContactForm();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`
      }>
      
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="#" className="text-xl font-bold tracking-tight text-secondary">
          Jordyn Seri<span className="text-olive">, PMP</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            
              {l.label}
            </a>
          )}
          <Button asChild size="sm" className="rounded-full px-6 bg-olive">
            <a href="https://koalendar.com/e/meet-with-jordyn" data-koalendar-widget data-koa-type="link">
              Schedule a Consult
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu">
          
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen &&
      <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border px-4 pb-6 pt-2">
          {navLinks.map((l) =>
        <a
          key={l.href}
          href={l.href}
          onClick={() => setMobileOpen(false)}
          className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          
              {l.label}
            </a>
        )}
          <Button asChild size="sm" className="rounded-full px-6 mt-2 w-full bg-olive">
            <a
              href="https://koalendar.com/e/meet-with-jordyn"
              data-koalendar-widget
              data-koa-type="link"
              onClick={() => setMobileOpen(false)}
            >
              Schedule a Consult
            </a>
          </Button>
        </div>
      }
    </nav>);

};

export default Navbar;