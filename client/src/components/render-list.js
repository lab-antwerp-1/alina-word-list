// document this function!
/**
 * A function that take in an array of string and return a component of the user interface. `ul`.
 *
 *@parameter {array} [toRender = []] - An array of string to render.
 *
 *@returns {Dom element} [ul] - An ul of the user interface.
 *
 *@example
 *
 *renderList = (["a", "abc", "de"]) -> <ul><li>a</li><li>abc</li><li>de</li></ul>
 *renderList = (["hi", "bye", "oh"]) -> <ul><li>hi</li><li>bye</li><li>oh</li></ul>
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
