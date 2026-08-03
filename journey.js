/* ============================================================
   HALLE FROMSON — journey scrub engine v2
   True scroll-world architecture: scenes are FIXED, STACKED
   layers; scroll only drives time. Seams are real dissolves —
   the incoming scene fades in OVER the outgoing one (which
   stays fully painted underneath), so the page background is
   never exposed and there are no hard edges.

   Writes per-scene CSS custom properties:
     --p     linear progress 0..1 across the scene's window
     --pe    eased progress (easeInOutCubic) — camera / drift
     --copy  copy opacity 0..1 (first scene starts visible)
   Fallback (reduced motion, coarse pointer, ≤860px, no JS):
   static stacked panels, everything visible (.j-static).
   ============================================================ */

(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var coarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  var small = window.matchMedia("(max-width: 860px)").matches;
  if (reduce || coarse || small) {
    document.documentElement.classList.add("j-static");
    return;
  }

  var XFADE_VH = 0.55;   // seam dissolve length, in viewport-heights of scroll
  var spans = Array.prototype.slice.call(document.querySelectorAll(".scene-span"));
  var stages = spans.map(function (s) { return s.querySelector(".scene-stage"); });
  var N = spans.length;
  var railLinks = Array.prototype.slice.call(document.querySelectorAll(".j-rail a"));
  var hint = document.querySelector(".j-hint");
  var chrome = [document.querySelector(".j-brand"), document.querySelector(".j-rail"), hint];

  /* Lift stages out of flow into a fixed stack; spans stay behind as
     invisible scroll rulers that define each scene's window. */
  document.documentElement.classList.add("j-scrub");
  stages.forEach(function (st, i) { st.style.zIndex = String(10 + i); });

  var M = [];            // per-scene {start, end} in scrollY
  var vh = 0;
  function measure() {
    vh = window.innerHeight;
    M = spans.map(function (span) {
      var vhs = parseFloat(span.getAttribute("data-scroll") || "2");
      span.style.height = Math.round(vhs * 100) + "vh";
      return null; // heights first, offsets after layout settles below
    });
    M = spans.map(function (span) {
      return { start: span.offsetTop, end: span.offsetTop + span.offsetHeight - vh };
    });
  }

  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

  function themeChrome(idx) {
    var cs = getComputedStyle(stages[idx]);
    var ink = cs.getPropertyValue("--scene-ink").trim() || "#16181D";
    chrome.forEach(function (el) { if (el) el.style.setProperty("--scene-ink", ink); });
    railLinks.forEach(function (a, i) { a.classList.toggle("active", i === idx); });
  }

  var lastActive = -1, raf = 0;

  function frame() {
    raf = 0;
    var y = window.scrollY;
    var X = XFADE_VH * vh;
    var active = 0;

    for (var i = 0; i < N; i++) {
      var m = M[i], st = stages[i];

      /* scene window extended by the dissolve zone on the entry side */
      var enterAt = m.start - X;          // begins fading in / moving here
      var leaveAt = m.end + X;            // fully covered by next scene here

      if (y < enterAt - vh || y > leaveAt + vh) {   // far away — cull
        if (st.style.visibility !== "hidden") st.style.visibility = "hidden";
        continue;
      }
      if (st.style.visibility !== "visible") st.style.visibility = "visible";

      /* dissolve: incoming scene fades 0→1 across [start-X, start];
         the previous scene stays opaque underneath (no fade-out), so
         the seam is a true crossfade and the body bg never shows. */
      var op = (i === 0) ? 1 : clamp01((y - enterAt) / X);
      st.style.opacity = op.toFixed(3);

      /* progress: time runs from the moment the scene starts appearing
         until the next scene has fully covered it. */
      var p = clamp01((y - enterAt) / (leaveAt - enterAt));
      st.style.setProperty("--p", p.toFixed(4));
      st.style.setProperty("--pe", ease(p).toFixed(4));

      /* copy choreography: in by 30%, hold, out at the very end while the
         next scene dissolves over. Scene 1 greets on landing; the finale
         never exits. */
      var cin = (i === 0) ? 1 : clamp01((p - 0.10) / 0.20);
      var cout = (i === N - 1) ? 1 : 1 - clamp01((p - 0.90) / 0.10);
      st.style.setProperty("--copy", Math.min(cin, cout).toFixed(3));

      if (y >= m.start - X * 0.5 && y <= m.end + X * 0.5) active = i;
      else if (y > m.end + X * 0.5) active = Math.min(i + 1, N - 1);
    }

    if (active !== lastActive) { themeChrome(active); lastActive = active; }
    if (hint) hint.classList.toggle("gone", y > vh * 0.35);
  }

  function schedule() { if (!raf) raf = requestAnimationFrame(frame); }

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", function () { measure(); schedule(); }, { passive: true });

  railLinks.forEach(function (a, i) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var m = M[i];
      window.scrollTo({ top: Math.round(m.start + (m.end - m.start) * 0.6), behavior: "smooth" });
    });
  });

  measure();
  frame();
})();
