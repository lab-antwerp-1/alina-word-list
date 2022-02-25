import { data } from '../../data.js';
import { renderList } from '../components/render-list.js';

/* --- import all listener files so they can attach to the DOM --- */
import '../listeners/input-word.js';

/* --- any other code that executes when the document or window are ready --- */

// render the initial list
const objNewList = renderList(data.newWords, data.rememberedWords); //{new: ulElNew, remembered: ulElRemembered}
const newList = objNewList.new; //ulElNew
const rememberedList = objNewList.remembered; //ulElRemembered

const newListContainer = document.getElementById('new-list-container');
const rememberedListContainer = document.getElementById(
  'remembered-list-container',
);
newListContainer.innerHTML = '';
newListContainer.appendChild(newList);
rememberedListContainer.innerHTML = '';
rememberedListContainer.appendChild(rememberedList);
