function transform (data){

  var replaceStrings = [
    {oldStr:/[\*©®ǂ‡†±→§™¹›]/gi, newStr: ""},
    {oldStr: /Exclusions Apply\.?/i, newStr: ""},
    {oldStr: /Discount Auto-Applied In Cart.*/i, newStr: ""},
    {oldStr: /Shop Now.*/i, newStr: ""},
    {oldStr: /View in a browser\.?/i, newStr: ""},
    {oldStr: /^(\s+)?Plus(,|:)?/i, newStr: ""},
    {oldStr: /[A-z]+,\s?(Redeem your \$\d+)/i, newStr: "$1"},
    {oldStr: /[A-z]+,\s?((Here's|Take) \$\d+)/i, newStr: "$1"},
    {oldStr: /[A-z]+,\s?(You've earned an Adventure Rewards)/i, newStr: "$1"},
    {oldStr: /(orders)(of)/i, newStr: "$1 $2"},
    {oldStr: /(MEMBER\s+NUMBER:\s+)?\w+((Reward\s+)?Certificate\s+\$\d+)/i, newStr: "$2"},
    {oldStr: /(Redeem\s+your\s+\$\d+\s+Certificate!)\s+\w+(EXPIRES:\s+(\d{1,2}\/){2}\d{4})/i, newStr: "$1"},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
  ];

  for (var i = 0; i < replaceStrings.length; i++) {
    var el = replaceStrings[i];
    if (el.oldStr.test(data)) data = data.replace(el.oldStr, el.newStr);
  }



  return data.trim() || null;
}








//------------------------------------------------------------------------------


function transform(data, prevData) {
   var invalid = /\@import\s+url|^save\s*\d+\%\s*$|^\$\d+\.?\d+?\s*sale\s*\$\d+\.?\d+?\s*$|^\s*SAVE\s*\d+\%\s*$|^\s*\d+\%\s*OFF\*?\s*$|^save\s*\d+\%\s*on$|FREE\s*MEMBERSHIP|^\s*\+\s*FREE\s*SHIPPING\s*$/i;
   var saleDollar = /sale\s*\$\d+/i;
   var percentOff = /\d+%?\s*off/i;
   var save = /save\s*((?:up\s*to\s*)|(?:at\s*least\s*))?\d+%/i;
   var saveDollarOn = /save\s*\$\d+\.?\d+\s*on/i;
   var getFree = /get\s*(\d+|.)\s*(boxes)?\s*free/i;
   var getFreePods = /get\s*up\s*to\s*(\d+|.)\s*(pods)?\s*free/i;
   var ctForOnly = /ct\..*for\s*only\s*\$/i;
   var exclusiveBundle = /exclusive\s*bundle/i;
   var free=/\sFREE\s/;
   var boxFree=/\sBox\sFREE/;
   var freeBox=/\sFree\sBox/i;
   var freeShipping=/Free\sShipping/i;
   var experienceBundle=/\s*experience bundle\s/i;
   var motherDayBundle=/\s*mother's\s*day\s*bundle\s/i;
   var firstOrderShipsFree=/first\s*order\s*ships\s*FREE/i;
   var blackFridaySale=/black\s*friday\s*sale/i;
   var includeCoffeeMaker=/includes\s*a\s*coffee\s*maker/i;
   var saleDecember=/sale\s*december/i;
   var freeShip=/free\s*(standard)?\s*shipping.*orders\s*(of)?\s*\$/i

    if (!data || data == "") {
        return null;
    }
	var match = invalid.exec(data);
    if (match){
      return null;
    }
  	//clean data
  	data=data.replace(/\*|\:\s*$|\, while supplies last|\||Restrictions apply\.?|SHOP NOW|LEARN MORE|\&quot\;|SHOP BUNDLE/g,"").replace(/www\.Keurig\.com\s*\./,"www.Keurig.com.").replace(/(OFF)(Boxes)/i,"$1 $2").replace(/(Pods)(\$)/,"$1 $2").replace(/(advanced)(K425)/,"$1 $2").replace(/(filled)(K525)/,"$1 $2").replace(/(essential)(K)/,"$1 $2").replace(/(On)(Your)/,"$1 $2").replace(/(portable)(K)/,"$1 $2").replace(/(products)(\.)/,"$1$2 ").replace(/(new and existing Auto-Delivery orders\s)(on)/,"$1").replace(/(purchased\s*on\s*www\.Keurig\.com)(\s*through\s*\d+\:\d+\s*p\.m\.)/,"$1. ").replace(/(Offer valid for \d+\% off accessories purchased)(\s*on)/,"$1. ").replace(/(purchased\s*on\s*Keurig\.com)(\s*through\s*\d+\:\d+\s*p\.m\.)/,"$1. ").replace(/(\d)(Now)/,"$1 $2").replace(/Coffee\s*Makers\s*COFFEE\s*MAKERS/,"Coffee Makers ").replace(/Accessories\s*ACCESSORIES/,"Accessories ").replace(/Beverages\s*BEVERAGES/,"Beverages ").replace(/(and 20\% off accessories purchased)(\s*on)/,"$1. ").replace(/(Offer valid for 20\% off accessory items)(\s*on)/,"$1. ");
	data=data.charAt(0).toUpperCase()+data.slice(1);

    match = percentOff.exec(data);
    if (match){
      return formatDescription(data,percentOff);
    }

   match = save.exec(data);
   if (match){
      return formatDescription(data,save);
    }

   match = getFree.exec(data);
   if (match){
      return formatDescription(data,getFree);
    }

   match = ctForOnly.exec(data);
   if (match){
      return formatDescription(data,ctForOnly);
    }

   match = exclusiveBundle.exec(data);
   if (match){
      return formatDescription(data,exclusiveBundle);
    }

   match = saveDollarOn.exec(data);
    if (match){
      return formatDescription(data,saveDollarOn);
    }

  	match = saleDollar.exec(data);
    if (match){
      data= formatDescription(data,saleDollar);
      if(data.match(/\$\d+\.?\d*\s*sale\s*\$/i))
        return data.replace(/(\$\d+\.?\d*\s*)(sale\s*\$)/i," was: $1 $2");
      else return data;
    }

    match = free.exec(data);
    if (match){
      return formatDescription(data,free);
    }

    match = experienceBundle.exec(data);
    if (match){
      return formatDescription(data,experienceBundle);
    }

   match = motherDayBundle.exec(data);
    if (match){
      return formatDescription(data,motherDayBundle);
    }

   match = boxFree.exec(data);
    if (match){
      return formatDescription(data,boxFree);
    }
   match = freeBox.exec(data);
    if (match){
      return formatDescription(data,freeBox);
    }

  	match = freeShipping.exec(data);
    if (match){
      return formatDescription(data,freeShipping);
    }

   match = firstOrderShipsFree.exec(data);
    if (match){
      return formatDescription(data,firstOrderShipsFree);
    }
   match = blackFridaySale.exec(data);
    if (match){
      return formatDescription(data,blackFridaySale);
    }
     match = includeCoffeeMaker.exec(data);
    if (match){
      data= formatDescription(data,includeCoffeeMaker);
      if(data.match(/\$\d+\.?\d*\s*Now\s*\$/i))
        return data.replace(/(\$\d+\.?\d*\s*)(sale\s*\$)/i," was: $1 $2");
    }
   match = getFreePods.exec(data);
    if (match){
      return formatDescription(data,getFreePods);
    }
  match = saleDecember.exec(data);
    if (match){
      return formatDescription(data,saleDecember);
    }
   match = freeShip.exec(data);
    if (match){
      return formatDescription(data,freeShip);
    }
    return null;
}

function formatDescription(desc,myRegex){

    if(desc && desc.length > 250){
      	var myRegexPos= desc.search(myRegex);
        var found = desc.match(myRegex);
      	found=found.toString();
      	var newDesc= desc.slice(0,myRegexPos);
       //find the last !, . or ? before the Regex
      	var tPos1 = [newDesc.lastIndexOf(". ") , newDesc.lastIndexOf("!") , newDesc.lastIndexOf("?")];
      	var filteredAr = tPos1.filter(function(e) { return e !== -1 })
      	//if there is a punctuation mark before the regex.
        if(filteredAr.length>0){
          var splitPos1 = Util.max(filteredAr);
          //find the first punctuation mark after the regex
          var tPos2 = [desc.indexOf(". ", myRegexPos + found.length) , desc.indexOf("! ", myRegexPos+ found.length) , desc.indexOf("?", myRegexPos+ found.length)];
          var splitPos2 = min(tPos2, desc.length - 1);
          //return the string
          return desc.substr(splitPos1+1, splitPos2-splitPos1);
    	}
       //if no punctuation mark before the regex return the string from the beginning to the first punctuation mark
      	else{
        	var tPos3 = [desc.indexOf(". ", myRegexPos + found.length) , desc.indexOf("! ", myRegexPos + found.length) , desc.indexOf("?", myRegexPos + found.length)];
      		var splitPos3 = min(tPos3, desc.length - 1);
      		return desc.substr(0, splitPos3+1);
      	}

    }
    return desc;
}


function min(posList, max){
    var selPos = max;
    for(var i = 0; i < posList.length; i++) {
        if(posList[i] == -1){
            continue;
        }
        if(selPos > posList[i]){
          selPos = posList[i];
        }
    }
    return selPos;
}
