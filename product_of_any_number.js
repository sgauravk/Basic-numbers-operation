let firstNumber = +process.argv[2];
let lastNumber = +process.argv[3];

const productOfNum = function(firstNumber,lastNumber){
  let product = 1;
  for (let number=firstNumber;number<=lastNumber;number++){
    product=product*number;
  }
  return product;
}
product = productOfNum(firstNumber,lastNumber);
console.log(product);
