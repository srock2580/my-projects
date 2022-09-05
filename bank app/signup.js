function dataConst(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
}

let data = JSON.parse(localStorage.getItem("data")) || [];

document
  .querySelector("#signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    createAccount();
  });

function createAccount() {
  let form = document.querySelector("#signupForm");

  let name = form.name.value;
  let email = form.email.value;
  let password = form.password.value;
  let confirm = form.confirm.value;

  if (password === confirm) {
    let item = new dataConst(name, email, password);
    data.push(item);
    localStorage.setItem("data", JSON.stringify(data));

    document.querySelector("#passwordEror").style.visibility = "hidden";

    window.location.href = "index.html";
    alert("Account created successfully");
  } else {
    document.querySelector("#passwordEror").style.visibility = "visible";
  }
}
