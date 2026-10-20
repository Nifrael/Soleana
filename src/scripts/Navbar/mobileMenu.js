export function setupMobileMenu(headerElement) {
  if (!headerElement) return;

  const menuButton = headerElement.querySelector(".burger");
  const panel = headerElement.querySelector(".panneau");
  const html = document.documentElement;

  if (!menuButton || !panel) return;

  const setOpen = (open) => {
    panel.classList.toggle("ouvert", open);
    panel.inert = !open;
    headerElement.classList.toggle("menu-ouvert", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute(
      "aria-label",
      open ? "Fermer le menu" : "Ouvrir le menu",
    );
    document.body.classList.toggle("no-scroll", open);
    html.classList.toggle("no-scroll", open);
  };

  const isOpen = () => panel.classList.contains("ouvert");

  // Repart d'un état fermé après une navigation (ClientRouter).
  setOpen(false);

  menuButton.addEventListener("click", () => setOpen(!isOpen()));

  panel.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });

  // Accordéon des prestations.
  panel.querySelectorAll(".accordeon > button").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const deplie = toggle.parentElement.classList.toggle("deplie");
      toggle.setAttribute("aria-expanded", String(deplie));
    });
  });

  // Échap ferme le menu et rend le focus au bouton. L'écouteur se retire
  // tout seul quand le header est remplacé par une navigation.
  const onKeydown = (e) => {
    if (!headerElement.isConnected) {
      document.removeEventListener("keydown", onKeydown);
      return;
    }
    if (e.key === "Escape" && isOpen()) {
      setOpen(false);
      menuButton.focus();
    }
  };
  document.addEventListener("keydown", onKeydown);

  // Repasser en affichage ordinateur ferme le menu.
  const desktop = window.matchMedia("(width >= 1024px)");
  const onResize = (e) => {
    if (!headerElement.isConnected) {
      desktop.removeEventListener("change", onResize);
      return;
    }
    if (e.matches) setOpen(false);
  };
  desktop.addEventListener("change", onResize);
}
