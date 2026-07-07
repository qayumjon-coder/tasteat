
const starters = document.querySelector(".starters");
const mains = document.querySelector(".mains");
const desserts = document.querySelector(".desserts");

let currentlang = localStorage.getItem("lang") || "en";

function renderMenu(category) {
  const items = siteContent[currentlang].menuSection.items.filter(
    (item) => item.category === category,
  );

  const container = document.querySelector(`.${category}`);
  container.innerHTML = items
    .map(
      (item) =>
        `
        <div class="menu-item">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <span>${item.price}</span>
        </div>
        `,
    )
    .join("");
}

function updatePageText() {
    document.querySelectorAll("[data-i18n]").forEach(element => {

        const path = element.getAttribute("data-i18n").split(".");
        let value = siteContent[currentlang];

        path.forEach(p => value = value[p]);

        element.textContent = value;
    });
}

function setLanguage(lang) {
  currentlang = lang;

  renderMenu("starters");
  renderMenu("mains");
  renderMenu("desserts");

  localStorage.setItem("lang", lang);
  updatePageText();
}

const langBtn = document.querySelectorAll(".btn-lang");
langBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentlang);
});