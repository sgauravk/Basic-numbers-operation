let firstNumber = +process.argv[2];
let lastNumber = +process.argv[3];

const sumOfNum = function(firstNumber,lastNumber){
  let sum=0;
  for (let number = firstNumber; number <= lastNumber; number++){
    sum = sum+number;
  }
  return sum;
}
sum = sumOfNum(firstNumber,lastNumber);
console.log("sum from",firstNumber,"to",lastNumber,"is",sum);
