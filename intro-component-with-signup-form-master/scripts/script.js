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

function checkForm() {
  if (email.value == '') {
    labelEmail.setAttribute('style', 'color:hsl(0, 100%, 74%)');
    labelEmail.innerHTML = 'Email cannot be null';
    email.setAttribute(
      'style',
      'border-color:hsl(0, 100%, 74%);margin-bottom:3rem'
    );
  } else {
    if (email.value.match(pattern)) {
      labelEmail.innerHTML = '';
      email.setAttribute('style', 'border-color:hsl(154, 68%, 32%)');
    } else {
      labelEmail.setAttribute('style', 'color:hsl(0, 100%, 74%)');
      labelEmail.innerHTML = 'Looks like this is not an email';
      email.setAttribute(
        'style',
        'border-color:hsl(0, 100%, 74%);margin-bottom:3rem'
      );
    }
  }

  if (firstName.value.length == '') {
    labelName.setAttribute('style', 'color:hsl(0, 100%, 74%)');
    labelName.innerHTML = 'First Name cannot be null';
    firstName.setAttribute(
      'style',
      'border-color:hsl(0, 100%, 74%);margin-bottom:3rem'
    );
  } else {
    labelName.innerHTML = '';
    firstName.setAttribute('style', 'border-color:hsl(154, 68%, 32%)');
  }

  if (lastName.value.length == '') {
    labelLastName.setAttribute('style', 'color:hsl(0, 100%, 74%)');
    labelLastName.innerHTML = 'Last Name cannot be null';
    lastName.setAttribute(
      'style',
      'border-color:hsl(0, 100%, 74%);margin-bottom:3rem'
    );
  } else {
    labelLastName.innerHTML = '';
    lastName.setAttribute('style', 'border-color:hsl(154, 68%, 32%)');
  }

  if (password.value.length == '') {
    labelPassword.setAttribute('style', 'color:hsl(0, 100%, 74%)');
    labelPassword.innerHTML = 'Password cannot be null';
    password.setAttribute(
      'style',
      'border-color:hsl(0, 100%, 74%);margin-bottom:3rem'
    );
  } else {
    labelPassword.innerHTML = '';
    password.setAttribute('style', 'border-color:hsl(154, 68%, 32%)');
  }
}
