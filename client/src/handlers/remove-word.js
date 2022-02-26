import { data } from '../../data.js';
// import { isWord } from '../logic/is-word.js';
import { renderList } from '../components/render-list.js';

/**
 * Entry point for users remove a word from the list.
 * It is called each time the user clicks the "trash can" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */

export const removeWordHandler = (event) => {
  /* -- entry point for removing a word -- */
  // debugger;
  /* -- check the target -- */
  if (
    event.target.className !== 'new-trash' &&
    event.target.className !== 'rem-trash' &&
    event.target.id !== 'new-remove-all' &&
    event.target.id !== 'rem-remove-all'
  ) {
    return;
  }

  // process user input, and get word to remove.
  if (event.target.className === 'new-trash') {
    const wordToRemove =
      event.target.parentNode.parentNode.children[1].children[0].innerHTML;
    const indexOfWordToRemove = data.newWords.indexOf(wordToRemove);
    // update state
    data.newWords.splice(indexOfWordToRemove, 1);
  }
  if (event.target.className === 'rem-trash') {
    const wordToRemove =
      event.target.parentNode.parentNode.children[1].children[0];
    const indexOfWordToRemove = data.newWords.indexOf(wordToRemove);
    // update state
    data.rememberedWords.splice(indexOfWordToRemove, 1);
  }
  if (event.target.id === 'new-remove-all') {
    // update state
    data.newWords = [];
  }
  if (event.target.id === 'rem-remove-all') {
    // update state
    data.rememberedWords = [];
  }
  // update the UI
  renderList(data);
};
