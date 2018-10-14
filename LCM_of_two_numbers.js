let firstNumber = +process.argv[2];
let secondNumber = +process.argv[3];
let GCD=0;
let LCM=0;

const lcmOfNo = function(firstNumber,secondNumber){
  let smallerNumber=firstNumber;
  let greterNumber=secondNumber;

  if(secondNumber<firstNumber){
    const smallerNumber=secondNumber;
    const greterNumber=firstNumber;
  }

  for(let divisor=1;divisor<=smallerNumber;){
    if(greterNumber%divisor==0 && smallerNumber%divisor==0){
      GCD=divisor;
      LCM=(firstNumber*secondNumber)/GCD;
    }
    divisor++;
  }
  return LCM;
}
LCM = lcmOfNo(firstNumber,secondNumber);
console.log("least common multiple is",LCM);
