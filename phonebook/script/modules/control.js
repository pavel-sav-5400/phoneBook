import {createRow} from './createElements.js';
import {addContactData, removeStorage} from './storage.js';

const hoverRow = (allRow, logo) => {
  const text = logo.textContent;

  allRow.forEach(contact => {
    contact.addEventListener('mouseenter', () => {
      logo.textContent = contact.phoneLink.textContent;
    });
    contact.addEventListener('mouseleave', () => {
      logo.textContent = text;
    });
  });
};

const addContactPage = (contact, list) => {
  list.append(createRow(contact));
};

const modalControl = (btnAdd, formOverlay) => {
  const openModal = () => {
    formOverlay.classList.add('is-visible');
  };
  btnAdd.addEventListener('click', openModal);

  const closeModal = () => {
    formOverlay.classList.remove('is-visible');
  };

  formOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === formOverlay || target.closest('.close')) {
      closeModal();
    }
  });
  return {
    closeModal,
  };
};

const deleteControl = (btnDel, list) => {
  btnDel.addEventListener('click', () => {
    document.querySelectorAll('.delete').forEach(del => {
      del.classList.toggle('is-visible');
    });
  });
  list.addEventListener('click', e => {
    const target = e.target;
    const phone = target.closest('tr').querySelector('a').innerHTML;
    if (target.closest('.del-icon')) {
      target.closest('.contact').remove();
      removeStorage(phone);
    }
  });
};
const formControl = (form, list, closeModal) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newContact = Object.fromEntries(formData);

    addContactPage(newContact, list);
    addContactData(newContact);
    form.reset();
    closeModal();
  });
};
export {
  modalControl,
  deleteControl,
  formControl,
  hoverRow,
};
