const about_builder = document.querySelector(".about-builder");
const btn_about_builder = document.querySelector(".btn-about-builder");
const exit_btn_about_builder = document.querySelector(
  ".exit-btn-about-builder",
);

btn_about_builder.addEventListener("click", () => {
  about_builder.classList.remove("hidden");
});

exit_btn_about_builder.addEventListener("click", () => {
  about_builder.classList.add("hidden");
});

// کدو و اسکلت
const cards = document.querySelectorAll(".pumpkin, .skeleton");

document.addEventListener("click", (e) => {
  const clickedCard = e.target.closest(".pumpkin, .skeleton");

  cards.forEach((card) => {
    card.classList.toggle("active", card === clickedCard);
  });
});

const details = document.querySelector("#more-details");
const scarecrow = document.querySelector(".scarecrow");

window.addEventListener("load", () => {
  setTimeout(() => {
    scarecrow.classList.add("active");
    details.classList.add("active");

    setTimeout(() => {
      scarecrow.classList.remove("active");
      details.classList.remove("active");
    }, 2000);
  }, 2000);
});

const toggle_ln = document.querySelector(".toggle-ln");
const btn_toggle_ln = document.querySelector(".btn-toggle-ln");

let isPersian = false;

const items = [
  ".p-title",
  ".title-text",
  ".heder-Contact",
  ".Shop-btn",
  ".Details-btn",
  ".Indoor-Decor",
  ".Edible-Treats",
  ".Pumpkin-Decor",
  ".Outdoor-Decor",
  ".Scary-Props",
  ".Accessories",
  ".Connect-footer",
  ".footer-text",
  ".About-Builder-btn",
  ".ABOUT-THE-BUILDER",
  ".BUILDER-name",
  ".text-builder",
];

const translations = {
  fa: {
    ".p-title":
      "فضای خود را با دکورهای هیجان‌انگیز و ترسناک متحول کنید! از تزئینات مرموز گرفته تا وسایل دکوراتیو ترسناک، هر چیزی که برای خلق حال‌وهوای بی‌نظیر هالووین نیاز دارید، اینجا پیدا می‌کنید!",
    ".title-text": `فضای خود را برای <br /><span class="text-[#EB2731]">هالووین</span> متحول کنید`,
    ".heder-Contact": "ارتباط با ما",
    ".Shop-btn": "خرید وسایل ترسناک",
    ".Details-btn": "جزئیات بیشتر",
    ".Indoor-Decor": "دکوراسیون داخلی",
    ".Edible-Treats": "خوراکی‌های خوشمزه",
    ".Pumpkin-Decor": "تزئینات کدو تنبل",
    ".Outdoor-Decor": "دکوراسیون بیرونی",
    ".Scary-Props": "وسایل ترسناک",
    ".Accessories": "لوازم جانبی",
    ".Connect-footer": "ارتباط با ما",
    ".footer-text": "ما را دنبال کنید تا از به‌روزرسانی‌های ترسناک باخبر شوید",
    ".About-Builder-btn": "درباره سازنده",
    ".ABOUT-THE-BUILDER": "درباره سازنده",
    ".BUILDER-name": "علی سینا",
    ".text-builder":
      "سلام! من سازنده‌ی این سایت هستم؛ علاقه‌مند به هالووین و طراح وب. من عاشق خلق تجربه‌های دیجیتالی جذاب و فراگیر با حال‌وهوای هالووین هستم که روح این جشن رو زنده می‌کنن.",
  },

  en: {
    ".p-title":
      "Transform your space with spookify decor that thrills! From eerie accents to haunting centerpieces, find everything you need for the perfect Halloween vibe.",
    ".title-text": `Transform Your Space <br /><span class="text-[#EB2731]">for Halloween!</span>`,
    ".heder-Contact": "Contact Us",
    ".Shop-btn": "Shop the Scare",
    ".Details-btn": "More Details",
    ".Indoor-Decor": "Indoor Decor",
    ".Edible-Treats": "Edible Treats",
    ".Pumpkin-Decor": "Pumpkin Decor",
    ".Outdoor-Decor": "Outdoor Decor",
    ".Scary-Props": "Scary Props",
    ".Accessories": "Accessories",
    ".Connect-footer": "Connect us",
    ".footer-text": "FOLLOW US FOR SPOOKIFY UPDATES",
    ".About-Builder-btn": "About Builder",
    ".ABOUT-THE-BUILDER": "ABOUT THE BUILDER",
    ".BUILDER-name": "Alisina",
    ".text-builder":
      "Hi! I'm the creator of Spookify, a Halloween enthusiast and web designer. I'm passionate about creating spooky and immersive digital experiences that bring the Halloween spirit to life.",
  },
};

function setLanguage(language) {
  const isPersian = language === "fa";

  items.forEach((selector) => {
    const element = document.querySelector(selector);
    if (!element) return;

    element.classList.add("language-transition");
    element.classList.remove("show");
  });

  setTimeout(() => {
    items.forEach((selector) => {
      const element = document.querySelector(selector);
      if (!element) return;

      if (selector === ".title-text") {
        element.innerHTML = translations[language][selector];
      } else {
        element.textContent = translations[language][selector];
      }

      element.classList.toggle("font-persian", isPersian);
    });

    btn_toggle_ln.textContent = isPersian ? "Fa" : "En";

    document.documentElement.lang = language;

    localStorage.setItem("spookify-language", language);

    requestAnimationFrame(() => {
      items.forEach((selector) => {
        const element = document.querySelector(selector);
        if (element) element.classList.add("show");
      });
    });
  }, 250);
}

// زبان ذخیره‌شده هنگام بارگذاری صفحه
const savedLanguage = localStorage.getItem("spookify-language");
setLanguage(savedLanguage === "fa" ? "fa" : "en");

// تغییر زبان با کلیک
toggle_ln.addEventListener("click", () => {
  const currentLanguage = localStorage.getItem("spookify-language");
  const newLanguage = currentLanguage === "fa" ? "en" : "fa";

  setLanguage(newLanguage);
});
