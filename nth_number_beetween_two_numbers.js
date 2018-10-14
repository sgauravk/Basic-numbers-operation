let lastNumber = +process.argv[3];
let nth = +process.argv[2];

const series = function(lastNumber,nth){
  for (let number = 1; number <= lastNumber ;number = number+nth){
    console.log(number);
  }
  return;
}
series(lastNumber,nth);
