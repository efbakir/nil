// Quiet scroll-reveal. Honours reduced-motion. Transform + opacity only.
document.addEventListener("DOMContentLoaded", function () {
  var els = document.querySelectorAll("[data-reveal]");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  els.forEach(function (el, i) {
    el.style.transitionDelay = (Math.min(i, 6) * 70) + "ms";
    io.observe(el);
  });
});
