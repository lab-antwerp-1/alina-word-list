import { moveItemHandler } from '../handlers/move-word.js';

document
  .getElementById('remembered-button')
  .addEventListener('click', moveItemHandler);
document
  .getElementById('overlooked-button')
  .addEventListener('click', moveItemHandler);
