let firstNumber = +process.argv[2];
let lastNumber = +process.argv[3];

const sum = function(firstNumber,lastNumber){
  let sumOfEven=0;
  for (let number=firstNumber;number<=lastNumber;number++){
    if (number%2==0){
      sumOfEven=sumOfEven+number;
    }
  }
  return sumOfEven;
}
sumOfEven = sum(firstNumber,lastNumber);
console.log("sum of even numbers from",firstNumber,"to",lastNumber,"is",sumOfEven);
