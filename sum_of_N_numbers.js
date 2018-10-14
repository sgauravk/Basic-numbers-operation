let lastNumber = +process.argv[2];

const sum = function(lastNumber){
  let sumOfNNumbers = lastNumber * (lastNumber+1)/2;
  return sumOfNNumbers;
}
sumOfNNumbers = sum(lastNumber);
console.log("sum of first",lastNumber,"numbers is",sumOfNNumbers);
