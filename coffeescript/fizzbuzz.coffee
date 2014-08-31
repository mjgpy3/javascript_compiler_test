fizzbuzz = (number) ->
  if number % 15 == 0
    "FizzBuzz"
  else if number % 3 == 0
    "Fizz"
  else if number % 5 == 0
    "Buzz"
  else
    "#{number}"

result = (fizzbuzz(n) for n in [1..100]).join("<br />")

document.write(result)
