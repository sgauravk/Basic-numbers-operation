let tempToCalculate = +process.argv[2];

const converter = function(tempToCalculate){
  let tempInFahrenheit = 32 + tempToCalculate*1.8;
  return tempInFahrenheit;
}
tempInFahrenheit = converter(tempToCalculate);
console.log("",tempInFahrenheit,"Fahrenheit");
