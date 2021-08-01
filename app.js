'use strict';
const form = document.querySelector('.email-box');
const email = document.getElementById('email');
const label = document.querySelector('.email-box label');
const message = document.querySelector('.email-box small');
const btn = document.querySelector('.btn');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkInputs();
  checkEmail(email);
});

function checkInputs() {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setErrorFor(email, 'Looks like this is not an email');
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, 'Please provide a valid email adress');
  } else {
    setSuccessFor(email, 'Success');
  }
}

function setErrorFor(input, message) {
  let formControl = input.parentElement;
  formControl.className = 'email-box error';

  let small = formControl.querySelector('small');
  small.innerText = message;
}

function setSuccessFor(input, message) {
  let formControl = input.parentElement;
  formControl.className = 'email-box success';

  let small = formControl.querySelector('small');
  small.innerText = message;
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
