"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

//Return remainder
function returnTheRemainder(num1, num2) {
  return num1 % num2;
}
let remainder = returnTheRemainder(5, 4);
console.log(remainder)

//Check if Even
function checkIfEven(number) {
 if (number % 2 === 0) {
  return "True"
 } else {
  return "False"
 }
}
checkIfEven(47)

//Fourth element
function getTheFourthElement() {
  lostNumbers[3]
}