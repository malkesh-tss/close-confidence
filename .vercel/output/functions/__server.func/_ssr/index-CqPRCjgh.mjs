import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { S as Sparkles, M as MessageCircle, T as Target, U as Users, Z as Zap, a as Check, C as Calendar, Q as Quote, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gold: "bg-gold text-navy-deep shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all font-semibold",
        navy: "bg-navy text-warm-white hover:bg-navy-deep shadow-md transition-all font-semibold",
        ghostGold: "border border-gold/60 text-gold hover:bg-gold hover:text-navy-deep transition-colors"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-14 rounded-md px-10 text-base",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};
function Section({
  children,
  className = "",
  id
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: `relative w-full py-20 md:py-28 ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl", children }) });
}
function Reveal({
  children,
  className = "",
  delay = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-80px" },
      variants: fadeUp,
      transition: { delay },
      className,
      children
    }
  );
}
const logo = "data:image/png;base64,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";
const darrin = "/assets/darrin_guttman-C6m-KaoB.jpg";
const gina = "/assets/gina-DJLqAza0.webp";
const kathy = "/assets/kathy-BElUK10z.jpg";
const steve = "/assets/steve-E3sQruby.webp";
const REGISTER_URL = "#register";
const ADVISOR_URL = "#contact";
function PrimaryCTA({
  label = "Register Now"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "gold", size: "xl", className: "group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: REGISTER_URL, children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 transition-transform group-hover:translate-x-1" })
  ] }) });
}
function AdvisorCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: ADVISOR_URL, className: "inline-flex items-center gap-2 text-navy font-semibold underline decoration-gold decoration-2 underline-offset-4 hover:text-gold transition-colors", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
    "Speak to our Member Success Advisor"
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "absolute top-0 left-0 right-0 z-30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex items-center justify-between py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "The Scale Summit", className: "h-10 w-auto bg-white p-1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: REGISTER_URL, className: "hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-warm-white/90 hover:text-gold transition-colors", children: [
      "Register ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-navy-deep text-warm-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gold/20 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-navy/60 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pt-36 pb-28 md:pt-44 md:pb-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "show", variants: stagger, className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
        " Sales Training for Founders"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { variants: fadeUp, className: "mt-6 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight", children: [
        "Close With",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 italic text-gold", children: "Confidence" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-0 bottom-2 h-3 bg-gold/20 -skew-x-6" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mt-6 text-lg md:text-xl text-warm-white/75 max-w-2xl leading-relaxed", children: "Built for founders who never got formal sales training — and the ones who know they need a real strategy to win cold prospects." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mt-4 text-xl md:text-2xl font-display italic text-warm-white", children: "Stop winging your sales calls. Start closing them." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mt-10 flex flex-wrap items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: ADVISOR_URL, className: "inline-flex items-center gap-2 text-warm-white/90 hover:text-gold font-semibold transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
          "Have questions? Talk to an Advisor"
        ] })
      ] })
    ] }) })
  ] });
}
const WHY_QUESTIONS = [{
  icon: Target,
  q: "What are the actual steps of a sales process?"
}, {
  icon: Users,
  q: "How do I run a Discovery Call that sets up the close?"
}, {
  icon: Zap,
  q: "How do I handle objections without freezing up?"
}, {
  icon: MessageCircle,
  q: "Why do I get ghosted when I swore the deal was done?"
}];
function WhySection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold", children: "Why This Course Matters" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl font-bold text-navy leading-tight", children: [
        "You're the expert.",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-warm-gray", children: "But closing pays the bills." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-warm-gray leading-relaxed", children: "For a lot of founders, that's a terrifying thought. It doesn't have to be. Close With Confidence gives you the clarity and the strategy to finally answer the questions that keep founders stuck." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg font-semibold text-navy", children: "Master these, and selling stops feeling like guesswork. It starts feeling like a system." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", whileInView: "show", viewport: {
      once: true,
      margin: "-80px"
    }, variants: stagger, className: "lg:col-span-7 grid sm:grid-cols-2 gap-4", children: WHY_QUESTIONS.map(({
      icon: Icon,
      q
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "group rounded-2xl border border-border bg-card p-6 hover:border-gold hover:shadow-lg transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg font-semibold text-navy leading-snug", children: q })
    ] }, q)) })
  ] }) });
}
const LEARN_ITEMS = ["Create instant trust and credibility with cold prospects", "Set up the close right inside your Discovery Call", "Handle objections like a pro", "Present your proposal and close without the awkwardness"];
function WhatYouLearn() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-navy-deep text-warm-white overflow-hidden relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -right-32 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[100px] -translate-y-1/2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold", children: "What You'll Learn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl font-bold leading-tight", children: [
          "Closing cold leads is where most founders",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold", children: "fall apart." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-warm-white/75 leading-relaxed", children: "This 4-session course walks you through building a personalized selling system designed to close cold prospects. You'll finish ready to run your very next sales call with total confidence." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-2 font-display text-2xl italic text-warm-white/90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No more guessing." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No more uncertainty." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No more wondering how to grow your business." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.ul, { initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-80px"
      }, variants: stagger, className: "space-y-4", children: LEARN_ITEMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, { variants: fadeUp, className: "flex items-start gap-4 rounded-2xl border border-warm-white/10 bg-warm-white/5 backdrop-blur p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-navy-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5", strokeWidth: 3 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg leading-snug pt-1", children: item })
      ] }, item)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mt-16 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-gold/30 bg-gradient-to-r from-gold/10 to-transparent p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Ready to take the next step?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-warm-white/70", children: [
          "Have questions? ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(AdvisorCTA, {})
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, {})
    ] })
  ] });
}
const SESSIONS = [{
  n: "01",
  title: "Build Your Personal Discovery Call",
  date: "June 16, 2026"
}, {
  n: "02",
  title: "How to Proactively Overcome Objections",
  date: "June 23, 2026"
}, {
  n: "03",
  title: "The Art of Storytelling, Presenting Your Proposal, and Closing the Sale",
  date: "June 30, 2026"
}, {
  n: "04",
  title: "Build the Steps of Your Personalized Sales Process",
  date: "July 7, 2026"
}];
function Schedule() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-background", id: "schedule", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold", children: "Course Schedule & Outline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl font-bold text-navy leading-tight", children: [
        "Four working sessions.",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-warm-gray", children: "You build as you learn." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-warm-gray leading-relaxed", children: "Led by a professional sales trainer, you'll work through the Close With Confidence Playbook to construct your personalized selling system step by step — with real-time feedback from a room of fellow business owners." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", whileInView: "show", viewport: {
      once: true,
      margin: "-80px"
    }, variants: stagger, className: "mt-14 grid gap-5", children: SESSIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "group grid md:grid-cols-12 gap-6 items-center rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-gold hover:shadow-xl transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl text-gold/40 group-hover:text-gold transition-colors", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border md:hidden" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold uppercase tracking-widest text-warm-gray", children: [
          "Session ",
          s.n
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-xl md:text-2xl font-bold text-navy leading-snug", children: s.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 flex items-start gap-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-5 w-5 text-gold mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-navy", children: s.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-warm-gray", children: "12 PM PDT / 3 PM EDT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-warm-gray", children: "90 minutes" })
        ] })
      ] })
    ] }, s.n)) })
  ] });
}
function Instructor() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-secondary/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-3xl bg-gold/20 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-square overflow-hidden rounded-3xl border-4 border-warm-white shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: darrin, alt: "Darrin Guttman", className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -right-6 bg-navy text-warm-white px-6 py-4 rounded-2xl shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-gold", children: "40+" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider", children: "Years in Sales" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:col-span-7", delay: 0.1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold", children: "Your Instructor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl md:text-5xl font-bold text-navy leading-tight", children: "Darrin Guttman" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-lg text-warm-gray italic", children: "Founder & CEO of The Scale Summit · Professional Sales Trainer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4 text-lg text-foreground/80 leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Darrin started selling in college and never stopped. Over 40 years in sales, the communication and closing strategies he developed didn't just build his own success — they've shaped the careers of thousands he's trained and mentored." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "His teaching style is engaging, interactive, and deeply strategic. He doesn't lecture. He gets in the room with you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-navy", children: "This course is his baby. For most business owners, it's the missing piece that finally unlocks the ability to close with confidence." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AdvisorCTA, {})
      ] })
    ] })
  ] }) });
}
const TESTIMONIALS = [{
  name: "Kathy Plomaritis",
  role: "Colors On Parade, Area Developer",
  img: kathy,
  quote: "Darrin's classes changed everything for me. I've taken ownership, sharpened my sales skills, and learned how to truly grow my business. Grateful for his guidance!"
}, {
  name: "Brendon Reimer",
  role: "Riivers Advisory Group, Founder",
  img: null,
  quote: "This wasn't just a sales program, it was a full business strategy accelerator. The process is rock solid, no fluff, and gave me the confidence and direction to scale faster than I thought possible."
}, {
  name: "Gina Fedeli",
  role: "P3 Transformation, Founder & CEO",
  img: gina,
  quote: "The program's structure and insights were immediately actionable — resulting in our largest client win to date, closed in just one week."
}, {
  name: "Steve Soto",
  role: "Breezy Sites, Founder",
  img: steve,
  quote: "This program has completely shifted how I approach sales — focusing on truly understanding the customer's issues so we work together collaboratively. And I closed several new sales already."
}];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold", children: "Real Results" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl md:text-5xl font-bold text-navy leading-tight", children: "What people are saying." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", whileInView: "show", viewport: {
      once: true,
      margin: "-80px"
    }, variants: stagger, className: "mt-14 grid md:grid-cols-2 gap-6", children: TESTIMONIALS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.figure, { variants: fadeUp, className: "relative rounded-2xl border border-border bg-card p-8 hover:shadow-xl transition-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute top-6 right-6 h-10 w-10 text-gold/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-lg leading-relaxed text-foreground/85", children: [
        '"',
        t.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 flex items-center gap-4", children: [
        t.img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.name, className: "h-14 w-14 rounded-full object-cover border-2 border-gold" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-full bg-navy text-warm-white flex items-center justify-center font-display text-lg font-bold border-2 border-gold", children: t.name.split(" ").map((n) => n[0]).join("") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-navy", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-warm-gray", children: t.role })
        ] })
      ] })
    ] }, t.name)) })
  ] });
}
const FAQ = [{
  q: "Do I need any sales experience?",
  a: "None at all. This course was built specifically for founders with no formal sales training."
}, {
  q: "What if I already sell, but inconsistently?",
  a: "Perfect fit. You'll replace the guesswork with a repeatable system you can run every time."
}, {
  q: "Will this work for my industry?",
  a: "Yes. If you do a face-to-face sale, you're building your personalized sales process — tailored to what you sell and who you sell to."
}, {
  q: "What do I walk away with?",
  a: "A complete, personalized selling system and the confidence to run your very next cold sales call."
}];
function FaqSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-secondary/50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold", children: "FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl md:text-5xl font-bold text-navy leading-tight", children: "Frequently asked questions." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", whileInView: "show", viewport: {
      once: true,
      margin: "-80px"
    }, variants: stagger, className: "mt-12 grid md:grid-cols-2 gap-5", children: FAQ.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "rounded-2xl border border-border bg-card p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-navy", children: f.q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-warm-gray leading-relaxed", children: f.a })
    ] }, f.q)) })
  ] });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-navy-deep text-warm-white text-center relative overflow-hidden", id: "register", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.78_0.13_78_/_0.15),transparent_60%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "relative max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-6xl font-bold leading-tight", children: "Your expertise got you this far." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display italic text-2xl md:text-3xl text-gold", children: "Your ability to close is what takes you the rest of the way." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryCTA, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: ADVISOR_URL, className: "inline-flex items-center gap-2 text-warm-white/85 hover:text-gold font-semibold transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
          " Speak to our Member Success Advisor"
        ] })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { id: "contact", className: "bg-background border-t border-border text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-10 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "The Scale Summit", className: "h-8 w-auto bg-white p-1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " The Scale Summit. All rights reserved."
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhySection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatYouLearn, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Schedule, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Instructor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FaqSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
