const observerR = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const el = entry.target as HTMLElement;

      el.style.transitionDelay = `${i + 160}ms`;
      el.classList.add("opacity-0", "translate-x-20");

      requestAnimationFrame(() => {
        el.classList.add("transition-all", "duration-700");
        el.classList.remove("opacity-0", "translate-x-20");
        el.classList.add("opacity-100", "translate-x-0");
      });

      observerR.unobserve(el);
    }
  });
});

const observerL = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const el = entry.target as HTMLElement;

      el.style.transitionDelay = `${i * 160}ms`;
      if (el.classList.contains("opacity-100 translate-x-0")) {
        el.classList.remove("opacity-100", "translate-x-0");
      }
      el.classList.add("opacity-0", "-translate-x-20");

      requestAnimationFrame(() => {
        el.classList.add("transition-all", "duration-700");
        el.classList.remove("opacity-0", "-translate-x-20");
        el.classList.add("opacity-100", "translate-x-0");
      });

      observerL.unobserve(el);
    }
  });
});

document.querySelectorAll(".fade-scroll-r").forEach((el) => {
  observerR.observe(el);
});

document.querySelectorAll(".fade-scroll-l").forEach((el) => {
  observerL.observe(el);
});
