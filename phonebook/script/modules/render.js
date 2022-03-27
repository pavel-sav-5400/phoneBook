import {
  createFooter,
  createHeader,
  createLogo,
  createFooterLogo,
  createMain,
  createButtonsGroup,
  createTable,
  createForm,
  createRow} from './createElements.js';

export const renderPhoneBook = (app, title) => {
  const footer = createFooter();
  const header = createHeader();
  const logo = createLogo(title);
  const footerLogo = createFooterLogo(title);
  const main = createMain();
  const buttonGroup = createButtonsGroup([
    {
      className: 'btn btn-primary mr-3 js-add',
      type: 'button',
      text: 'Добавить',
    },
    {
      className: 'btn btn-danger',
      type: 'button',
      text: 'Удалить',
    },
  ]);
  const table = createTable();
  const {form, overlay} = createForm();

  header.headerContainer.append(logo);
  main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
  app.append(header, main, footer);
  footer.footerContainer.append(footerLogo);

  return {
    list: table.tbody,
    logo,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverlay: overlay,
    form,
  };
};

export const renderContacts = (elem, data) => {
  const allRow = data.map(createRow);
  elem.append(...allRow);
  return allRow;
};
