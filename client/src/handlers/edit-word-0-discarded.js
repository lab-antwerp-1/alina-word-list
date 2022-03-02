import { data } from '../../data.js';
import { renderList } from '../components/render-list.js';

/**
 * Entry point for users edit a word on the list.
 * It is called each time the user clicks the "pen" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */

export const editItemHandler = (event) => {
  /* -- entry point for editing and confirm editing a word -- */
  // debugger;
  /* -- check the target -- */

  // alert('edit-word.js');

  if (
    event.target.nodeName !== 'IMG' &&
    event.target.className !== 'new-pen' &&
    event.target.className !== 'rem-pen'
  ) {
    return;
  }
  /* declare global variable for: warning and dynamic instructions */
  const warnings = document.getElementById('warnings');
  warnings.innerText = '';
  const dynamicInstructions = document.getElementById('dynamic-instructions');
  dynamicInstructions.innerText = '';

  /* 1st call */
  /* 1st time click "pen" icon */
  if (!data.hasEditInProgress) {
    // get the specific label element and set its content editable.
    const toEditLabelEl =
      event.target.parentElement.parentElement.children[1].children[0];
    // create reference variable. using to get index of text in array list
    const toEditText = toEditLabelEl.innerText;
    // display instructions
    dynamicInstructions.innerText =
      'Click the word, you can input new content in. \n\n Click the pen icon aside or press Enter to save.';
    // set the label element editable
    toEditLabelEl.contentEditable = 'true'; // syntax confusing: maybe not need quotes

    // find the index of the active text in data object,and store the index using a key value pair, assign the active tr, label and pen img element each a temp id

    // case1: the active element is in new list
    if (event.target.className === 'new-pen') {
      // store the index of the text from new list to data, the index of tr in table equals to the index of the text.
      // const indexOfTextFromNew = data.newWords.indexOf(toEditText); //delete
      data.tempActiveVariable.indexOfTextFromNew =
        data.newWords.indexOf(toEditText);
      data.tempActiveVariable.activeTrFromNew =
        document.getElementById('new-list-container').children[0].children[
          data.tempActiveVariable.indexOfTextFromNew
        ];
      // set temp id for active label
      data.tempActiveVariable.activeTrFromNew.children[1].children[0].id =
        data.tempIdForLabelInNew;
      // set temp id for active pen
      data.tempActiveVariable.activeTrFromNew.children[2].children[0].id =
        data.tempIdForPenImgInNew;
    }

    // case 2: if the active element is in remembered list
    if (event.target.className === 'rem-pen') {
      // store the index of the text from new list to data, the index of tr in table equals to the index of the text.
      data.tempActiveVariable.indexOfTextFromRem =
        data.rememberedWords.indexOf(toEditText);
      data.tempActiveVariable.activeTrFromRem = document.getElementById(
        'remembered-list-container',
      ).children[0].children[data.tempActiveVariable.indexOfTextFromRem];
      // set temp id: for active label
      data.tempActiveVariable.activeTrFromRem.children[1].children[0].id =
        data.tempIdForLabelInRem;
      // set temp id: for active pen
      data.tempActiveVariable.activeTrFromRem.children[2].children[0].id =
        data.tempIdForPenImgInRem;
    }
    // update data: set hasEditInProgress value to true
    // data.hasEditInProgress = true;
    data.hasEditInProgress = !data.hasEditInProgress;
    return;
  }

  /* 2nd call */
  /* 2nd time click the same "pen" icon, confirm edits.
  store user version text,
  replace the original text with user version text,
 disable the label content editable, 
 remove temp id on the label and element.  re-render UI */
  if (data.hasEditInProgress) {
    // check the target, and avoid user fire other pen icons
    if (
      event.target.id !== data.tempIdForPenImgInNew &&
      event.target.id !== data.tempIdForPenImgInRem
    ) {
      warnings.innerText = 'Please confirm edits! ';
      dynamicInstructions.innerText =
        'Click the pen icon aside or press Enter to save.';
      return;
    }

    // case1: the active element is in new list
    if (event.target.id === data.tempIdForPenImgInNew) {
      // get, check and store user version of text, if text box is empty, send warning and return.
      const userVersionInNew = document.getElementById(
        data.tempIdForLabelInNew,
      ).textContent;
      if (userVersionInNew.length === 0) {
        warnings.innerText =
          'Please enter new text and click the pen icon to save.';
        return;
      }
      // otherwise, disable label element content editable
      document.getElementById(data.tempIdForLabelInNew).contentEditable =
        'false';
      // replace text element at specific index with user version
      data.newWords.splice(
        data.tempActiveVariable.indexOfTextFromNew,
        1,
        userVersionInNew,
      );
      // display confirmation
      dynamicInstructions.innerText = 'Edits saved';
      // remove temp id: for active label
      data.tempActiveVariable.activeTrFromNew.children[1].children[0].removeAttribute(
        'id',
      );
      // remove temp id: for active pen
      data.tempActiveVariable.activeTrFromNew.children[2].children[0].removeAttribute(
        'id',
      );
    }

    // case 2: if the active element is in remembered list
    if (event.target.id === data.tempIdForPenImgInRem) {
      // get, check and store user version of text, if text box is empty, send warning and return.
      const userVersionInRem = document.getElementById(
        data.tempIdForLabelInRem,
      ).textContent;
      if (userVersionInRem.length === 0) {
        warnings.innerText =
          'Please enter new text and click the pen icon to save.';
        return;
      }
      // otherwise, disable label element content editable
      document.getElementById(data.tempIdForLabelInRem).contentEditable =
        'false';
      // replaces text element at specific index with user version
      data.rememberedWords.splice(
        data.tempActiveVariable.indexOfTextFromRem,
        1,
        userVersionInRem,
      );
      // display confirmation
      dynamicInstructions.innerText = 'Edits saved';
      // remove id attribute of active label
      data.tempActiveVariable.activeTrFromRem.children[1].children[0].removeAttribute(
        'id',
      );
      // remove id attribute of active pen
      data.tempActiveVariable.activeTrFromRem.children[2].children[0].removeAttribute(
        'id',
      );
    }
    // update data: set hasEditInProgress value to false, empty object tempActiveVariable
    // data.hasEditInProgress = false;
    data.hasEditInProgress = !data.hasEditInProgress;
    data.tempActiveVariable = {};
    /* -- re-render UI -- */
    renderList(data);
  }
};

// edit handler 2: confirm edits with Enter key
/**
 * Entry point for users confirm edits on the list.
 * It is called each time the user press Enter key on label element.
 *
 * @param {Event} event - The event triggered when the user press Enter key on label element.
 */

// export const confirmEditWithEnterHandler = () => {
/* -- entry point for editing and confirm editing a word -- */
// debugger;
/* -- check the target -- */
/* -- gather user input from DOM -- */
/* -- use the input and data to implement the user story --

    a user can add a new word to the list
      given the input contains non-letters,
        it will not be added
        a warning is displayed
      given the input contains only letters
        it will be added to the words list
        the list will be re-rendered
  */
/* -- re-render UI -- */
// };
