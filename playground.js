function transform(data){
  var negRegexArr = [
    /Offer\s*(expires|valid)|Valid\s*for\s*up/
  ];

  for (var i = 0; i < negRegexArr.length; i++) {
    if (negRegexArr[i].test(data)) return null;
  }


  var posRegexArr = [
    // (10% | $10 | percent | 1/3) (off | (in )savings | discount | (cash)back | reward | gift | value | credit | (promotional )coupon | (mail-in )rebate | (e-)certificate | bonus | sale)
    /(\d{1,2}%|(\$|£|&pound;|€|&euro;)\d+(\.\d{2})?|percent|\d\/\d)\s*(off|(in )?savings?|discount|(cash(\s*)?)?back|reward|gift|value|credit|(promotional\s*)?coupon|(mail-in\s*)?rebate|(e-)?certificate|bonus|sale)/i,
    // (extra | up to | save | over | more than | discount of | discounted by | savings of | at least | gift of | down to | as low as | bonus of| get a | on (any)) (10% | $10)
    /(extra|up\s*to|sav(e|ings\s*of)|over|more\s*than|discount(ed)?\s*(of|by)|at\s*least|gift\s*of|down\s*to|as\s*low\s*as|bonus\s*of|take|get(\s*a)?|on(\s*any)?)\s*(\d{1,2}%|(\$|£|&pound;|€|&euro;)\d+(\.\d{2})?)/i,
    // was $10.99 | start at $10.99 sale $10.99
    /(sale:?|was:?|start\s*at)\s*(\$|£|&pound;|€|&euro;)\d+/i,
    //on sale | markdown | save on | marked down
    /on\s*sale|markdown|save\s*on|marked\s*down/i,
    //anniversary sale
    /anniversary\s*sale/i,
    // free ship | free on orders of | free $5 | free 10% | free delivery | free standard | free gift | free NN
    /free\s*(ship|on\s*orders\s*of|(\$|£|&pound;|€|&euro;)\d|\d+%|standard|delivery|gift|\d)/i,
    // buy one / two / three texttexttext, get
    /buy\s*(one|two|three|\d+),?.*\sget/i,
    //(standard | complementary | NN day) (shipping)
    /(standard|complimentary|\d+day)\s*shipping/i,
    //3 for 2
    /\d\s*for\s*\d/i,
    //(half | 1/2) (price)
    /(half|\d\/\d)\s*(price)/i,
    //BOGO | AORPI
    /BOGO|AORPI/,
    // (100 | earn | get | gather | collect | your | redeem | reward | worth of) (points | rewards | gift | coupon | (e-)certificate)
    /(\d+|earn|get|gather|collect|your|redeem|rewards?|worth\s*of)\s*(points|rewards?|gift|coupon|(e-)?certificate|a?\s*[\$£€])/i,
    // (double | triple | NN times the) (points)
    /(double|triple|\d\s*times\s*the|\dx(\s*the)?)\s*(points)/i,
    //promo(tion) code
    /promo(?:tion)\s*code\s*/i,
  ];

  for (var j = 0; j < posRegexArr.length; j++) {
    if (posRegexArr[j].test(data)) return data.length > 80 ? minimizeMe(data, posRegexArr[j]) : cleanMe(data);
  }

  return null;
}





function minimizeMe(str, reg){
  var punctuation = [". ", "! ", "| ", "? ", ": "]; //Punctuation symbols
  str = str.replace(/(\.)(?!com|\d)([A-z])/g, "$1 $2");

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
    {oldStr: /^((Limited time! )?Plus,?|P\.S\.)\s*/, newStr: ""},
    {oldStr: /[\*Â]±/g, newStr: ""},
  ];

  for (var i = 0; i < replaceStrArr.length; i++) {
    string = string.replace(replaceStrArr[i].oldStr, replaceStrArr[i].newStr).trim();
  }


  return string.trim();
}
