/**
 * Target logic: which component the event targets at.
 *
 * @param {Element} t - The target of an event.
 */
export const targetAtNewPen = (t) => t.className === 'new-pen';

/**
 * Target logic: which component the event targets at.
 *
 * @param {Element} t - The target of an event.
 */
export const targetAtRemPen = (t) => t.className === 'rem-pen';

/**
 * Target logic: which component the event targets at.
 *
 * @param {Element} t - The target of an event.
 */
export const targetAtNewList = (t) => t.className === 'new-list-label';

/**
 * Target logic: which component the event targets at.
 *
 * @param {Element} t - The target of an event.
 */
export const targetAtRemList = (t) => t.className === 'rem-list-label';
