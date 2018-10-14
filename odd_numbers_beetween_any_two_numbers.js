let firstNo = +process.argv[2];
let lastNo = +process.argv[3];

const series = function(firstNo,lastNo){
  for (let number = firstNo ;number <= lastNo; number++){
    if (number%2 == 1){
      console.log(number);
    }
  }
  return;
}
series(firstNo,lastNo);
