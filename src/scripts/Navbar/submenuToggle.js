export function setupSubmenuToggle(headerElement) {
    const submenuToggles = headerElement.querySelectorAll(".submenu-toggle");
    submenuToggles.forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
        e.stopPropagation();

        const parentContainer = toggle.parentElement;
        const wasOpen = parentContainer.classList.contains("open");

        headerElement.querySelectorAll(".has-submenu.open").forEach((openSubmenu) => {
            if (openSubmenu !== parentContainer) {
            openSubmenu.classList.remove("open");
            }
        });

        parentContainer.classList.toggle("open");
        });
    });
    
    document.addEventListener("click", (e) => {
    const target = e.target;
      if (target.closest(".has-submenu.open")) {
        return;
      }
      headerElement.querySelectorAll(".has-submenu.open").forEach((openSubmenu) => {
        openSubmenu.classList.remove("open");
      });
    });
};