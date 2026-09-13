import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Jordyn has an exceptional ability to manage details without losing sight of the broader objectives. She consistently anticipated potential challenges and proposed solutions well before risks became apparent to others.\n\nIn addition to being conscientious, diligent, hardworking, and highly intelligent, Jordyn is a genuine pleasure to work with. I would not hesitate to hire her again and would do so enthusiastically given the opportunity.",
    name: "Charles Moore",
    role: "CEO, HealthMETRICS Partners (Retired)",
  },
  {
    quote:
      "Jordyn has become a real asset to Synchronyx, and that value shows in the quality of her work and the relationships she builds with our customers. What stands out most is how naturally she collaborates: she is receptive to feedback, easy to work with, and genuinely invested in the team's success. She is proactive about spotting opportunities, and has quickly become a reliable, well-integrated member of our team.",
    name: "Tamar Sapir, PhD",
    role: "CEO, Synchronyx",
  },
  {
    quote:
      "I was struck by Jordyn's attention to detail and her ability to simplify complexity. She consistently bridged the communication gap between technical and business associates.\n\nOn a more personal note, working with Jordyn was a pleasure. She is consistently positive and genuine. I hope our professional paths will cross again!",
    name: "Mark Swelstad",
    role: "Application Support Manager",
  },
  {
    quote:
      "Jordyn always followed through on what she said, every single time! I could trust that she understood program needs as well as the technical side, so I didn't need to be in the \"weeds\" of things very often. She was efficient and thorough, kept solid communication about timelines and progress, and was proactive in driving projects forward. Jordyn will see your project through!",
    name: "Elyse Dalal-Asfha",
    role: "Director of Case Management",
  },
  {
    quote:
      "You should hire Jordyn because she will not just deliver on your project, but work with you to make it better. Her commitment to communicating not just the requirements, but the context, enabled us to deliver better designs and ultimately a better product.",
    name: "Alexander Wise",
    role: "Software Engineer",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrollingRef = useRef(false);

  const goTo = (next: number, dir: number) => {
    const normalized = (next + testimonials.length) % testimonials.length;
    setDirection(dir);
    setCurrent(normalized);
  };

  const prev = () => goTo(current - 1, -1);
  const next = () => goTo(current + 1, 1);

  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => {
      goTo(current + 1, 1);
    }, 18000);
    return () => clearTimeout(timer);
  }, [current, isPaused]);

  useEffect(() => {
    const card = cardRefs.current[current];
    if (!card || !containerRef.current) return;

    isScrollingRef.current = true;
    card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });

    const timeout = setTimeout(() => {
      isScrollingRef.current = false;
    }, 600);
    return () => clearTimeout(timeout);
  }, [current]);

  const handleScroll = () => {
    if (isScrollingRef.current) return;
    const container = containerRef.current;
    if (!container) return;

    const center = container.scrollLeft + container.clientWidth / 2;
    let closest = current;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - center);
      if (distance < minDistance) {
        minDistance = distance;
        closest = i;
      }
    });

    if (closest !== current) {
      setDirection(closest > current ? 1 : -1);
      setCurrent(closest);
    }
  };

  return (
    <section
      id="testimonials"
      className="relative py-16 lg:py-20 bg-background overflow-hidden"
    >
      {/* Gradient orbs inspired by the Experience section */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-accent/10 via-secondary/10 to-primary/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            What Others Say
          </h2>
        </motion.div>
      </div>

      <div className="relative z-10 mt-8">
        <div
          ref={containerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex items-stretch overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 py-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="shrink-0 w-[7.5vw]" aria-hidden="true" />

          {testimonials.map((t, i) => {
            const isActive = i === current;
            return (
              <motion.div
                key={t.name}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`snap-center shrink-0 w-[85vw] max-w-3xl min-h-[640px] sm:min-h-[540px] lg:min-h-[480px] rounded-2xl p-8 sm:p-12 flex flex-col justify-center transition-all duration-500 ${
                  isActive
                    ? "bg-card/50 backdrop-blur-xl border border-primary/30 shadow-2xl shadow-primary/5 scale-100"
                    : "bg-card/30 backdrop-blur-md border border-primary/10 opacity-70 scale-[0.97]"
                }`}
              >
                <Quote
                  className="mx-auto mb-6 text-primary/30"
                  size={48}
                  strokeWidth={1.5}
                />
                <blockquote className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-8 whitespace-pre-wrap text-center">
                  {t.quote}
                </blockquote>
                <p className="font-bold text-foreground text-center">
                  {t.name}
                </p>
                <p className="text-sm text-primary text-center mt-1">
                  {t.role}
                </p>
              </motion.div>
            );
          })}

          <div className="shrink-0 w-[7.5vw]" aria-hidden="true" />
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i >= current ? 1 : -1)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-foreground/20"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
