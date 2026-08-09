export function initAOS() {
  if (typeof window.AOS !== "undefined") {
    window.AOS.init({
      once: true,
      offset: 100,
      duration: 800,
      easing: "ease-out-cubic",
    });

    setTimeout(() => {
      window.AOS.refresh();
    }, 150);
  } else {
    console.error("AOS library not found in window object.");
  }
}