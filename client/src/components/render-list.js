// document this function!
/**
 * A function that take in an array of string and return a   component of the user interface. `ul`.
 *
 *@param {Array} [toRender = []] - An array of string to render.
 *@returns {Element} [ul] - An ul of the user interface.
 *@example
 *let toRender = ["a", "abc", "de"];
 *renderList = (toRender) -> <ul><li>a</li><li>abc</li><li>de</li></ul>
 *toRender = ["hi", "bye", "oh"];
 *renderList = (toRender) -> <ul><li>hi</li><li>bye</li><li>oh</li></ul>
 */
export const renderList = (toRender = []) => {
  const ulEl = document.createElement('ul');

  for (const nextItem of toRender) {
    const liEl = document.createElement('li');
    liEl.innerText = nextItem;
    ulEl.appendChild(liEl);
  }

  return ulEl;
};
