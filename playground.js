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
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
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

  data = data.trim();

  if (data.lastIndexOf("†") === data.length - 1) data = data.slice(0, data.length-1);

  if(data.length > 100)
    return data.replace(/(\.)(\d)/g,"~~~$2")
    .match(/[^\.\?\!]*((\$\d)|(free)|(redeem)|(house \/d0)|(\%))[^\.\?\!]*/ig)
    .join(". ")
    .replace(/(\~\~\~)(\d)/g,".$2") + ".";



  return data.trim() || null;
}
