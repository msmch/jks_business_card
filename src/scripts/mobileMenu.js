export function initMobileMenu() {
  const header = document.getElementById("main-header");
  let isMenuOpen = false;

  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");

  if (!menuBtn || !mobileMenu) return;

  const mobileLinks = mobileMenu.querySelectorAll("a");

  function openMobileMenu() {
    isMenuOpen = true;
    mobileMenu.classList.remove("-translate-y-full");
    mobileMenu.classList.add("translate-y-0");

    iconMenu.classList.remove("opacity-100", "rotate-0");
    iconMenu.classList.add("opacity-0", "rotate-90");

    iconClose.classList.remove("opacity-0", "-rotate-90");
    iconClose.classList.add("opacity-100", "rotate-0");
  }

  function closeMobileMenu() {
    isMenuOpen = false;
    mobileMenu.classList.remove("translate-y-0");
    mobileMenu.classList.add("-translate-y-full");

    iconMenu.classList.remove("opacity-0", "rotate-90");
    iconMenu.classList.add("opacity-100", "rotate-0");

    iconClose.classList.remove("opacity-100", "rotate-0");
    iconClose.classList.add("opacity-0", "-rotate-90");
  }

  menuBtn.onclick = (e) => {
    e.preventDefault();
    if (isMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  mobileLinks.forEach((link) => {
    link.onclick = () => {
      if (isMenuOpen) {
        closeMobileMenu();
      }
    };
  });
}