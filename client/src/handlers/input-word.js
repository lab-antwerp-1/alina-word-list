import { data } from '../../data.js';
import { isWord } from '../logic/is-word.js';
import { renderList } from '../components/render-list.js';

/**
 * Entry point for users adding a word to the list.
 * It is called each time the user clicks the "add word" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */

export const inputWord = (event) => {
  /* -- entry point for adding or removing a word -- */
  // debugger;
  /* -- check the target -- */
  if (event.target.id !== 'add') {
    return;
  }
  /* -- gather user input from DOM -- */
  const text = event.target.form.text.value;

  /* -- use the input and data to implement the user story --

    a user can add a new word to the list
      given the input contains non-letters,
        it will not be added
        a warning is displayed
      given the input contains only letters
        it will be added to the words list
        the list will be re-rendered
  */

  const warnings = document.getElementById('warnings');
  warnings.innerText = '';

  // if input box is empty, send waring and return.
  if (text.length === 0) {
    return (warnings.innerText = 'Please enter a word');
  }

  // if input contains non-letters, send waring and return
  if (!isWord) {
    return (warnings.innerText = `"${text}" is not a word`);
  }
  // otherwise, push text to new words list.
  data.newWords.push(text);

  /* -- render new words -- */
  const objNewList = renderList(data.newWords, data.rememberedWords); // {new: ulElNew, remembered: ulElRemembered}
  const newList = objNewList.new; // ulElNew
  const rememberedList = objNewList.remembered; // ulElRemembered
  const newListContainer = document.getElementById('new-list-container');
  const rememberedListContainer = document.getElementById(
    'remembered-list-container',
  );
  newListContainer.innerHTML = '';
  newListContainer.appendChild(newList);
  rememberedListContainer.innerHTML = '';
  rememberedListContainer.appendChild(rememberedList);
};
