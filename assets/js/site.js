/* Planting Weeds: the only JavaScript on the site.
   1. Turns the "spot disinformation" stories into a story picker and slider.
   2. Loads a PDF preview only when its title is opened.
   3. Counts the flags ticked in the SCAME checklist.
   Without JavaScript, every story and step is shown in order, each document
   keeps its download link, and the checklist can still be ticked. */
(function () {
  "use strict";

  var spot = document.getElementById("spot");
  if (spot) {
    var range = document.getElementById("spot-range");
    var status = spot.querySelector(".spot__status");
    var scenarios = spot.querySelectorAll(".spot__scenario");
    var radios = spot.querySelectorAll('input[name="spot-story"]');
    var current = scenarios[0];

    var showStep = function () {
      var steps = current.querySelectorAll(".spot__step");
      var n = Number(range.value);
      for (var i = 0; i < steps.length; i++) {
        steps[i].hidden = i !== n - 1;
      }
      var text = "Step " + n + " of " + steps.length + ": " + steps[n - 1].getAttribute("data-level");
      status.textContent = text;
      range.setAttribute("aria-valuetext", text);
    };

    var showScenario = function (id) {
      for (var i = 0; i < scenarios.length; i++) {
        var match = scenarios[i].getAttribute("data-scenario") === id;
        scenarios[i].hidden = !match;
        if (match) {
          current = scenarios[i];
        }
      }
      range.max = current.querySelectorAll(".spot__step").length;
      range.value = 1;
      showStep();
    };

    spot.classList.add("is-enhanced");
    spot.querySelector(".spot__control").hidden = false;
    status.hidden = false;
    if (scenarios.length > 1) {
      spot.querySelector(".spot__stories").hidden = false;
    }
    for (var r = 0; r < radios.length; r++) {
      radios[r].addEventListener("change", function () {
        showScenario(this.value);
      });
    }
    range.addEventListener("input", showStep);
    showScenario(scenarios[0].getAttribute("data-scenario"));
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

  var scame = document.getElementById("scame");
  if (scame) {
    var boxes = scame.querySelectorAll('input[type="checkbox"]');
    var result = scame.querySelector(".scame__result");
    var total = boxes.length;
    var count = function () {
      var n = 0;
      for (var k = 0; k < boxes.length; k++) {
        if (boxes[k].checked) {
          n++;
        }
      }
      result.textContent = n === 0
        ? "No flags yet."
        : "You flagged " + n + " of " + total + ". Each flag is a reason to slow down and check before you share.";
      scame.classList.toggle("has-flags", n > 0);
    };
    scame.querySelector(".scame__footer").hidden = false;
    scame.addEventListener("change", count);
    scame.addEventListener("reset", function () {
      setTimeout(count, 0);
    });
  }
})();
