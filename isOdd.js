let number = +process.argv[2];

const isodd = function(number){
  if (number%2==0){
    console.log("false");
  }
  if (number%2==1){
    console.log("true");
  }
  return;
}
isodd(number);
