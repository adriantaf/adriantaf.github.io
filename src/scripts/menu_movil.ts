const menu = document.getElementById("menu-movil");

menu?.addEventListener("click", () => {
  let nav = document.getElementById("nav-movil");

  if (nav?.classList.contains("opacity-0")) {
    nav.classList.remove("opacity-0", "translate-x-16", "pointer-events-none");
    nav.classList.add("opacity-100", "translate-x-0");
  } else {
    nav?.classList.remove("opacity-100", "translate-x-0");
    nav?.classList.add("opacity-0", "translate-x-16", "pointer-events-none");
  }
});
