/**
 * target logic: which component the event targets at
 *
 * @param {Target} t - The target of an event
 */
export const targetAtNewPen = (t) => t.className === 'new-pen';

/**
 * target logic: which component the event targets at
 *
 * @param {Target} t - The target of an event
 */
export const targetAtRemPen = (t) => t.className === 'rem-pen';

/**
 * target logic: which component the event targets at
 *
 * @param {Target} t - The target of an event
 */
export const targetAtNewList = (t) => t.className === 'new-list-label';

/**
 * target logic: which component the event targets at
 *
 * @param {Target} t - The target of an event
 */
export const targetAtRemList = (t) => t.className === 'rem-list-label';
