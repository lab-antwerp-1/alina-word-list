import { data } from '../../data.js';
import { sortStrings } from '../logic/sort-strings.js';
import { renderList } from '../components/render-list.js';

/**
 * Entry point for users sorting the list of words in this app.
 * It is called each time the input selection changes.
 *
 * @param {Event} event - The event triggered by changing the input.
 * @returns {Element} ul - A component, ul, of the user interface.
 */
export const sortWords = (event) => {
  /* -- entry point for sorting the words -- */
  // debugger;

  /* -- gather user input from DOM -- */
  const howToSort = event.target.value;

  /* -- use the input and data to create a new sorted list --
    change the .sort property in data
    sort the words in data.words using the logic function
    assign the newly sorted list to a variable named `sorted`
  */

  // ... write some code ...
  data.sort = howToSort;
  const sorted = sortStrings(data.words, data.sort);
  /* -- render new words -- */
  const newList = renderList(sorted);

  const listContainer = document.getElementById('list-container');
  listContainer.innerHTML = '';
  listContainer.appendChild(newList);
};
