var makeSubstitute = function (substitutionDescriptions) {
  
  var substituteOne = (function () {
    function makeSubstitution (pred, replacement) {
      return function substituteNumber(acc, number) {
        if ( pred(number) ) {
          acc += replacement;
        }
        return acc;
      };
    }

    var substitutions = [], index;

    for(index = 0; index < substitutionDescriptions.length; index++) {
      substitutions.push( makeSubstitution(
                            substitutionDescriptions[index].pred, 
                            substitutionDescriptions[index].replacement));
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