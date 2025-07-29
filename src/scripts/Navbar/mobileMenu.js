export function setupMobileMenu(headerElement) {
  if (!headerElement) return;

  const menuButton = headerElement.querySelector(".menu-button");
  const menuContainer = headerElement.querySelector(".mobile-menu .menu");
  const body = document.body;

  if (!menuButton || !menuContainer) return;

  const toggleMobileMenu = () => {
    menuContainer.classList.toggle("show");
    menuButton.classList.toggle("active");
    body.classList.toggle("no-scroll");
  };

  menuButton.addEventListener("click", toggleMobileMenu);

  menuContainer.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      toggleMobileMenu();
    }
  });
}
