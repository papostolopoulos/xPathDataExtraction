//To use for testing how the function is run in howPerforman.html
function hello(data){
  for(var i = 0; i<data.length; i++){
    console.log(data[i]);
  }

  if(data.indexOf("M") === -1){
    return "There is no M";
  }
  else{
    return "Hello there " + data;
  }
}
