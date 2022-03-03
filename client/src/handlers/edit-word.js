import { data } from '../../data.js';
import { renderList } from '../components/render-list.js';
import {
  targetAtNewList,
  targetAtNewPen,
  targetAtRemList,
  targetAtRemPen,
} from '../logic/target-logic.js';
import { updateComponentsState } from './update-components-status.js';

const stringWarnings = 'warnings';
const stringInstructions = 'dynamic-instructions';
const messageHowToSave =
  'After editing, click the pen icon beside or press Enter to save.';
const messageTextBoxEmpty = 'Text box is empty!!';
const messageConfirmEdit = 'Please confirm edits! ';
const messageTextSaved = 'Text saved.';

/**
 * Utility function of the handler of below event.
 * The user clicks the "pen" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */

const editItemHandlerNew = (event) => {
  /* -- entry point for editing and confirm editing a word in the lists of words -- */
  // debugger;

  const t = event.target;

  /* -- check the target -- */

  /* declare global variable for: warning and dynamic instructions */
  const warnings = document.getElementById(stringWarnings);
  warnings.innerText = '';
  const dynamicInstructions = document.getElementById(stringInstructions);
  dynamicInstructions.innerText = '';

  if (!data.isEditingNew) {
    // not editing
    /* 1st time click "pen" icon */

    const toEditLabelEl = t.parentElement.parentElement.children[1].children[0]; // get the specific label element
    toEditLabelEl.contentEditable = 'true'; // set the label element editable
    toEditLabelEl.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // change the background color
    toEditLabelEl.focus(); // focus
    data.indexWordNew = data.newWords.indexOf(toEditLabelEl.innerText); // store the index of the text to data
    data.isEditingNew = true; // update the edit status in data
    dynamicInstructions.innerText = messageHowToSave; // display instructions
  } else {
    // is editing
    /* 2nd time click the same "pen" icon, confirm edits.
      replace the original word with the edited word, empty variable index,
      update the edit status in data, disable the label content editable, 
      and re-render UI */

    const tr = t.parentElement.parentElement; // tr
    const table = tr.parentElement; // table
    const indexClicked = Array.from(table.children).indexOf(tr); // the index clicked

    /* wrong cases */
    if (indexClicked !== data.indexWordNew) {
      warnings.innerText = messageConfirmEdit;
      return;
    }

    /* correct case */
    const textBox = tr.children[1].children[0];
    if (textBox.textContent.length < 1) {
      // if text box is empty, send warning and return.
      warnings.innerText = messageTextBoxEmpty;
      return;
    }
    // Text box not empty, save the text depending on different lists and empty variable index
    data.newWords.splice(indexClicked, 1, textBox.textContent);
    data.indexWordNew = null;
    data.isEditingNew = false; // update the edit status in data
    textBox.contentEditable = 'false'; // change the attribute of the text box
    textBox.style.backgroundColor = ''; // restore the default background color
    dynamicInstructions.innerText = messageTextSaved; // display confirmation
    /* -- re-render UI -- */
    renderList(data, 'New');
  } // end of else of if (!data.isEditing)
};

/**
 * Utility function of the handler of below event.
 * The user clicks the "pen" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */

const editItemHandlerRem = (event) => {
  /* -- entry point for editing and confirm editing a word in the lists of words -- */
  // debugger;

  const t = event.target;

  /* -- check the target -- */

  /* declare global variable for: warning and dynamic instructions */
  const warnings = document.getElementById(stringWarnings);
  warnings.innerText = '';
  const dynamicInstructions = document.getElementById(stringInstructions);
  dynamicInstructions.innerText = '';

  if (!data.isEditingRem) {
    // not editing
    /* 1st time click "pen" icon */

    const toEditLabelEl = t.parentElement.parentElement.children[1].children[0]; // get the specific label element
    toEditLabelEl.contentEditable = 'true'; // set the label element editable
    toEditLabelEl.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // change the background color
    toEditLabelEl.focus(); // focus
    data.indexWordRemembered = data.rememberedWords.indexOf(
      toEditLabelEl.innerText,
    ); // store the index of the text to data
    data.isEditingRem = true; // update the edit status in data
    dynamicInstructions.innerText = messageHowToSave; // display instructions
  } else {
    // is editing
    /* 2nd time click the same "pen" icon, confirm edits.
      replace the original word with the edited word, empty variable index,
      update the edit status in data, disable the label content editable, 
      and re-render UI */

    const tr = t.parentElement.parentElement; // tr
    const table = tr.parentElement; // table
    const indexClicked = Array.from(table.children).indexOf(tr); // the index clicked

    /* wrong cases */
    if (indexClicked !== data.indexWordRemembered) {
      warnings.innerText = messageConfirmEdit;
      return;
    }

    /* correct case */
    const textBox = tr.children[1].children[0];
    if (textBox.textContent.length < 1) {
      // if text box is empty, send warning and return.
      warnings.innerText = messageTextBoxEmpty;
      return;
    }
    // Text box not empty, save the text depending on different lists and empty variable index
    data.rememberedWords.splice(indexClicked, 1, textBox.textContent);
    data.indexWordRemembered = null;
    data.isEditingRem = false; // update the edit status in data
    textBox.contentEditable = 'false'; // change the attribute of the text box
    textBox.style.backgroundColor = ''; // restore the default background color
    dynamicInstructions.innerText = messageTextSaved; // display confirmation
    /* -- re-render UI -- */
    renderList(data, 'Rem');
  } // end of else of if (!data.isEditing)
};

// edit handler: edit label by clicking the pen icon
/**
 * Entry point for users edit a word on the list.
 * It is called each time the user clicks the "pen" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */

export const editItemHandler = (event) => {
  /* -- entry point for editing and confirm editing a word in the lists of words -- */
  // debugger;

  const t = event.target;

  /* -- check the target and handle respectively using the correct utility function -- */
  if (!targetAtNewPen(t) && !targetAtRemPen(t)) {
    return;
  }

  if (targetAtNewPen(t)) {
    editItemHandlerNew(event);
  } else {
    editItemHandlerRem(event);
  }

  // update the state of buttons and select
  updateComponentsState(data);
};

/**
 * Utility function of the handler of below event.
 * The user press Enter key on label element.
 *
 * @param {Event} event - The event triggered when the user press Enter key on label element.
 */

const confirmEditWithEnterHandlerNew = (event) => {
  /* -- entry point for editing and confirm editing a word -- */
  // debugger;
  /* -- check the target -- */
  /* -- gather user input from DOM -- */
  /* -- use the input and data to implement the user story -- */
  /* -- re-render UI -- */

  /* not editing or not Enter key */
  if (event.key !== 'Enter' || !data.isEditingNew) {
    return;
  }
  /* is editing and Enter key pressed */

  const t = event.target;

  /* -- check the target -- */
  // target will be a label (i.e. text box)

  /* declare global variable for: warning and dynamic instructions */
  const warnings = document.getElementById(stringWarnings);
  warnings.innerText = '';
  const dynamicInstructions = document.getElementById(stringInstructions);
  dynamicInstructions.innerText = '';

  /* correct case */
  const textBox = t;
  if (textBox.textContent.length < 1) {
    // if text box is empty, send warning and return.
    warnings.innerText = messageTextBoxEmpty;
    return;
  }
  // Text box is not empty.
  // Save the text depending on different lists and empty variable index
  const tr = t.parentElement.parentElement; // tr
  const table = tr.parentElement; // table
  const indexTargeted = Array.from(table.children).indexOf(tr); // the index clicked
  if (indexTargeted !== data.indexWordNew) {
    warnings.innerText = messageConfirmEdit;
    return;
  }
  data.newWords.splice(data.indexWordNew, 1, textBox.textContent);
  data.indexWordNew = null; // empty the index
  data.isEditingNew = false; // update the edit status in data
  // data.isEditing = false; // update the edit status in data
  textBox.contentEditable = 'false'; // change the attribute of the text box
  textBox.style.backgroundColor = ''; // restore the default background color
  dynamicInstructions.innerText = messageTextSaved; // display confirmation

  /* -- re-render UI -- */
  // renderList(data);
  renderList(data, 'New');
};

// edit handler: confirm edits with Enter key for Rem list
/**
 * Utility function of the handler of below event.
 * The user press Enter key on label element.
 *
 * @param {Event} event - The event triggered when the user press Enter key on label element.
 */

const confirmEditWithEnterHandlerRem = (event) => {
  /* -- entry point for editing and confirm editing a word -- */
  // debugger;
  /* -- check the target -- */
  /* -- gather user input from DOM -- */
  /* -- use the input and data to implement the user story -- */
  /* -- re-render UI -- */

  /* not editing or not Enter key */
  if (event.key !== 'Enter' || !data.isEditingRem) {
    return;
  }
  /* is editing and Enter key pressed */

  const t = event.target;

  /* -- check the target -- */
  // target will be a label (i.e. text box)
  /* all the wrong cases */

  /* declare global variable for: warning and dynamic instructions */
  const warnings = document.getElementById(stringWarnings);
  warnings.innerText = '';
  const dynamicInstructions = document.getElementById(stringInstructions);
  dynamicInstructions.innerText = '';

  /* correct case */
  const textBox = t;
  if (textBox.textContent.length < 1) {
    // if text box is empty, send warning and return.
    warnings.innerText = messageTextBoxEmpty;
    return;
  }
  // Text box is not empty.
  // Save the text depending on different lists and empty variable index
  const tr = t.parentElement.parentElement; // tr
  const table = tr.parentElement; // table
  const indexTargeted = Array.from(table.children).indexOf(tr); // the index clicked
  // wrong cases
  if (indexTargeted !== data.indexWordRemembered) {
    warnings.innerText = messageConfirmEdit;
    return;
  }
  // correct case
  data.rememberedWords.splice(data.indexWordRemembered, 1, textBox.textContent);
  data.indexWordRemembered = null; // empty the index
  data.isEditingRem = false; // update the edit status in data
  // data.isEditing = false; // update the edit status in data
  textBox.contentEditable = 'false'; // change the attribute of the text box
  textBox.style.backgroundColor = ''; // restore the default background color
  dynamicInstructions.innerText = messageTextSaved; // display confirmation

  /* -- re-render UI -- */
  // renderList(data);
  renderList(data, 'Rem');
};

// edit handler: confirm edits with Enter key
/**
 * Entry point for users confirm edits on the list.
 * It is called each time the user press Enter key on label element.
 *
 * @param {Event} event - The event triggered when the user press Enter key on label element.
 */

export const confirmEditWithEnterHandler = (event) => {
  /* -- entry point for editing and confirm editing a word in the lists of words -- */
  // debugger;
  const t = event.target;

  /* -- check the target and handle respectively using the correct utility function -- */
  if (!targetAtNewList(t) && !targetAtRemList(t)) {
    return;
  }
  if (targetAtNewList(t)) {
    confirmEditWithEnterHandlerNew(event);
  } else {
    confirmEditWithEnterHandlerRem(event);
  }

  // update the state of buttons and select
  updateComponentsState(data);
};
