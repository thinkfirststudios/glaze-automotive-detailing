/* Glaze Automotive Detailing — spec mockup.
   Wet, smooth, settled. The specular rake fires ONCE per element and never loops.
   No count-ups: there is no verified figure on this site to count to.
   Everything renders in its final state without JS or under reduced motion. */
(function () {
  var root = document.documentElement;
  root.classList.add("js");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && "IntersectionObserver" in window) root.classList.add("js-motion");

  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  var btn = document.querySelector(".menu-btn"), nav = document.getElementById("site-nav"), head = document.querySelector(".site-head");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      nav.style.setProperty("--nav-top", head.getBoundingClientRect().bottom + "px");
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = open ? "Close" : "Menu";
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("is-open")) { btn.click(); btn.focus(); } });
  }
  if (head) {
    var onScroll = function () { head.classList.toggle("is-condensed", window.scrollY > 40); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  if (root.classList.contains("js-motion")) {
    document.querySelectorAll(".rv-stagger").forEach(function (g) {
      Array.prototype.forEach.call(g.children, function (c, i) { c.classList.add("rv"); c.style.setProperty("--i", i); });
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-in");
        io.unobserve(en.target);           // once — the rake never repeats
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.15 });
    document.querySelectorAll(".rv, .rake, .rake-type, .wet").forEach(function (el) { io.observe(el); });
  }

  // Before/after: matte (before) to gloss (after). Driven by the drag, not a timer.
  document.querySelectorAll(".ba").forEach(function (ba) {
    var r = ba.querySelector("input[type=range]");
    if (!r) return;
    var set = function () { ba.style.setProperty("--pos", r.value + "%"); };
    r.addEventListener("input", set); set();
  });

  // Quote form — not wired. Error = specular box + text; valid = jade. Never red.
  document.querySelectorAll("form[data-mock]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll("[required]").forEach(function (f) {
        var errId = f.id + "-err", err = document.getElementById(errId);
        var bad = !f.value.trim() || (f.type === "email" && f.value && !/^\S+@\S+\.\S+$/.test(f.value));
        f.setAttribute("aria-invalid", bad ? "true" : "false");
        if (bad) {
          ok = false;
          if (!err) {
            err = document.createElement("p"); err.className = "err"; err.id = errId;
            err.textContent = f.type === "email" ? "Enter a valid email address." : "Please fill this in.";
            f.insertAdjacentElement("afterend", err); f.setAttribute("aria-describedby", errId);
          }
        } else if (err) { err.remove(); f.removeAttribute("aria-describedby"); }
      });
      if (!ok) { var first = form.querySelector('[aria-invalid="true"]'); if (first) first.focus(); return; }
      var status = form.querySelector(".form-status");
      status.hidden = false;
      status.textContent = "Mockup only — [FORM ENDPOINT — NOT WIRED]. Nothing was sent. To book now, call (813) 845-4569.";
      status.focus();
    });
  });
})();
