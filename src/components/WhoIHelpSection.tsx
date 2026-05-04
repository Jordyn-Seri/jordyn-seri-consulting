import { motion } from "framer-motion";
import { Building2, Stethoscope, Rocket, Briefcase } from "lucide-react";

const cards = [
{
  icon: Rocket,
  title: "Startups",
  description:
  "Building scalable workflows and dashboards to turn customer insights into better products."
},
{
  icon: Stethoscope,
  title: "Clinics",
  description:
  "Plan and implement automations for EHR documentation to reduce errors and improve value-based payment performance."
},
  {
    icon: Building2,
    title: "Community Orgs",
    description:
      "Collaborate as a dedicated resource to optimize internal processes and efficiency, ensuring your team’s energy and resources remain focused on your mission."
  },
  {
    icon: Briefcase,
    title: "Consulting Firms",
    description:
      "Partner as a contract resource to extend your team's capacity across startup, clinic, and community-org engagements."
  }
];


const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const WhoIHelpSection = () => {
  return (
    <section id="who-i-help" className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          

          
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-primary">
            Who I Help
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          
          {cards.map((card) =>
          <motion.div
            key={card.title}
            variants={item}
            className="group relative rounded-2xl border border-border bg-background p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
            
              <div className="w-14 h-14 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors items-center justify-center flex flex-row shadow-none border-secondary border-2 border-none">
                <card.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-secondary mb-3 text-2xl text-left">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

};

export default WhoIHelpSection;