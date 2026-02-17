const seeMoreBtn = document.getElementById("see-more-btn");
const hiddenCards = document.querySelectorAll(".hidden-card");
const fadeCard = document.querySelector(".business-offer-card:nth-child(3)");

seeMoreBtn.addEventListener("click", () => {
  hiddenCards.forEach((card) => card.classList.add("show"));
  seeMoreBtn.style.display = "none";
  fadeCard.classList.add("show");
});
