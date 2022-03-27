/* eslint-disable no-unused-vars */
import {getStorage} from './modules/storage.js';

import {
  modalControl,
  deleteControl,
  formControl,
  hoverRow} from './modules/control.js';
import * as render from './modules/render.js';

const init = (selectorApp, title) => {
  const data = getStorage();
  const app = document.querySelector(selectorApp);

  const {
    list,
    logo,
    btnAdd,
    formOverlay,
    form,
    btnDel,
  } = render.renderPhoneBook(app, title);
    // Функционал
  const allRow = render.renderContacts(list, data);
  const {closeModal} = modalControl(btnAdd, formOverlay);

  hoverRow(allRow, logo);
  deleteControl(btnDel, list);
  formControl(form, list, closeModal);
};
window.phoneBookInit = init;
