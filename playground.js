function transform(data){
  //All regular expressions that indicate full text removal go in negRegexArr
  var negRegexArr = [
    /\@import\s+url|^\w+\,\s*here.s your|^\w+\,\s*you.ve\s*earned|^\w+\,\s*you haven.t\s*used|you.re$|reward for every \$|^\s*\$\d+(?:\,\d+)?(?:\.\d+)?\s*\-\s*\$\d+(?:\,\d+)?(?:\.\d+)?\s*$|^\s*Regular\s*price\:|No\s*interest/
  ];

  for (var i = 0; i < negRegexArr.length; i++) {
    if (negRegexArr[i].test(data)) return null;
  }

  //All the regular expressions that indicate a coupon go in posRegexArr.
  //Remove what you do not need, add what you need
  var posRegexArr = [
    // (10% | $10 | percent | 1/3)
    // (off | (in )savings | discount | (cash)back | reward | gift | value | credit | (promotional )coupon | (mail-in )rebate | (e-)certificate | bonus | sale)
    /(\d{1,2}%|(\$|£|&pound;|€|&euro;)\d+(\.\d{2})?|percent|\d\/\d)\s*(off|(in )?savings?|discount|(cash(\s*)?)?back|reward|gift|value|credit|(promotional\s*)?coupon|(mail-in\s*)?rebate|(e-)?certificate|bonus|sale)/i,
    // (extra | up to | save | over | more than | discount of | discounted by | savings of | at least | gift of | down to | as low as | bonus of| get a | on (any) | only | enjoy | reduced by)
    // (10% | $10)
    /(extra|up\s*to|sav(e|ings\s*of)|over|more\s*than|discount(ed)?\s*(of|by)|at\s*least|gift\s*of|down\s*to|as\s*low\s*as|bonus\s*of|take|get(\s*a)?|on(\s*any)?|only|enjoy|reduced\s*by)\s*(\d{1,2}%|(\$|£|&pound;|€|&euro;)\d+(\.\d{2})?)/i,
    // (was | start at | sale | under) $10.99
    /(sale:?|was:?|start\s*at|under)\s*(\$|£|&pound;|€|&euro;)\d+/i,
    //on sale | markdown | sa(vl)e on | marked down
    /on\s*sale|markdown|sa[vl]e\s*on|marked\s*down/i,
    //(anniversary|flash) sale
    /(anniversary|flash)\s*sale/i,
    // free (ship | on orders of | $5 | 10% | delivery | standard | gift | NN)
    /free\s*(ship|on\s*orders\s*of|(\$|£|&pound;|€|&euro;)\d|\d+%|standard|delivery|gift|\d)/i,
    // buy one / two / three texttexttext, get
    /buy\s*(one|two|three|\d+),?.*\sget/i,
    //(standard | complementary | NN day) (shipping)
    /(standard|complimentary|\d+day)\s*shipping/i,
    //3 for 2
    /\d\s*for\s*\d/i,
    //(half | 1/2) (price)
    /(half|\d\/\d)\s*(price)/i,
    //BOGO | AORPI | B1G3
    /BOGO|AORPI|BOG\d|B\dG\d/,
    // (100 | earn | get | gather | collect | your | redeem | reward | worth of)
    // (points | rewards | gift | coupon | (e-)certificate)
    /(\d+|earn|get|gather|collect|your|redeem|rewards?|worth\s*of)\s*(points|rewards?|gift|coupon|(e-)?certificate|a?\s*(\$|£|&pound;|€|&euro;))/i,
    // (double | triple | NN times the) (points)
    /(double|triple|\d\s*times\s*the|\dx(\s*the)?)\s*(points)/i,
    //promo(tion) code
    /promo(?:tion)\s*code|sale|doorbusters|clearance|tonight only|get \d for free/i,
  ];


  for (var j = 0; j < posRegexArr.length; j++) {
    if (posRegexArr[j].test(data)) return data.length > 80 ? minimizeMe(data, posRegexArr[j]) : cleanMe(data);
  }

  return null;
}




function minimizeMe(str, reg){
  //Create variable with characters used to identify the beginning and the end of the string.
  var punctuation = /[^\.\?\!\:\|]*/;

  str = str
//  .replace(/(?<=Dr|www|P\.O)\.(?=com|\d{2}|O\.?\s+Box)/g,"~~~") //Replace full stops (.) that should not be removed.
//  .replace(/(?<=\d{1,2}):(?=\d{2})/, "→→→") //Replace all the colons (:) that should not be removed.
  .match(RegExp(punctuation.source + reg.source + punctuation.source, "ig")) //Match only the sentences with coupons
  .join("") //join the array elements from the .match method
  .replace(/~~~/, ".") // Bring back the full stops that should not be removed
  .replace(/→→→/, ":");  // Bring back the colons that should not be removed

  //Send the minimized string to the cleanMe function in order to remove pieces of string.
  return cleanMe(str);
}




function cleanMe(string) {
  //All regular expressions that represent text partial sentence removal go to replaceStrArr
  var replaceStrArr = [
    {oldStr: /([a-z0-9])([A-Z])/g, newStr: "$1 $2"},
    {oldStr: /(% OFF)(\w)/gi, newStr: "$1 $2"},
    {oldStr: /(A-z)(YOUR NEXT VISIT)(A-z)/gi, newStr: "$1 $2 $3"},
    {oldStr: /(Up to \d{2}% Off:Select Patio Furniture) Up to \d{2}% Off:Select Patio Furniture/, "$1"},
    {oldStr: /Clearancesale/, newStr: "Clearance sale"},
    // {oldStr: /^\s*()/ig, newStr: ""}, // ^Find text at the beginning of the string
    {oldStr: /(Limited Time Only|Choose from thousands)$/i, newStr: ""}, // Find text at the end of the string$
    // {oldStr: /.*()/i, newStr: ""}, // .*Find text in the middle, remove everything before that
    // {oldStr: /().*/i, newStr: ""}, // Find text in the middle, remove everything after that.*
    {oldStr: /([¶\*©®ǂ‡^†±→§™¹›]|OFFER ENDS TUESDAY \d{1,2}\/\d{1,2}|BROWSE NOW)/ig, newStr: ""}, // Find text in the middle of the string
  ];

  for (var k = 0; k < replaceStrArr.length; k++) {
    string = string.replace(replaceStrArr[k].oldStr, replaceStrArr[k].newStr).trim();
  }

  return string;
}










(/DepartmentsWhat.*((store)|(merchandise))|\*|Hurry.*|^DepartmentsWhat.s NewFlash FindOffer /g,"").replace(/(up)(to)/gi,"$1 $2").replace(/(\%\s*off)([a-z])/gi,"$1 $2").replace(/([a-z0-9])\(A-Z)/g, "$1 $2");











function transform(data, prevData) {

  	data=data.trim().replace(/DepartmentsWhat.*((store)|(merchandise))|\*|Hurry.*|^DepartmentsWhat.s NewFlash FindOffer /g,"").replace(/(up)(to)/gi,"$1 $2").replace(/(\%\s*off)([a-z])/gi,"$1 $2").replace(/([a-z0-9])\s*([A-Z])/g, "$1 $2");

    var invalid = /\@import\s+url|^\w+\,\s*here.s your|^\w+\,\s*you.ve\s*earned|^\w+\,\s*you haven.t\s*used|you.re$|reward for every \$|^\s*\$\d+(?:\,\d+)?(?:\.\d+)?\s*\-\s*\$\d+(?:\,\d+)?(?:\.\d+)?\s*$|^\s*Regular\s*price\:|No\s*interest/i;


  	var BOGO=/bogo/i;
  	var percentOff = /\d+\%\s*off/i;
    var percentDiscount = /\d+\%\s*discount/i;
    var dollarOff = /\d+\s*off/i;
    var percentBack = /\d+\%\s*back/i;
    var percentReward = /\d+\%\s*reward/i;
    var percentCoupon = /(\d+\%|\$\d+)\s*(?:promotional\s+)?coupon/i;
    var percentSaving = /\d+\%\s*saving/i;
    var earnUpto = /earn\s*((?:up\s*to\s*)|(?:at\s*least\s*))?\d+\%/i;
    var save = /save\s*((?:up\s*to\s*)|(?:at\s*least\s*))?\d+\%/i;

    var freeShip = /free\sship/i;
  	var onSale=/on\s*sale/i;
  	var flashFind=/flash\s*find/i;
  	var toRedeem=/to\s*redeem\s*\$\d+/i;
  	var doublePoints=/2x\s*point/i;
  	var doublePointsBis=/2X\s*(the)?\s*Points/i;
  	var startTomorrow=/start\s*tomorrow/i;
  	var springTrends=/spring\s*trends/i;
  	var wasNow=/\$.*\$/i;
  	var dollarReward=/\d+(?:\s|\&nbsp\;)*reward/i;
  	var percentClearance=/\d+\%.*clearance/i;
  	var regularPrice=/\d+.*regular\s*price/i;

    if (!data || data == "") return null;

	var match = invalid.exec(data);
    if (match) return null;

    match = BOGO.exec(data);
    if (match) return formatDescription(data,BOGO);

    match = percentOff.exec(data);
    if (match) return formatDescription(data,percentOff);

    match = percentDiscount.exec(data);
    if (match) return formatDescription(data, percentDiscount);

    match = dollarOff.exec(data);
    if (match)return formatDescription(data,dollarOff);

    match = percentBack.exec(data);
    if (match) return formatDescription(data,percentBack);

    match = percentReward.exec(data);
    if (match) return formatDescription(data,percentReward);

    match = percentCoupon.exec(data);
    if (match) return formatDescription(data,percentCoupon);

    match = percentSaving.exec(data);
    if (match) return formatDescription(data,percentSaving);

    match = earnUpto.exec(data);
    if (match) return formatDescription(data,earnUpto);

    match = save.exec(data);
    if (match) return formatDescription(data,save);

    match = freeShip.exec(data);
    if (match)return formatDescription(data, freeShip);

    match = onSale.exec(data);
    if (match)return formatDescription(data, onSale);

    match = flashFind.exec(data);
    if (match)return formatDescription(data, flashFind);

    match = toRedeem.exec(data);
    if (match)return formatDescription(data, toRedeem);

    match = doublePoints.exec(data);
    if (match)return formatDescription(data, doublePoints);

    match = doublePointsBis.exec(data);
    if (match)return formatDescription(data, doublePointsBis);

    match = startTomorrow.exec(data);
    if (match)return formatDescription(data, startTomorrow);

    match = springTrends.exec(data);
    if (match)return formatDescription(data, springTrends);

    match = dollarReward.exec(data);
    if (match)return formatDescription(data, dollarReward);

    match = percentClearance.exec(data);
    if (match)return formatDescription(data, percentClearance);

    match = regularPrice.exec(data);
    if (match)return formatDescription(data, regularPrice);

    match = wasNow.exec(data);
    if (match){
      data=data.replace(/(.*)(\$\d+(?:\,\d+)?(?:\.\d+)?)(\s*\$.+)/i,"$1 NOW: $2 WAS: $3");
      return formatDescription(data, wasNow);
    }

    return null;
}

function formatDescription(desc, myRegex){

     //update the period after the numbers
  if(desc.length>120){
     desc=desc.replace(/(\d)(\.)/g,"$1~~~");
     var regEx1 = new RegExp("[^\\.\\?\\!]*");
     var regEx2= new RegExp (regEx1.source + myRegex.source+regEx1.source,"i");
     desc=desc.match(regEx2);
    desc =desc[0].toString().trim();
    //clean the desc and update the period after the numbers
    if(desc.length<=8) return null;
    return desc.replace(/(\d)(\~\~\~)/g,"$1.");
  }
   if(desc.length<=8) return null;
  return desc;
}
