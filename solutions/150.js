/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  var stack = [];
  var operators = ['+', '-', '*', '/'];
  var i, value1, value2;

  var getValue = function (value1, value2, operator) {
    var result;

    switch (operator) {
      case "+":
        result = value1 + value2;
        break;
      case "-":
        result = value1 - value2;
        break;
      case "*":
        result = value1 * value2;
        break;
      default:
        result = Number.parseInt(value1 / value2);
    }

    return result;
  };

  for (i = 0; i < tokens.length; i++) {
    if (operators.indexOf(tokens[i]) >= 0) {
      value2 = +(stack.pop());
      value1 = +(stack.pop());
      stack.push(getValue(value1, value2, tokens[i]));
    } else {
      stack.push(+(tokens[i]));
    }
  }

  return +(stack[0]);
};
