// Pre-existing generic rule - 3,390 CHARACTERS
function transform(data, prevData) {
    var invalid = /\@import\s+url/i;

    var percentOff = /\d+%?\s*off/i;
    var percentDiscount = /\d+%\s*discount/i;
    var dollarOff = /\d+(?:\.\d+)?\s*off/i;
    var percentBack = /\d+%\s*back/i;

    var percentReward = /\d+%\s*reward/i;
    var percentCoupon = /(\d+%|\$\d+)\s*(?:promotional\s+)?coupon/i;
    var percentSaving = /\d+%\s*saving/i;

    var earnUpto = /earn\s*((?:up\s*to\s*)|(?:at\s*least\s*))?\d+%/i;

    var save = /save\s*((?:up\s*to\s*)|(?:at\s*least\s*))?\d+%/i;

    var offers = /\s+offer[s]?\s+/i;
    var promoCode = /promo(?:tion)\s+code\s+/i;
    var negPromoCode = /^into\sthe/i;

    var redeem = /\sredeem\s/i;
    var redeem2 = /\.[^.]*?\sredeem\s/i;

    var earnedReward = /\sbody\sworks\sreward/i;
    var freeShip = /free\sship/i;

    if (!data || data == "") {
        return null;
    }
	var match = invalid.exec(data);
    if (match){
      return null;
    }

    match = percentOff.exec(data);
    if (match){
      return formatDescription(data);
    }

      match = percentDiscount.exec(data);
    if (match){
      return formatDescription(data);
    }

    match = dollarOff.exec(data);
    if (match){
      return formatDescription(data);
    }

    match = percentBack.exec(data);
    if (match){
      return formatDescription(data);
    }

    match = percentReward.exec(data);
    if (match){
      return formatDescription(data);
    }

    match = percentCoupon.exec(data);
    if (match){
      return formatDescription(data);
    }

    match = percentSaving.exec(data);
    if (match){
      return formatDescription(data);
    }

    match = earnUpto.exec(data);
    if (match){
      return formatDescription(data);
    }

    match = save.exec(data);
    if (match){
      return formatDescription(data);
    }

    match = offers.exec(data);
    if (match){
      if(data.length > 100){
        return null;
      }
      else if(data.length < 50){
        var digitMatch = /(\d+%|\$\d+)\s+/;
        var match1 = digitMatch.exec(data);
        if(match1) {
          return formatDescription(data);
        }
      }
      else {
        return formatDescription(data);
      }
    }

    match = promoCode.exec(data);
    if (match){
      var match2 = negPromoCode.exec(data);
      if( !match2)
      return formatDescription(data);
    }

    match = redeem.exec(data);
    var match2 = redeem2.exec(data);
    if (match){
      if(match2 && match2.index){
        data = data.substr(match2.index+1);
      }
      return formatDescription(data);
    }
    match = earnedReward.exec(data);
    if (match){
      return formatDescription(data);
    }
    match = freeShip.exec(data);
    if (match){
      return formatDescription(data);
    }

    return null;
}

function formatDescription(desc){
    if(desc && desc.length > 100){
        var tPos = [desc.indexOf(". ", 80) , desc.indexOf("! ", 80) , desc.indexOf("? ", 80), desc.indexOf("; ", 80)];

        var splitPos = min(tPos, desc.length - 1)
        return desc.substr(0, splitPos + 1);
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



//------------------------------------------------
//Alternative rule - 2,071 CHARACTERS
function transform (data){

  var replaceStrings = [
    {oldStr:/[\*©®ǂ‡†±→§™¹›]/gi, newStr: ""},
    {oldStr: /See Details$/i, newStr: ""},
    {oldStr: /shop\s*now|\-\s*learn\s*more/ig, newStr: ""},
    {oldStr: /Details below/i, newStr: ""},
    {oldStr: /See Details/i, newStr: ""},
    {oldStr: /Find Your Store/i, newStr: ""},
    {oldStr: /Plus, /i, newStr: ""},
    {oldStr: /Restrictions apply/i, newStr: ""},
    {oldStr: /Get\s+on\s+it\.?/i, newStr: ""},
    {oldStr: /In-Store Only/i, newStr: ""},
    {oldStr: /Plus, you'll get amazing benefits like.*/i, newStr: ""},
    {oldStr: /Find Your Store/i, newStr: ""},
    {oldStr: /^NORDSTROM REWARDS$/i, newStr: ""},
    {oldStr: /(Expires|Now-)(\s+)?(Jan|Fev|Mar|Arp|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[A-z]*\.?\s+\d{1,2}.*/gi, newStr: ""},
    {oldStr: /.*(Schedule your Personal 10 Points Day\.).*/i, newStr: "$1"},
    {oldStr: /Promo code required.*/i, newStr: ""},
    {oldStr: /Get on it/i, newStr: ""},
    {oldStr: /Sale ends.*/i, newStr: ""},
    {oldStr: /(\$\d{1,}(\.\d{2})?)(\$\d{1,}(\.\d{2})?)/gi, newStr: "$1 - Was $3"},
    {oldStr: /Shop ClothingShop Shoes/i, newStr: ""},
    {oldStr: /\| (Shop Women's Sale)/i, newStr: "$1"},
    {oldStr: /Hi,? [A-z]+\.?\s(You've got \$\d+ in Nordstrom Notes)/i, newStr: "$1"},
    {oldStr: /(You have 1 Personal Triple Points Day\(s\) expiring (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\. 31\.).*/i, newStr: "$1"},
    {oldStr: / or$/i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    {oldStr: /\|\s+\|/i, newStr: "|"},
    {oldStr: /\.\†/gi, newStr: "."},
    {oldStr: /[\†\|-](\s+)?$/gi, newStr: ""},
    {oldStr: /\.\s+\./gi, newStr: "."},
  ];

  for (var i = 0; i < replaceStrings.length; i++) {
    var el = replaceStrings[i];
    if (el.oldStr.test(data)) data = data.replace(el.oldStr, el.newStr);
  }

  if(data.length > 100)
    return data.replace(/(\.)(\d)/g,"~~~$2")
    .match(/[^\.\?\!]*((\$\d)|(free)|(redeem)|(house \/d0)|(\%))[^\.\?\!]*/ig)
    .join(". ")
    .replace(/(\~\~\~)(\d)/g,".$2") + ".";


  return data.trim() || null;
}
