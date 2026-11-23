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
      var shift = -fromCenter * factor;
      if (bg.querySelector("img")) {
        var spareBelow = Math.max(0, bg.offsetHeight + bg.offsetTop - section.offsetHeight);
        var spareAbove = Math.max(0, -bg.offsetTop);
        if (section.classList.contains("hero")) {
          // Pin until the section starts leaving the viewport, then travel.
          var maxDown = Math.min(spareAbove, Math.max(0, -rect.top));
          shift = Math.max(-spareBelow, Math.min(maxDown, shift));
        } else if (section.classList.contains("contact")) {
          // Single image with crop: map scroll progress to the available spare range.
          // Double offset: cover the full travel in half the scroll distance.
          var travel = spareAbove + spareBelow;
          if (travel > 0) {
            var start = viewH;
            var end = -section.offsetHeight;
            var progress = ((start - rect.top) / (start - end)) * 2;
            if (progress < 0) progress = 0;
            if (progress > 1) progress = 1;
            // Opposite of the previous mapping so travel matches the hero direction.
            shift = progress * travel - spareAbove;
          } else {
            shift = 0;
          }
        } else {
          shift = Math.max(-spareBelow, Math.min(spareAbove, shift));
        }
      } else {
        shift = Math.max(-limit, Math.min(limit, shift));
      }
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
