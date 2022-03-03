/**
 * Render components of the New table on the UI.
 *
 * @param {object} [data = {}] - An object which contain two word lists and a sort type.
 */
const renderListNew = (data) => {
  // debugger;

  // get words to render
  const toRenderNew = data.newWords;
  // create table element for new list
  const tableElNew = document.createElement('table');

  // create components for new list
  for (const item of toRenderNew) {
    // create tr and td
    const trElNew = document.createElement('tr');
    const tdElNewForCheck = document.createElement('td');
    const tdElNewForLabel = document.createElement('td');
    const tdElNewForEdit = document.createElement('td');
    const tdElNewForTrash = document.createElement('td');

    // create table data items
    const inputElNewForCheck = document.createElement('input');
    inputElNewForCheck.type = 'checkbox';
    inputElNewForCheck.className = 'new-list-checkbox'; // set class name for check box of new list.
    const inputElNewForTextField = document.createElement('input');
    inputElNewForTextField.type = 'text';
    inputElNewForTextField.className = 'new-list-text'; // set class name of text field in new list.
    inputElNewForTextField.disabled = true; // disable the text field at creation
    inputElNewForTextField.value = item;

    // use img instead of icon
    const imgElNewForEdit = document.createElement('img');
    const imgElNewForTrash = document.createElement('img');
    imgElNewForEdit.src = 'client/public/description-edit-3.png';
    imgElNewForTrash.src = 'client/public/trash-2.png';
    imgElNewForEdit.className = 'new-pen';
    imgElNewForTrash.className = 'new-trash';

    // append to td
    tdElNewForCheck.appendChild(inputElNewForCheck); // check box
    tdElNewForLabel.appendChild(inputElNewForTextField); // text field with word
    tdElNewForEdit.appendChild(imgElNewForEdit); // pen icon
    tdElNewForTrash.appendChild(imgElNewForTrash); // trash icon
    // append to tr
    trElNew.appendChild(tdElNewForCheck);
    trElNew.appendChild(tdElNewForLabel);
    trElNew.appendChild(tdElNewForEdit);
    trElNew.appendChild(tdElNewForTrash);
    // append to table
    tableElNew.appendChild(trElNew);
  }

  // clear container and append new tables to container
  document.getElementById('new-list-container').innerHTML = '';
  document.getElementById('new-list-container').appendChild(tableElNew);
};

/**
 * Render components of the Rem table on the UI.
 *
 * @param {object} [data = {}] - An object which contain two word lists and a sort type.
 */
const renderListRem = (data) => {
  // debugger;
  // get words to render
  const toRenderRemembered = data.rememberedWords;

  // create table element for remembered list
  const tableElRemembered = document.createElement('table');

  // create components for remembered list
  for (const item of toRenderRemembered) {
    // create tr and td
    const trElRemembered = document.createElement('tr');
    const tdElRememberedForCheck = document.createElement('td');
    const tdElRememberedForLabel = document.createElement('td');
    const tdElRememberedForEdit = document.createElement('td');
    const tdElRememberedForTrash = document.createElement('td');

    // create table data items
    const inputElRememberedForCheck = document.createElement('input');
    inputElRememberedForCheck.type = 'checkbox';
    inputElRememberedForCheck.className = 'rem-list-checkbox'; // set class name for check box of remembered list.
    const inputElRemForTextField = document.createElement('input');
    inputElRemForTextField.type = 'text';
    inputElRemForTextField.className = 'rem-list-text'; // set class name of text field in new list.
    inputElRemForTextField.disabled = true; // disable the text field at creation
    inputElRemForTextField.value = item;

    // use img instead of icon
    const imgElRememberedForEdit = document.createElement('img');
    const imgElRememberedForTrash = document.createElement('img');
    imgElRememberedForEdit.src = 'client/public/description-edit-3.png';
    imgElRememberedForTrash.src = 'client/public/trash-2.png';
    imgElRememberedForEdit.className = 'rem-pen';
    imgElRememberedForTrash.className = 'rem-trash';

    // append to td
    tdElRememberedForCheck.appendChild(inputElRememberedForCheck); // check box
    tdElRememberedForLabel.appendChild(inputElRemForTextField); // text field with word
    tdElRememberedForEdit.appendChild(imgElRememberedForEdit); // pen icon
    tdElRememberedForTrash.appendChild(imgElRememberedForTrash); // trash icon
    // append to tr
    trElRemembered.appendChild(tdElRememberedForCheck);
    trElRemembered.appendChild(tdElRememberedForLabel);
    trElRemembered.appendChild(tdElRememberedForEdit);
    trElRemembered.appendChild(tdElRememberedForTrash);
    // append to table
    tableElRemembered.appendChild(trElRemembered);
  }

  // clear container and append new tables to container
  document.getElementById('remembered-list-container').innerHTML = '';
  document
    .getElementById('remembered-list-container')
    .appendChild(tableElRemembered);
};

/**
 * Render components to UI.
 *
 * @param {object} [data = {}] - An object which contain two word lists and a sort type.
 * @param {string} [listToRender = ''] - A string indicates which table(s) to render.
 */
export const renderList = (data, listToRender = '') => {
  // debugger;
  switch (listToRender) {
    case 'New':
      renderListNew(data);
      break;
    case 'Rem':
      renderListRem(data);
      break;
    default:
      renderListNew(data);
      renderListRem(data);
  }
};
