let number = +process.argv[2];

const cubeOfNo = function(number){
  let cube = number*number*number;
  return cube;
}
cube = cubeOfNo(number);
console.log("cube of",number,"is",cube);
