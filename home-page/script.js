const question = document.getElementById("ques");
const answer = document.getElementById("ans");
const seven = document.getElementById("Log-out");
const Home = document.querySelector(".logo");

let isOpen = true;

question.addEventListener("click", function () {
  if (isOpen) {
    answer.style.display = "none";
    isOpen = false;
  } else {
    answer.style.display = "block";
    isOpen = true;
  }
});

seven.addEventListener("click", function () {
  window.location.href = "/index.html";
});

Home.addEventListener("click", function () {
  window.location.href = "/home-page/index.html";
});
