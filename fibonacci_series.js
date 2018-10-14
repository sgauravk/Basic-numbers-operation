let lastNum = +process.argv[2];

const series = function(lastNum){
  let f1=0;
  let f2=1;
  let f3=0;
  console.log(f1);
  console.log(f2);
  for (let range=3;range<=lastNum;range++){
    f3=f2+f1;
    f1=f2;
    f2=f3;
    console.log(f3);
  }
  return;
}
series(lastNum);
