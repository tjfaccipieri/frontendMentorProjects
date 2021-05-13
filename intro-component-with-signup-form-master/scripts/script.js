//.fa-eye declaration
let btn = document.querySelector('.fa-eye');

///////////////////////////////////////////////
// variaveis para validação de dados
let firstName = document.querySelector('#name');
let lastName = document.querySelector('#lastName');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// show password onClink eye icon
btn.addEventListener('click', () => {
  let password = document.querySelector('#password');
  if (password.getAttribute('type') == 'password') {
    password.setAttribute('type', 'text');
  } else {
    password.setAttribute('type', 'password');
  }
});

/* Data Validation */
//First name validation//
firstName.addEventListener('keyup', () => {
  if (firstName.value.length < 2) {
    labelName.setAttribute('style', 'color:hsl(0, 100%, 74%)');
    labelName.innerHTML = 'First Name / please insert at least 2 characters';
    firstName.setAttribute(
      'style',
      'border-color:hsl(0, 100%, 74%);margin-bottom:3rem'
    );
  } else {
    labelName.innerHTML = '';
    firstName.setAttribute('style', 'border-color:hsl(154, 68%, 32%)');
  }
});
//Last name validation//
lastName.addEventListener('keyup', () => {
  if (lastName.value.length < 2) {
    labelLastName.setAttribute('style', 'color:hsl(0, 100%, 74%)');
    labelLastName.innerHTML = 'Last Name / please insert at least 2 characters';
    lastName.setAttribute(
      'style',
      'border-color:hsl(0, 100%, 74%);margin-bottom:3rem'
    );
  } else {
    labelLastName.innerHTML = '';
    lastName.setAttribute('style', 'border-color:hsl(154, 68%, 32%)');
  }
});
//Email validation//
// email.addEventListener('keyup', () => {
//   if (email.value.length < 1) {
//     labelEmail.setAttribute('style', 'color:hsl(0, 100%, 74%)');
//     labelEmail.innerHTML = 'Email / cannot be null';
//     email.setAttribute('style', 'border-color:hsl(0, 100%, 74%);margin-bottom:3rem');
//   } else {
//     labelEmail.innerHTML = '';
//     email.setAttribute('style', 'border-color:hsl(154, 68%, 32%)');
//   }
// });
//Password validation//
password.addEventListener('keyup', () => {
  if (password.value.length <= 6) {
    labelPassword.setAttribute('style', 'color:hsl(0, 100%, 74%)');
    labelPassword.innerHTML = 'Password / need to be bigger than 6 chars';
    password.setAttribute(
      'style',
      'border-color:hsl(0, 100%, 74%);margin-bottom:3rem'
    );
  } else {
    labelPassword.innerHTML = '';
    password.setAttribute('style', 'border-color:hsl(154, 68%, 32%)');
  }
});

//ainda falta fazer a validação do e-mail

email.addEventListener('keyup', () => {
  if (email.value.match(pattern)) {
    labelEmail.innerHTML = '';
    email.setAttribute('style', 'border-color:hsl(154, 68%, 32%)');
  } else {
    labelEmail.setAttribute('style', 'color:hsl(0, 100%, 74%)');
    labelEmail.innerHTML = 'Email / invalid email';
    email.setAttribute(
      'style',
      'border-color:hsl(0, 100%, 74%);margin-bottom:3rem'
    );
  }
});
