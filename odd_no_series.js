let lastNumber = +process.argv[2];

const series = function(lastNumber){
  for (let number = 1; number <= lastNumber; number++){
    if (number%2 == 1){
      console.log(number);
    }
  }
  return;
}
series(lastNumber);
