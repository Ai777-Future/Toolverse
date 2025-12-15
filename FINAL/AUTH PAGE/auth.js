const userValue = document.getElementById("user-value");
const userPassword = document.getElementById("user-pass");
const btn = document.getElementById("Log-btn");
const result = document.getElementById("result");

let db = {
  sandeep: 12345,
  nandini: 56789,
  
};

btn.addEventListener("click", function () {
  let username = userValue.value;
  let password = userPassword.value;

  if (username == "" && password == "") {
    result.style.color = "red";
    result.innerHTML = "Please enter Your Username & password";
    return;
  } else if (username == "") {
    result.style.color = "orange";
    result.innerHTML = "Please enter Your Username";
    return;
  } else if (password == "") {
    result.style.color = "orange";
    result.innerHTML = "Please enter Your password";
    return;
  }

  if (db[username] && db[username] == password) {
    result.style.color = "#39FF14";
    result.innerHTML = "✅ Login Successful";

    setTimeout(function () {
      window.location.href = "../HOME PAGE/index.html";
    }, 800);
  } else {
    result.style.color = "red";
    result.innerHTML = "invalid password or username";
  }
});
