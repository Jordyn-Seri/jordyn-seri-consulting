import { motion } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";
import influentialWomenBadge from "@/assets/influential-women-verified.png";
import pmpBadge from "@/assets/pmp-certification.png";
import womenApplyingAiLogo from "@/assets/women-applying-ai.png";
import healthTechNerdsLogo from "@/assets/health-tech-nerds.png";
import whcmLogo from "@/assets/whcm.png";
import hbaLogo from "@/assets/hba.png";
import pmiLogo from "@/assets/pmi.png";

const certifications = [
{ label: "Monday.com Training Certificate", icon: Calendar }];

const badges = [
  {
    name: "Project Management Professional",
    label: "PMP Certification",
    image: pmpBadge,
    href: "https://www.credly.com/badges/108a9151-a612-41ec-8363-cd9baab673da/public_url",
  },
  {
    name: "Influential Women Verified",
    label: "Influential Women",
    image: influentialWomenBadge,
    href: "https://influentialwomen.com/profile/jordyn-seri",
  },
];

const skills = [
"Automation & Strategy",
"Healthcare Industry Compliance",
"Continuous Improvement",
"Dashboard Development",
"Stakeholder Management",
"Data Systems Design"];


const memberships = [
{ name: "Women Applying AI", logo: womenApplyingAiLogo },
{ name: "Healthcare Businesswomen's Association", logo: hbaLogo },
{ name: "Health Tech Nerds", logo: healthTechNerdsLogo },
{ name: "Women in Health Care Management", logo: whcmLogo },
{ name: "Project Management Institute", logo: pmiLogo }];


const CredentialsSection = () => {
  return (
    <section id="credentials" className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mt-3">
            Credentials
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left: Certs & Memberships */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            
            <h3 className="font-bold text-secondary mb-6 text-xl">Certifications & Recognition</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {badges.map((badge) => (
                <a
                  key={badge.name}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${badge.name} — view verified profile (opens in a new tab)`}
                  className="group flex min-w-0 flex-col items-center gap-4 rounded-lg border border-border bg-card/50 px-3 py-5 transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <img
                    src={badge.image}
                    alt={badge.name}
                    width={160}
                    height={160}
                    loading="lazy"
                    className="aspect-square w-full max-w-40 object-contain"
                  />
                  <span className="flex items-center justify-center gap-1 text-center text-sm font-semibold text-foreground group-hover:text-primary">
                    {badge.label}
                    <ArrowUpRight size={14} className="shrink-0 text-primary" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mb-10">
              {certifications.map((cert) =>
              <div
                key={cert.label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-olive/20 bg-olive/5">
                
                  <cert.icon size={18} className="text-primary" />
                  <span className="text-sm font-semibold text-secondary">{cert.label}</span>
                </div>
              )}
            </div>

            <h3 className="font-bold text-secondary mb-6 text-xl">Memberships</h3>
            <div className="flex flex-col gap-3">
              {memberships.map((m) =>
              <div
                key={m.name}
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-olive/20 bg-olive/5">
                
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-white p-1">
                    <img src={m.logo} alt={m.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm font-semibold text-secondary">{m.name}</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right: Video & Core Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            
            <h3 className="font-bold text-secondary mb-6 text-xl">Featured Video</h3>
            <div className="aspect-video rounded-2xl overflow-hidden border border-border shadow-lg mb-10">
              <iframe
                src="https://www.youtube.com/embed/wVxn60tBu4c"
                title="Jordyn Seri - Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full" />
              
            </div>

            <h3 className="font-bold text-secondary mb-6 text-xl">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) =>
              <span
                key={skill}
                className="px-4 py-2 rounded-lg text-sm font-medium text-accent-foreground bg-primary">
                
                  {skill}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default CredentialsSection;