const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition,
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  const additionText = Array.from({ length: additionRepeatTimes }, (_) =>
    addition === undefined ? addition : "" + addition
  ).join(additionSeparator);

  const mainTextArr = Array.from(
    { length: repeatTimes },
    (_) => str + additionText
  );

  return mainTextArr.join(separator);
}

module.exports = {
  repeater,
};
