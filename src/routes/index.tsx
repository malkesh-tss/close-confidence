import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Calendar,
  MessageCircle,
  Sparkles,
  Target,
  Users,
  Zap,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Reveal, fadeUp, stagger } from "@/components/landing/Section";
import logo from "@/assets/scale-summit-logo.png";
import darrin from "@/assets/darrin-guttman.jpeg";
import gina from "@/assets/gina.webp";
import kathy from "@/assets/kathy.jpg";
import steve from "@/assets/steve.webp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Close With Confidence | Sales Training for Founders" },
      {
        name: "description",
        content:
          "A 4-session sales training built for founders. Build a personalized selling system to close cold prospects with confidence. Led by Darrin Guttman.",
      },
      { property: "og:title", content: "Close With Confidence | The Scale Summit" },
      {
        property: "og:description",
        content:
          "Stop winging your sales calls. Start closing them. Build your personalized selling system in 4 working sessions.",
      },
    ],
  }),
});

const REGISTER_URL = "#register";
const ADVISOR_URL = "#contact";

function PrimaryCTA({ label = "Register Now" }: { label?: string }) {
  return (
    <Button asChild variant="gold" size="xl" className="group">
      <a href={REGISTER_URL}>
        {label}
        <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
      </a>
    </Button>
  );
}

function AdvisorCTA() {
  return (
    <a
      href={ADVISOR_URL}
      className="inline-flex items-center gap-2 text-navy font-semibold underline decoration-gold decoration-2 underline-offset-4 hover:text-gold transition-colors"
    >
      <MessageCircle className="h-4 w-4" />
      Speak to our Member Success Advisor
    </a>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex items-center justify-between py-6">
        <img src={logo} alt="The Scale Summit" className="h-10 w-auto" />
        <a
          href={REGISTER_URL}
          className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-warm-white/90 hover:text-gold transition-colors"
        >
          Register <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden bg-navy-deep text-warm-white">
      <Nav />
      {/* Background glow */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gold/20 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-navy/60 blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pt-36 pb-28 md:pt-44 md:pb-36">
        <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold"
          >
            <Sparkles className="h-3.5 w-3.5" /> Sales Training for Founders
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Close With{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-gold">Confidence</span>
              <span className="absolute inset-x-0 bottom-2 h-3 bg-gold/20 -skew-x-6" />
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-warm-white/75 max-w-2xl leading-relaxed">
            Built for founders who never got formal sales training — and the ones who know they need a
            real strategy to win cold prospects.
          </motion.p>

          <motion.p variants={fadeUp} className="mt-4 text-xl md:text-2xl font-display italic text-warm-white">
            Stop winging your sales calls. Start closing them.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6">
            <PrimaryCTA />
            <a
              href={ADVISOR_URL}
              className="inline-flex items-center gap-2 text-warm-white/90 hover:text-gold font-semibold transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Have questions? Talk to an Advisor
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

const WHY_QUESTIONS = [
  { icon: Target, q: "What are the actual steps of a sales process?" },
  { icon: Users, q: "How do I run a Discovery Call that sets up the close?" },
  { icon: Zap, q: "How do I handle objections without freezing up?" },
  { icon: MessageCircle, q: "Why do I get ghosted when I swore the deal was done?" },
];

function WhySection() {
  return (
    <Section className="bg-background">
      <div className="grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Why This Course Matters</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-navy leading-tight">
            You're the expert. <span className="italic text-warm-gray">But closing pays the bills.</span>
          </h2>
          <p className="mt-6 text-lg text-warm-gray leading-relaxed">
            For a lot of founders, that's a terrifying thought. It doesn't have to be. Close With
            Confidence gives you the clarity and the strategy to finally answer the questions that
            keep founders stuck.
          </p>
          <p className="mt-6 text-lg font-semibold text-navy">
            Master these, and selling stops feeling like guesswork. It starts feeling like a system.
          </p>
          <div className="mt-8"><PrimaryCTA /></div>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
        >
          {WHY_QUESTIONS.map(({ icon: Icon, q }) => (
            <motion.div
              key={q}
              variants={fadeUp}
              className="group rounded-2xl border border-border bg-card p-6 hover:border-gold hover:shadow-lg transition-all"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-lg font-semibold text-navy leading-snug">{q}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

const LEARN_ITEMS = [
  "Create instant trust and credibility with cold prospects",
  "Set up the close right inside your Discovery Call",
  "Handle objections like a pro",
  "Present your proposal and close without the awkwardness",
];

function WhatYouLearn() {
  return (
    <Section className="bg-navy-deep text-warm-white overflow-hidden relative">
      <div className="absolute top-1/2 -right-32 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[100px] -translate-y-1/2" />
      <div className="relative grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">What You'll Learn</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Closing cold leads is where most founders <span className="italic text-gold">fall apart.</span>
          </h2>
          <p className="mt-6 text-lg text-warm-white/75 leading-relaxed">
            This 4-session course walks you through building a personalized selling system designed
            to close cold prospects. You'll finish ready to run your very next sales call with total
            confidence.
          </p>
          <div className="mt-8 space-y-2 font-display text-2xl italic text-warm-white/90">
            <p>No more guessing.</p>
            <p>No more uncertainty.</p>
            <p>No more wondering how to grow your business.</p>
          </div>
        </Reveal>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="space-y-4"
        >
          {LEARN_ITEMS.map((item) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-2xl border border-warm-white/10 bg-warm-white/5 backdrop-blur p-5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-navy-deep">
                <Check className="h-5 w-5" strokeWidth={3} />
              </div>
              <span className="text-lg leading-snug pt-1">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <Reveal className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-gold/30 bg-gradient-to-r from-gold/10 to-transparent p-8">
        <div>
          <h3 className="text-2xl font-bold">Ready to take the next step?</h3>
          <p className="mt-1 text-warm-white/70">Have questions? <AdvisorCTA /></p>
        </div>
        <PrimaryCTA />
      </Reveal>
    </Section>
  );
}

const SESSIONS = [
  {
    n: "01",
    title: "Build Your Personal Discovery Call",
    date: "June 16, 2026",
  },
  {
    n: "02",
    title: "How to Proactively Overcome Objections",
    date: "June 23, 2026",
  },
  {
    n: "03",
    title: "The Art of Storytelling, Presenting Your Proposal, and Closing the Sale",
    date: "June 30, 2026",
  },
  {
    n: "04",
    title: "Build the Steps of Your Personalized Sales Process",
    date: "July 7, 2026",
  },
];

function Schedule() {
  return (
    <Section className="bg-background" id="schedule">
      <Reveal className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Course Schedule & Outline</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-navy leading-tight">
          Four working sessions. <span className="italic text-warm-gray">You build as you learn.</span>
        </h2>
        <p className="mt-6 text-lg text-warm-gray leading-relaxed">
          Led by a professional sales trainer, you'll work through the Close With Confidence
          Playbook to construct your personalized selling system step by step — with real-time
          feedback from a room of fellow business owners.
        </p>
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mt-14 grid gap-5"
      >
        {SESSIONS.map((s) => (
          <motion.div
            key={s.n}
            variants={fadeUp}
            className="group grid md:grid-cols-12 gap-6 items-center rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-gold hover:shadow-xl transition-all"
          >
            <div className="md:col-span-2 flex items-center gap-4">
              <span className="font-display text-5xl text-gold/40 group-hover:text-gold transition-colors">
                {s.n}
              </span>
              <div className="h-px flex-1 bg-border md:hidden" />
            </div>
            <div className="md:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-warm-gray">
                Session {s.n}
              </p>
              <h3 className="mt-1 text-xl md:text-2xl font-bold text-navy leading-snug">
                {s.title}
              </h3>
            </div>
            <div className="md:col-span-3 flex items-start gap-3 text-sm">
              <Calendar className="h-5 w-5 text-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-navy">{s.date}</p>
                <p className="text-warm-gray">12 PM PDT / 3 PM EDT</p>
                <p className="text-warm-gray">90 minutes</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function Instructor() {
  return (
    <Section className="bg-secondary/50">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gold/20 blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-3xl border-4 border-warm-white shadow-2xl">
              <img src={darrin} alt="Darrin Guttman" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-navy text-warm-white px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-3xl font-bold text-gold">40+</p>
              <p className="text-xs uppercase tracking-wider">Years in Sales</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Your Instructor</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-navy leading-tight">
            Darrin Guttman
          </h2>
          <p className="mt-2 text-lg text-warm-gray italic">
            Founder & CEO of The Scale Summit · Professional Sales Trainer
          </p>
          <div className="mt-6 space-y-4 text-lg text-foreground/80 leading-relaxed">
            <p>
              Darrin started selling in college and never stopped. Over 40 years in sales, the
              communication and closing strategies he developed didn't just build his own success —
              they've shaped the careers of thousands he's trained and mentored.
            </p>
            <p>
              His teaching style is engaging, interactive, and deeply strategic. He doesn't lecture.
              He gets in the room with you.
            </p>
            <p className="font-semibold text-navy">
              This course is his baby. For most business owners, it's the missing piece that finally
              unlocks the ability to close with confidence.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <PrimaryCTA />
            <AdvisorCTA />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

const TESTIMONIALS = [
  {
    name: "Kathy Plomaritis",
    role: "Colors On Parade, Area Developer",
    img: kathy,
    quote:
      "Darrin's classes changed everything for me. I've taken ownership, sharpened my sales skills, and learned how to truly grow my business. Grateful for his guidance!",
  },
  {
    name: "Brendon Reimer",
    role: "Riivers Advisory Group, Founder",
    img: null,
    quote:
      "This wasn't just a sales program, it was a full business strategy accelerator. The process is rock solid, no fluff, and gave me the confidence and direction to scale faster than I thought possible.",
  },
  {
    name: "Gina Fedeli",
    role: "P3 Transformation, Founder & CEO",
    img: gina,
    quote:
      "The program's structure and insights were immediately actionable — resulting in our largest client win to date, closed in just one week.",
  },
  {
    name: "Steve Soto",
    role: "Breezy Sites, Founder",
    img: steve,
    quote:
      "This program has completely shifted how I approach sales — focusing on truly understanding the customer's issues so we work together collaboratively. And I closed several new sales already.",
  },
];

function Testimonials() {
  return (
    <Section className="bg-background">
      <Reveal className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Real Results</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-navy leading-tight">
          What people are saying.
        </h2>
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mt-14 grid md:grid-cols-2 gap-6"
      >
        {TESTIMONIALS.map((t) => (
          <motion.figure
            key={t.name}
            variants={fadeUp}
            className="relative rounded-2xl border border-border bg-card p-8 hover:shadow-xl transition-shadow"
          >
            <Quote className="absolute top-6 right-6 h-10 w-10 text-gold/20" />
            <blockquote className="text-lg leading-relaxed text-foreground/85">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              {t.img ? (
                <img src={t.img} alt={t.name} className="h-14 w-14 rounded-full object-cover border-2 border-gold" />
              ) : (
                <div className="h-14 w-14 rounded-full bg-navy text-warm-white flex items-center justify-center font-display text-lg font-bold border-2 border-gold">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
              <div>
                <p className="font-bold text-navy">{t.name}</p>
                <p className="text-sm text-warm-gray">{t.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </Section>
  );
}

const FAQ = [
  {
    q: "Do I need any sales experience?",
    a: "None at all. This course was built specifically for founders with no formal sales training.",
  },
  {
    q: "What if I already sell, but inconsistently?",
    a: "Perfect fit. You'll replace the guesswork with a repeatable system you can run every time.",
  },
  {
    q: "Will this work for my industry?",
    a: "Yes. If you do a face-to-face sale, you're building your personalized sales process — tailored to what you sell and who you sell to.",
  },
  {
    q: "What do I walk away with?",
    a: "A complete, personalized selling system and the confidence to run your very next cold sales call.",
  },
];

function FaqSection() {
  return (
    <Section className="bg-secondary/50">
      <Reveal className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">FAQ</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-navy leading-tight">
          Frequently asked questions.
        </h2>
      </Reveal>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mt-12 grid md:grid-cols-2 gap-5"
      >
        {FAQ.map((f) => (
          <motion.div
            key={f.q}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-7"
          >
            <h3 className="text-lg font-bold text-navy">{f.q}</h3>
            <p className="mt-3 text-warm-gray leading-relaxed">{f.a}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section className="bg-navy-deep text-warm-white text-center relative overflow-hidden" id="register">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.78_0.13_78_/_0.15),transparent_60%)]" />
      <Reveal className="relative max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Your expertise got you this far.
        </h2>
        <p className="mt-4 font-display italic text-2xl md:text-3xl text-gold">
          Your ability to close is what takes you the rest of the way.
        </p>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
          <PrimaryCTA />
          <a
            href={ADVISOR_URL}
            className="inline-flex items-center gap-2 text-warm-white/85 hover:text-gold font-semibold transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> Speak to our Member Success Advisor
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-navy-deep border-t border-warm-white/10 text-warm-white/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src={logo} alt="The Scale Summit" className="h-8 w-auto" />
        <p className="text-sm">© {new Date().getFullYear()} The Scale Summit. All rights reserved.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <WhySection />
      <WhatYouLearn />
      <Schedule />
      <Instructor />
      <Testimonials />
      <FaqSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
