const navLinks = document.querySelectorAll("[data-navLink]");

navLinks.forEach((link) => {
  const pattern = /^\/blog\/\d+\/?$/; // Regular expression to match "/blog/[number]/" pattern

  if (link.getAttribute("href") === window.location.pathname) {
    link.setAttribute("aria-current", "page");
  } else if (
    pattern.test(window.location.pathname) &&
    link.getAttribute("href").includes("blog")
  ) {
    link.setAttribute("aria-current", "page");
  }
});
