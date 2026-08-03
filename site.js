/* Renders the page from CONTENT (halle-content.js) and wires scroll reveals.
   No frameworks, no build step — edit halle-content.js, refresh, done. */

(function () {
  "use strict";
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const C = window.CONTENT || CONTENT;

  /* meta */
  document.title = C.meta.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", C.meta.description);

  /* nav + hero */
  $("#nav-name").textContent = C.meta.name;
  $("#hero-eyebrow").textContent = C.hero.eyebrow;
  // Italicize the last word of the headline for editorial flavor.
  const words = C.hero.headline.split(" ");
  const last = words.pop();
  $("#hero-headline").innerHTML = esc(words.join(" ")) + " <em>" + esc(last) + "</em>";
  $("#hero-sub").textContent = C.hero.subhead;
  const p = $("#hero-cta-primary");
  p.textContent = C.hero.ctaPrimary.label;
  p.href = C.hero.ctaPrimary.href;
  const s = $("#hero-cta-secondary");
  s.querySelector("span").textContent = C.hero.ctaSecondary.label;
  s.href = C.hero.ctaSecondary.href;

  /* about */
  $("#about-eyebrow").textContent = C.about.eyebrow;
  $("#about-heading").textContent = C.about.heading;
  $("#about-body").innerHTML = C.about.paragraphs.map((t) => `<p>${esc(t)}</p>`).join("");

  /* experience */
  $("#exp-eyebrow").textContent = C.experience.eyebrow;
  $("#exp-heading").textContent = C.experience.heading;
  $("#exp-roles").innerHTML = C.experience.roles
    .map(
      (r) => `
      <article class="role reveal">
        <div class="role-meta">
          <span class="dates">${esc(r.dates)}</span>
          ${esc(r.location)}
        </div>
        <div>
          <div class="role-head"><h3>${esc(r.company)}</h3><span class="title">${esc(r.role)}</span></div>
          <p class="role-blurb">${esc(r.blurb)}</p>
          <ul>${r.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
        </div>
      </article>`
    )
    .join("");
  const e = C.experience.education;
  $("#exp-edu").innerHTML = `<b>${esc(e.school)}</b> ${esc(e.degree)} · ${esc(e.detail)} <span class="dates">${esc(e.dates)}</span>`;

  /* strengths */
  $("#str-eyebrow").textContent = C.strengths.eyebrow;
  $("#str-heading").textContent = C.strengths.heading;
  $("#str-grid").innerHTML = C.strengths.items
    .map((it) => `<div class="str-card reveal"><h3>${esc(it.title)}</h3><p>${esc(it.body)}</p></div>`)
    .join("");

  /* approach */
  $("#app-eyebrow").textContent = C.approach.eyebrow;
  $("#app-heading").textContent = C.approach.heading;
  $("#app-list").innerHTML = C.approach.items
    .map((t) => {
      const i = t.indexOf("—");
      // Bold the lead phrase before the first em dash when present.
      return i > 0
        ? `<li class="reveal"><b>${esc(t.slice(0, i).trim())}</b> — ${esc(t.slice(i + 1).trim())}</li>`
        : `<li class="reveal">${esc(t)}</li>`;
    })
    .join("");

  /* forward */
  $("#fwd-eyebrow").textContent = C.forward.eyebrow;
  $("#fwd-heading").textContent = C.forward.heading;
  $("#fwd-body").textContent = C.forward.body;

  /* contact + footer */
  $("#ct-eyebrow").textContent = C.contact.eyebrow;
  $("#ct-heading").textContent = C.contact.heading;
  $("#ct-body").textContent = C.contact.body;
  const cp = $("#ct-cta");
  cp.querySelector("span").textContent = C.contact.ctaPrimary.label;
  cp.href = C.contact.ctaPrimary.href;
  $("#footer-line").textContent = C.footer.line;

  /* scroll reveals — no-op when reduced motion is preferred */
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && (en.target.classList.add("in"), io.unobserve(en.target))),
      { threshold: 0.12 }
    );
    targets.forEach((el) => io.observe(el));
  }
})();
