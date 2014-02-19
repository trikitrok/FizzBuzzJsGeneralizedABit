describe("FizzBuzz", function () {
  var fizzBuzzSubstitute;

  beforeEach(function () {
    fizzBuzzSubstitute = makeSubstitute([
      { pred: function(number) {return number % 3 == 0;}, 
        replacement: "Fizz"},
      { pred: function(number) {return number % 5 == 0;}, 
        replacement: "Buzz"}
    ]);
  });

  it("works for an empty array", function () {
    expect(fizzBuzzSubstitute([])).toBe("");
  });

  it("returns same number for array with number not multiple of 3 or 5", function () {
    expect(fizzBuzzSubstitute([1])).toBe("1");
  });

  it("returns Fizz for an array with a multiple of 3", function () {
    expect(fizzBuzzSubstitute([3])).toBe("Fizz");
    expect(fizzBuzzSubstitute([9])).toBe("Fizz");
  });

  it("returns Buzz for an array with a multiple of 5", function () {
    expect(fizzBuzzSubstitute([5])).toBe("Buzz");
    expect(fizzBuzzSubstitute([25])).toBe("Buzz");
  });

  it("returns FizzBuzz for an array with a multiple of both 3 and 5", function () {
    expect(fizzBuzzSubstitute([15])).toBe("FizzBuzz");
  });

  it("also works with arrays with more than one element", function () {
    expect(fizzBuzzSubstitute([1, 2, 15])).toBe("1 2 FizzBuzz");
  });
});

describe("FizzKozz", function () {

  var fizzKozzSubstitute = makeSubstitute([
      { pred: function(number) {return number % 3 == 0;}, 
        replacement: "Fizz"},
      { pred: function(number) {return number % 2 == 0;}, 
        replacement: "Kozz"}
    ]);

  it("also works with different substitution rules", function () {
    expect(
      fizzKozzSubstitute([1, 2, 4, 6, 15])).toBe("1 Kozz Kozz FizzKozz Fizz");
  });
});

describe("FizzOddSeven", function () {
  var fizzOddSevenSubstitute = makeSubstitute([
      { pred: function(number) {return number % 3 == 0;}, 
        replacement: "Fizz"},
      { pred: function(number) {return number % 2 == 1;}, 
        replacement: "Odd"},
      { pred: function(number) {return number == 7;}, 
        replacement: "Seven"}
    ]);

  it("works with rules using any predicate on a number", function () {
    expect(
      fizzOddSevenSubstitute(
        [1, 2, 4, 6, 15, 7])).toBe("Odd 2 4 Fizz FizzOdd OddSeven");
  });
});