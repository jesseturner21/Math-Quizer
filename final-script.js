score = window.location.search;
urlSearch = new URLSearchParams(score);

value = urlSearch.get("score");
num_of_questions = urlSearch.get("num-of-questions");
console.log(score);
console.log(value);
score_message = "You got " + value + " correct out of " + num_of_questions;
document.getElementById("score").innerHTML = score_message;
