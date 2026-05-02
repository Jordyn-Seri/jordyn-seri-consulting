import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import womenApplyingAiLogo from "@/assets/women-applying-ai.png";
import healthTechNerdsLogo from "@/assets/health-tech-nerds.png";
import whcmLogo from "@/assets/whcm.png";
import hbaLogo from "@/assets/hba.png";
import pmiLogo from "@/assets/pmi.png";

const certifications = [
{ label: "PMP", icon: Award },
{ label: "Monday.com Training Certificate", icon: Calendar }];


const skills = [
"Automation & Strategy",
"Healthcare Industry Compliance",
"Continuous Improvement",
"Dashboard Development",
"Stakeholder Management",
"Data Systems Design"];


const memberships = [
{ name: "Healthcare Businesswomen's Association", logo: hbaLogo },
{ name: "Women Applying AI", logo: womenApplyingAiLogo },
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
            
            <h3 className="font-bold text-secondary mb-6 text-xl">Certifications</h3>
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