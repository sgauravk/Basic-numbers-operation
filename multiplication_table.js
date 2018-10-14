let number = +process.argv[2];
let lastQuotient = +process.argv[3];

const table = function(number,lastQuotient){
  for (let quotient = 1; quotient <= lastQuotient; quotient++){
    console.log(number+' * '+quotient+' = '+number*quotient);
  }
  return;
}
table(number,lastQuotient);
