/**
 * @param {HTMLElement} headerElement
 * @returns {() => void}
 */

export function setupNavbarScroll(headerElement) {
  if (!headerElement) return () => {};

  const sentinel = document.createElement("div");
  sentinel.setAttribute("aria-hidden", "true");
  sentinel.style.position = "absolute";
  sentinel.style.top = "0";
  sentinel.style.height = "1px";
  sentinel.style.width = "1px";
  sentinel.style.pointerEvents = "none";
  document.body.prepend(sentinel);

  const observer = new IntersectionObserver(([entry]) => {
    headerElement.classList.toggle("scrolled", !entry.isIntersecting);
  });

  observer.observe(sentinel);

  return () => {
    observer.disconnect();
    sentinel.remove();
  };
}
