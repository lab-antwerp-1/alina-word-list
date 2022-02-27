import { data } from '../../data.js';
import { renderList } from '../components/render-list.js';

/* --- import all listener files so they can attach to the DOM --- */
import '../listeners/input-word.js';
import '../listeners/remove-word.js';
import '../listeners/sort-words.js';

/* --- any other code that executes when the document or window are ready --- */

// render the initial list
renderList(data);
