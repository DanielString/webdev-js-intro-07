"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];


//Return remainder
function returnTheRemainder(num1, num2) {
  return num1 % num2
}
let remainder = returnTheRemainder(5, 4)
console.log(remainder)


//Check if Even
function checkIfEven(number) {
 if (number % 2 === 0) {
  return "true"
 } else {
  return "false"
 };
}
console.log(checkIfEven(47))

//Fourth element
let numb;
function getTheFourthElement() {
   numb = lostNumbers[3];
}
console.log(numb)

function render() {
  // Call the created functions
 remainderElement.innerText = returnTheRemainder(5, 4)
 checkIfEvenElement.innerText = checkIfEven()
 lostNumbersElement.innerText = getTheFourthElement()
}

submissionBtn.addEventListener("click", function () {
  render();
});