let firstNo = +process.argv[2];
let lastNo = +process.argv[3];

const list = function(firstNo,lastNo){
  for (let range=firstNo; range<=lastNo; range++){
    if (range%2==0){
      console.log(range);
    }
  }
  return;
}
list(firstNo,lastNo);
