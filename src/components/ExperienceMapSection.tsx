import { motion } from "framer-motion";
import { Search, Building2, Cable, Crosshair, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Node {
  icon: LucideIcon;
  title: string;
  context: string;
}

const nodes: Node[] = [
  {
    icon: Search,
    title: "Front-Line Care Navigation",
    context:
      "Background in direct patient navigation for Medicaid. Navigating care in shelters and clinics in collaboration with clinicians to drive holistic outcomes.",
  },
  {
    icon: Building2,
    title: "Operations & Data Management",
    context:
      'My time "under the hood" of healthcare, managing billing systems, data workflows, and daily departmental operations.',
  },
  {
    icon: Cable,
    title: "The Technical-Clinical Bridge",
    context:
      "Working with startups and clinics to integrate technology into existing clinical workflows.",
  },
  {
    icon: Crosshair,
    title: "Clinical Strategy",
    context:
      "My work as a consultant identifying clinic-level inefficiencies and architecting practical solutions.",
  },
  {
    icon: Globe,
    title: "Statewide Systems & Network Management",
    context:
      "High-level oversight in managing ACO networks and statewide Medicaid program coordination.",
  },
];

const nodeColorClasses = [
  { icon: "bg-primary/15 text-primary", stub: "bg-primary/40" },
  { icon: "bg-primary/15 text-primary", stub: "bg-primary/40" },
  { icon: "bg-secondary/15 text-secondary", stub: "bg-secondary/40" },
  { icon: "bg-secondary/15 text-secondary", stub: "bg-secondary/40" },
  { icon: "bg-accent/15 text-accent", stub: "bg-accent/40" },
];

const DesktopTimeline = () => (
  <div className="hidden lg:block relative max-w-4xl mx-auto">
    {/* Centered vertical gradient line */}
    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50" />

    <div className="space-y-16 py-4">
      {nodes.map((node, i) => {
        const colors = nodeColorClasses[i];
        const isLeft = i % 2 === 0; // odd nodes (1,3,5) text left; even (2,4) text right

        return (
          <motion.div
            key={node.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex items-center"
          >
            {/* Left text card */}
            {isLeft ? (
              <div className="w-[calc(50%-2rem)] pr-6 text-right">
                <h4 className="font-semibold text-foreground text-base mb-1">
                  {node.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {node.context}
                </p>
              </div>
            ) : (
              <div className="w-[calc(50%-2rem)]" />
            )}

            {/* Center: stub + icon circle + stub */}
            <div className="flex items-center justify-center w-16 relative">
              {/* Left stub */}
              <div className={`absolute right-[calc(50%+1.75rem)] h-0.5 w-6 ${colors.stub}`} />
              {/* Icon circle */}
              <div
                className={`w-14 h-14 rounded-full ${colors.icon} flex items-center justify-center z-10 shrink-0`}
              >
                <node.icon size={24} />
              </div>
              {/* Right stub */}
              <div className={`absolute left-[calc(50%+1.75rem)] h-0.5 w-6 ${colors.stub}`} />
            </div>

            {/* Right text card */}
            {!isLeft ? (
              <div className="w-[calc(50%-2rem)] pl-6">
                <h4 className="font-semibold text-foreground text-base mb-1">
                  {node.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {node.context}
                </p>
              </div>
            ) : (
              <div className="w-[calc(50%-2rem)]" />
            )}
          </motion.div>
        );
      })}
    </div>
  </div>
);

const MobileTimeline = () => (
  <div className="lg:hidden relative max-w-md mx-auto pl-14">
    {/* Vertical gradient line */}
    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50" />

    <div className="space-y-10">
      {nodes.map((node, i) => {
        const colors = nodeColorClasses[i];
        return (
          <motion.div
            key={node.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative"
          >
            <div
              className={`absolute left-0 top-0 ml-5 -translate-x-1/2 w-10 h-10 rounded-full ${colors.icon} flex items-center justify-center`}
            >
              <node.icon size={18} />
            </div>

            <div className="ml-2">
              <h4 className="font-semibold text-foreground text-sm leading-tight mb-1">
                {node.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {node.context}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

const ExperienceMapSection = () => (
  <section id="experience" className="py-16 lg:py-20 bg-card">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          Healthcare from Every Angle
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          I've been the patient advocate, the operator, and the strategist.
          That's why I know where things break, and how to put them back
          together.
        </p>
      </motion.div>

      <DesktopTimeline />
      <MobileTimeline />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-muted-foreground mt-14 max-w-2xl mx-auto italic"
      >
        This range is why I can spot what's broken. And actually help you fix it.
      </motion.p>
    </div>
  </section>
);

export default ExperienceMapSection;
