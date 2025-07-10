const nav = document.querySelector("nav");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  // Hämta aktuell höjd på menyn
  const scrollTrigger = nav.offsetHeight;

  if (currentScroll > scrollTrigger) {
    if (currentScroll > lastScrollTop) {
      // Scrollar nedåt → göm menyn
      nav.classList.add("hide");
      nav.classList.remove("show");
    } else {
      // Scrollar uppåt → visa menyn
      nav.classList.add("show");
      nav.classList.remove("hide");
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
