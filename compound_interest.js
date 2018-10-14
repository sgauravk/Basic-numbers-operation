let price = +process.argv[2];
let timePeriods = +process.argv[3];
let rateOfInterest = +process.argv[4];

const CI = function(price,timePeriods,rateOfInterest){
  interest = Math.pow((1+rateOfInterest/100),timePeriods);
  compoundInterest = price*interest-price;
  return compoundInterest;
}
compoundInterest = CI (price,timePeriods,rateOfInterest);
console.log("the interest amount is",compoundInterest);
