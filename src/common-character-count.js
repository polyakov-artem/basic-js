const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const chars = new Set(s1);
  let result = 0;

  for (let char of chars) {
    const regexp = new RegExp(char, "g");
    const matchesCount = Math.min(
      s1.match(regexp).length,
      s2.match(regexp)?.length || 0
    );
    if (matchesCount) result += matchesCount;
  }

  return result;
}

module.exports = {
  getCommonCharacterCount,
};
