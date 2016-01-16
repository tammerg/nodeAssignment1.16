var arg = process.argv.slice(2);
var array = [];
var sum = 0;

for(i = 0; i < arg.length; i++){
  sum = 0;
  for(j = 0; i < arg.length; j++){
    if (i!==j) {
      sum +=parseFloat(arg[j])
    }
    array[i]=sum;
  }
}
console.log(array);

