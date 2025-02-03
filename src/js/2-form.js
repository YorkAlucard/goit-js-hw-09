const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  saveToLocalStorage('feedback-form-state', formData);
});
const populateFormData = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    form.email.value = parsedData.email;
    form.message.value = parsedData.message;
    formData.email = parsedData.email;
    formData.message = parsedData.message;
  }
};
document.addEventListener('DOMContentLoaded', populateFormData);
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.reset();
  }
});
