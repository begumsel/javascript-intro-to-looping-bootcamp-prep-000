function forLoop(array){
  for(var i=0; i<25; i++){
    if(i<=1){
      array.push(`I am ` + i + ` strange loop.`); 
    } else {
      array.push(`I am ` + i + ` strange loops.`); 
    }
  }
  return array;
}

function whileLoop(){
  while(n>0){
    console.log(n);
    n--;
  }
  return "done";
}

function doWhileLoop(array){
  function incrementVariable(i) {
  i++;
  do {
  console.log("I run once regardless.");
  array.pop();
} while (incrementVariable() < i && array.length > 0);
}
}

