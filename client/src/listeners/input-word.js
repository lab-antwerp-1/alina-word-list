import {
  inputWordHandler,
  getInputWithEnterHandler,
} from '../handlers/input-word.js';

document
  .getElementById('input-form')
  .addEventListener('click', inputWordHandler);
document
  .getElementById('input')
  .addEventListener('keydown', getInputWithEnterHandler);
