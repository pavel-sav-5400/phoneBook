
const getStorage = () => (localStorage.getItem('contacts') ?
  JSON.parse(localStorage.getItem('contacts')) : []);

const setStorage = contact =>
  localStorage.setItem('contacts', JSON.stringify(contact));

const removeStorage = phone => {
  const data = getStorage('contacts');
  const newData = data.filter(item => item.phone !== phone);
  setStorage(newData);
};

const addContactData = contact => {
  const data = getStorage('contacts');
  data.push(contact);
  setStorage(data);
};

export {
  removeStorage,
  addContactData,
};

export default {getStorage};
