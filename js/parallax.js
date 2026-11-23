(function () {
  var sections = Array.prototype.slice.call(document.querySelectorAll(".parallax"));
  if (!sections.length) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var factor = 0.42;
  var scheduled = false;

  function update() {
    scheduled = false;
    if (reduce.matches) {
      sections.forEach(function (section) {
        var bg = section.querySelector(".parallax-bg");
        if (bg) bg.style.transform = "";
      });
      return;
    }

    var viewH = window.innerHeight || 1;
    var limit = viewH * 0.46;

    sections.forEach(function (section) {
      var bg = section.querySelector(".parallax-bg");
      if (!bg) return;
      var rect = section.getBoundingClientRect();
      if (rect.bottom < -viewH || rect.top > viewH * 2) return;
      var fromCenter = rect.top + rect.height / 2 - viewH / 2;
      var shift = Math.max(-limit, Math.min(limit, -fromCenter * factor));
      bg.style.transform = "translate3d(0," + shift.toFixed(2) + "px,0)";
    });
  }

  function requestUpdate() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(update);
  }

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  reduce.addEventListener("change", requestUpdate);
})();
