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
    email: hallefromson@gmail.com,
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
      "The tools change by team; the discipline doesn't. I'm at home in fast-moving environments where priorities shift daily and the work still has to ship.",
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
        dates: "February 2023 – Present",
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
        role: "Character Actor, Mascot & Party Host",
        location: "Los Angeles, CA",
        dates: "September 2019 – January 2025",
        blurb:
          "Live events and experience production.",
        bullets: [
          // VERIFY: rewritten to match actual role — Halle to confirm/adjust.
          "Performed as a character actor, mascot, and party host at live events, staying in character while managing pacing, safety, and guest experience in real time.",
          "Worked directly with clients and families on-site, reading the room and adapting activities to keep events running smoothly under a fixed, non-negotiable timeline.",
          "Coordinated with event staff and clients before and during each booking to make sure logistics, costuming, and scheduling came together on the day.",
        ],
      },
      {
        company: "Real Genius Entertainment",
        role: "Client Relations Manager (Freelance)",
        location: "Los Angeles, CA",
        dates: "January – February 2023",
        blurb:
          "Entertainment production company.",
        bullets: [
          // VERIFY: rewritten to match actual role — Halle to confirm/adjust.
          "Managed client relationships and communications on a freelance basis, serving as the day-to-day point of contact between the company and its clients.",
          "Tracked client needs, requests, invoices, and follow-ups to keep bookings moving and expectations aligned.",
        ],
      },
      {
        company: "Kol Tikvah",
        role: "Experiential Education Coordinator",
        location: "Los Angeles, CA",
        dates: "June 2021 – January 2023",
        blurb:
          "Full-time · religious school, K–12 community programming.",
        bullets: [
          "Supported the School Director with day-to-day administrative operations, keeping programs, schedules, and communications running smoothly.",
          "Designed and delivered curriculum for students across six grade levels, adapting plans and pacing to a range of ages and learning needs.",
          "Owned the planning, promotion, and execution of weekly community events end to end — from concept through day-of logistics.",
          "Managed program budgets, keeping spending on track and the school's finances healthy.",
          "Served as the daily point of contact for parents, teachers, and staff, keeping every stakeholder informed and aligned.",
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
      { title: "Stakeholder coordination", body: "Clients, creatives, and vendors aligned, and kept aligned as things change." },
      { title: "Asset & workflow management", body: "Versioning, approvals, specs, and handoffs handled so nothing gets lost." },
      { title: "Timeline ownership", body: "Deadlines tracked, dependencies surfaced early, slippage caught before it costs anything." },
      { title: "Process improvement", body: "Repeat friction turned into better systems, templates, and defaults." },
      { title: "Adaptability", body: "Comfortable across industries and team shapes. The discipline travels." },
    ],
  },

  approach: {
    eyebrow: "How I work",
    heading: "What teams get with me in the room",
    items: [
      "Organized under pressure. The more moving pieces, the more useful I am.",
      "Clear communicator. People always know status, owner, and next step.",
      "Detail-oriented without losing the plot — I track the small stuff because it protects the big stuff.",
      "Calm escalation. I flag risks early, with options, not alarms.",
      "Strong executor. I care about finished, not just planned.",
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
      "I'm open to roles in creative operations, project management, and production coordination: agencies, brands, retail media, and influencer or boutique teams. The fastest way to reach me is LinkedIn.",
    ctaPrimary: { label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/halle-fromson-1288aa114/" },
  },

  footer: {
    line: "Halle Fromson · Los Angeles · Open to creative operations & project management roles",
  },
};
