import { data } from '../../data.js';
import { renderList } from '../components/render-list.js';

/**
 * Entry point for users move words between the lists.
 * It is called each time the user clicks the "to remembered" or "to new" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */

export const moveItemHandler = (event) => {
  /* -- entry point for moving words -- */
  // debugger;
  /* -- check the target -- */
  /* -- gather user input from DOM -- */
  // when event happened on "remembered button".
  if (event.target.id === 'remembered-button') {
    // find the checked items
    const checkedNewBox = Array.from(
      document.getElementsByClassName('new-list-checkbox'),
    ).filter((ele) => ele.checked);
    const itemsToMove = checkedNewBox.map(
      (ele) => ele.parentElement.parentElement.children[1].children[0].value,
    );
    // get rid of the checked items from new list, update data.
    data.newWords = data.newWords.filter((ele) => !itemsToMove.includes(ele));
    // add items to remembered list
    data.rememberedWords.push(...itemsToMove);
  }
  // when event happened on "overlooked button".
  if (event.target.id === 'overlooked-button') {
    // find the checked items
    const checkedNewBox = Array.from(
      document.getElementsByClassName('rem-list-checkbox'),
    ).filter((ele) => ele.checked);
    const itemsToMove = checkedNewBox.map(
      (ele) => ele.parentElement.parentElement.children[1].children[0].value,
    );
    // get rid of the checked items from remembered list, update data.
    data.rememberedWords = data.rememberedWords.filter(
      (ele) => !itemsToMove.includes(ele),
    );
    // add items to remembered list
    data.newWords.push(...itemsToMove);
  }

  /* -- re-render UI -- */
  renderList(data);
};
