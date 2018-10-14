let number = +process.argv[2];

const fact = function(number){
  let factorial=1;
  for (let pNumber=number;pNumber>0;pNumber--){
    factorial=factorial*pNumber;
  }
  return factorial;
}
factorial = fact(number);
console.log("the factorial of",number,"is",factorial);
