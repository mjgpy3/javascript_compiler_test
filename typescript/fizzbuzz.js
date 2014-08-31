function fizzbuzz(number) {
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

var result = "";

for (var i = 1; i <= 100; i += 1) {
    result += fizzbuzz(i);
    if (i !== 100) {
        result += "<br />";
    }
}

document.write(result);
