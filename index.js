let ratingObj = {
  currentRating: 0,
  activeBtn: null,
};
const ratingBtns = document.querySelectorAll(".rating-btn");
ratingBtns.forEach((btn) =>
  btn.addEventListener("click", handleRatingBtnClick)
);

const ratingCard = document.querySelector("#rating-card");
const thankyouCard = document.querySelector("#thankyou-card");

const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", (event) => {
  if (!ratingObj.activeBtn || ratingObj.currentRating === 0) return;
  ratingCard.classList.add("hide");
  thankyouCard.classList.remove("hide");

  const ratingSpan = thankyouCard.querySelector(".score");
  ratingSpan.textContent = ratingObj.currentRating;
  console.log(event);
});

function handleRatingBtnClick(event) {
  if (!event.target.dataset.rating) return;
  const ratingValue = Number(event.target.dataset.rating);

  if (ratingObj.currentRating == ratingValue) return;
  ratingObj.currentRating = ratingValue;

  if (ratingObj.activeBtn) {
    ratingObj.activeBtn.classList.remove("active");
  }
  ratingObj.activeBtn = event.target;
  ratingObj.activeBtn.classList.add("active");
}
