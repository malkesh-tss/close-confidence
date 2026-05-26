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
  Clock,
  Timer,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, Reveal, fadeUp, stagger } from "@/components/landing/Section";
import logo from "@/assets/scale-summit-logo.png";
import darrin from "@/assets/darrin_guttman.jpg";
import gina from "@/assets/gina.webp";
import kathy from "@/assets/kathy.jpg";
import steve from "@/assets/steve.webp";
import Brendon from "@/assets/Brendon.jpg";

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

const REGISTER_URL = "https://buy.stripe.com/aFacN68GJgdUckt4iv2880i";
const ADVISOR_URL = "https://meet-with-ed.thescalesummit.com/";

function PrimaryCTA({ label = "Secure Your Seat Now" }: { label?: string }) {
  return (
    <Button asChild variant="gold" size="xl" className="group">
      <a href={REGISTER_URL}>
        {label}
        <ArrowRight className="ml-1 transition  -transform group-hover:translate-x-1" />
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
    <header className="absolute top-0 left-0 right-0 z-30 bg-white text-navy shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex items-center justify-between py-6">
        <img src={logo} alt="The Scale Summit" className="h-18 w-auto bg-white p-1" />
        <div className="hidden sm:block">
          <Button asChild variant="gold" size="lg" className="group">
            <a href={REGISTER_URL}>
              Secure Your Seat Now
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
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
            className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight sm:whitespace-nowrap"
          >
            Close With{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-gold font-bold">Confidence</span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm md:text-sm text-warm-white/75 max-w-2xl leading-relaxed"
          >
            Built for founders who never got formal sales training, and the ones who know they need
            a real strategy to win cold prospects.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-xl md:text-2xl font-display italic text-warm-white"
          >
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

function WhySection({
  isLoadingPrimaryCTA = false,
  onPrimaryCTAClick,
}: {
  isLoadingPrimaryCTA?: boolean;
  onPrimaryCTAClick?: () => void;
} = {}) {
  return (
    <Section className="bg-background py-14 px-8">
      {/* eyebrow + fading rule */}
      <div className="flex items-center gap-3 mb-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold shrink-0">
          Why This Course Matters
        </p>
        <div className="flex-1 h-px bg-gold opacity-35" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT — copy */}
        <Reveal>
          <h2 className="font-['Lora',serif] text-4xl md:text-[2.4rem] font-bold leading-[1.2] text-navy">
            You're the expert in your field. But here's the hard truth: if you can't close,{" "}
            <em className="italic text-gold">none of that expertise pays the bills.</em>
          </h2>
          <p className="mt-5 text-sm leading-[1.8] text-warm-gray">
            For a lot of founders, that's a terrifying thought. It doesn't have to be.
          </p>

          <p className="mt-5 text-sm leading-[1.8] text-warm-gray">
            Master these, and selling stops feeling like guesswork. It starts feeling like a system.
          </p>
          <div className="mt-8">
            <PrimaryCTA isLoading={isLoadingPrimaryCTA} onClick={onPrimaryCTAClick} />
          </div>
        </Reveal>

        {/* RIGHT — indexed list with left gutter */}
        <div>
          <p className="mt-3.5 text-sm font-semibold text-navy leading-[1.7]">
            Close With Confidence gives you the clarity and the strategy to finally answer the
            questions that keep founders stuck.
          </p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {WHY_QUESTIONS.map(({ icon: Icon, q }, i) => (
              <motion.div
                key={q}
                variants={fadeUp}
                className="grid grid-cols-[48px_1fr] border-t border-navy/10 last:border-b"
              >
                {/* gutter: number + icon */}
                <div className="flex flex-col items-center gap-1.5 py-5 border-r border-navy/10">
                  <span className="font-['Lora',serif] text-[0.8rem] font-bold text-gold tracking-wide">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-navy">
                    <Icon className="h-4 w-4 text-gold" />
                  </div>
                </div>

                {/* question text */}
                <div className="flex items-center pl-4 py-5">
                  <p className="text-sm font-medium text-navy leading-snug">{q}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
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

function WhatYouLearn({
  isLoadingPrimaryCTA = false,
  onPrimaryCTAClick,
  isLoadingAdvisorCTA = false,
  onAdvisorCTAClick,
}: {
  isLoadingPrimaryCTA?: boolean;
  onPrimaryCTAClick?: () => void;
  isLoadingAdvisorCTA?: boolean;
  onAdvisorCTAClick?: () => void;
} = {}) {
  return (
    <Section
      className="bg-navy-deep text-warm-white relative"
      style={{ fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}
    >
      {/* Wrapper keeps all content within viewport */}
      <div className="relative w-full max-w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Ambient glow — clamped so they don't overflow horizontally */}
        <div
          className="absolute top-1/2 right-0 h-[300px] w-[300px] rounded-full bg-gold/10 blur-[120px] -translate-y-1/2 pointer-events-none"
          style={{ transform: "translateY(-50%) translateX(40%)" }}
        />
        <div className="absolute -top-20 left-0 h-[250px] w-[250px] rounded-full bg-gold/5 blur-[100px] pointer-events-none -translate-x-1/2" />

        {/* Two-column grid — single column on mobile */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-[72px] items-start">
          {/* Left Column */}
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold mb-[18px]">
              What You'll Learn
            </p>
            <h2
              className="text-[20px] sm:text-[24px] lg:text-[26px] font-bold leading-[1.3] text-warm-white mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Closing your warm market (friends, referrals, people who already trust you) is easy.
              Closing cold leads is where most founders fall apart.
            </h2>
            <p className="text-sm font-light leading-[1.75] text-warm-white/65 mb-7">
              This 4-session course walks you through building a personalized selling system
              designed to close cold prospects. You'll finish ready to run your very next sales call
              with total confidence.
            </p>
            <div className="border-l-2 border-gold/40 pl-4 mt-7 space-y-1.5">
              <p className="font-display italic text-[15px] text-warm-white/85">
                No more guessing.
              </p>
              <p className="font-display italic text-[15px] text-warm-white/85">
                No more uncertainty.
              </p>
              <p className="font-display italic text-[15px] text-warm-white/85">
                No more wondering how to grow your business.
              </p>
            </div>
          </Reveal>

          {/* Right Column */}
          <div>
            <p className="text-sm font-light leading-[1.7] text-warm-white/65 mb-5">
              You'll walk away with a personalized step-by-step sales process and the ability to:
            </p>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="space-y-2.5"
            >
              {LEARN_ITEMS.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-3.5 rounded-xl border border-gold/18 bg-warm-white/4 backdrop-blur p-4 transition-colors duration-300 hover:bg-gold/7 hover:border-gold/38"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-navy-deep mt-0.5">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-[13.5px] leading-snug text-warm-white/90 pt-0.5">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* CTA Bar — stacks on mobile, row on sm+ */}
        <Reveal
          className="mt-10 sm:mt-14 rounded-2xl border border-gold/35 p-5 sm:p-7 relative overflow-hidden"
          style={{
            background: "linear-gradient(105deg, rgba(212,175,55,0.08) 0%, transparent 60%)",
          }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
            <div className="min-w-0">
              <h3
                className="text-[20px] sm:text-[22px] font-bold text-warm-white mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ready to take the next step?
              </h3>
              <p className="text-[13px] font-light text-warm-white/60">
                Have questions?{" "}
                <span className="[&_a]:text-gold [&_a]:underline [&_a]:decoration-gold/45 [&_a]:hover:decoration-gold">
                  <AdvisorCTA />
                </span>
              </p>
            </div>

            {/* Full-width on mobile, auto on sm+ */}
            <div className="w-full sm:w-auto shrink-0">
              <PrimaryCTA className="w-full sm:w-auto justify-center" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

const SESSIONS = [
  {
    n: 1,
    title: "Build Your Personal Discovery Call",
    date: "June 23, 2026",
  },
  {
    n: 2,
    title: "How to Proactively Overcome Objections",
    date: "June 30, 2026",
  },
  {
    n: 3,
    title: "The Art of: Storytelling, Presenting Your Proposal, and Closing the Sale",
    date: "July 7, 2026",
  },
  {
    n: 4,
    title: "Build the Steps of Your Personalized Sales Process",
    date: "July 14, 2026",
  },
];

function Schedule() {
  return (
    <Section className="bg-background" id="schedule">
      {/* Header */}
      <Reveal className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          Course Schedule & Outline
        </p>
        <h2 className="mt-5 font-display text-[clamp(22px,4vw,38px)] font-bold text-navy leading-[1.2] max-w-[560px]">
          Every one of the four sessions is a working session.{" "}
          <span className="italic font-normal text-warm-gray">You build as you learn.</span>
        </h2>
        <p className="mt-4 text-sm text-warm-gray leading-[1.75] max-w-[600px]">
          Led by a professional sales trainer, you'll work through the Close With Confidence
          Playbook to construct your personalized selling system step by step. Our trainer keeps the
          group engaged so you get expert guidance plus real-time feedback from a room of fellow
          business owners solving the same challenges.
        </p>
        <span className="mt-6 inline-block text-[10px] font-semibold uppercase tracking-[0.18em] text-gold border border-gold rounded-full px-4 py-1">
          4 Working Sessions
        </span>
      </Reveal>

      <div className="mt-10">
        {/* Sessions wrapper — vertical rule is scoped ONLY to this div */}
        <div className="relative">
          <div className="absolute left-[19px] sm:left-7 top-0 bottom-0 w-px bg-border" />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid"
          >
            {SESSIONS.map((s) => (
              <motion.div
                key={s.n}
                variants={fadeUp}
                className="group grid grid-cols-[44px_1fr] sm:grid-cols-[56px_1fr] gap-x-3 sm:gap-x-5 py-4 sm:py-6 border-b border-border last:border-b-0"
              >
                {/* Number circle */}
                <div className="flex flex-col items-center pt-0.5 z-10">
                  <div className="w-[30px] h-[30px] sm:w-9 sm:h-9 rounded-full border border-border bg-background flex items-center justify-center text-[12px] sm:text-[13px] font-semibold text-warm-gray transition-all group-hover:bg-gold group-hover:border-gold group-hover:text-white">
                    {s.n}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-warm-gray/60">
                    Session {s.n}
                  </p>
                  <h3 className="mt-1 font-display text-[clamp(15px,2.5vw,20px)] font-bold leading-snug text-navy transition-colors group-hover:text-gold">
                    {s.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="flex items-center gap-1.5 text-[12px] text-warm-gray whitespace-nowrap">
                      <Calendar className="h-3.5 w-3.5 text-gold/80 shrink-0" />
                      <span className="font-semibold text-navy">{s.date}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-[12px] text-warm-gray whitespace-nowrap">
                      <Clock className="h-3.5 w-3.5 text-gold/80 shrink-0" />
                      12 PM PDT / 3 PM EDT
                    </span>
                    <span className="flex items-center gap-1.5 text-[12px] text-warm-gray whitespace-nowrap">
                      <Timer className="h-3.5 w-3.5 text-gold/80 shrink-0" />
                      90 minutes
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* ↑ Rule ends here — CTA is OUTSIDE this wrapper so no overlap */}

        {/* Pricing + CTA */}
        <div className="mt-14 relative flex flex-col items-center gap-0">
          {/* Ambient glow */}
          <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
            <div className="w-64 h-32 bg-gold/10 blur-3xl rounded-full translate-y-4" />
          </div>

          {/* Unified card wrapping price + CTAs together */}
          <div className="relative w-full max-w-3xl">
            <div className="flex flex-col items-center gap-5 rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/8 via-gold/4 to-transparent px-8 py-8 text-center backdrop-blur-sm">
              {/* Decorative top rule */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

              {/* Price row */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-[11px] uppercase tracking-[0.22em] text-warm-gray/50 font-normal">
                  Only
                </span>
                <span className="font-display text-[clamp(36px,6vw,52px)] text-gold leading-none tracking-tight font-black">
                  $397
                </span>
                <div className="flex flex-col items-start gap-0.5 pl-3 border-l border-gold/20">
                  <span className="text-[14px] text-warm-gray font-normal">for all 4 Sessions</span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

              {/* CTA Row — inside the card, full width */}
              <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                <PrimaryCTA className="w-full sm:w-auto" />
                <AdvisorCTA className="w-full sm:w-auto" />
              </div>

              {/* Decorative bottom rule */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            </div>
          </div>

          {/* CTA Row
          <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6">
            <PrimaryCTA className="w-full sm:w-auto" />
            <AdvisorCTA className="w-full sm:w-auto" />
          </div> */}
        </div>
      </div>
    </Section>
  );
}

function Instructor() {
  return (
    <Section className="bg-secondary/50 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-navy/8 blur-[80px] translate-y-1/3 pointer-events-none" />

      <div className="relative grid lg:grid-cols-12 gap-16 items-center">
        {/* ── Image Column ── */}
        <Reveal className="lg:col-span-5">
          <div className="relative max-w-[440px] mx-auto lg:mx-0">
            {/* Offset background block */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-gold/15 pointer-events-none" />

            {/* Main photo frame */}
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-warm-white/60 shadow-2xl">
              <img
                src={darrin}
                alt="Darrin Guttman"
                className="w-full h-full object-cover scale-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy/70 to-transparent" />

              {/* Name overlay inside photo */}
              <div className="absolute bottom-5 left-5">
                <p className="text-warm-white font-bold text-lg leading-tight">Darrin Guttman</p>
                <p className="text-warm-white/65 text-xs mt-0.5 uppercase tracking-wide">
                  Founder & CEO
                </p>
              </div>
            </div>

            {/* Stat badge */}
            <div className="absolute -top-4 -right-4 bg-navy text-warm-white px-5 py-3.5 rounded-2xl shadow-xl border border-gold/25 flex flex-col items-center">
              <p className="text-3xl font-bold text-gold leading-none">40+</p>
              <p className="text-[10px] uppercase tracking-widest mt-1 text-warm-white/65">
                Years in Sales
              </p>
            </div>

            {/* Corner accent */}
            <div className="absolute -bottom-3 -left-3 w-14 h-14 border-b-2 border-l-2 border-gold/40 rounded-bl-2xl pointer-events-none" />
          </div>
        </Reveal>

        {/* ── Text Column ── */}
        <Reveal className="lg:col-span-7" delay={0.1}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            Your Instructor
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy leading-tight">
            Darrin Guttman
          </h2>

          <div className="mt-3 flex items-center gap-3">
            <div className="h-px w-8 bg-gold/50" />
            <p className="text-base text-warm-gray italic">
              Founder & CEO of The Scale Summit · Professional Sales Trainer
            </p>
          </div>

          <div className="mt-7 space-y-4 text-sm text-foreground/80 leading-relaxed">
            <p>
              Darrin started selling in college and never stopped. Over 40 years in sales, the
              communication and closing strategies he developed didn't just build his own success
              they've shaped the careers of thousands he's trained and mentored.
            </p>
            <p>
              His teaching style is engaging, interactive, and deeply strategic. He doesn't lecture.
              He gets in the room with you.
            </p>

            {/* Highlighted pull quote */}
            <div className="border-l-[3px] border-gold pl-4 py-1 bg-gold/5 rounded-r-xl">
              <p className="font-semibold text-navy text-sm">
                This course is his baby. For most business owners, it's the missing piece that
                finally unlocks the ability to close with confidence.
              </p>
            </div>

            <p>Ready to take the next step in business ownership success?</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
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
    img: Brendon,
    quote:
      "This wasn't just a sales program, it was a full business strategy accelerator. The process is rock solid, no fluff, and gave me the confidence and direction to scale faster than I thought possible.",
  },
  {
    name: "Gina Fedeli",
    role: "P3 Transformation, Founder & CEO",
    img: gina,
    quote:
      "The program's structure and insights were immediately actionable  resulting in our largest client win to date, closed in just one week.",
  },
  {
    name: "Steve Soto",
    role: "Breezy Sites, Founder",
    img: steve,
    quote:
      "This program has completely shifted how I approach sales  focusing on truly understanding the customer's issues so we work together collaboratively. And I closed several new sales already.",
  },
];

function Testimonials() {
  return (
    <Section className="bg-background overflow-hidden relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <Reveal className="max-w-3xl relative">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
          Real Results
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy leading-tight">
          What People Are Saying About The Scale Summit Courses & Events.
        </h2>
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mt-14 grid md:grid-cols-2 gap-6 relative"
      >
        {TESTIMONIALS.map((t) => (
          <motion.figure
            key={t.name}
            variants={fadeUp}
            className="group relative rounded-2xl border border-border bg-card p-8 hover:shadow-xl hover:border-gold/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            {/* Gold top-border accent */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent rounded-full" />

            {/* Decorative quote mark */}
            <div className="absolute top-5 right-6 text-[72px] leading-none font-serif text-gold/10 select-none pointer-events-none group-hover:text-gold/18 transition-colors duration-300">
              "
            </div>

            <blockquote className="text-lg leading-relaxed text-foreground/85 pr-8">
              "{t.quote}"
            </blockquote>

            <div className="mt-6 h-px bg-gradient-to-r from-gold/20 to-transparent" />

            <figcaption className="mt-5 flex items-center gap-4">
              {t.img ? (
                <div className="relative shrink-0">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-14 w-14 rounded-full object-cover border-2 border-gold"
                  />
                </div>
              ) : (
                <div className="h-14 w-14 rounded-full bg-navy text-warm-white flex items-center justify-center font-display text-lg font-bold border-2 border-gold shrink-0">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
              <div>
                <p className="font-bold text-navy">{t.name}</p>
                <p className="text-sm text-warm-gray">{t.role}</p>
              </div>

              {/* Star rating */}
              <div className="ml-auto flex gap-0.5 shrink-0">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-3.5 h-3.5 text-gold fill-gold" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
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
    a: "None at all. This course was built specifically for founders with no formal sales training, limited experience, or those who need a refresher.",
  },
  {
    q: "What if I already sell, but inconsistently?",
    a: "Perfect fit. You'll replace the guesswork with a repeatable system you can run every time.",
  },
  {
    q: "Will this work for my industry?",
    a: "Yes. If you do a face-to-face sale, you're building your personalized sales process  tailored to what you sell and who you sell to.",
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
        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-navy leading-tight">
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
    <Section
      className="bg-navy-deep text-warm-white text-center relative overflow-hidden"
      id="register"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.78_0.13_78_/_0.15),transparent_60%)]" />
      <Reveal className="relative max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          You're building something special.
        </h2>
        <p className="mt-4 font-display italic text-2xl md:text-3xl text-gold">
          This is where you learn to sell it like a pro.
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
    <footer id="contact" className="bg-background border-t border-border text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src={logo} alt="The Scale Summit" className="h-18 w-auto bg-white p-1" />
        <p className="text-sm">
          © {new Date().getFullYear()} The Scale Summit. All rights reserved.
        </p>
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
