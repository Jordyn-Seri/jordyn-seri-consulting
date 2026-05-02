import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useContactForm } from "@/contexts/ContactFormContext";

const HeroSection = () => {
  const { openContactForm } = useContactForm();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-olive/10" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-olive/5 blur-3xl" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full bg-accent/20 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}>
            
            <span className="inline-block px-4 py-1.5 rounded-full bg-olive/10 text-sm font-semibold mb-6 tracking-wide text-olive">
              Hands-On Independent Consultant
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-secondary tracking-tight">
            
            I develop responsive, targeted solutions.{" "}
            <span className="text-olive">You focus on the work that matters.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Hands-on independent consultant supporting startups, clinics, and community-based healthcare organizations. Grounded in the realities of patient care and operational complexity, I use strategic thinking, automation, and artificial intelligence to solve your most pressing challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4">
            
            <Button size="lg" className="rounded-full px-8 text-base gap-2 bg-olive border border-secondary-foreground" onClick={openContactForm}>
                Schedule a Consult <ArrowRight size={18} />
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base border-secondary/20">
              <a href="#impact" className="bg-primary-foreground border border-secondary">See My Impact</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default HeroSection;