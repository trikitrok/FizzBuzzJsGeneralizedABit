var makeSubstitute = function (substitutionDescriptions) {
  
  var substituteOne = (function () {

    var substitutions = [], i;

    function makeSubstitution (pred, replacement) {
      return function substituteNumber(acc, number) {
        if ( pred(number) ) {
          acc += replacement;
        }
        return acc;
      };
    }

    for(i = 0; i < substitutionDescriptions.length; i++) {
      substitutions.push(makeSubstitution(
                          substitutionDescriptions[i].pred, 
                          substitutionDescriptions[i].replacement));
    }

    return function (number) {
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
    };
  }());

  return function (numbers) {
    return numbers.map(substituteOne).join(" ");
  };
};