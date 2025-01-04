const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const isHex = (str) => !isNaN(parseInt(str, 16));
  const splitted = n.split("-");

  if (typeof n !== "string" || splitted.length !== 6) {
    return false;
  }

  return splitted.every((item) => item.length === 2 && isHex(item));
}

module.exports = {
  isMAC48Address,
};
