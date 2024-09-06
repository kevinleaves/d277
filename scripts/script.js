const form = document.querySelector('form');
const email = document.getElementById('email');
const confirmEmail = document.getElementById('confirmEmail');

// confirmEmail field is valid when email field is valid AND confirmEmail value === email value
function validateEmails() {
  const emailIsValid = email.reportValidity();
  if (emailIsValid && email.value === confirmEmail.value) {
    confirmEmail.setCustomValidity('');
  } else {
    confirmEmail.setCustomValidity('These email fields are not equal.');
  }
}

/** calling reportValidity on an input field returns a boolean true if the field is valid
 * invalid if any value in the validityState object is true
 * setCustomValidity -> flags input field as invalid
 * in order to clear the error -> setCustomValidity("")
 * */

window.onload = () => {
  form.addEventListener('submit', (e) => {
    // prevent submit from default submitting & reloading page
    e.preventDefault();
    window.alert('Form submitted successfully!');
    // form.reset();
  });

  // each time the user types into the confirm box, we check if the form field matches the email box
  [email, confirmEmail].forEach((field) => {
    field.addEventListener('input', validateEmails);
  });

  validateEmails();
};
