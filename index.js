const seeMoreBtn = document.getElementById("see-more-btn");
const businessCardGrid = document.querySelector(".business-card-grid");

const collapsedHeight = 410;
let expanded = false;

seeMoreBtn.addEventListener("click", () => {
  businessCardGrid.style.maxHeight = expanded ? collapsedHeight + "px" : businessCardGrid.scrollHeight + "px";

  seeMoreBtn.textContent = expanded ? "See More" : "See Less";
  businessCardGrid.classList.toggle("expanded", !expanded);
  expanded = !expanded;
});
