let tempToCalculate = +process.argv[2];

const convertor = function(tempToCalculate){
  let tempInCelsius = (tempToCalculate-32)/1.8;
  return tempInCelsius;
}
tempInCelsius = convertor(tempToCalculate);
console.log("",tempInCelsius,"Celsius");
