/**
 * Render components to UI.
 *
 * @param {Array} [toRenderNew = []] - An array of words to render to new list.
 * @param {Array} [toRenderRemembered = []] - An array of words to render to remembered list.
 * @returns {object} - Contain new list ul and remembered list ul.
 *
 */
export const renderList = (toRenderNew = [], toRenderRemembered = []) => {
  const ulElNew = document.createElement('ul');
  const ulElRemembered = document.createElement('ul');
  // debugger;
  // create components for new list
  for (const Item of toRenderNew) {
    const liElNew = document.createElement('li');
    liElNew.innerText = Item;
    ulElNew.appendChild(liElNew);
  }

  // create components for remembered list
  for (const ele of toRenderRemembered) {
    const liElRemembered = document.createElement('li');
    liElRemembered.innerText = ele;
    ulElRemembered.appendChild(liElRemembered);
  }

  // return an object contain new list ul and remembered list ul.
  return {
    new: ulElNew,
    remembered: ulElRemembered,
  };
};
