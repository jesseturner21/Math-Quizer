//SLIDER
const slider = document.getElementById("slider");
const slider_value = document.getElementById("value-selected");

slider.addEventListener("input", function () {
  slider_value.textContent = slider.value;
});
// BUTTON
function GameSelected(choice) {
  url_for_button =
    "/quiz/quiz.html?type=" + choice + "&num-of-questions=" + slider.value;
  window.location.href = url_for_button;
}
