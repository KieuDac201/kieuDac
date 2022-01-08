const email = document.querySelector("#email");
const fullName = document.querySelector("#fullName");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPass");

const form = document.querySelector(".form");

const handleSubmit = (e) => {
  e.preventDefault();
  const emailVal = email.value.trim();
  const fullNameVal = fullName.value.trim();
  const passwordVal = password.value.trim();
  const confirmPassVal = confirmPass.value.trim();

  handleValidate(emailVal, fullNameVal, passwordVal, confirmPassVal);
};

const handleValidate = (emailVal, fullNameVal, passwordVal, confirmPassVal) => {
  if (!emailVal) {
    alert("Email không được bỏ trống");
    return;
  }
  if (!fullNameVal || fullNameVal.length < 5) {
    alert("Fullname không bỏ trống và có ít nhất 5 ký tự");
    return;
  }
  if (!passwordVal || passwordVal.length < 5) {
    alert("Password không bỏ trống và có ít nhất 5 ký tự");
    return;
  }
  if (passwordVal !== confirmPassVal) {
    alert("Password không khớp");
    return;
  }
};

form.addEventListener("submit", handleSubmit);
