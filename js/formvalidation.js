const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const formButton = document.getElementById('submit');

form.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    formButton.setCustomValidity('Please use only lowercase letters with your email.');
    formButton.reportValidity();
    event.preventDefault();
  }
});

emailInput.addEventListener('input', () => {
  formButton.setCustomValidity('');
});