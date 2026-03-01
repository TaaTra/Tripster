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

const textarea = document.getElementById("description");
const counter = document.getElementById("charCount");

if (textarea && counter) {
  textarea.addEventListener("input", function () {
    const currentLength = textarea.value.length;
    counter.textContent = currentLength;

if (currentLength >= 350) {
  counter.classList.remove("text-warning");
  counter.classList.add("text-danger");
} else if (currentLength >= 300) {
  counter.classList.remove("text-danger");
  counter.classList.add("text-warning");
} else {
  counter.classList.remove("text-danger", "text-warning");
}
  });
}
