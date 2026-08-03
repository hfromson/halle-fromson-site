/* ============================================================
   HALLE FROMSON — SITE CONTENT
   This file is the single source of truth for every word on
   the site. Edit here; the page renders from this object.

   FILL/VERIFY markers:
   - Anything in [brackets] is a visible placeholder — replace it.
   - "// VERIFY" comments flag copy written from public info +
     positioning context that Halle should confirm or tighten.
   - Do not add metrics unless they are real.
   ============================================================ */

const CONTENT = {
  meta: {
    name: "Halle Fromson",
    title: "Halle Fromson — Creative Operations & Project Management",
    description:
      "Project manager for creative teams. Planning, logistics, and coordination that get complex creative work to the finish line.",
    linkedin: "https://www.linkedin.com/in/halle-fromson-1288aa114/",
    // VERIFY: add a contact email if Halle wants one public. Leave "" to hide.
    email: "",
    location: "Los Angeles, CA",
  },

  hero: {
    eyebrow: "Creative operations · Project management · Production coordination",
    // Headline positions her for ops/PM/systems roles without designer/copywriter drift.
    headline: "Creative work doesn't finish itself.",
    subhead:
      "I'm Halle — a project manager who turns briefs, feedback rounds, and moving deadlines into shipped work. I run the plans, the timelines, and the follow-through that carry creative projects from concept to delivery.",
    ctaPrimary: { label: "View experience", href: "#experience" },
    ctaSecondary: { label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/halle-fromson-1288aa114/" },
  },

  about: {
    eyebrow: "About",
    heading: "The person who keeps the work moving",
    paragraphs: [
      // VERIFY: grounded in public profile + provided positioning; Halle to confirm tone.
      "I've spent my career inside creative teams — most recently in entertainment advertising — owning the unglamorous machinery that great work depends on: schedules, scopes, reviews, approvals, asset handoffs, and the hundred small decisions that keep a project on track.",
      "My strength is structure. I break ambitious briefs into plans people can actually execute, keep stakeholders aligned as things change, and make sure nothing falls through the cracks between concept and final delivery. I'm client-capable in the room and relentless behind the scenes.",
      "The tools change by team — the discipline doesn't. I'm at home in fast-moving environments where priorities shift daily and the work still has to ship.",
    ],
  },

  experience: {
    eyebrow: "Experience",
    heading: "Where I've done it",
    roles: [
      {
        company: "Arsonal Design",
        role: "Project Manager",
        location: "Los Angeles, CA",
        dates: "[Start year] – Present", // FILL: exact dates from LinkedIn
        blurb:
          "Entertainment advertising agency — key art and campaign creative for studios, networks, and streamers.",
        bullets: [
          // VERIFY: role-typical responsibilities written from positioning context — Halle to confirm/adjust.
          "Own project plans and timelines across multiple simultaneous campaigns, from kickoff through final delivery.",
          "Coordinate designers, creative directors, and client feedback rounds so reviews land on schedule and revisions stay in scope.",
          "Manage asset workflows end to end — versioning, approvals, specs, and delivery — across high-volume creative output.",
          "Act as the connective tissue between accounts, creative, and production, keeping everyone working from the same plan.",
        ],
      },
      {
        company: "The Pure Imagination Party Company",
        role: "[Role title]", // FILL from LinkedIn
        location: "[Location]",
        dates: "[Dates]",
        blurb:
          "Live events and experience production.",
        bullets: [
          // VERIFY: placeholder framing — replace with Halle's actual responsibilities.
          "Planned and produced live experiences where the deadline is an event date that cannot move.",
          "Ran vendor coordination, logistics, and day-of execution under real-time pressure.",
        ],
      },
      {
        company: "Real Genius Entertainment",
        role: "[Role title]", // FILL from LinkedIn
        location: "[Location]",
        dates: "[Dates]",
        blurb:
          "Entertainment production company.",
        bullets: [
          // VERIFY: placeholder framing — replace with Halle's actual responsibilities.
          "Supported production workflows and kept schedules, materials, and communications organized across projects.",
        ],
      },
    ],
    education: {
      school: "Indiana University Bloomington",
      degree: "B.A. Psychology",
      detail: "Certificate in Clinical Psychological Science", // VERIFY
      dates: "2015 – 2018",
    },
  },

  strengths: {
    eyebrow: "What I bring",
    heading: "Operational strengths that transfer anywhere",
    items: [
      { title: "Operational rigor", body: "Clean scopes, honest timelines, and plans built to survive contact with reality." },
      { title: "Project planning", body: "Ambitious briefs broken into sequenced, ownable, trackable work." },
      { title: "Stakeholder coordination", body: "Clients, creatives, and vendors aligned — and kept aligned as things change." },
      { title: "Asset & workflow management", body: "Versioning, approvals, specs, and handoffs handled so nothing gets lost." },
      { title: "Timeline ownership", body: "Deadlines tracked, dependencies surfaced early, slippage caught before it costs anything." },
      { title: "Process improvement", body: "Repeat friction turned into better systems, templates, and defaults." },
      { title: "Adaptability", body: "Comfortable across industries and team shapes — the discipline travels." },
    ],
  },

  approach: {
    eyebrow: "How I work",
    heading: "What teams get with me in the room",
    items: [
      "Organized under pressure — the more moving pieces, the more useful I am.",
      "Clear communicator — people always know status, owner, and next step.",
      "Detail-oriented without losing the plot — I track the small stuff because it protects the big stuff.",
      "Calm escalation — I flag risks early, with options, not alarms.",
      "Strong executor — I care about finished, not just planned.",
    ],
  },

  forward: {
    eyebrow: "Where I'm headed",
    heading: "Systems-minded, and getting more so",
    body:
      // Grounded per brief: interest + working practice, no overstated technical claims.
      "The best operations people I know are building smarter systems, not just running harder. I'm actively modernizing how I work — better templates, cleaner workflows, and AI-assisted tools for the repetitive parts of project coordination — so teams spend their time on the work only people can do. I'm looking for teams that think about operations the same way.",
  },

  contact: {
    eyebrow: "Contact",
    heading: "Hiring for creative ops, project management, or production?",
    body:
      "I'm open to roles in creative operations, project management, and production coordination — agencies, brands, retail media, and influencer or boutique teams. The fastest way to reach me is LinkedIn.",
    ctaPrimary: { label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/halle-fromson-1288aa114/" },
  },

  footer: {
    line: "Halle Fromson · Los Angeles · Open to creative operations & project management roles",
  },
};
