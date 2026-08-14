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
    email: "hallefromson@gmail.com",
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
      "I've spent my career inside creative teams — most recently in entertainment advertising, managing integrated campaigns for clients like Focus Features, Netflix, MGM+, and Roku — owning the unglamorous machinery that great work depends on: schedules, scopes, reviews, approvals, asset handoffs, and the hundred small decisions that keep a project on track.",
      "My strength is structure. I break ambitious briefs into plans people can actually execute, manage six-figure project budgets without losing sight of the creative, and keep stakeholders aligned as things change. I'm client-capable in the room and relentless behind the scenes.",
      "The tools change by team; the discipline doesn't. I work in Notion, Microsoft and Google Workspace suites, Adobe Creative Cloud, and Slack, and I'm at home in fast-moving environments where priorities shift daily and the work still has to ship.",
    ],
  },

  experience: {
    eyebrow: "Experience",
    heading: "Where I've done it",
    roles: [
      {
        company: "Arsonal Design",
        role: "Project Manager",
        location: "Culver City, CA",
        dates: "February 2023 – Present",
        blurb:
          "Entertainment advertising agency — integrated creative campaigns for clients including Focus Features, Netflix, MGM+, and Roku.",
        bullets: [
          "Serve as the primary client contact, managing requests, timelines, and deliverables across multiple simultaneous campaigns from kickoff through final delivery.",
          "Coordinate design, production, and strategy teams, and manage six-figure project budgets while keeping creative work on time and on spec.",
          "Introduced Notion to streamline project tracking and communication between creative departments, improving turnaround time and visibility into status.",
          "Strengthened team efficiency through improved interdepartmental workflows, transparent communication, and proofing/QA on visual assets for accuracy, consistency, and brand integrity.",
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
        company: "Luna Bakery Café",
        role: "Front Supervisor & Baker",
        location: "Chagrin Falls, OH",
        dates: "June 2018 – August 2019",
        blurb:
          "Hospitality experience.",
        bullets: [
          // VERIFY: role-typical responsibilities from title only — Halle to confirm/adjust.
          "Supervised front-of-house operations and coordinated with kitchen staff to keep service running smoothly during high-volume shifts.",
        ],
      },
      {
        company: "LA Animal Services",
        role: "Level 3 Dog Handler (Volunteer)",
        location: "Los Angeles, CA",
        dates: "November 2024 – Present",
        blurb:
          "Volunteer experience.",
        bullets: [
          // VERIFY: role-typical responsibilities from title only — Halle to confirm/adjust.
          "Handle and care for shelter dogs on a volunteer basis, following safety protocols and supporting adoption-readiness.",
        ],
      },
      {
        company: "Kol Tikvah",
        role: "Experiential Education Coordinator",
        location: "Woodland Hills, CA",
        dates: "July 2021 – December 2022",
        blurb:
          "Full-time · religious school, K–12 community programming.",
        bullets: [
          "Supported the School Director with day-to-day administrative operations, keeping programs, schedules, and communications running smoothly.",
          "Designed and executed weekly programs and events that increased youth engagement and participation.",
          "Managed budgets, marketing, and logistics to ensure smooth operations and fiscal accountability.",
          "Strengthened community relationships through consistent communication with parents, teachers, and clergy.",
        ],
      },
      {
        company: "Congregation Or Ami",
        role: "Teacher & Youth Group Advisor",
        location: "Calabasas, CA",
        dates: "September 2019 – July 2021",
        blurb:
          "Religious school, grades 4–6.",
        bullets: [
          "Developed and led educational programs for grades 4–6 focused on leadership, Hebrew, and cultural learning.",
          "Organized and facilitated youth group events that promoted teamwork and social growth.",
        ],
      },
    ],
    education: {
      school: "Indiana University Bloomington",
      degree: "B.A. Psychology",
      detail: "Clinical Psychological Science Certificate · Hutton Honors College",
      dates: "2015 – 2018",
    },
  },

  portfolio: {
    eyebrow: "Selected work",
    heading: "Key art & campaigns I've worked on",
    // NOTE: image files not yet supplied — add real key art to assets/portfolio/<slug>.jpg
    // for each item below. Cards render as a labeled placeholder until the file exists.
    items: [
      { title: "Pressure", studio: "Focus Features", slug: "pressure" },
      { title: "Girls Like Girls", studio: "Focus Features", slug: "girls-like-girls" },
      { title: "People We Meet on Vacation", studio: "Netflix", slug: "people-we-meet-on-vacation" },
      { title: "The Last House", studio: "Netflix", slug: "the-last-house" },
      { title: "Vanished", studio: "MGM+", slug: "vanished" },
      { title: "The Ashlyn Harris Story", studio: "Roku", slug: "the-ashlyn-harris-story" },
      { title: "America's Top 25 Female Athletes", studio: "Roku", slug: "americas-top-25-female-athletes" },
      { title: "IT: Welcome to Derry", studio: "HBO Max", slug: "welcome-to-derry" },
    ],
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
      "I'm open to roles in creative operations, project management, and production coordination: agencies, brands, retail media, and influencer or boutique teams. The fastest way to reach me is via LinkedIn or email.",
    ctaPrimary: { label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/halle-fromson-1288aa114/" },
    ctaSecondary: { label: "Email me", href: "mailto:hallefromson@gmail.com" },
  },

  footer: {
    line: "Halle Fromson · Los Angeles · Open to creative operations & project management roles",
  },
};
