// Generated by CoffeeScript 1.8.0
(function() {
  var fizzbuzz, n, result;

  fizzbuzz = function(number) {
    if (number % 15 === 0) {
      return "FizzBuzz";
    } else if (number % 3 === 0) {
      return "Fizz";
    } else if (number % 5 === 0) {
      return "Buzz";
    } else {
      return "" + number;
    }
  };

  result = ((function() {
    var _i, _results;
    _results = [];
    for (n = _i = 1; _i <= 100; n = ++_i) {
      _results.push(fizzbuzz(n));
    }
    return _results;
  })()).join("<br />");

  document.write(result);

}).call(this);
