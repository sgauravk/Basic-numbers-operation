let lastNumber = +process.argv[2];

const list = function(lastNumber){
  for (let range=1;range<=lastNumber;range++){
    if (range%2==0){
      console.log(range);
    }
  }
  return;
}
list(lastNumber);
