import lodashThrottle from 'lodash';

const form = document.querySelector('.feedback-form');

const saveToLocalStorage = () => {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const throttledSaveToLocalStorage = lodashThrottle.throttle(
  saveToLocalStorage,
  500
);

form.addEventListener('input', throttledSaveToLocalStorage);

const loadFromLocalStorage = () => {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    form.elements.email.value = savedData.email;
    form.elements.message.value = savedData.message;
  }
};

document.addEventListener('DOMContentLoaded', loadFromLocalStorage);

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
