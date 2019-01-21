function takeANumber(array,name){
   array.push(name);
   return `Welcome, ${name}. You are number ${array.length} in line.`
 }

function nowServing(array){
  if (array.length===0){
    return There is nobody waiting to be served!

  }else{
    var name=array[0];
    array.shift();
    return `Currently serving ${name}.` ;
  }
}

function currentLine(array){
  if(array.length===0){
    return The line is currently empty.
  }else{
    function order(){
      for(var i=0;i<array.length;i++){
      return `${i+1}:${array[i]}`
    }
  return `The line is currently: ${function order()}`

  }
}
