'use strict';

const localStorageKey = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEl = formEl.elements.email;
const textareaEl = formEl.elements.message;
// ========================================================================== input
formEl.addEventListener('input', onInputValue);

function onInputValue(evt) {
  evt.preventDefault();
  const userinfo = {
    email: `${inputEl.value.trim()}`,
    message: `${textareaEl.value.trim()}`,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(userinfo));
}
// ===================================================================== save info
const rowData = localStorage.getItem(localStorageKey);
if (rowData !== '') {
  const data = JSON.parse(rowData);
  inputEl.value = data.email;
  textareaEl.value = data.message;
}
// ==================================================================== submit
formEl.addEventListener('submit', onClickBtn);

function onClickBtn(evt) {
  evt.preventDefault();
  if (inputEl.value === '' || textareaEl.value === '') {
    return;
  }
  console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  localStorage.removeItem(localStorageKey);
  formEl.reset();
}
