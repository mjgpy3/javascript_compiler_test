function fizzbuzz(number : number) {
    var result = "";

    if (number % 3 == 0) {
        result += "Fizz";
    }

    if (number % 5 == 0) {
        result += "Buzz";
    }

    if (result === "") {
        result = number.toString();
    }

    return result;
}

var result = (function () {
    var _i = 1, _r = [];
    for (; _i <= 100; _i += 1) {
        _r.push(fizzbuzz(_i));
    }
    return _r;
}()).join("<br />");

document.write(result);
