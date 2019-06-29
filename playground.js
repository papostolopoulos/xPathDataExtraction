var str = "Save 40% on any order $199+ with code: 4HHT";



function transform(data){
  if (/void|Terms|student's session ID/i.test(data)) return null;



  var keywordsRegex = /(?i)%\s*off|free|only\s*\$|save\s*[\$\d]/i;
  if (keywordsRegex.test(data)) {
    console.log("in if");
    return data.length > 80 ? minimizeMe(data, keywordsRegex) : cleanMe(data);
  }


  return null;
}



function minimizeMe(str, reg){
  var punctuation = [". ", "! ", "| ", "? "]; //Punctuation symbols
  str = str
  .replace(/(\.)([A-Z])/, "$1 $2")
  .replace(/(Dr|www|P\.O)\./g,"$1~~~") //Replace full stops (.) that should not be removed.
  .replace(/\.(com|\d{2}|O\.?\s+Box)/g, "~~~$1")
  .replace(/(\d{1,2}):(\d{2})/, "$1→→→$2"); //Replace all the colons (:) that should not be removed.


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

  str = str.replace(/~~~/g, ".").replace(/→→→/, ":");



  //STAGE 3 - Remove unecessary characters from the end of the string.
  return cleanMe(str);
}



function cleanMe(string) {

  var replaceStrArr = [
    {oldStr: /^(Prestige - A Lifetouch Company|Prestige Photography by Lifetouch)/i, newStr: ""}, // ^Find text at the beginning of the string
    {oldStr: /(View as a webpage)$/i, newStr: ""}, // Find text at the end of the string$
    {oldStr: /.*(Contact Us (-\s?\d+)+|Warning: Image Deletion Notice)/i, newStr: ""}, // .*Find text in the middle, remove everything before that
    {oldStr: /(PayPal Credit|Claim your proofs with your unique code: Session ID: Access Code:).*/i, newStr: ""}, // Find text in the middle, remove everything after that.*
    // {oldStr: /([-:,\|] )?([¶\*©®ǂ‡^†±→§™¹›])/ig, newStr: ""}, // Find text in the middle of the string |[-–]
  ];

  for (var i = 0; i < replaceStrArr.length; i++) {
    string = string.replace(replaceStrArr[i].oldStr, replaceStrArr[i].newStr).trim();
  }

  return string;
}
