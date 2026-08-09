let scrollHandler = null;

export function initReadingProgress() {
  const progressBar = document.getElementById("reading-progress");
  if (!progressBar) return;

  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler);
  }

  scrollHandler = () => {
    const scrollPx = document.documentElement.scrollTop || document.body.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (winHeightPx > 0) {
      const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
      progressBar.style.width = scrolled;
    }
  };

  window.addEventListener("scroll", scrollHandler);
  scrollHandler();
}