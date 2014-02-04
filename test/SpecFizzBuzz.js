describe("FizzBuzz", function () {
  var fizzBuzzSubstitutionRules;

  beforeEach(function () {
    fizzBuzzSubstitutionRules = [makeSubstitution(3, "Fizz"), 
                                  makeSubstitution(5, "Buzz")];
  });

  it("returns empty string for an empty array", function () {
    expect(substitute([], fizzBuzzSubstitutionRules)).toBe("");
  });

  it("returns 1 for [1]", function () {
    expect(substitute([1], fizzBuzzSubstitutionRules)).toBe("1");
  });

  it("returns Fizz for [3]", function () {
    expect(substitute([3], fizzBuzzSubstitutionRules)).toBe("Fizz");
  });

  it("returns Fizz for [9]", function () {
    expect(substitute([9], fizzBuzzSubstitutionRules)).toBe("Fizz");
  });

  it("returns Buzz for [5]", function () {
    expect(substitute([5], fizzBuzzSubstitutionRules)).toBe("Buzz");
  });

  it("returns Buzz for [25]", function () {
    expect(substitute([25], fizzBuzzSubstitutionRules)).toBe("Buzz");
  });

  it("returns FizzBuzz for [15]", function () {
    expect(substitute([15], fizzBuzzSubstitutionRules)).toBe("FizzBuzz");
  });

  it("also works with arrays with more than one element", function () {
    expect(substitute([1, 2, 15], fizzBuzzSubstitutionRules)).toBe("1 2 FizzBuzz");
  });
});

describe("FizzKozz", function () {

  var fizzKozzSubstitutionRules = [makeSubstitution(3, "Fizz"), 
                                    makeSubstitution(2, "Kozz")];

  it("uses substitute with different substitution rules", function () {
    expect(substitute([1, 2, 4, 6, 15],
      fizzKozzSubstitutionRules)).toBe("1 Kozz Kozz FizzKozz Fizz");
  });
});