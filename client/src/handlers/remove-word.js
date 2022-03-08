import { data } from '../../data.js';
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
  const t = event.target;
  /* -- check the target -- */
  if (
    t.className !== 'new-trash' &&
    t.className !== 'rem-trash' &&
    t.id !== 'new-remove-all' &&
    t.id !== 'rem-remove-all'
  ) {
    return;
  }

  // in editing mode, remove is disabled
  if (data.isEditingNew || data.isEditingRem) {
    return;
  }

  // process user input, and get word to remove.
  const tr = t.parentNode.parentNode;
  if (t.className === 'new-trash') {
    const wordToRemove = tr.children[1].children[0].value;
    const indexOfWordToRemove = data.newWords.indexOf(wordToRemove);
    // update state
    data.newWords.splice(indexOfWordToRemove, 1);
  }
  if (t.className === 'rem-trash') {
    const wordToRemove = tr.children[1].children[0].value;
    const indexOfWordToRemove = data.rememberedWords.indexOf(wordToRemove);
    // update state
    data.rememberedWords.splice(indexOfWordToRemove, 1);
  }
  if (t.id === 'new-remove-all') {
    // update state
    data.newWords = [];
  }
  if (t.id === 'rem-remove-all') {
    // update state
    data.rememberedWords = [];
  }
  // update the UI
  renderList(data);
};
