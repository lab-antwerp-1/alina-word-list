/**
 * Sorts an array of strings in different ways.
 * It does not modify the argument (no side-effects).
 *
 * @param {Array[]} [ toSort= [] ] - The array of strings to sort.
 * @param {string} [sortType='oldest'] - How to sort the strings, 6 options.
 * - oldest: from oldest to newest.
 * - newest: from newest to oldest.
 * - shortest: from shortest to longest.
 * - longest: from longest to shortest.
 * - a: alphabetical order.
 * - z: reverse alphabetical order.
 * If the sortType is not one of these 6 options, a copy of toSort is returned.
 * @returns {string[]} A new sorted array containing the same strings as toSort.
 * @example
 *
 * // ... write this!
 */
// export const sortStrings = (toSort= [], sortType='oldest') => {};


export const sortStrings = (toSort = [], sortType = 'oldest') => {
    let c;
    return (
      (c =
        'newest' === sortType
          ? [...toSort].reverse()
          : 'a' === sortType
          ? [...toSort].sort()
          : 'z' === sortType
          ? [...toSort].sort().reverse()
          : 'shortest' === sortType
          ? [...toSort].sort((c, toSort) => c.length - toSort.length)
          : 'longest' === sortType
          ? [...toSort].sort((c, toSort) => c.length - toSort.length).reverse()
          : [...toSort]),
      c
    );
  };