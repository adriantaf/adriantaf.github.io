const items = document.querySelectorAll<HTMLElement>(".niche-item");

const img = document.getElementById("preview-img") as HTMLImageElement | null;
const title = document.getElementById(
  "preview-title",
) as HTMLHeadingElement | null;
const desc = document.getElementById(
  "preview-desc",
) as HTMLParagraphElement | null;

if (items.length && img && title && desc) {
  const first = items[0];

  img.src = first.dataset.img ?? "";
  title.textContent = first.dataset.title ?? "";
  desc.textContent = first.dataset.desc ?? "";

  items.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      img.style.opacity = "0";

      setTimeout(() => {
        img.src = el.dataset.img ?? "";
        title.textContent = el.dataset.title ?? "";
        desc.textContent = el.dataset.desc ?? "";
        img.style.opacity = "1";
      }, 150);
    });
  });
}
