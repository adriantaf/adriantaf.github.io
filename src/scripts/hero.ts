document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade").forEach((el, i) => {
    const element = el as HTMLElement;
    element.style.transitionDelay = `${i * 100}ms`;
    if (el.classList.contains("opacity-100 translate-y-0")) {
      el.classList.remove("opacity-100", "translate-y-0");
    }
    element.classList.add("opacity-0", "translate-y-4");

    requestAnimationFrame(() => {
      element.classList.add("transition-all", "duration-700");
      element.classList.remove("opacity-0", "translate-y-4");
      element.classList.add("opacity-100", "translate-y-0");
    });
  });
});
