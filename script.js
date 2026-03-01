const toggleBtn = document.getElementById("contrastToggle");
  const html = document.documentElement;

  toggleBtn.addEventListener("click", () => {
    if (html.getAttribute("data-bs-theme") === "dark") {
      html.setAttribute("data-bs-theme", "light");
      html.classList.remove("fs-5");
      html.classList.remove("text-uppercase");
    } else {
      html.setAttribute("data-bs-theme", "dark");
      html.classList.add("fs-5");
      html.classList.add("text-uppercase");
    }
  });

  document.getElementById("contrastToggle")
  ?.addEventListener("click", function () {
    document.body.classList.toggle("high-contrast");
});