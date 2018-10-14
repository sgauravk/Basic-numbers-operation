let firstNumber = +process.argv[2];
let secondNumber = +process.argv[3];
let GCD=0;

const gcdOfNo = function(firstNumber,secondNumber){
  let smallerNumber=firstNumber;
  let greaterNumber=secondNumber;

  if(secondNumber<firstNumber){
    smallerNumber=secondNumber;
    greaterNumber=firstNumber;
  }

  for(let divisor=1;divisor<=smallerNumber;){
    if(greaterNumber%divisor==0 && smallerNumber%divisor==0){
      GCD=divisor;
    }
    divisor++;
  }
  return GCD;
}
GCD = gcdOfNo (firstNumber,secondNumber);
console.log("greatest common divisor is",GCD);
