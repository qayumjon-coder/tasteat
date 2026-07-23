const langBtns = document.querySelectorAll(".btn_lang");
const langBtn = document.querySelector(".lang_btn");
let currentlang = localStorage.getItem("lang") || "en";

let navList = document.querySelector(".nav_list");
const menuBtn = document.querySelector(".nav_menu_icon");

function renderMenu(category) {
    const items = siteContent[currentlang].menuSection.items.filter(
        (item) => item.category === category,
    );

    const container = document.querySelector(`.${category}`);
    container.innerHTML = items
        .map(
            (item) =>
                `
        <div class="menu_item">
            <div class="menu_name_wrap">
                <img src="${item.image}" alt="dish-image">

                <div class="menu_item_title">
                    <h4>${item.name}</h4>
                    <p>${item.description}</p>
                </div>
            </div>

            <div class="menu_price_divider"></div>
            <span class="price">${item.price}</span>

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

        element.innerHTML = value;
    });
}

function setLanguage(lang) {
    currentlang = lang;
    document.documentElement.lang = lang;

    renderMenu("starters");
    renderMenu("mains");
    renderMenu("desserts");

    localStorage.setItem("lang", lang);
    updatePageText();

    langBtns.forEach((btn) => {
        if(btn.dataset.lang === lang){
            btn.style.order = "1";
        }else{
            btn.style.order = "2";
        }
    })
}

langBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
        langBtn.classList.toggle("down");
    });
});

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("extend");
    if (navList.classList.contains("extend")) {
        menuBtn.style.backgroundColor = "#e1b168";
        menuBtn.style.color = "#fff";
    }else{
        menuBtn.style.backgroundColor = "#fff";
        menuBtn.style.color = "#000";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentlang);
});

document.querySelectorAll('*').forEach(el => {
  if (el.offsetWidth > document.documentElement.clientWidth) console.log(el)
});