function transform(data){
  var negRegexArr = [
    //certificate can be used from
    /certificate\s*can\s*be\s*used\s*from/i,
    //Subject to credit approval
    /Subject\s*to\s*credit\s*approval/i,
    //$NN per month
    /\$\d+\s*per\s*month/i,
    //NN Points = $NN reward
    /^\d+\s*points\s*=\s*\$\d+\s*reward\s*$/i,
    //will appear within 90 days
    /will\s*appear\s*within\s*90\s*days/i,
    //Promotion restrictions
    /Promotion\s*restrictions/i,
    //Redeem your certificates now
    /Redeem\s*your\s*certificates\s*now/i,
    //The Account must remain open
    /The\s*Account\s*must\s*remain\s*open/i,
    //To redeem
    /^To\s*redeem/i,
    //You may have already redeemed your certificates
    /You\s*may\s*have\s*already\s*redeemed\s*your\s*certificates/i,
    //Look for your Rewards Certificates in the mai
    /Look\s*for\s*your\s*Rewards\s*Certificates\s*in\s*the\s*mail/i,
    //com/
    /\.com\//i
  ];

  for (var i = 0; i < negRegexArr.length; i++) {
    if (negRegexArr[i].test(data)) return null;
  }


  var posRegexArr = [
    // (10% | $10 | percent) (off | (in )savings | discount | (cash)back | reward | gift | value | credit | (promotional )coupon | (mail-in )rebate | (e-)certificate | bonus | sale)
    /(\d{1,2}%|\$\d+(\.\d{2})?|percent)\s*(off|(in )?savings|discount|(cash(\s*)?)?back|reward|gift|value|credit|(promotional\s*)?coupon|(mail-in\s*)?rebate|(e-)?certificate|bonus|sale)/i,
    // (extra | up to | save | over | more than | discount of | discounted by | savings of | at least | gift of | down to | as low as | bonus of| get a) (10% | $10)
    /(extra|up\s*to|sav(e|ings\s*of)|over|more\s*than|discount(ed)?\s*(of|by)|at\s*least|gift\s*of|down\s*to|as\s*low\s*as|bonus\s*of|take|get(\s*a)?)\s*(\d{1,2}%|\$\d+(\.\d{2})?)/i,
    // was $10.99 | start at $10.99 sale $10.99
    /(sale:?|was:?|start\s*at)\s*\$\d+/i,
    //on sale | markdown | save on | marked down
    /on\s*sale|markdown|save\s*on|marked\s*down/i,
    //anniversary sale
    /anniversary\s*sale/i,
    // free ship | free on orders of | free $5 | free 10% | free delivery | free standard | free gift | free NN
    /free\s*(ship|on\s*orders\s*of|\$\d|\d+%|standard|delivery|gift|\d)/i,
    // buy one / two / three texttexttext, get
    /buy\s*(one|two|three|\d+),?.*\sget/i,
    //(standard | complementary | NN day) (shipping)
    /(standard|complimentary|\d+day)\s*shipping/i,
    //BOGO
    /BOGO/,
    // (100 | earn | get | gather | collect | your | redeem | reward) (points | rewards | gift | coupon | (e-)certificate)
    /(\d+|earn|get|gather|collect|your|redeem|reward)\s*(points|rewards?|gift|coupon|(e-)?certificate|a?\s*\$)/i,
    // (double | triple | NN times the) (points)
    /(double|triple|\d\s*times\s*the|\dx\s*the)\s*(points)/i,
    //promo(tion) code
    /promo(?:tion)\s*code\s*/i,
  ];

  for (var j = 0; j < posRegexArr.length; j++) {
    if (posRegexArr[j].test(data)) return data.length > 80 ? minimizeMe(data, posRegexArr[j]) : cleanMe(data);
  }

  return null;
}





function minimizeMe(str, reg){
  var punctuation = [". ", "! ", "| ", "? "]; //Punctuation symbols
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
    {oldStr: /[\*\©\®\ǂ\‡\†\±\+\→\§\™\¹\›\∞\•\◊\Δ\\Ð\ð\®\_\—]/g, newStr: ""},
    {oldStr: /([A-z\.\d])\*([\$\sA-z])/, newStr: "$1 $2"},
    {oldStr: /(See\s*terms\.?(\s*Limited\s*time\s*offer[\.—])?|Offer\s*applies\s*to\s*select\s*items\s*only|Limited\s*Exclusions\s*Apply|or|Cannot\s*be\s*combined\s*with.*|Valid\s*in\s*store\s*only|YOUR\s*PURCHASE\s*VALID.*|(:\s*)?Subject\s*to\s*credit\s*approval|\(\d\)|shop\s*now|Exclusions\s*apply.*|To\s*redeem.*|Valid\s*in\s*store\s*only.*)\s*$/i, newStr: ""},
    {oldStr: /^(Don't\s*forget,?|To\s*redeem\s*Reward\s*Dollars\s*online\s*at\s*Belk|Plus,?|Through\s*[JFMASOND][aepuco][a-z]+\s*\d{1,2},?\s*\d{2,4},?|Reduced\s*delivery.*\.△|(Plus,?\s*\s*And\s*)?don't\s*forget,?|And|As\s*a\s*cardmember,?|Limited-?\s*time\s*(only|offer))/i, newStr: ""}
  ];

  for (var i = 0; i < replaceStrArr.length; i++) {
    if(replaceStrArr[i].oldStr.test(string)){
      string = string.replace(replaceStrArr[i].oldStr, replaceStrArr[i].newStr).trim();
      //break;
    }
  }


  // while("*©®ǂ‡†±+→§™¹›∞•◊ΔÐð_|".indexOf(string[string.length-1]) !== -1) string = string.slice(0, string.length-1);
  // while("*©®ǂ‡†±+→§™¹›∞•◊ΔÐð_".indexOf(string[0]) !== -1) string = string.slice(1);

  return string;
}
