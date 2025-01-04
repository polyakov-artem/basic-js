const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = `${n}`;

  for (let i = 0; i < digits.length - 1; i++) {
    const currentDigit = +digits[i];
    const nextDigit = +digits[i + 1];

    if (currentDigit < nextDigit) {
      return +`${digits.slice(0, i)}${digits.slice(i + 1)}`;
    }
  }

  return +digits.slice(0, -1);
}

module.exports = {
  deleteDigit,
};
