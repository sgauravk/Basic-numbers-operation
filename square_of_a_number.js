let number = +process.argv[2];

const squareOfNum = function(number){
  let square = number*number;
  return square;
}
square = squareOfNum(number);
console.log("square of",number,"is",square);
