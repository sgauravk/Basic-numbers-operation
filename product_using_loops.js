let lastNumber = +process.argv[2];

const product = function(lastNumber){
  let productOfNNumbers = 1;
  for (let number = 1; number <= lastNumber; number++){
    productOfNNumbers = productOfNNumbers*number;
  }
  return productOfNNumbers;
}
productOfNNumbers = product(lastNumber);
console.log(productOfNNumbers);
