/**
 * Checks if a string is a word.  A word contains only letters.
 *
 * @param {string} text - A string to check for wordiness.
 * @returns {boolean} Whether or not the text is a word.
 * @example
 *
 * // ... write this!
 * isWord("spell-check") -> false
 * isWord("spell?") -> false
 * isWord("spell9") -> false
 * isWord("spell") -> true
 */
export const isWord = (text = '') => /^[a-zA-Z]+$/.test(text);
