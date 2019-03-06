var str1 = "Free Shipping* with a $75 purchase and promo code FREESHIP75~~~*Free standard shipping with purchase offer details: Free standard shipping with a $75 purchase effective now through 1AM EST Wednesday, April 24, 2013. Enter promo code FREESHIP75 at checkout. Valid on any regular or sale price online purchase. $75 minimum purchase required. Excludes Yellow Dot/Black Dot Clearance. Surcharges may apply.Online Only Flash Sale pricing effective 10AM-2PM CST Thursday, April 18, 2013.Bonus Buys available while supplies last. Priced so low, additional discounts do not apply.MOBILE DETAILS: Text OFFERS to 266866. Max 3 msgs/week. Msg & data rates may apply. Text HELP for more info, STOP to opt out. Privacy Policy.Please do not reply to this email, as we are not able to respond to messages sent to this address. You can find answers to your questions or contact us through our FAQ.At Bon-Ton, your right to privacy is important to us, and we will never distribute your personal information without consent. For more information, review our Privacy Policy.Changing your email address? Let us know so you can stay updated with the latest sale information from Bon-Ton. Want to receive emails tailored to your interests? Visit our Preference Center to manage your email preferences. If you no longer wish to receive our email updates, unsubscribe.2801 East Market Street, York, PA 17405 [03508]",
str2 = "FLASH SALE 10AM-2PM CST ONLINE TODAY ONLY Shop now BONUS BUYS 40-75% off Huge savings on select styles from your favorite brands! - Jones New York Sport® - Calvin Klein - Guess - Kenneth Cole® - Easy Spirit® - Skechers® and more! While supplies last. Bonus Buys priced so low, additional discounts do not apply.~~~*Free standard shipping with purchase offer details: Free standard shipping with a $75 purchase effective now through 1AM EST Wednesday, April 24, 2013. Enter promo code FREESHIP75 at checkout. Valid on any regular or sale price online purchase. $75 minimum purchase required. Excludes Yellow Dot/Black Dot Clearance. Surcharges may apply.Online Only Flash Sale pricing effective 10AM-2PM CST Thursday, April 18, 2013.Bonus Buys available while supplies last. Priced so low, additional discounts do not apply.MOBILE DETAILS: Text OFFERS to 266866. Max 3 msgs/week. Msg & data rates may apply. Text HELP for more info, STOP to opt out. Privacy Policy.Please do not reply to this email, as we are not able to respond to messages sent to this address. You can find answers to your questions or contact us through our FAQ.At Bon-Ton, your right to privacy is important to us, and we will never distribute your personal information without consent. For more information, review our Privacy Policy.Changing your email address? Let us know so you can stay updated with the latest sale information from Bon-Ton. Want to receive emails tailored to your interests? Visit our Preference Center to manage your email preferences. If you no longer wish to receive our email updates, unsubscribe.2801 East Market Street, York, PA 17405 [03508]";
​





function transform(data){
  var dataSplit = data.split("~~~");
  var dateStr = "";
  var matchDatesArr = [
    {oldStr: /.*through(?: 1AM EST)? (?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),? ((?:January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}).*/, newStr: "$1"}
  ];

  for(var j = 0; j < matchDatesArr.length; j++){
    if(matchDatesArr[j].oldStr.test(dataSplit[0])) return dataSplit[0].replace(matchDatesArr[j].oldStr, matchDatesArr[j].newStr);
  }



  //If the footer has ***
  if(dataSplit[0].indexOf("***") !== -1){
    dataStr = dataSplit[1].match(/\*\*\*.*/)[0];
    return matchDates(dateStr, matchDatesArr);
  }


  //If the footer has **
  if(dataSplit[0].indexOf("**") !== -1){
    dateStr = dataSplit[1].match(/\*\*.*/)[0];
    return matchDates(dateStr, matchDatesArr);
  }


  //If the footer has *
  if(dataSplit[0].indexOf("*") !== -1){
    dateStr = dataSplit[1].match(/\*.*/)[0];
    return matchDates(dateStr, matchDatesArr);
  }



  return "The first function";
}



function matchDates(returnDate, datesArr){
  for(var i = 0; i < datesArr.length; i++){
    if(datesArr[i].oldStr.test(returnDate)) return returnDate.replace(datesArr[i].oldStr, datesArr[i].newStr);
  }

  return "Did not make it";
}
