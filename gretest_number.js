let firstNumber = +process.argv[2];
let secondNumber = +process.argv[3];
let thirdNumber = +process.argv[4];

const gretestNum = function(firstNumber,secondNumber,thirdNumber){
  let gretestNumber = firstNumber;
  if(secondNumber > gretestNumber){
    gretestNumber = secondNumber;
  }
  if(thirdNumber > gretestNumber){
    gretestNumber = thirdNumber;
  }
  return gretestNumber;
}
gretestNumber = gretestNum(firstNumber,secondNumber,thirdNumber);
console.log("the gretest number is",gretestNumber);
