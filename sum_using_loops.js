let lastNumber = +process.argv[2];

const sum = function(lastNumber){
let sumOfNNumbers=0;
for (let number = 1; number <= lastNumber; number++){
  sumOfNNumbers = sumOfNNumbers + number;
}
return sumOfNNumbers;
}
sumOfNNumbers = sum(lastNumber);
console.log("sum of first",lastNumber,"numbers is",sumOfNNumbers);
