import { removeWordHandler } from '../handlers/remove-word.js';

document.getElementById('new-list').addEventListener('click', removeWordHandler);
document.getElementById('remembered-list').addEventListener('click', removeWordHandler);