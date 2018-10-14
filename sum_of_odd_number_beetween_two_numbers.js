let firstNumber = +process.argv[2];
let lastNumber = +process.argv[3];

const sum = function(firstNumber,lastNumber){
  let sumOfOdd=0;
  for (let number=firstNumber;number<=lastNumber;number++){
    if (number%2==1){
      sumOfOdd=sumOfOdd+number;
    }
  }
  return sumOfOdd;
}
sumOfOdd = sum(firstNumber,lastNumber);
console.log("sum of odd numbers from",firstNumber,"to",lastNumber,"is",sumOfOdd);
