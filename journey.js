/* ============================================================
   HALLE FROMSON — journey scrub engine (adapted from scroll-world)
   Same architecture as skills/scroll-world/references/scrub-engine.js:
   - config-driven scenes, each with a scroll span (viewport-heights)
   - a per-scene progress value drives the "camera"
   - seam dissolves between scenes (crossfade at span edges)
   - phone / reduced-motion fallback: stacked static panels
   Difference: scenes are CSS worlds, so progress is written as a
   --p custom property instead of seeking video currentTime.
   ============================================================ */

(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var coarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  var small = window.matchMedia("(max-width: 860px)").matches;
  var noScrub = reduce || coarse || small;

  var CROSSFADE = 0.08; // fraction of a span used for the seam dissolve
  var spans = Array.prototype.slice.call(document.querySelectorAll(".scene-span"));
  var stages = spans.map(function (s) { return s.querySelector(".scene-stage"); });
  var railLinks = Array.prototype.slice.call(document.querySelectorAll(".j-rail a"));
  var hint = document.querySelector(".j-hint");
  var chrome = [document.querySelector(".j-brand"), document.querySelector(".j-rail"), hint];

  /* Fallback mode: stack the scenes, everything visible, no scrub loop. */
  if (noScrub) {
    document.documentElement.classList.add("j-static");
    return;
  }

  /* Assign scroll spans: data-scroll = viewport-heights of scroll for that scene. */
  spans.forEach(function (span) {
    var vh = parseFloat(span.getAttribute("data-scroll") || "1.6");
    span.style.height = Math.round(vh * 100) + "vh";
  });

  var metrics = [];
  function measure() {
    metrics = spans.map(function (span) {
      var top = span.offsetTop;
      return { top: top, len: span.offsetHeight - window.innerHeight };
    });
  }

  function themeChrome(idx) {
    var stage = stages[idx];
    if (!stage) return;
    var cs = getComputedStyle(stage);
    var ink = cs.getPropertyValue("--scene-ink").trim() || "#16181D";
    chrome.forEach(function (el) { if (el) el.style.setProperty("--scene-ink", ink); });
    railLinks.forEach(function (a, i) { a.classList.toggle("active", i === idx); });
  }

  var lastActive = -1;
  function frame() {
    var y = window.scrollY;
    var active = 0;
    for (var i = 0; i < spans.length; i++) {
      var m = metrics[i];
      var p = m.len > 0 ? (y - m.top) / m.len : 0;
      var inRange = p > -0.25 && p < 1.25;
      var clamped = Math.max(0, Math.min(1, p));
      if (inRange) stages[i].style.setProperty("--p", clamped.toFixed(4));
      /* seam dissolve: fade the stage in over the first CROSSFADE of its span
         and out over the last CROSSFADE (first scene never fades in,
         last scene never fades out). */
      var fade = 1;
      if (i > 0 && clamped < CROSSFADE) fade = clamped / CROSSFADE;
      if (i < spans.length - 1 && clamped > 1 - CROSSFADE) fade = (1 - clamped) / CROSSFADE;
      if (inRange) stages[i].style.setProperty("--fade", Math.max(0, Math.min(1, fade)).toFixed(3));
      if (p >= 0 && p < 1) active = i;
      else if (p >= 1) active = Math.min(i + 1, spans.length - 1);
    }
    if (active !== lastActive) { themeChrome(active); lastActive = active; }
    if (hint) hint.classList.toggle("gone", y > window.innerHeight * 0.4);
    raf = 0;
  }

  var raf = 0;
  function schedule() { if (!raf) raf = requestAnimationFrame(frame); }

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", function () { measure(); schedule(); }, { passive: true });

  /* rail navigation: jump to the "settled" point of a scene (75% through its span) */
  railLinks.forEach(function (a, i) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var m = metrics[i];
      window.scrollTo({ top: m.top + m.len * 0.75, behavior: "smooth" });
    });
  });

  measure();
  frame();
})();
