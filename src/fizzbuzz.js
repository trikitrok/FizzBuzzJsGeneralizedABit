var makeSubstitution = function (divisor, substitute) {
  return function substituteNumberBy(acc, number) {
            if (number % divisor == 0) {
              acc += substitute;
            }
            return acc;
          };
}; 

var substitute = function (numbers, substitutions) {
  function substituteOne (number) {
    var res = (function f(acc, remainingSubstitutions) {
      if (remainingSubstitutions.length == 0) {
        return acc;
      } else {
        acc = remainingSubstitutions[0](acc, number);
        return f(acc, remainingSubstitutions.slice(1));
      }
    }("", substitutions));

    if (res != "")
      return res;

    return String(number);
  }

  return (function f (acc, remainingNumbers) {
    if (remainingNumbers.length == 0) {
      return acc;
    } else {
      next = substituteOne(remainingNumbers[0]);

      if (remainingNumbers.length == 1) {
        return acc + next;      
      } else {
        return f (acc + next + " ", remainingNumbers.slice(1));
      }
    }
  })("", numbers);
};