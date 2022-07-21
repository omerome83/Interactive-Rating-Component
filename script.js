const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const selectedRating = document.querySelector(".selected-rating");
const radioButtons = document.querySelectorAll(".rating-radio");

function submitRating() {
  section1.style.display = "none";
  section2.style.display = "block";

  const selectedButton = document.querySelector("input[name='rating']:checked");
  selectedRating.innerHTML = `You selected ${selectedButton.id} out of ${radioButtons.length}`;
}
