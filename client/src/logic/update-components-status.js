// disable/enable some components based on editing status
/**
 * Update the state of buttons and select on the UI.
 *
 * @param {object} [data = {}] - An object which contain two word lists and a sort type.
 */

export const updateComponentsState = (data) => {
  // update the state of components
  const menuSelect = document.getElementById('sort-type');
  const buttonAdd = document.getElementById('add');
  const buttonToRem = document.getElementById('remembered-button');
  const buttonToNew = document.getElementById('overlooked-button');
  let isDisabled = data.isEditingNew || data.isEditingRem ? true : false;
  menuSelect.disabled = isDisabled;
  buttonAdd.disabled = isDisabled;
  buttonToNew.disabled = isDisabled;
  buttonToRem.disabled = isDisabled;
  // display a warning message
  const messageBox = document.getElementById('warnings');
  const message =
    'Editing mode: all buttons are disabled! You must confirm edits first :(';
  messageBox.innerHTML = isDisabled ? message : '';
};
