function transform(data){
  data = data.replace(/(\.)(\d|com)/gi,"~~~$2")
  .match(/[^\.\?\!\:]*(Buy\s*any\s*full-priced.*and\s*receive|%\s*off|buy\s*\d+,?\s*get\s*\d+|\d+\s*for\d+|buy\s*\d|\$\s*\d+\s*off|\d+\s*for\s*\$\d)[^\.\?\!\:]*/ig);
  if(!data) return null;

  data = data.join(". ");

  var replaceArr = [
    {oldStr: /~~~/g, newStr: "."},
    {oldStr: /[\*†]+/g, newStr: ""},
    {oldStr: /\(some\s*exclusions\s*apply\)/i, newStr: ""},
    {oldStr: /^Plus/i, newStr: ""}
  ];

  replaceArr.forEach(function(el){
    data = data.replace(el.oldStr, el.newStr);
  });

  return data.trim();
}












function transform(data){
  var negRegexArr = [
    /free\s*parcel\s*post\s*shipping\s*within/i,
    /Get\s*sized\s*in\s*seconds/i
  ];

  for (var i = 0; i < negRegexArr.length; i++) {
    if (negRegexArr[i].test(data)) return null;
  }


  var posRegexArr = [
    /Buy\s*any\s*full-priced.*and\s*receive/i,
    /Free\s*Shipping\s*\+\s*Free\s*Returns\s*On/i,
    /%\s*off/i,
    /\$\d+\s*value/i,
    /buy\s*\d+,?\s*get\s*\d+/i,
    /get\s*\d\s*free/i,
    /\d+\s*for\d+/i,
    /buy\s*\d\s*[a-z]+\s*for\s*\$\d+/i,
    /\$\d+\s*off/i,
    /while\s*supplies\s*last/i,
    /\d+\s*for\s*\$\d/i
  ];

  for (var j = 0; j < posRegexArr.length; j++) {
    if (posRegexArr[j].test(data)) return data.length > 80 ? minimizeMe(data, posRegexArr[j]) : cleanMe(data);
  }

  return null;
}





function minimizeMe(str, reg){
  var punctuation = [". ", "! ", "| ", "? ", ": "]; //Punctuation symbols
  str = str.replace(/(\.)([A-z])/g, "$1 $2");

  //STAGE 1 - Slice text at the beginning of string
  var sliceStr = str.slice(0, str.indexOf(str.match(reg)[0])); //Create a substring from the beginning of string up to the beginning of the .match()
  var sliceStart = 0; //Define a variable where the slice at the beginning of the initial string will happen.


  //Iterate through the punctuation symbols.
  //If the last Index position of the punctuation is larger than the sliceStart variable,
  //then make the variable equal to the last index position.
  //That will be later used to slice the string at its beginning
  for (var i = 0; i < punctuation.length; i++) {
    if(sliceStr.lastIndexOf(punctuation[i]) > sliceStart) sliceStart = sliceStr.lastIndexOf(punctuation[i]);
  }
  //Slice the string from the beginning of the last punctuation mark but before the coupon description.
  if(sliceStart > 0) str = str.slice(sliceStart + 1).trim();




  //STAGE 2 - Slice text at the end of string
  var sliceEnd = +Infinity;
  //Iterate through the punctuation symbols.
  //If the punctuation symbol's index position is smaller than the sliceEnd variable, then
  //make the sliceEnd variable equal to the index position of the punctuation.
  //The sliceEnd will be used as the position where the slicing of the string will happen at it's end.
  for (var j = 0; j < punctuation.length; j++) {
    if (str.indexOf(punctuation[j]) < sliceEnd && str.indexOf(punctuation[j]) !== -1) sliceEnd = str.indexOf(punctuation[j]);
  }
  //Slice the end of the string
  str = str.slice(0, sliceEnd).trim();





  //STAGE 3 - Remove unecessary characters from the end of the string.
  return cleanMe(str);
}


function cleanMe(string) {
  var replaceStrArr = [
    {oldStr: /Shop\s*now/i, newStr: ""}
  ];

  for (var i = 0; i < replaceStrArr.length; i++) {
    if(replaceStrArr[i].oldStr.test(string)){
      string = string.replace(replaceStrArr[i].oldStr, replaceStrArr[i].newStr).trim();
      //break;
    }
  }


  while("*©®ǂ‡†±+→§™¹›∞•◊ΔÐð_|^".indexOf(string[string.length-1]) !== -1) string = string.slice(0, string.length-1);
  while("*©®ǂ‡†±+→§™¹›∞•◊ΔÐð_^".indexOf(string[0]) !== -1) string = string.slice(1);

  return string;
}
























function transform(data){
  var negRegexStr = /free\s*parcel\s*post\s*shipping\s*within|Get\s*sized\s*in\s*seconds/i
  if (negRegexStr.test(data)) return null;

  var regexStr = /Buy\s*any\s*full-priced.*and\s*receive|Free\s*Shipping\s*\+\s*Free\s*Returns\s*On|%\s*off|\$\d+\s*value|buy\s*\d+,?\s*get\s*\d+|get\s*\d\s*free|\d+\s*for\d+|buy\s*\d\s*[a-z]+\s*for\s*\$\d+|\$\d+\s*off|while\s*supplies\s*last|\d+\s*for\s*\$\d/i;

  return data.length > 80 ? minimizeMe(data, regexStr) : cleanMe(data);

  return null;
}





function minimizeMe(str, reg){
  var punctuation = [". ", "! ", "| ", "? ", ": "]; //Punctuation symbols
  str = str.replace(/\.com/g, "dotcom");
  str = str.replace(/(\.)([A-z])/g, "$1 $2");

  //STAGE 1 - Slice text at the beginning of string
  var sliceStr = str.slice(0, str.indexOf(str.match(reg)[0])); //Create a substring from the beginning of string up to the beginning of the .match()
  var sliceStart = 0; //Define a variable where the slice at the beginning of the initial string will happen.


  //Iterate through the punctuation symbols.
  //If the last Index position of the punctuation is larger than the sliceStart variable,
  //then make the variable equal to the last index position.
  //That will be later used to slice the string at its beginning
  for (var i = 0; i < punctuation.length; i++) {
    if(sliceStr.lastIndexOf(punctuation[i]) > sliceStart) sliceStart = sliceStr.lastIndexOf(punctuation[i]);
  }
  //Slice the string from the beginning of the last punctuation mark but before the coupon description.
  if(sliceStart > 0) str = str.slice(sliceStart + 1).trim();


  //STAGE 2 - Slice text at the end of string
  var sliceEnd = +Infinity;
  //Iterate through the punctuation symbols.
  //If the punctuation symbol's index position is smaller than the sliceEnd variable, then
  //make the sliceEnd variable equal to the index position of the punctuation.
  //The sliceEnd will be used as the position where the slicing of the string will happen at it's end.
  for (var j = 0; j < punctuation.length; j++) {
    if (str.indexOf(punctuation[j]) < sliceEnd && str.indexOf(punctuation[j]) !== -1) sliceEnd = str.indexOf(punctuation[j]);
  }
  //Slice the end of the string
  str = str.slice(0, sliceEnd).trim();
  str = str.replace(/dotcom/g, ".com");


  //STAGE 3 - Remove unecessary characters from the end of the string.
  return cleanMe(str);
}


function cleanMe(string) {
  var replaceStrArr = [
    {oldStr: /Shop\s*now/i, newStr: ""},
    {oldStr: /Use\s*code/ig, newStr: ""},
    {oldStr: /[\*†]/g, newStr: ""},
    {oldStr: /\(some\s*exclusions\s*apply\)/i, newStr: ""},
    {oldStr: /valid\s*in\s*stores,\s*at\s*soma.*/, newStr: ""},
    {oldStr: /^Plus,?/, newStr: ""},
  ];

  for (var i = 0; i < replaceStrArr.length; i++) {
    string = string.replace(replaceStrArr[i].oldStr, replaceStrArr[i].newStr).trim();
  }

  return string;
}
