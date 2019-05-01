function transform(data){
  var negScripts = [
    /^\s*?(You\s*Earned\s*\$|'?Thanks\s*Ibotta|For\s*more\s*info|A\s*bright\s*green\s*watering\s*can|A\s*neat\s*and\s*tidy\s*laundry\s*room|Best\s*part\s*of\s*#ibottaApp\s*is|Bonuses\s*under\s*your\s*Account\s*screen|Learn\s*the\s*basics\s*step-by-step|NEW\s*TO\s*ONLINE\s*SHOPPING\s*WITH\s*IBOTTA|A\s*smiling\s*woman\s*shows\s*a\s*friend|Slide\s*1|Today,\s*we\s*applaud\s*the\s*conservation\s*efforts|We\s*help\s*you\s*save\s*money|WONDERING\s*ABOUT\s*BONUSES).*/i,
    /^\s*(Blast\s*off|Blue\s*Flag|Refer\s*4\s*Friends|excluded|CASH\s*BACK|\d{1,2}%\s*Back|Ulta\.com|CASH\s*EARNED|What\s*is\s*bonus\s*cash\?|VIEW\s*ALL\s*BONUSES|BONUSES\s*COMPLETED|How to Earn\s*with\s*Ibotta|Orange\s*Flag|Orbitz\s*Packages|Pink\s*Flag|Retail\s*Therapy\s*Cash\s*Remedy|TRACK\s*YOUR\s*EARNINGS)\s*$/i
  ];

  for(var i = 0; i < negScripts.length; i++){
    if(negScripts[i].test(data)) return null;
  }


  var replaceArr = [
    {oldStr: /.*(Purchase\s*Details|https|unsubscribe|See\s*how\s*other\s*Ibotta\s*shoppers\s*use\s*their\s*cash\s*back|CASH\s*WITHDRAWN|\$\d{1,2}\.\d{1,2}\s*cash\s*back|Sign\s*up\s*for\s*early\s*access|All\s*prices,\s*offers,\s*cash\s*back|does\s*not\s*guarantee|check\s*((each\s*bonus|the\s*app)\s*)for\s*details|are\sexcluded|Additional\s*terms).*/i, newStr: ""},
    {oldStr: /.*(THERE’S\s*STILL\s*TIME\.\.\.)/i, newStr: ""},
    {oldStr: /(Invite\s*your\s*pals|(SHOP|Save|INVITE|BOOK)s*NOW|I\s*WANT\s*IN|MORE\s*DETAILS|VIEW\s*ALL\s*BONUSES|SHOP\s*(ECO-FRIENDLY|NEW\s*TECH)||VIEW\s*OFFER|VIEW\s*BONUS(ES)?|RESERVE\s*NOW|LET'S\s*PLAY)$/i, newStr: ""},
    {oldStr: /(EXPIRING\s*SOON|AMOUNT\s*EARNED|\*|SHOP\s*NOW|BOOK\sNOW|INVITE\sNOW|save\s*now|Connect\s*now|Invite\s*your\s*pals|REDEEM\s*NOW|LEARN\s*MORE|FRIENDS\s*REFERRED|Earn\s*cash!|SHOP\s*IN-STORE|CONNECT\s*YOUR\s*LOYALTY\s*ACCOUNT|START\s*EARNING|INSTALL\s*NOW|START\s*EARNING.*|SHOP\s*ONLINE.*|Suitcase\s*Take\s*a\s*Trip|Your\s*Welcome\s*bonus\s*expires\s*tomorrow\.?|Welcome\s*to\s*Ibotta\!?)/ig, newStr: ""},
    {oldStr: /Don't\s*Forget\s*.*\s*will\s*(earn\s*extra\s*cash)/, newStr: "$1"}
  ];

  replaceArr.forEach(function(el) {
    data = data.replace(el.oldStr, el.newStr);
  });

  return data.trim();
}
