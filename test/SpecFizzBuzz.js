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

  it("returns empty string for an empty array", function () {
    expect(fizzBuzzSubstitute([])).toBe("");
  });

  it("returns 1 for [1]", function () {
    expect(fizzBuzzSubstitute([1])).toBe("1");
  });

  it("returns Fizz for [3]", function () {
    expect(fizzBuzzSubstitute([3])).toBe("Fizz");
  });

  it("returns Fizz for [9]", function () {
    expect(fizzBuzzSubstitute([9])).toBe("Fizz");
  });

  it("returns Buzz for [5]", function () {
    expect(fizzBuzzSubstitute([5])).toBe("Buzz");
  });

  it("returns Buzz for [25]", function () {
    expect(fizzBuzzSubstitute([25])).toBe("Buzz");
  });

  it("returns FizzBuzz for [15]", function () {
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

  it("uses substitute with different substitution rules", function () {
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

  it("uses substitute with different substitution rules", function () {
    expect(
      fizzOddSevenSubstitute(
        [1, 2, 4, 6, 15, 7])).toBe("Odd 2 4 Fizz FizzOdd OddSeven");
  });
});