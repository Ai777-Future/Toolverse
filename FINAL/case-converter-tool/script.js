const one = document.getElementById("btn-1");
const two = document.getElementById("btn-2");
const three = document.getElementById("btn-3");
const four = document.getElementById("btn-4");
const five = document.getElementById("btn-5");
const six = document.getElementById("btn-6");
const seven = document.getElementById("Log-out");
const userInput = document.getElementById("area");
const result = document.getElementById("result");
const resultbox = document.querySelector(".result-area");
const mainbox = document.querySelector(".box");

one.addEventListener("click", function () {
  let value = userInput.value;

  if (value === "") {
    resultbox.style.display = "block";
    mainbox.style.display = "block";
    result.innerHTML = "Please enter some text!";
    five.style.display = "none";
  } else {
    value = userInput.value.toUpperCase();
    result.innerHTML = value;
    // result.style.color = "#1bfb23";
    five.style.display = "block";
    resultbox.style.display = "block";
    mainbox.style.display = "block";
  }
});

two.addEventListener("click", function () {
  let value = userInput.value;

  if (value === "") {
    resultbox.style.display = "block";
    mainbox.style.display = "block";
    result.innerHTML = "Please enter some text!";
    five.style.display = "none";
  } else {
    value = userInput.value.toLowerCase();
    result.innerHTML = value;
    // result.style.color = "#1bfb23";
    five.style.display = "block";
    resultbox.style.display = "block";
    mainbox.style.display = "block";
  }
});

three.addEventListener("click", function () {
  let value = userInput.value;

  if (value.trim() === "") {
    result.innerHTML = "Please Enter Some Value...";
    resultbox.style.display = "block";
    mainbox.style.display = "block";
    return; //return krne pe funcion band ho jata hai
  }

  let words = value.trim().split(" ");

  let Capitalized = words.map(function capitalFirst(Capital) {
    if (Capital.length === 0) return "";
    return Capital[0].toUpperCase() + Capital.slice(1).toLowerCase();
  });

  let finalValue = Capitalized.join(" ");
  result.innerHTML = finalValue;
  resultbox.style.display = "block";
  mainbox.style.display = "block";
});

four.addEventListener("click", function () {
  let value = userInput.value;

  if (value.trim() === "") {
    result.innerHTML = "Please Enter Some Value...";
    resultbox.style.display = "block";
    mainbox.style.display = "block";
    return; //return krne pe funcion band ho jata hai
  }

  let words = value.trim().split(" ");

  let Capitalized = words.map(function capitalFirst(Capital) {
    if (Capital.length === 0) return "";
    return Capital[0].toUpperCase() + Capital.slice(1).toLowerCase();
  });

  let finalValue = Capitalized.join(" ");
  result.innerHTML = finalValue;
  resultbox.style.display = "block";
  mainbox.style.display = "block";
});

five.addEventListener("click", function () {
  if (userInput.value === "") {
    alert("please Enter Value First");
    resultbox.style.display = "block";
    mainbox.style.display = "block";
  } else {
    const text = result.innerHTML;
    navigator.clipboard.writeText(text);
    alert("Copied");
    resultbox.style.display = "block";
    mainbox.style.display = "block";
  }
});

six.addEventListener("click", function () {
  userInput.value = "";
  result.innerHTML = "";
  five.style.display = "none";
  resultbox.style.display = "none";
  mainbox.style.display = "none";
  video.pause();
  video.style.display = "none";
  audio.pause();
  audio.currentTime = 0;
});

seven.addEventListener("click", function () {
  window.location.href = "../auth-page/auth.html";
});

Home.addEventListener("click", function () {
  window.location.href = "../home-page/index.html";
});
