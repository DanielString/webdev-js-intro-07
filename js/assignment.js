"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

//Return remainder
function returnTheRemainder(5, 4) {
  remainderElement.innerText = return num1 % num2;
}


//Check if Even
function checkIfEven(number) {
 if (number % 2 === 0) {
  return "True"
 } else {
  return "False"
 };
}

//Fourth element
function getTheFourthElement() {
  lostNumbersElement.innerHTML = lostNumbers[3];
}

function render() {
  returnTheRemainder();
  checkIfEven();
  getTheFourthElement();
}

submissionBtn.addEventListener("click", function () {
  // Update this function
  render();
});