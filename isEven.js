let number = +process.argv[2];

const iseven = function(number){
  if (number%2==0){
    console.log("true");
  }
  if (number%2==1){
    console.log("false");
  }
  return;
}
iseven(number);
