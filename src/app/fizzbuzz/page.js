// fizz buzz example
export function fizzbuzz(n) {
  // n is a number
  const result = [];
  // loop from 1 to n
  for (let i = 1; i <= n; i++) {
    // check if the number is divisible by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      // if the number is divisible by 3 and 5, push "FizzBuzz" to the result array
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      // if the number is divisible by 3, push "Fizz" to the result array
      result.push("Fizz");
    } else if (i % 5 === 0) {
      // if the number is divisible by 5, push "Buzz" to the result array
      result.push("Buzz");
    } else {
      // otherwise, push the number as a string to the result array
      result.push(i.toString());
    }
  }
  return result;
}
