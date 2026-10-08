/* Planting Weeds: the only JavaScript on the site.
   1. Turns the five "spot disinformation" steps into a slider.
   2. Loads a PDF preview only when its title is opened.
   Without JavaScript, all five steps are shown in order and each document
   still has its download link. */
(function () {
  "use strict";

  var spot = document.getElementById("spot");
  if (spot) {
    var range = document.getElementById("spot-range");
    var status = spot.querySelector(".spot__status");
    var steps = spot.querySelectorAll(".spot__step");
    var show = function () {
      var n = Number(range.value);
      for (var i = 0; i < steps.length; i++) {
        steps[i].hidden = i !== n - 1;
      }
      var text = "Step " + n + " of " + steps.length + ": " + steps[n - 1].getAttribute("data-level");
      status.textContent = text;
      range.setAttribute("aria-valuetext", text);
    };
    spot.classList.add("is-enhanced");
    spot.querySelector(".spot__control").hidden = false;
    status.hidden = false;
    range.addEventListener("input", show);
    show();
  }

  var previews = document.querySelectorAll(".doc__preview");
  for (var j = 0; j < previews.length; j++) {
    previews[j].addEventListener("toggle", function () {
      if (!this.open || this.querySelector("iframe")) {
        return;
      }
      var frame = document.createElement("iframe");
      frame.src = this.getAttribute("data-pdf");
      frame.title = "Preview of " + this.querySelector(".doc__title").textContent;
      var holder = this.querySelector(".doc__frame");
      holder.insertBefore(frame, holder.firstChild);
    });
  }
})();
