module.exports = function () {
  let arrOutput = []; // output array
  
  // constan words we will add
  let threeMultipleWord = "Fizz";
  let fiveMultipleWord = "Buzz";
  let bothMultipleWord = "FizzBuzz";

  for (let i=1; i<101; i++) {

    if (i%3 == 0 && i%5 == 0) {
      arrOutput.push(bothMultipleWord)
    } else if (i%3 == 0) {
      arrOutput.push(threeMultipleWord)
    } else if (i%5 == 0) {
      arrOutput.push(fiveMultipleWord)
    } else {
      arrOutput.push(i)
    }
  }

  return arrOutput;
}
