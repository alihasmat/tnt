const nav = document.querySelector(".header__nav");
const toggleBtn = document.querySelector(".header__toggle");

toggleBtn.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    toggleBtn.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    toggleBtn.setAttribute("aria-expanded", false);
  }
});
