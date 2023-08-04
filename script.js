end_of_href = window.location.search;
console.log(end_of_href);
urlSearch = new URLSearchParams(end_of_href);
choice = urlSearch.get("type");
if (choice == " ") {
  choice = "+";
}
console.log(choice);
num_of_questions = urlSearch.get("num-of-questions");
// const queryString = "?type=+&num-of-questions=10";

// const urlParams = new URLSearchParams(queryString);
// const type = urlParams.get("type"); // Output: "+"
// const numOfQuestions = urlParams.get("num-of-questions"); // Output: "10"

// console.log(type);

// make the symbol the choice
document.getElementById("symbol").innerHTML = choice;

// Change for the type of game!
if (choice == "+") {
  var first_num = Math.floor(Math.random() * 500 + 100);
  var second_num = Math.floor(Math.random() * 500 + 100);
  document.getElementById("first-number").value = first_num;
  document.getElementById("second-number").value = second_num;
  var solution = first_num + second_num;
} else if (choice == "--") {
  var first_num = Math.floor(Math.random() * 500 + 550);
  var second_num = Math.floor(Math.random() * 500 + 50);
  document.getElementById("first-number").value = first_num;
  document.getElementById("second-number").value = second_num;
  var solution = first_num - second_num;
} else if (choice == "x") {
  var first_num = Math.floor(Math.random() * 15 + 2);
  var second_num = Math.floor(Math.random() * 15 + 2);
  document.getElementById("first-number").value = first_num;
  document.getElementById("second-number").value = second_num;
  var solution = first_num * second_num;
} else if (choice == "/") {
  var first_num = Math.floor(Math.random() * 15 + 2);
  var second_num = Math.floor(Math.random() * 15 + 2);
  document.getElementById("first-number").value = first_num;
  document.getElementById("second-number").value = second_num;
  var solution = first_num / second_num;
  solution = solution.toFixed(1);
}
// Counts the number of questions
var question_number = 1;
document.getElementById("question-number").innerHTML = question_number;
// Counts the score
var num_correct = 0;

console.log("inmain");

function Guess(ele) {
  console.log("infun");
  if (event.key === "Enter") {
    console.log("inkey");
    // Get the user answer
    var guess = document.getElementById("answer").value;
    if (solution == guess) {
      document.getElementById("show-answer").innerHTML = "Correct";
      document.getElementById("show-answer").style.color = "green";
      num_correct++;
    } else {
      document.getElementById("show-answer").innerHTML =
        "Incorrect: " +
        first_num +
        "  " +
        choice +
        " " +
        second_num +
        " = " +
        solution;
      document.getElementById("show-answer").style.color = "red";
    }
    if (question_number == num_of_questions) {
      total_href =
        "../final-screen/final.html?score=" +
        num_correct +
        "&num-of-questions=" +
        num_of_questions;
      window.location.href = total_href;
    }
    var guess = (document.getElementById("answer").value = "");

    question_number += 1;
    document.getElementById("question-number").innerHTML = question_number;
    // Change for the type of game!
    if (choice == "+") {
      first_num = Math.floor(Math.random() * 500 + 100);
      second_num = Math.floor(Math.random() * 500 + 100);
      document.getElementById("first-number").value = first_num;
      document.getElementById("second-number").value = second_num;
      solution = first_num + second_num;
    } else if (choice == "--") {
      first_num = Math.floor(Math.random() * 500 + 550);
      second_num = Math.floor(Math.random() * 500 + 50);
      document.getElementById("first-number").value = first_num;
      document.getElementById("second-number").value = second_num;
      solution = first_num - second_num;
    } else if (choice == "x") {
      first_num = Math.floor(Math.random() * 15 + 2);
      second_num = Math.floor(Math.random() * 15 + 2);
      document.getElementById("first-number").value = first_num;
      document.getElementById("second-number").value = second_num;
      solution = first_num * second_num;
    } else if (choice == "/") {
      first_num = Math.floor(Math.random() * 15 + 2);
      second_num = Math.floor(Math.random() * 15 + 2);
      document.getElementById("first-number").value = first_num;
      document.getElementById("second-number").value = second_num;
      solution = first_num / second_num;
      solution = solution.toFixed(1);
    }
  }
}
