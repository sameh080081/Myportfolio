const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const message = document.getElementById('message');

function storeValues(userName, email1, message1) {
  const dataObject = JSON.stringify({ userName, userEmail, message });
  localStorage.setItem('dataObject', dataObject);
}

function populateStorage() {
  const formValues = JSON.parse(localStorage.getItem('dataObject'));
  if (formValues) {
    userName.value = formValues.userName;
    userEmail.value = formValues.userEmail;
    message.value = formValues.message;
  }
}

function getValues() {
    userName.addEventListener('input', () => storeValues(userName.value, userEmail.value, message.value));
    userEmail.addEventListener('input', () => storeValues(userName.value, userEmail.value, message.value));
  message.addEventListener('input', () => storeValues(userName.value, userEmail.value, message.value));
}

populateStorage();
getValues();