import create from './createElements.js';

export const renderPhoneBook = (app, title) => {
  const footer = create.createFooter();
  const header = create.createHeader();
  const logo = create.createLogo(title);
  const footerLogo = create.createFooterLogo(title);
  const main = create.createMain();
  const buttonGroup = create.createButtonsGroup([
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
  const table = create.createTable();
  const {form, overlay} = create.createForm();

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
  const allRow = data.map(create.createRow);
  elem.append(...allRow);
  return allRow;
};
