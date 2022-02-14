import { data } from '../../data.js';
import { renderList } from '../components/render-list.js';

/* --- import all listener files so they can attach to the DOM --- */

import '../listeners/sort-words.js';
import '../listeners/input-word.js';

/* --- any other code that executes when the document or window are ready --- */

// render the initial list
const newList = renderList(data.words);

const listContainer = document.getElementById('list-container');
listContainer.innerHTML = '';
listContainer.appendChild(newList);
