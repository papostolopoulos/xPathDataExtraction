// DATE
//Userful when the expiring date is in the footer, along with currency information
function transform(data) {
  //---PHASE 1---
  //Regular expression strings and array with all string scenarios
  var regEx1 = new RegExp("valid\\sthrough:?\\s"); //valid through(:)
  var regEx2 = new RegExp("expires:?\\s"); //expires(:)
  var regEx3 = new RegExp("until:?\\s"); //until(:)
  var regEx4 = new RegExp("offer\\sends:?\\s"); //offer ends(:)
  var regEx5 = new RegExp("valid\\suntil:?\\s"); //valid until(:)
  var regExArr = [regEx1, regEx2, regEx3, regEx4];

  var dateRegEx = new RegExp("\\d{1,2}[\\/\\.]\\d{1,2}([\\/\\.]\\d{2,4})?"); // (N)N/(N)N/(NNNN)
  var flags = "i"; //Can be i, gi, g



  //---PHASE 2---
  //Create the new Array -> expirTextArr. Push all the regular expressions inside
  var expirTextArr = [];
  for (var i = 0; i < regExArr.length; i++) {
    expirTextArr.push(new RegExp (regExArr[i].source + dateRegEx.source, flags));
  }



  //---PHASE 3---
  //String where the extracted (N)N/(N)N/(NNNN) is added. Then the string is split to an array.
  var finalStrArr = "";
  //loop through all the regular expressions inside the expirTextArr to see if there is a match
  //If there is a match, then add the (N)N/(N)N/(NNNN) in finalStrArr and split it.
  for (var j = 0; j < expirTextArr.length; j++) {
   var el = expirTextArr[i];

   if (data.match(el)) {
     finalStrArr= data.match(el)[0].replace(/[A-Za-z]/g,"").trim().split("/");
     break;
   }
  }


  //---PHASE 4---
  //If $ is in the "data" string, then make mm/yy/yyyy. If € or £ then twist the order of the array elements
  if (data.match(/\$/)) return new Date(finalStrArr[0] + "/" + finalStrArr[1] + "/" + finalStrArr[2] || "1970");
  if (data.match(/[£€]/)) return new Date(finalStrArr[1] + "/" + finalStrArr[0] + "/" + finalStrArr[2] || "1970");
  return "";
}

//Same like above but with no currency information. Just pulls the valid through mm/dd/yyyy
function transform(data) {
  if (!data) return "";
  //---PHASE 1---
  //Regular expression strings and array with all string scenarios
  var regEx1 = new RegExp("valid\\sthrough:?\\s"); //valid through(:)
  var regEx2 = new RegExp("expires:?\\s"); //expires(:)
  var regEx3 = new RegExp("until:?\\s"); //until(:)
  var regEx4 = new RegExp("offer\\sends:?\\s"); //offer ends(:)
  var regEx5 = new RegExp("valid\\suntil:?\\s"); //valid until(:)
  var regEx6 = new RegExp("\\.\\sEnds:?\\s"); //. Ends(:)
  var regExArr = [regEx1, regEx2, regEx3, regEx4, regEx5, regEx6];

  var dateRegEx = new RegExp("\\d{1,2}[\\/\\.]\\d{1,2}([\\/\\.]\\d{2,4})?"); // (N)N/(N)N/(NNNN)
  var flags = "i"; //Can be i, gi, g



  //---PHASE 2---
  //Create the new Array -> expirTextArr. Push all the regular expressions inside
  var expirTextArr = [];
  for (var i = 0; i < regExArr.length; i++) {
    expirTextArr.push(new RegExp (regExArr[i].source + dateRegEx.source, flags));
  }



  //---PHASE 3---
  //String where the extracted (N)N/(N)N/(NNNN) is added. Then the string is split to an array.
  var finalStrArr = "";
  //loop through all the regular expressions inside the expirTextArr to see if there is a match
  //If there is a match, then add the (N)N/(N)N/(NNNN) in finalStrArr and split it.
  for (var k = 0; k < expirTextArr.length; k++) {
   var el = expirTextArr[k];

   if (data.match(el)) {
    finalStrArr= data.match(el)[0].replace(/[\.A-Za-z]/g,"").trim().split("/");
     break;
   }
  }

  if (finalStrArr.length === 0) return null;
  if (!finalStrArr[2]) finalStrArr[2] = "1970";

  //---PHASE 4---
  //Return a concatenation (this can be expanded based on other information like currency data)
  return new Date(finalStrArr[0] + "/" + finalStrArr[1] + "/" + finalStrArr[2]);
}

// Useful when month is written in full
function transform(data) {
	if(!data) return "";
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	for (var i = 0; i < months.length; i++) {
		if (data.indexOf(months[i]) !== -1) return data.slice(data.indexOf(months[i])).match(/[A-z]+\s\d{1,2}\s?(-?\s?\d{1,2})?,?(\s\d{4})?/i)[0].replace(/\d{1,2}\s?-/, "") + " 1970";
	}
}

//Useful when month is written in the format "Jan", "Feb"...
function transform(data) {
	if(!data) return "";
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	for (var i = 0; i < months.length; i++) {
		if (data.indexOf(months[i]) !== -1) return data.slice(data.indexOf(months[i]), data.length-1);
	}
}

// Useful when different types of formats and days are included
function transform(data) {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var months2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


  // For the format "Oct. 10"
	for (var i = 0; i < months.length; i++) {
		if (data.indexOf(months[i]+".") !== -1)
    return data.slice(data.indexOf(months[i]), data.length-1).replace(/([A-Z][a-z]{2}\.\s\d{1,2}).*/, "$1").replace(/\./,"");
	}



  // For the format "October 10"
  for (var j = 0; j < months2.length; j++) {
    if (data.indexOf(months2[j]) !== -1)
    return data.slice(data.indexOf(months2[j]), data.length-1);
  }



  // For the format "10.12, Friday"
  for (var k = 0; k < days.length; k++) {
    if (data.match(/\d{1,2}\.\d{1,2},\s/.source + RegExp(days[k]).source))
    return data.match(/\d{1,2}\.\d{1,2}/)[0].replace(/\./,"/") + "/1970";
  }


  //For Veterans Day Sale
  if (data.match(/Veterans\sDay/)) return "11/11/1970";

  return "";
}

// Useful when there is a match of coupon with footer (.match)
function transform(data){
  //Define array of strings that are possibly both in the coupon and the footer of the email
  var stringArr = [
    /%/,
    /free/gi,
    /gratuits/gi, //French: Free
    /Kostenloser/gi, //German: Free
    /gratuita/gi, //Spanish: Free
    /gratis/gi, //Italian, Dutch, Corsican: Free
    /GRÁTIS/gi, //Portuguese: Free
    /ingyenes/gi, //Hungarian: Free
    /gratuită/gi, //Romanian: Free
    /Бесплатная/gi, //Russian: Free
    /Δωρεάν/gi, //Greek: Free
    /БЕЗПЛАТНА/gi, //Bulgarian: Free
    /zdarma/gi, //Czech: Free
    /ZADARMO/gi, //Slovak: Free
    /Bezpłatna/gi, //Polish: Free
    /ÜCRETSİZ/gi //Turkish: Free
  ];



  //Iterate through the array. If the string is included twice in the concatenated text
  //then see if there are any date formats
  for (var i = 0; i < stringArr.length; i++) {
    var el = stringArr[i];
    if (data.match(el) !== null && data.match(el).length >= 2) {


      //MM/DD/YYYY
      if (data.match(/([\d]{1,2}\/){2}\d{2,4}/)) return data.match(/([\d]{1,2}\/){2}\d{2,4}/)[0];



      //YYYY/MM/DD
        if(data.match(/\d{4}(\.[\d]{1,2}){2}/)){
          data = data.match(/\d{4}(\.[\d]{1,2}){2}/)[0].split(".");
          return data[1] + "/" + data[2] + "/" + data[0];
        }



      //YYYY/MM/DD - Japanese
      if(data.match(/\d{4}年\d{1,2}月\d{1,2}/)){
          data = data.match(/\\d{4}年\d{1,2}月\d{1,2}/)[0].replace(/[年月]/g,".").split(".");
          return data[1] + "/" + data[2] + "/" + data[0];
        }



      //DD.MM.YYYY
      if (data.match(/([\d]{1,2}\.){2}\d{2,4}/)){
        data = data.match(/([\d]{1,2}\.){2}\d{2,4}/)[0].split(".");
      return data[1] + "/" + data[0] + "/" + data[2];
      }

    } //End of top if statement
  } //End of for loop

  return "";
}

// Useful when there is a match of coupon with footer (.indexOf, .lastIndexOf)
function transform(data){
  //Define array of strings that are possibly both in the coupon and the footer of the email
  var stringArr = [
    "%",
    "free",
    "gratuits", //French: Free
    "Kostenloser", //German: Free
    "gratuita", //Spanish: Free
    "gratis", //Italian, Dutch, Corsican: Free
    "GRÁTIS", //Portuguese: Free
    "ingyenes", //Hungarian: Free
    "gratuită", //Romanian: Free
    "Бесплатная", //Russian: Free
    "Δωρεάν", //Greek: Free
    "БЕЗПЛАТНА", //Bulgarian: Free
    "zdarma", //Czech: Free
    "ZADARMO", //Slovak: Free
    "Bezpłatna", //Polish: Free
    "ÜCRETSİZ" //Turkish: Free
  ];



  //Iterate through the array. If the string is included twice in the concatenated text
  //then see if there are any date formats
  for (var i = 0; i < stringArr.length; i++) {
    var el = stringArr[i];
    if (data.toLowerCase().indexOf(el.toLowerCase()) !== data.toLowerCase().lastIndexOf(el.toLowerCase())) {


      //MM/DD/YYYY
      if (data.match(/([\d]{1,2}\/){2}\d{2,4}/)) return data.match(/([\d]{1,2}\/){2}\d{2,4}/)[0];



      //YYYY/MM/DD
        if(data.match(/\d{4}(\.[\d]{1,2}){2}/)){
          data = data.match(/\d{4}(\.[\d]{1,2}){2}/)[0].split(".");
          return data[1] + "/" + data[2] + "/" + data[0];
        }



      //YYYY/MM/DD - Japanese
      if(data.match(/\d{4}年\d{1,2}月\d{1,2}/)){
          data = data.match(/\\d{4}年\d{1,2}月\d{1,2}/)[0].replace(/[年月]/g,".").split(".");
          return data[1] + "/" + data[2] + "/" + data[0];
        }



      //DD.MM.YYYY
      if (data.match(/([\d]{1,2}\.){2}\d{2,4}/)){
        data = data.match(/([\d]{1,2}\.){2}\d{2,4}/)[0].split(".");
      return data[1] + "/" + data[0] + "/" + data[2];
      }

    } //End of top if statement
  } //End of for loop

  return "";
}

//When keywords in the description are matched with keywords in the VT in footer (.match)
function transform(data){
  //Define array of strings that are possibly both in the coupon and the footer of the email
    var stringArr = [
      /%/g,
      /free/gi,
      /gratuits/gi, //French: Free
      /Kostenloser/gi, //German: Free
      /gratuita/gi, //Spanish: Free
      /gratis/gi, //Italian, Dutch, Corsican: Free
      /GRÁTIS/gi, //Portuguese: Free
      /ingyenes/gi, //Hungarian: Free
      /gratuită/gi, //Romanian: Free
      /Бесплатная/gi, //Russian: Free
      /Δωρεάν/gi, //Greek: Free
      /БЕЗПЛАТНА/gi, //Bulgarian: Free
      /zdarma/gi, //Czech: Free
      /ZADARMO/gi, //Slovak: Free
      /Bezpłatna/gi, //Polish: Free
      /ÜCRETSİZ/gi, //Turkish: Free
      /مجاناً/gi, //Arabic: Free
      /BEZPŁATNA/gi, //Polish: Free
      /折优惠/gi, //Chinese: Discount (% off)
      /\d{1,2}折/gi //Chinese: Num off
    ];



    //Iterate through the array. If the string is included twice in the concatenated text
    //then see if there are any date formats
    for (var i = 0; i < stringArr.length; i++) {
      var el = stringArr[i];

      if (data.match(el) !== null && data.match(el).length >= 2) {


        //MM/DD/YYYY
        if (data.match(/([\d]{1,2}\/){2}\d{2,4}/)) return data.match(/([\d]{1,2}\/){2}\d{2,4}/)[0];



        //YYYY/MM/DD
          if(data.match(/\d{4}(\.[\d]{1,2}){2}/)){
            data = data.match(/\d{4}(\.[\d]{1,2}){2}/)[0].split(".");
            return data[1] + "/" + data[2] + "/" + data[0];
          }




        //YYYY/MM/DD - Chinese
        if(data.match(/\d{4}年\d{1,2}月\d{1,2}/)){
            data = data.match(/\d{4}年\d{1,2}月\d{1,2}/)[0].replace(/[年月]/g,".").split(".");
            return data[1] + "/" + data[2] + "/" + data[0];
          }



        //DD.MM.YYYY
        if (data.match(/([\d]{1,2}\.){2}\d{2,4}/)){
          data = data.match(/([\d]{1,2}\.){2}\d{2,4}/)[0].split(".");
        return data[1] + "/" + data[0] + "/" + data[2];
        }

      } //End of top if statement
    } //End of for loop



  return "";
}

//When keywords in the description are matched with keywords in the VT in footer (.indexOf / .match)
function transform(data){
//Define array of strings that are possibly both in the coupon and the footer of the email
  var stringArr = [
    "%",
    "free",
    "gratuits", //French: Free
    "Kostenloser", //German: Free
    "gratuita", //Spanish: Free
    "gratis", //Italian, Dutch, Corsican: Free
    "GRÁTIS", //Portuguese: Free
    "ingyenes", //Hungarian: Free
    "gratuită", //Romanian: Free
    "Бесплатная", //Russian: Free
    "Δωρεάν", //Greek: Free
    "БЕЗПЛАТНА", //Bulgarian: Free
    "zdarma", //Czech: Free
    "ZADARMO", //Slovak: Free
    "Bezpłatna", //Polish: Free
    "ÜCRETSİZ", //Turkish: Free
    "مجاناً", //Arabic: Free
    "BEZPŁATNA", //Polish: Free
    "折优惠", //Chinese: Discount (% off)
    "折" //Chinese: off
  ];



  //Iterate through the array. If the string is included twice in the concatenated text
  //then see if there are any date formats
  for (var i = 0; i < stringArr.length; i++) {
    var el = stringArr[i];
    if (data.toLowerCase().indexOf(el.toLowerCase()) !== data.toLowerCase().lastIndexOf(el.toLowerCase())) {


      //MM/DD/YYYY
      if (data.match(/([\d]{1,2}\/){2}\d{2,4}/)) return data.match(/([\d]{1,2}\/){2}\d{2,4}/)[0];



      //YYYY/MM/DD
        if(data.match(/\d{4}(\.[\d]{1,2}){2}/)){
          data = data.match(/\d{4}(\.[\d]{1,2}){2}/)[0].split(".");
          return data[1] + "/" + data[2] + "/" + data[0];
        }



      //YYYY/MM/DD - Japanese
      if(data.match(/\d{4}年\d{1,2}月\d{1,2}/)){
          data = data.match(/\\d{4}年\d{1,2}月\d{1,2}/)[0].replace(/[年月]/g,".").split(".");
          return data[1] + "/" + data[2] + "/" + data[0];
        }



      //DD.MM.YYYY
      if (data.match(/([\d]{1,2}\.){2}\d{2,4}/)){
        data = data.match(/([\d]{1,2}\.){2}\d{2,4}/)[0].split(".");
      return data[1] + "/" + data[0] + "/" + data[2];
      }

    } //End of top if statement
  } //End of for loop



return "";
}

//When keywords in the description are matched with keywords in the VT in footer (.search / .exec)
function transform(data){
//Define array of strings that are possibly both in the coupon and the footer of the email
  var stringArr = [
    /%/,
    /free/gi,
    /gratuits/gi, //French: Free
    /Kostenloser/gi, //German: Free
    /gratuita/gi, //Spanish: Free
    /gratis/gi, //Italian, Dutch, Corsican: Free
    /GRÁTIS/gi, //Portuguese: Free
    /ingyenes/gi, //Hungarian: Free
    /gratuită/gi, //Romanian: Free
    /Бесплатная/gi, //Russian: Free
    /Δωρεάν/gi, //Greek: Free
    /БЕЗПЛАТНА/gi, //Bulgarian: Free
    /zdarma/gi, //Czech: Free
    /ZADARMO/gi, //Slovak: Free
    /Bezpłatna/gi, //Polish: Free
    /ÜCRETSİZ/gi, //Turkish: Free
    /مجاناً/gi, //Arabic: Free
    /折优惠/gi //Chinese: Discount (% off)
  ];



  //Iterate through the array. If the string is included twice in the concatenated text
  //then see if there are any date formats
  for (var i = 0; i < stringArr.length; i++) {
    var el = stringArr[i];
    if (data.search(el) !== -1) {
      var mmddyyyy = /([\d]{1,2}\/){2}\d{2,4}/; //MM/DD/YYYY
      var yyyymmdd = /\d{4}(\.[\d]{1,2}){2}/; //YYYY/MM/DD
      var yyyymmddChn = /\d{4}年\d{1,2}月\d{1,2}/; //YYYY/MM/DD - Chinese
      var ddmmyyyy = /([\d]{1,2}\.){2}\d{2,4}/; //DD.MM.YYYY


      //MM/DD/YYYY
      if (mmddyyyy.exec(data)) return mmddyyyy.exec(data)[0];



      //YYYY/MM/DD
        if(yyyymmdd.exec(data)){
          data = yyyymmdd.exec(data)[0].split(".");
          return data[1] + "/" + data[2] + "/" + data[0];
        }




      //YYYY/MM/DD - Chinese
      if(yyyymmddChn.exec(data)){
          data = yyyymmddChn.exec(data)[0].replace(/[年月]/g,".").split(".");
          return data[1] + "/" + data[2] + "/" + data[0];
        }



      //DD.MM.YYYY
      if (ddmmyyyy.exec(data)){
        data = ddmmyyyy.exec(data)[0].split(".");
      return data[1] + "/" + data[0] + "/" + data[2];
      }

    } //End of top if statement
  } //End of for loop



return "";
}

//When the footer reads "num of days from" - Pulling based on the sent date from header
function transform(data,node,headers){
  if(/\d+\s+days\s+from/.exec(data)) {
    var numOfDays = Number(/\d+\s+days\s+from/.exec(data)[0].replace(/[^0-9]/g, ""));
    var n = headers.get("Date");
    var n1 = new Date(n * 1000);
    var day1 = n1.getDate() + numOfDays;
    var mon1 = n1.getMonth();
    var vt = new Date("1970", mon1, day1);
    return vt;
  }
  return "";
}

//When the footer reads "now through Tuesday" - Pulling based on the sent date from header
function transform(data,node,headers){
  var offerEnds = /offer\sends\s((\d{1,2}\/){2}([\d]{2,4})?)/i;
  if (data.indexOf("†") !== data.lastIndexOf("†") && data.indexOf("†") !== -1) {
    return offerEnds.exec(data)[0].replace(offerEnds, "$1");
  }



  var todayToDay = /PM\sCT\sTODAY\s-\s\d{1,2}\sCT\s(.*)\s\|/;
  if(todayToDay.exec(data)) {
    var daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var emailDate = new Date(headers.Date * 1000);
    var emailDay = emailDate.getDay();
    var expirDay = daysOfWeek.indexOf(todayToDay.exec(data)[0].replace(todayToDay, "$1").toLowerCase());
    var addedDays = expirDay > emailDay ? expirDay - emailDay : expirDay < emailDay ? expirDay + 7 - emailDay : 0;

    var finalDay = emailDate.getDate() + addedDays;
    var month = emailDate.getMonth();

    return new Date("1970", month, finalDay);
  }
  return "";
}

//*******When the months are stated. BETTER function structure for all other date formats*******
function transform(data){
  var dateFormats = {
    fromTo: /from (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]{0,}\s\d{1,2}(st|nd|rd|th)?\sto\s((Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]{0,}\s\d{1,2}(st|nd|rd|th)?,?\s\d{4})/, // from mon(th) (n)n(st|nd|rd|th) to mon(th) (n)n(st|nd|rd|th), yyyy
    mmddyyyy: /([\d]{1,2}\/){2}\d{2,4}/, //MM/DD/YYYY
    yyyymmdd: /\d{4}(\.[\d]{1,2}){2}/, //YYYY/MM/DD
    yyyymmddChn: /\d{4}年\d{1,2}月\d{1,2}/, //YYYY/MM/DD - Chinese
    ddmmyyyy: /([\d]{1,2}\.){2}\d{2,4}/ //DD.MM.YYYY
  };


  for(var key in dateFormats){
    if (dateFormats[key].exec(data)) {

      //fromto
      if (key === "fromTo") return new Date(dateFormats[key].exec(data)[0].replace(dateFormats[key], "$3"));



      //mmddyyyy
      if (key === "mmddyyyy") return dateFormats[key].exec(data)[0];




      //yyyymmdd - yyyymmddChn - ddmmyyyy
      if(key === "yyyymmdd" || key === "yyyymmddChn" || key === "ddmmyyyy") {
        data = dateFormats[key].exec(data)[0].replace(/[年月]/g,".").split(".");
        return key === "ddmmyyyy" ? data[1] + "/" + data[0] + "/" + data[2] : data[1] + "/" + data[2] + "/" + data[0];
      }


    } //End of parent if statement
  } //End of for loop

return "";
}

//Concatenation of top description with VT footer
function transform(data) {
  var stringRegex = /offer\sends\s((\d{1,2}\/){2}([\d]{2,4})?)/i;
  if (data.indexOf("†") !== data.lastIndexOf("†") && data.indexOf("†") !== -1) {
    return stringRegex.exec(data)[0].replace(stringRegex, "$1");
  }

  return "";
}



//PAYMENT STATUS - INVOICES
function transform(data) {
  data = data.toLowerCase();

  var textMatchObj = {
    'keyword1': 'PaymentDue',
    'keyword2': 'PaymentPastDue',
    'keyword3': 'PaymentComplete',
    'keyword4': 'PaymentDeclined',
    'keyword5': 'PaymentAutomaticallyApplied',
    'keyword6': 'PaymentScheduled'
  };

  for(var key in textMatchObj){
    if(data.trim().indexOf(key) !== -1) return textMatchObj[key];
  }
  return "";
}




// SPECIAL CHARACTERS
//List of unicode characters: https://en.wikipedia.org/wiki/List_of_Unicode_characters
function transform(data) {
  data = data.replace(/[\*©®ǂ†±→§™¹>❯]/g, "");
  return data || "";
}




//REGEX $OFF
// For linkbased when ignoring casing, put this at the front:
function transform(data){

  var posRegexArr = [
    // 10% off | 10% (in )savings | 10% discount | 10% (cash)back | 10% reward | 10% gift | 10% value | 10% credit | 10% (promotional )coupon | 10% (mail-in )rebate
    // $10 off | $10 (in )savings | $10 discount | $10 (cash)back | $10 reward | $10 gift | $10 value | $10 credit | $10 (promotional )coupon | $10 (mail-in )rebate
    /(\d{1,2}%|\$\d+)\s*(off|(in )?savings|discount|(cash(\s*)?)?back|reward|gift|value|credit|(promotional\s*)?coupon|(mail-in\s*)?rebate)/i,
    // (extra | up to | save | over | more than | discount of | discounted by | savings of | at least | gift of | down to | as low as | bonus of) (10% | $10)
    /(extra|up\s*to|sav(e|ings\s*of)|over|more\s*than|discount(ed)?\s*(of|by)|at\s*least|gift\s*of|down\s*to|as\s*low\s*as|bonus of)\s*(\d{1,2}%|\$\d+(\.\d{2})?)/i,
    //free ship | free on orders of
    /free\s*(ship|on\s*orders\s*of)/i,
    // buy one / two / three, get
    /buy\s*(one|two|three|\d+),?\sget/i,
    // bogo
    /bogo/i,
    // 100 points | earn points | get points | gather points | collect points | your points | redeem points
    // 1000 rewards | earn rewards | get rewards | gather rewards | collect rewards | your rewards | redeem rewards
    // 1000 gift | earn gift | get gift | gather gift | collect gift | your gift | redeem gift
    // 1000 coupon | earn coupon | get coupon | gather coupon | collect coupon | your coupon | redeem coupon
    /(\d+|earn|get|gather|collect|your|redeem)\s*(points|rewards?|gift|coupon)/i,
    //promo(tion) code
    /promo(?:tion)\s*code\s*/i,
    //January|February|March|April|May|June|July|August|September|October|November|December
    /January|February|March|April|May|June|July|August|September|October|November|December/,
    //Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday
    /Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday/

  ];


  //Free
  var free = /[Ff][Rr][Ee]{2}/;
  var freeShipping = /free\sshipping/;
  var freeOnOrdersOf = /free\son\sorders\sof\s\$/;
  var buyNumberGetNumberFree = /buy\s(one|two|three|\d),?\sget\s(one|two|three|\d)\s(free|\d{1,2}% off)/;
  var cashback = /cash\s?back/;

  //$
  var dollarOff = /\$\d+(\.\d{1,2})?\s([Oo][Ff]{2})/;
  var saveDollarNum = /save\s((over|more\sthan|up\sto(\san\sextra)?)\s)?\$\d+/;
  var savingsOfDollar = /savings\sof\s\$/;
  var dollarReward = /\$\d{1,3}\sreward/;
  var downToAmmount = /down\sto\s\$\d{1,}(\.\d{2})?/i;
  var dollarValue = /\(\?$\d{1,4}\svalue\)?/; //Parenthesis included in this
  var dollarDiscount = /\$\d+(\.\d{2})?\sdiscount/;
  var discountOfDollar = /discount\sof\s\$\d+(\.\d{2})?/;
  var asLowAsDollar = /as\slow\sas\$/;
  var dollarcredit = /\$\d+\scredit/;

  //%
  var percentOff = /%\s([Oo][Ff]{2})/;
  var percentSavings = /%\ssavings/;
  var extraNumberPercent = /extra\s\d{1,2}%/;
  var upTpNumPercent = /up\sto\s\d{1,2}%/i;
  var saveNumPercent = /save\s((over|more\sthan|up\sto)\s)?\d{1,2}%/;
  var discountOfPercent = /discount\sof\s\d+%/;
  var percentDiscount = /\d+%\sdiscount/;
  var discountedByDollarPercent = /discounted\sby\s\$?\d{1,2}%?/;
  var percentSavings = /%\ssavings/;

  //Points
  var numberPoints = /\d+\s?[Pp][Oo][Ii][Nn][Tt][Ss]/;
  var earnNumberPoints = /earn\s\d+\spoints/;

  //Coupon
  var couponColon = /coupon:/i;
  var couponCodeColon = /coupon\scode:/i;

  var urlCouponRoot = /https?:\/\/(www\.)?/; //plus the url extension PLUS .*
}


//ADD IN THE COUPON ROOT TO FILTER OUT EMAILS WHERE YOU DON'T WANT THE TITLE
//(THAT IS WHEN YOU ARE USING __METADATA.Subject IN THE DESCRIPTION)
function transform(data){
 var n=data.get("http://schema.org/description")[0];
   return n ? data : "";
}




//REMOVE OR CLEAN COUPONS WITH CRAPPY TEXT AT LINKBASE
function transform(data) {
  if(!data) return null;


  var replaceStrings = [
    {oldStr:/[\*©®ǂ‡†±→§™¹›]/g, newStr: ""},
    {oldStr: /[&#42;]/, newStr: ""}



    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
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

  replaceStrings.forEach(function(el) {
    data = data.replace(el.oldStr, el.newStr);
  });

 return data.trim();
}




// REMOVE PII
function transform(data) {
  var n=data.get("_footer");
  n = n.toString().replace(/[A-z0-9.%+-_]{2,64}\@[A-z0-9.]{2,64}/g,'');
  return {'_footer': [n]};
}
//BETTER - WHEN RAW VALID THROUGH IS INCLUDED
function transform(data) {
  var ftr = data.get("_footer")[0].replace(/[A-z0-9.%+-_]{2,64}\@[A-z0-9.]{2,64}/g,'');
  var rvt = data.get("_raw_validThrough")[0];

  return {
    '_footer': [ftr],
    '_raw_validThrough': [rvt]
  };
}




//Function for cleaning up CartWheel or other unwanted images based on the url extension
function transform(data) {
   if (Util.getSchemaAttributeFirstValue(data, "http://schema.org/url").match(/INSERTTEXT/)) return null;

    return data;
}




// PRICE CURRENCY
function transform(data){
  var currencies = [
    {code: 'USD', symbol: '$'}, //United States Dollar
    {code: 'EUR', symbol: '€'}, //European Union Euro
    {code: 'GBP', symbol: '£'}, //United Kingdom Pound
    {code: 'ALL', symbol: 'Lek'}, //Albania Lek
    {code: 'AFN', symbol: '؋'}, //Afghanistan Afghani
    {code: 'ARS', symbol: 'AR$'}, //Argentina Peso
    {code: 'AWG', symbol: 'ƒ'}, //Aruba Guilder
    {code: 'AUD', symbol: 'A$'}, //Australia Dollar
    {code: 'AZN', symbol: '₼'}, //Azerbaijan Manat
    {code: 'BSD', symbol: 'B$'}, //Bahamas Dollar
    {code: 'BBD', symbol: 'Bds$'}, //Barbados Dollar
    {code: 'BYN', symbol: 'Br'}, //Belarus Ruble
    {code: 'BZD', symbol: 'BZ$'}, //Belize Dollar
    {code: 'BMD', symbol: 'BD$'}, //Bermuda Dollar
    {code: 'BOB', symbol: '$b'}, //Bolivia Bolíviano
    {code: 'BAM', symbol: 'KM'}, //Bosnia and Herzegovina Convertible Marka
    {code: 'BWP', symbol: 'P'}, //Botswana Pula
    {code: 'BGN', symbol: 'лв'}, //Bulgaria Lev
    {code: 'BRL', symbol: 'R$'}, //Brazil Real
    {code: 'BND', symbol: 'B$'}, //Brunei Darussalam Dollar
    {code: 'KHR', symbol: '៛'}, //Cambodia Riel
    {code: 'CAD', symbol: 'Can$'}, //Canada Dollar
    {code: 'KYD', symbol: 'CI$'}, //Cayman Islands Dollar
    {code: 'CLP', symbol: 'CLP$'}, //Chile Peso
    {code: 'CNY', symbol: 'CN¥'}, //China Yuan Renminbi
    {code: 'COP', symbol: 'COL$'}, //Colombia Peso
    {code: 'CRC', symbol: '₡'}, //Costa Rica Colon
    {code: 'HRK', symbol: 'kn'}, //Croatia Kuna
    {code: 'CUP', symbol: '₱'}, //Cuba Peso
    {code: 'CZK', symbol: 'Kč'}, //Czech Republic Koruna
    {code: 'DKK', symbol: 'kr'}, //Denmark Krone
    {code: 'DOP', symbol: 'RD$'}, //Dominican Republic Peso
    {code: 'XCD', symbol: 'EC$'}, //East Caribbean Dollar
    {code: 'EGP', symbol: 'E£'}, //Egypt Pound
    {code: 'EGP', symbol: 'ج.م'}, //Egypt Pound
    {code: 'SVC', symbol: '₡'}, //El Salvador Colon
    {code: 'FKP', symbol: 'FK£'}, //Falkland Islands (Malvinas) Pound
    {code: 'FJD', symbol: 'FJ$'}, //Fiji Dollar
    {code: 'GHS', symbol: '¢'}, //Ghana Cedi
    {code: 'GIP', symbol: 'GI£'}, //Gibraltar Pound
    {code: 'GTQ', symbol: 'Q'}, //Guatemala Quetzal
    {code: 'GGP', symbol: '£'}, //Guernsey Pound
    {code: 'GYD', symbol: 'G$'}, //Guyana Dollar (or GY$)
    {code: 'HNL', symbol: 'L'}, //Honduras Lempira
    {code: 'HKD', symbol: 'HK$'}, //Hong Kong Dollar
    {code: 'HUF', symbol: 'Ft'}, //Hungary Forint
    {code: 'ISK', symbol: 'kr'}, //Iceland Krona
    {code: 'INR', symbol: '₹'}, //Indian rupee
    {code: 'IDR', symbol: 'Rp'}, //Indonesia Rupiah
    {code: 'IRR', symbol: '﷼'}, //Iran Rial
    {code: 'IMP', symbol: '£'}, //Isle of Man Pound
    {code: 'ILS', symbol: '₪'}, //Israel Shekel
    {code: 'JMD', symbol: 'J$'}, //Jamaica Dollar
    {code: 'JPY', symbol: '¥'}, //Japan Yen
    {code: 'JEP', symbol: '£'}, //Jersey Pound
    {code: 'KZT', symbol: 'лв'}, //Kazakhstan Tenge
    {code: 'KZT', symbol: '₸'}, //Kazakhstan Tenge
    {code: 'KRW', symbol: '₩'}, //Korea (South) Won
    {code: 'KPW', symbol: '₩'}, //Korea (North) Won
    {code: 'KGS', symbol: 'лв'}, //Kyrgyzstan Som
    {code: 'LAK', symbol: '₭'}, //Laos Kip
    {code: 'LBP', symbol: 'ل.ل.‎'}, //Lebanon Pound
    {code: 'LRD', symbol: 'L$'}, //Liberia Dollar - Also LD$
    {code: 'MKD', symbol: 'ден'}, //Macedonia Denar
    {code: 'MYR', symbol: 'RM'}, //Malaysia Ringgit
    {code: 'MUR', symbol: '₨'}, //Mauritius Rupee
    {code: 'MXN', symbol: 'Mex$'}, //Mexico Peso
    {code: 'MNT', symbol: '₮'}, //Mongolia Tughrik
    {code: 'MZN', symbol: 'MT'}, //Mozambique Metical
    {code: 'NAD', symbol: 'N$'}, //Namibia Dollar
    {code: 'NPR', symbol: '₨'}, //Nepal Rupee
    {code: 'ANG', symbol: 'ƒ'}, //Netherlands Antilles Guilder
    {code: 'NZD', symbol: 'NZ$'}, //New Zealand Dollar
    {code: 'NIO', symbol: 'C$'}, //Nicaragua Cordoba
    {code: 'NGN', symbol: '₦'}, //Nigeria Naira
    {code: 'NOK', symbol: 'kr'}, //Norway Krone
    {code: 'OMR', symbol: '﷼'}, //Oman Rial
    {code: 'PKR', symbol: '₨'}, //Pakistan Rupee
    {code: 'PAB', symbol: 'B/.'}, //Panama Balboa
    {code: 'PYG', symbol: 'Gs'}, //Paraguay Guarani
    {code: 'PEN', symbol: 'S/.'}, //Peru Sol
    {code: 'PHP', symbol: '₱'}, //Philippines Piso
    {code: 'PLN', symbol: 'zł'}, //Poland Zloty
    {code: 'QAR', symbol: '﷼'}, //Qatar Riyal
    {code: 'RON', symbol: 'lei'}, //Romania Leu
    {code: 'RUB', symbol: '₽'}, //Russia Ruble (руб)
    {code: 'RUB', symbol: 'руб'}, //Russia Ruble (руб)
    {code: 'SHP', symbol: '£'}, //Saint Helena Pound
    {code: 'SAR', symbol: '﷼'}, //Saudi Arabia Riyal
    {code: 'RSD', symbol: 'Дин.'}, //Serbia Dinar
    {code: 'SCR', symbol: '₨'}, //Seychelles Rupee
    {code: 'SGD', symbol: 'S$'}, //Singapore Dollar
    {code: 'SBD', symbol: 'SI$'}, //Solomon Islands Dollar
    {code: 'SOS', symbol: 'S'}, //Somalia Shilling
    {code: 'ZAR', symbol: 'R'}, //South Africa Rand
    {code: 'LKR', symbol: '₨'}, //Sri Lanka Rupee
    {code: 'SEK', symbol: 'kr'}, //Sweden Krona
    {code: 'CHF', symbol: 'CHF'}, //Switzerland Franc
    {code: 'SRD', symbol: 'Sr$'}, //Suriname Dollar
    {code: 'SYP', symbol: '£S'}, //Syria Pound
    {code: 'SYP', symbol: 'LS'}, //Syria Pound
    {code: 'TWD', symbol: 'NT$'}, //Taiwan New Dollar
    {code: 'THB', symbol: '฿'}, //Thailand Baht
    {code: 'TTD', symbol: 'TT$'}, //Trinidad and Tobago Dollar
    {code: 'TRY', symbol: '₺'}, //Turkish Lira
    {code: 'TVD', symbol: '$'}, //Tuvalu Dollar
    {code: 'AED', symbol: '.إ'}, //United Arab Emirates dirham (د.إ;)
    {code: 'UAH', symbol: '₴'}, //Ukraine Hryvnia
    {code: 'UYU', symbol: '$U'}, //Uruguay Peso
    {code: 'UGX', symbol: 'Ush'}, //Ugandan shilling - might also be 'USh' as per wikipedia
    {code: 'UZS', symbol: 'лв'}, //Uzbekistan Som
    {code: 'VEF', symbol: 'Bs'}, //Venezuela Bolívar
    {code: 'VND', symbol: '₫'}, //Viet Nam Dong
    {code: 'YER', symbol: '﷼'}, //Yemen Rial
    {code: 'ZWD', symbol: 'Z$'}, //Zimbabwe Dollar
  ];

  for (var i = 0; i < currencies.length; i++) {
    if (data.indexOf(currencies[i].symbol) !== -1) return currencies[i].code;
  }

  return "";
}




//REPLACE ARABIC NUMBERS TO WESTERN ONES
function transfrom(data){
  var arabicNumbers = [
    {arabic: /٠/g, western: "0"},
    {arabic: /١/g, western: "1"},
    {arabic: /٢/g, western: "2"},
    {arabic: /٣/g, western: "3"},
    {arabic: /٤/g, western: "4"},
    {arabic: /٥/g, western: "5"},
    {arabic: /٦/g, western: "6"},
    {arabic: /٧/g, western: "7"},
    {arabic: /٨/g, western: "8"},
    {arabic: /٩/g, western: "9"},
  ];

  arabicNumbers.forEach(function(el){
    data = data.replace(el.arabic, el.western);
  });

  return data;
}




//PRESET RULE FOR VALID THROUGH FOR LINKBASED
function transform(data){
  if (data) {
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var regex = /(\s*\d+)\/(\s*\d+)/i;
    var match = regex.exec(data);
    if (match && match[1]) {
      return monthNames[match[1] - 1] + ', ' + match[2];
    }
    else{
      return data;
    }
  }

  return null;
}




//PRESET RULE FOR PAYMENTSTATUS TO PUT IN THE ROOT OF THE INVOICE
function transform (data){
  var status =  Util.getSchemaAttributeFirstValue(data, "http://schema.org/paymentStatus");
  if (status) return data;
  return null;
}





//Minimize the size of the text to 100 characters or less
function minimizeMe(str){

  var replaceArr = [
    {oldStr: /(\d+)(\.)?(\d{2})/g, newStr: "$1~~~$3"},
    {oldStr: /(www)\.([A-z]+)/g, newStr: "$1~~~$2"},
    {oldStr: /(\w)\.(com)/g, newStr: "$1~~~$2"},
    {oldStr: /(11:59 p)\.(m)\./gi, newStr: "$1~~~$2~~~"},
  ];


  replaceArr.forEach(function(el) {
    str = str.replace(el.oldStr, el.newStr);
  });
  str = str.trim();

  if (str.split("").reverse().join("").search(/[\.\?!]/) ) {

  }

  while (str.length > 100 && /[\.\?!]/.test(str[str.length-1]) && str.replace(/[^\.;\??]/g,"").length > 1) {
    str = str.split("").reverse().join("");

    if (str.indexOf("~~~") !== -1 || str.indexOf("%") !== -1 || str.indexOf("$") !== -1) {

      var closestSymbol = +Infinity;
      if (closestSymbol > str.indexOf("%")) closestSymbol = str.indexOf("%");
      if (closestSymbol > str.indexOf("~~~")) closestSymbol = str.indexOf("~~~");
      if (closestSymbol > str.indexOf("$")) closestSymbol = str.indexOf("$");


      if (str.search(/[\.\?!]/) < closestSymbol && str.substring(str.search(/[\.\?!]/) + 1).search(/[\.\?!]/) < closestSymbol && str.substring(str.search(/[\.\?!]/) + 1).search(/[\.\?!]/) !== -1) {
        str = str.slice(str.substring(str.search(/[\.\?!]/) + 1).search(/[\.\?!]/)).split("").reverse().join("");
      }
      else {
        str = str.split("").reverse().join("");
        break;
      }
    }

    else {
      str = str.slice(str.search(/[\.\?!]/)).split("").reverse().join("");
    }
  }

  return str.replace(/~~~/g, ".").replace(/$/g, "$");
}





//Minimize the size of the text (LITE VERSION)
function minimizeMe(str){
  while (str.length > 100 && /[\.\?!]/.test(str[str.length-1]) && str.replace(/[^\.;\??]/g,"").length > 1) {
    str = str.slice(0, str.length-1).split("").reverse().join("");
    str = str.slice(str.search(/[\.\?!]/)).split("").reverse().join("");
  }
  return str;
}

while (data.length > 100 && /[\.\?!]/.test(data[data.length-1]) && data.replace(/[^\.;\??]/g,"").length > 1) {
  data = data.slice(0, data.length-1).split("").reverse().join("");
  data = data.slice(data.search(/[\.\?!]/)).split("").reverse().join("");
}

//Milene's version
function transform(data){
  return data.replace(/(\.)(\d|com)/gi,"~~~$2")
  .match(/[^\.\?\!\:]*(\$\d|free|%)[^\.\?\!\:]*/ig)
  .join(". ")
  .replace(/~~~/g,".");
}



function transform(data){
  return data.replace(/(?<!Dr|www|P\.O)\.(?!com|\d{2}|O\.?\s+Box)/g,"~~~")
  .match(/[^\.\?\!\:]*(\$\d|free|%)[^\.\?\!\:]*/ig)
  .join(". ")
  .replace(/~~~/g,".");
}



var t0 = performance.now();
transform(str7);
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");


while (data.length > 100 && /[\.\?!]/.test(data[data.length-1]) && data.replace(/[^\.;\??]/g,"").length > 1) {
  data = data.slice(0, data.length-1).split("").reverse().join("");
  data = data.slice(str.search(/[\.\?!]/)).split("").reverse().join("");
}





//Different hyphens
"[-–]"






// For GENERIC for the VT dates
.replace(/January\s*(\d{1,2}),?\s*(\d{4})/, "01/$1/$2")
.replace(/February\s*(\d{1,2}),?\s*(\d{4})/, "02/$1/$2")
.replace(/March\s*(\d{1,2}),?\s*(\d{4})/, "03/$1/$2")
.replace(/April\s*(\d{1,2}),?\s*(\d{4})/, "04/$1/$2")
.replace(/May\s*(\d{1,2}),?\s*(\d{4})/, "05/$1/$2")
.replace(/June\s*(\d{1,2}),?\s*(\d{4})/, "06/$1/$2")
.replace(/July\s*(\d{1,2}),?\s*(\d{4})/, "07/$1/$2")
.replace(/August\s*(\d{1,2}),?\s*(\d{4})/, "08/$1/$2")
.replace(/September\s*(\d{1,2}),?\s*(\d{4})/, "09/$1/$2")
.replace(/October\s*(\d{1,2}),?\s*(\d{4})/, "10/$1/$2")
.replace(/November\s*(\d{1,2}),?\s*(\d{4})/, "11/$1/$2")
.replace(/December\s*(\d{1,2}),?\s*(\d{4})/, "12/$1/$2");




//For Linkbased. VT dates. Set already in template but this is the clean version where everything is separated in lines.
function transform(data) {
  if (data) {
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var regex = /(\s*\d+)\/(\s*\d+)/i;
    var match = regex.exec(data);
    if (match && match[1]) {
      return monthNames[match[1] - 1] + ', ' + match[2];
    }
    else {
      return data;
    }
  }
  return null;
}




//Paypal removal of unecessary product description texts
function transform(data) {
  return data.replace(/(cid:|bid:|order\s*id:|Item\s*Number|Item\s*\#|Artikelnr).*/i, "");
}




//Core structure of replaceArr
function transform(data){
  if(!data) return null;

  var replaceArr = [
    //FULL TEXT REMOVAL
    // {oldStr: /.*().*/i, newStr: ""}, // .*Find text in the middle of string.*
    // {oldStr: /^().*/i, newStr: ""}, // ^Find text in the beginning of the string.*
    // {oldStr: /.*()$/i, newStr: ""}, // .*Find text in the end of the string$
    // {oldStr: /^()$/i, newStr: ""}, // ^Find text at the beginning and the end of the string$
    //
    // //PARTIAL TEXT REMOVAL
    // {oldStr: /^()/i, newStr: ""}, // ^Find text at the beginning of the string
    // {oldStr: /()$/i, newStr: ""}, // Find text at the end of the string$
    // {oldStr: /.*()/i, newStr: ""}, // .*Find text in the middle, remove everything before that
    // {oldStr: /().*/i, newStr: ""}, // Find text in the middle, remove everything after that.*
    // {oldStr: /([\*©®ǂ‡†±+→§™¹›∞•◊ΔÐð_|^])/ig, newStr: ""}, // Find text in the middle of the string
  ];

  replaceArr.forEach(function(el){
  	data = data.replace(el.oldStr, el.newStr).trim();
  });

  return data;
}




//FUNCTION FOR THE ROOT XPATH FOR REMOVING COUPONS THAT INCLUDE SPECIFIC TEXT
function transform(data) {
  var n=data.get("http://schema.org/description")[0];
  if(n.match(/View in browser/i)) return null;
  return data;
}

//--------------------------
function transform(data) {
  	if (Util.getSchemaAttributeFirstValue(data, "http://schema.org/url")
    .match(/com\/lib\/fe9a13707564037d72\/m\/26\/2016\_BRUS\_Foot\_07z\_sale|com\/lib\/fe9a13707564037d72\/m\/28\/2016\_BRUS\_mFoot\_02z\_sale\_retina|com\/lib\/fe9a13707564037d72\/m\/37\/2017\_BRUS\_Foot\_text|com\/lib\/fe9a13707564037d72\/m\/26\/2016\_BRUS\_Head\_01z\_BRlogo\_DT|com\/lib\/fe9a13707564037d72\/m\/27\/2016\_BRUS\_Foot\_ShopFactoryStore|com\/lib\/fe9a13707564037d72\/m\/28\/2016\_BRUS\_Foot\_ShopFactoryStore\_m\_r/)) {
        	return null;
  	}

  	return data;
	}
