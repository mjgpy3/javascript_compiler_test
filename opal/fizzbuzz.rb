def fizzbuzz(number)
  case [number%3 == 0, number%5 == 0]
  when [true, true]
    'FizzBuzz'
  when [true, false]
    'Fizz'
  when [false, true]
    'Buzz'
  else
    number.to_s
  end
end

result = 100.times.collect { |x| fizzbuzz(x+1) }.join('<br />')

`document.write(#{result})`
