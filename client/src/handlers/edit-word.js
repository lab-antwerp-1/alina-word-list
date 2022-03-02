import { data } from '../../data.js';
import { renderList } from '../components/render-list.js';

/**
 * Entry point for users edit a word on the list.
 * It is called each time the user clicks the "pen" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */

export const editItemHandler = function(event) {
  /* -- entry point for editing and confirm editing a word in the lists of words -- */
  // debugger;

  /* -- check the target -- */
  if ( event.target.className !== 'new-pen' && event.target.className !== 'rem-pen' ) {
    return;
  }

  /* declare global variable for: warning and dynamic instructions */
  const warnings = document.getElementById('warnings');
  warnings.innerText = '';
  const dynamicInstructions = document.getElementById('dynamic-instructions');
  dynamicInstructions.innerText = '';

  if (!data.isEditing) { 
    // not editing    
    /* 1st time click "pen" icon */
    
    const toEditLabelEl = event.target.parentElement.parentElement.children[1].children[0];   // get the specific label element
    const toEditText = toEditLabelEl.innerText;                           // get the text of the label element
    toEditLabelEl.contentEditable = 'true';                               // set the label element editable
    toEditLabelEl.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';         // change the background color    
    toEditLabelEl.focus();                                                // focus    
    if (event.target.className === 'new-pen') {                           // store the index of the text to data respectively
      data.indexWordNew = data.newWords.indexOf(toEditText);
    } else {
      data.indexWordRemembered = data.rememberedWords.indexOf(toEditText);
    }    
    data.isEditing = true;                                                // update the edit status in data
    dynamicInstructions.innerText = 'Click the pen icon beside or press Enter to save.';                // display instructions

  } else { 
    // is editing
    /* 2nd time click the same "pen" icon, confirm edits.
      replace the original word with the edited word, empty variable index,
      update the edit status in data, disable the label content editable, 
      and re-render UI */

    const tr = event.target.parentElement.parentElement; // tr
    const table = tr.parentElement; // table
    const indexClicked = Array.from(table.children).indexOf(tr); // the index clicked

    const caseWordNew = ( event.target.className === 'new-pen' && indexClicked === data.indexWordNew );
    const caseWordRemembered = ( event.target.className === 'rem-pen' && indexClicked === data.indexWordRemembered );
    /* all the wrong cases */
    if (!(caseWordNew || caseWordRemembered)) {
      warnings.innerText = 'Please confirm edits! ';
      return;
    }

    /* correct case */
    const textBox = tr.children[1].children[0];
    if (textBox.textContent.length < 1) {
      // if text box is empty, send warning and return.
      warnings.innerText = 'Text box is empty!!';
      return;
    }
    // Text box not empty, save the text depending on different lists and empty variable index
    if (event.target.className === 'new-pen') {
      data.newWords.splice(indexClicked, 1, textBox.textContent);
      data.indexWordNew = null;
    } else {
      data.rememberedWords.splice(indexClicked, 1, textBox.textContent);
      data.indexWordRemembered = null;
    }
    data.isEditing = false; // update the edit status in data
    textBox.contentEditable = 'false'; // change the attribute of the text box
    textBox.style.backgroundColor = ''; // restore the default background color
    dynamicInstructions.innerText = 'Text saved'; // display confirmation
    /* -- re-render UI -- */

    renderList(data);
  } // end of else of if (!data.isEditing)
};

// edit handler: confirm edits with Enter key
/**
 * Entry point for users confirm edits on the list.
 * It is called each time the user press Enter key on label element.
 *
 * @param {Event} event - The event triggered when the user press Enter key on label element.
 */

export const confirmEditWithEnterHandler = (event) => {
  /* -- entry point for editing and confirm editing a word -- */
  // debugger;
  /* -- check the target -- */
  /* -- gather user input from DOM -- */
  /* -- use the input and data to implement the user story -- */
  /* -- re-render UI -- */

  /* not editing or not Enter key */
  if (!data.isEditing || event.key !== 'Enter') {
    return;
  }
  /* is editing and Enter key pressed */

  /* -- check the target -- */
  // target will be a label (i.e. text box)
  /* all the wrong cases */
  if ( !( event.target.className === 'new-list-label' || event.target.className === 'rem-list-label') ) {
    return;
  }

  /* declare global variable for: warning and dynamic instructions */
  const warnings = document.getElementById('warnings');
  warnings.innerText = '';
  const dynamicInstructions = document.getElementById('dynamic-instructions');
  dynamicInstructions.innerText = '';

  /* correct case */
  const textBox = event.target;
  if (textBox.textContent.length < 1) {
    // if text box is empty, send warning and return.
    warnings.innerText = 'Text box is empty!!';
    return;
  }
  // Text box is not empty.
  // Save the text depending on different lists and empty variable index
  if (event.target.className === 'new-list-label') {
    data.newWords.splice(data.indexWordNew, 1, textBox.textContent);
    data.indexWordNew = null; // empty the index
  } else {
    data.rememberedWords.splice(data.indexWordRemembered, 1, textBox.textContent);
    data.indexWordRemembered = null; // empty the index
  }
  data.isEditing = false; // update the edit status in data
  textBox.contentEditable = 'false'; // change the attribute of the text box
  textBox.style.backgroundColor = ''; // restore the default background color
  dynamicInstructions.innerText = 'Text saved'; // display confirmation

  /* -- re-render UI -- */
  renderList(data);
};
