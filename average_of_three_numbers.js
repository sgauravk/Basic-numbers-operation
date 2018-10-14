let firstNumber = +process.argv[2];
let secondNumber = +process.argv[3];
let thirdNumber = +process.argv[4];

const averageOfNo = function(firstNumber,secondNumber,thirdNumber){
  average = (firstNumber + secondNumber + thirdNumber)/3;
  return average;
}
average = averageOfNo(firstNumber,secondNumber,thirdNumber);
console.log("the average is",average);
