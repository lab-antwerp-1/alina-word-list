/**
 * Sorts an array of strings in different ways.
 * It does not modify the argument (no side-effects).
 *
 * @param {Array[]} [toSort = []] - The array of strings to sort.
 * @param {string} [sortType = 'oldest'] - How to sort the strings, 6 options.
 * - oldest: from oldest to newest.
 * - newest: from newest to oldest.
 * - shortest: from shortest to longest.
 * - longest: from longest to shortest.
 * - a: alphabetical order.
 * - z: reverse alphabetical order.
 * If the sortType is not one of these 6 options, a copy of toSort is returned.
 * @returns {Array[]} A new sorted array containing the same strings as toSort.
 * @example
 *
 * // ... write this!
 * sortStrings = (["ab", "abc", "hello"], sortType = 'oldest') -> ["ab", "abc", "hello"]
 * sortStrings = (["ab", "abc", "hello"], sortType = 'longest') -> ["hello", "abc","ab"]
 */
export const sortStrings = (toSort = [], sortType = 'oldest') => {
  const caseInsensitiveSorting = (a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  };
  return sortType === 'newest'
    ? [...toSort].reverse()
    : sortType === 'a'
    ? [...toSort].sort(caseInsensitiveSorting)
    : sortType === 'z'
    ? [...toSort].sort(caseInsensitiveSorting).reverse()
    : sortType === 'shortest'
    ? [...toSort].sort((e, eNext) => e.length - eNext.length)
    : sortType === 'longest'
    ? [...toSort]
        .sort((ele, toBeSort) => ele.length - toBeSort.length)
        .reverse()
    : [...toSort];
};

// try 1
/* export const sortStrings = (newToSort = [], remberedToSort = [], sortType = 'oldest') => {
  const caseInsensitiveSorting = (a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  };
  return sortType === 'newest'
    ? [...toSort].reverse()
    : sortType === 'a'
    ? [...toSort].sort(caseInsensitiveSorting)
    : sortType === 'z'
    ? [...toSort].sort(caseInsensitiveSorting).reverse()
    : sortType === 'shortest'
    ? [...toSort].sort((e, eNext) => e.length - eNext.length)
    : sortType === 'longest'
    ? [...toSort]
        .sort((ele, toBeSort) => ele.length - toBeSort.length)
        .reverse()
    : [...toSort];
}; */
