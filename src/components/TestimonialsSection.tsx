import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Jordyn has an exceptional ability to manage details without losing sight of the broader objectives. She consistently anticipated potential challenges and proposed solutions well before risks became apparent to others.\n\nIn addition to being conscientious, diligent, hardworking, and highly intelligent, Jordyn is a genuine pleasure to work with. I would not hesitate to hire her again and would do so enthusiastically given the opportunity.",
    name: "Charles Moore",
    role: "CEO, HealthMETRICS Partners (Retired)"
  },
  {
    quote:
      "Jordyn has become a real asset to Synchronyx, and that value shows in the quality of her work and the relationships she builds with our customers. What stands out most is how naturally she collaborates: she is receptive to feedback, easy to work with, and genuinely invested in the team's success. She is proactive about spotting opportunities, and has quickly become a reliable, well-integrated member of our team.",
    name: "Tamar Sapir, PhD",
    role: "CEO, Synchronyx"
  },
  {
    quote:
      "I was struck by Jordyn's attention to detail and her ability to simplify complexity. She consistently bridged the communication gap between technical and business associates.\n\nOn a more personal note, working with Jordyn was a pleasure. She is consistently positive and genuine. I hope our professional paths will cross again!",
    name: "Mark Swelstad",
    role: "Application Support Manager"
  },
  {
    quote: "Jordyn always followed through on what she said, every single time! I could trust that she understood program needs as well as the technical side, so I didn't need to be in the \"weeds\" of things very often. She was efficient and thorough, kept solid communication about timelines and progress, and was proactive in driving projects forward. Jordyn will see your project through!",
    name: "Elyse Dalal-Asfha",
    role: "Director of Case Management"
  },
  {
    quote: "You should hire Jordyn because she will not just deliver on your project, but work with you to make it better. Her commitment to communicating not just the requirements, but the context, enabled us to deliver better designs and ultimately a better product.",
    name: "Alexander Wise",
    role: "Software Engineer"
  }
];


const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (next: number, dir: number) => {
    setDirection(dir);
    setCurrent((next + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 18000);
    return () => clearTimeout(timer);
  }, [current]);

  const prev = () => goTo(current - 1, -1);
  const next = () => goTo(current + 1, 1);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
  };

  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mt-3">What Others Say

          </h2>
        </motion.div>

        <div className="relative">
          <div className="relative min-h-[640px] sm:min-h-[520px] lg:min-h-[460px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                dragMomentum={false}
                dragTransition={{ bounceStiffness: 1000, bounceDamping: 60 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50 || info.velocity.x < -300) next();
                  else if (info.offset.x > 50 || info.velocity.x > 300) prev();
                }}
                className="absolute inset-0 bg-card/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-center border border-primary/10 touch-pan-y cursor-grab active:cursor-grabbing select-none flex flex-col justify-center">
                
                <Quote className="mx-auto mb-6 text-primary/40" size={40} />
                <blockquote className="text-lg sm:text-xl text-secondary-foreground/90 leading-relaxed italic mb-8 whitespace-pre-wrap">
                  "{testimonials[current].quote}"
                </blockquote>
                <p className="font-bold text-secondary-foreground">{testimonials[current].name}</p>
                <p className="text-sm text-primary">{testimonials[current].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-secondary-foreground hover:bg-primary/10 transition-colors"
              aria-label="Previous testimonial">
              
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) =>
              <button
                key={i}
                onClick={() => goTo(i, i >= current ? 1 : -1)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-primary" : "bg-secondary-foreground/20"}`
                }
                aria-label={`Go to testimonial ${i + 1}`} />

              )}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-secondary-foreground hover:bg-primary/10 transition-colors"
              aria-label="Next testimonial">
              
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;