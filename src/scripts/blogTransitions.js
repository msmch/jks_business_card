export function initBlogTransitions() {
  if (window.hasBlogTransitionsFix) return;
  window.hasBlogTransitionsFix = true;

  document.addEventListener("astro:before-preparation", (e) => {
    if (e.to.pathname === "/blog" || e.to.pathname === "/") {
      const cover = document.querySelector(".blog-post__cover");
      const title = document.querySelector(".blog-post__title");

      if (cover) {
        cover.style.viewTransitionName = "none";
      }
      if (title) {
        title.style.viewTransitionName = "none";
      }
    }
  });
}