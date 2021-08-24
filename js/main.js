const form = document.getElementById("form");
const email = document.getElementById("email");
const formInput = document.querySelector(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValidate = email.value;

  if (!validateEmail(emailValidate)) {
    formInput.classList.add("error");
    formInput.classList.remove("success");
    document.querySelector(".form-span").style.display = "block";
    document.querySelector(".form-error-icon").style.display = "block";
  } else {
    formInput.classList.remove("error");
    formInput.classList.add("success");
    document.querySelector(".form-span").style.display = "none";
    document.querySelector(".form-error-icon").style.display = "none";
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
