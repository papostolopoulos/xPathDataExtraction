function evalString(arrStr) {
  let firstQuote = arrStr[0];
  let lastStr = arrStr.substring(1).indexOf(firstQuote);
  let stringified = JSON.stringify(arrStr);
  console.log(stringified.indexOf('"'));
  console.log(arrStr);
  let cutStr = arrStr.slice(0, lastStr);
  console.log(cutStr);
  return arrStr;

}


var str = '"I am a string and I have \"another string\" inside me", 3, 4, 5';
