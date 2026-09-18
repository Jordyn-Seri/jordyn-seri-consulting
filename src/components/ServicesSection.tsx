import { motion } from "framer-motion";
import { ClipboardCheck, UserCog, Settings } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description:
      "Traditional PM support for project implementations — planning, execution, and delivery.",
  },
  {
    icon: UserCog,
    title: "Chief of Staff",
    description:
      "Executive assistance, strategic partnership, and cross-functional project management.",
  },
  {
    icon: Settings,
    title: "Operational Support",
    description:
      "Workflow optimization, process automation, and systems design for efficiency.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 lg:py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-primary">
            What I Offer
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto divide-y divide-border"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="flex items-start gap-6 py-8 first:pt-0 last:pb-0"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <service.icon className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-bold text-secondary text-xl mb-1">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <p className="text-muted-foreground leading-relaxed text-lg">
            For all of my services, working together follows the same proven approach:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mt-4 mb-6 px-4">
            {["Assess", "Strategize", "Implement"].map((step, i) => (
              <div key={step} className="flex items-center gap-2 sm:gap-3">
                <span className="font-bold text-primary text-lg sm:text-xl">{step}</span>
                {i < 2 && <span className="text-muted-foreground text-lg sm:text-xl">→</span>}
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            I'll work with you to audit your current processes and pain points, propose potential solutions, and then collaborate with your existing teams to deliver a result that will have you thinking,
            <br />
            <span className="italic text-secondary font-medium">"I wish we did this sooner."</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
