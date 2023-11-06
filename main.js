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
  for (let i = 0; i < formInputs.length; i++) {
    if (formInputs[i].value.trim() === "") {
      formMessages[i].textContent = messageSource[i];
    } else {
      formMessages[i].textContent = "";
    }
  }

  if (formInputs[2].value !== formInputs[3].value) {
    formMessages[3].textContent = messageSource[4];
  } else {
    formMessages[3].textContent = "";
  }
});

formInputs[0].addEventListener("input", function (e) {
  if (/\d/.test(e.target.value)) {
    formMessages[0].textContent = "Tên không được chứa kí tự số";
  } else {
    formMessages[0].textContent = "";
  }
});
formInputs[0].addEventListener("blur", function (e) {
  if (e.target.value.trim() == "") {
      formMessages[0].textContent = messageSource[0];
  } else {
      formMessages[0].textContent = "";
  }
  var words = e.target.value.toLowerCase().split(' ');
  for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);//lấy từ đầu viết hoa sau đó nối với với các phần tử còn lại 
  }
  e.target.value = words.join(' ');
});

var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Biểu thức chính quy kiểm tra địa chỉ email

formInputs[1].addEventListener("blur", function (e) {
  if (e.target.value.trim() === "") {
    formMessages[1].textContent = messageSource[1];
  } else if (!emailRegex.test(e.target.value)) {
    formMessages[1].textContent = "Vui lòng nhập đúng định dạng email";
  } else {
    formMessages[1].textContent = "";
  }
});
