package main

import (
  "github.com/gopherjs/gopherjs/js"
  "strconv"
)

func fizzBuzz(number int) string {
  result := ""

  if number % 3 == 0 {
    result += "Fizz"
  }
  if number % 5 == 0 {
    result += "Buzz"
  }
  if result == "" {
    result = strconv.Itoa(number)
  }

  return result
}

func main() {
  result := ""

  for i := 1; i < 101; i += 1 {
    result += fizzBuzz(i)
    if i != 100 {
      result += "<br />"
    }
  }

  js.Global.Get("document").Call("write", result)
}
