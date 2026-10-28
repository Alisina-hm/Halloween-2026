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
