import throttle from 'lodash.throttle';

let STORAGE_KEY = "feedback-form-state";

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};


const formData = {};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  const key = evt.target.name;
  formData[key] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

function noteForm() {
  const data = localStorage.getItem(STORAGE_KEY);
  const savedData = JSON.parse(data);

  if (savedData.email) {
    refs.email.value = savedData.email;
  }

   if (savedData.message) {
     refs.message.value = savedData.message;
   }
};

noteForm();
