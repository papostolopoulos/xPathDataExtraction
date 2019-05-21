function transform(data) {
  if (data) {
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var regex = /(\s*\d+)\/(\s*\d+)/i;
    var match = regex.exec(data);
    if (match && match[1]) {
      return monthNames[match[1] - 1] + ', ' + match[2];
    }
    else if (/.*and.*((January|February|March|April|May|June|July|August|September|October|November|December)\s*\d{1,2},\s*\d{4}),\s*at\s*11:59pm.*/.test(data)) {
      return "10/10/2019";
      data = data.replace(/.*and.*((January|February|March|April|May|June|July|August|September|October|November|December)\s*\d{1,2},\s*\d{4}),\s*at\s*11:59pm.*/, "$1");
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      for (var i = 0; i < months.length; i++) {
        if (data.indexOf(months[i]) !== -1) {
          data = data.replace(/(January|February|March|April|May|June|July|August|September|October|November|December)\s*(\d{1,2}),\s*(\d{4})/, i + 1 + "/$2/$3");
          return data;
        }
      }
    }

  }
  return null;
}

function transform(data) {
  if (/.*((January|February|March|April|May|June|July|August|September|October|November|December)\s*\d{1,2},\s*\d{4}),\s*at\s*11:59pm.*/.test(data)) {
    data = data.replace(/.*((January|February|March|April|May|June|July|August|September|October|November|December)\s*\d{1,2},\s*\d{4}),\s*at\s*11:59pm.*/, "$1");
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return "10/10/2019";
    for (var i = 0; i < months.length; i++) {
      if (data.indexOf(months[i]) !== -1) {
        data = data.replace(/(January|February|March|April|May|June|July|August|September|October|November|December)\s*(\d{1,2}),\s*(\d{4})/, i + 1 + "/$2/$3");
        return data;
      }
    }
  }
  return null;
}

var str = "To qualify for this offer, eGift Cards must be purchased between May 10, 2019, at 12:01am ET and May 12, 2019, at 11:59pm ET (\"Promotion Period\"). This offer is non-transferable and may only be used by the intended recipient. This offer applies only to electronic gift card purchases from Nordstrom.com during the Promotion Period. The promotional card will be sent by July 1, 2019, to the purchaser's email address provided at the time of qualifying purchase. The promotional card will be valid in Nordstrom and Nordstrom Rack stores and online at Nordstrom.com, and EXPIRES AT 11:59PM ET ON JULY 28, 2019. Minimum electronic gift card purchase of $175 USD is required to receive a $20 USD promotional card. Purchases of electronic gift cards from the Nordstrom app are not eligible for this offer. Limit one promotional card per customer. Limit of one promotional card per transaction. Promotional card cannot be reloaded, redeemed for cash (except as required by law) or applied as payment to any account. Promotional card is not valid for purchases of gift cards or previously purchased items. If item purchased with promotional card is returned, promotional card value will be deducted from amounts refunded to original tender. Promotional card may not be purchased, sold, traded or transferred. Void where prohibited.";
