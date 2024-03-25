const form = document.querySelector('form');
const firstName = document.getElementById('first-name');
const email = document.getElementById('email');
const comments = document.getElementById('comments');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form from submitting
  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const emailValue = email.value.trim();
  const commentsValue = comments.value.trim();

  if(firstNameValue === '') {
    setErrorFor(firstName, 'First Name cannot be blank');
  } else {
    setSuccessFor(firstName);
  }

  if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if(!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

  if(commentsValue === '') {
    setErrorFor(comments, 'Comments cannot be blank');
  } else {
    setSuccessFor(comments);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector('small');

  // add error message inside small tag
  small.innerText = message;

  // add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement; // .form-control

  // remove error class
  formControl.className = 'form-control success';
}

function isEmail(email) {
  // validate email with regular expression
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}