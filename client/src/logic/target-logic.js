/**
 * Target logic: which component the event targets at.
 *
 * @param {object} t - The target of an event.
 * @returns {boolean}.
 */
export const targetAtNewPen = (t) => t.className === 'new-pen';

/**
 * Target logic: which component the event targets at.
 *
 * @param {object} t - The target of an event.
 * @returns {boolean}.
 */
export const targetAtRemPen = (t) => t.className === 'rem-pen';

/**
 * Target logic: which component the event targets at.
 *
 * @param {object} t - The target of an event.
 * @returns {boolean}.
 */
export const targetAtNewList = (t) => t.className === 'new-list-text';

/**
 * Target logic: which component the event targets at.
 *
 * @param {object} t - The target of an event.
 * @returns {boolean}.
 */
export const targetAtRemList = (t) => t.className === 'rem-list-text';
