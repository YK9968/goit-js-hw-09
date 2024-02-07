'use strict';

const localStorageKey = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const emailInput = formEl.elements.email;
const messageTextarea = formEl.elements.message;
// ========================================================================== input
formEl.addEventListener('input', onInputValue);

function onInputValue(evt) {
  evt.preventDefault();
  const userinfo = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(userinfo));
}
// ===================================================================== save info
const rowData = localStorage.getItem(localStorageKey);
if (rowData !== null) {
  const data = JSON.parse(rowData);
  emailInput.value = data.email;
  messageTextarea.value = data.message;
}
// ==================================================================== submit
formEl.addEventListener('submit', onClickBtn);

function onClickBtn(evt) {
  evt.preventDefault();
  const email = emailInput.value.trim();
  const message = messageTextarea.value.trim();
  if (email === '' || message === '') {
    return;
  }
  console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  localStorage.removeItem(localStorageKey);
  formEl.reset();
}
