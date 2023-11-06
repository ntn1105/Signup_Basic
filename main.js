var formInputs = document.querySelectorAll('.Signup_form .form-input');
var formMessages = document.querySelectorAll('.Signup_form .form-message');
var signup = document.querySelector('.Signup button');

console.log(formMessages);
console.log(formInputs);

var messageSource = [
  "Chưa nhập Họ và Tên",
  "Chưa nhập Email",
  "Chưa nhập mật khẩu",
  "Vui lòng xác thực lại mật khẩu",
  "Xác thực mật khẩu không thành công"
];

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("blur", function (e) {
    if (e.target.value.trim() == "") {
      formMessages[i].textContent = messageSource[i];
      formInputs[i].style.border="red solid 2px"
    } else {
      formMessages[i].textContent = "";
      formInputs[i].style.border=""
    }
  });

  formInputs[i].addEventListener("focus", function (e) {
    formMessages[i].textContent = "";
  });
}

signup.addEventListener("click", function (e) {
  let allInputsFilled = true;
  let successfulRegistration = true;
  let validEmailFormat = true;
  let validNameFormat = true;

  for (let i = 0; i < formInputs.length; i++) {
    if (formInputs[i].value.trim() === "") {
      formMessages[i].textContent = messageSource[i];
      allInputsFilled = false;
      successfulRegistration = false;
    } else {
      formMessages[i].textContent = "";
    }
  }

  if (formInputs[2].value !== formInputs[3].value) {
    formMessages[3].textContent = messageSource[4];
    allInputsFilled = false;
    successfulRegistration = false;
  } else {
    formMessages[3].textContent = "";
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formInputs[1].value)) {
    formMessages[1].textContent = "Vui lòng nhập đúng định dạng email";
    validEmailFormat = false;
    successfulRegistration = false;
  } else {
    formMessages[1].textContent = "";
  }

  if (/\d/.test(formInputs[0].value)) {
    formMessages[0].textContent = "Tên không được chứa kí tự số";
    validNameFormat = false;
    successfulRegistration = false;
  } else {
    formMessages[0].textContent = "";
  }

  if (allInputsFilled && successfulRegistration && validEmailFormat && validNameFormat) {
    signup.innerText = "Đăng ký thành công";
  } else {
    signup.innerText = "Đăng ký không thành công";
  }
});
