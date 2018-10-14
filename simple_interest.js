let price = +process.argv[2];
let timePeriods = +process.argv[3];
let rateOfInterest = +process.argv[4];

const SI = function(price,timePeriods,rateOfInterest){
  let simpleInterest = (price * rateOfInterest * timePeriods)/100;
  return simpleInterest;
}
simpleInterest = SI(price,timePeriods,rateOfInterest);
console.log("the interest amount is",simpleInterest);
