import {
  editItemHandler,
  confirmEditWithEnterHandler,
} from '../handlers/edit-word.js';

// edit a word on the list
document
  .getElementById('new-list-container')
  .addEventListener('click', editItemHandler);
document
  .getElementById('remembered-list-container')
  .addEventListener('click', editItemHandler);

// confirm edits with Enter key
document
  .getElementById('new-list-container')
  .addEventListener('keydown', confirmEditWithEnterHandler);
document
  .getElementById('remembered-list-container')
  .addEventListener('keydown', confirmEditWithEnterHandler);
