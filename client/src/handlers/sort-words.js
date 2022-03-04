/* eslint-disable */
import { data } from '../../data.js';
import { sortStrings } from '../logic/sort-strings.js';
import { renderList } from '../components/render-list.js';

/**
 * Entry point for users sorting the list of words in this app.
 * It is called each time the input selection changes.
 *
 * @param {Event} event - The event triggered by changing the input.
 */

export const sortWordsHandler = (event) => {
  /* -- entry point for sorting the words -- */
  // debugger;
  /* -- gather user input from DOM -- */
  // change the .sortType property in data.
  data.sortType = event.target.value;

  // sort the words in data.words using the logic function
  data.newWords = sortStrings(data.newWords, data.sortType);
  data.rememberedWords = sortStrings(data.rememberedWords, data.sortType);
  // render the ui
  renderList(data);
};
