function transform(data) {
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




var str = "*Save 15% on selected luxury beauty and fragrance. Offer ends 14th February 2019. Subject to availability. Exclusions apply.";

function transform(data){
  if(data){
    var regex = /(\d{1,2}(?:st|nd|rd|th))\s*(January|February|March|April|May|June|July|August|September|October|November|December)\s*(\d{4})/i;
    var months = ["january","february","march","april","may","june","july","august","september","october","november","december"];
    var match = regex.exec(data);
    if (match) return months.indexOf(match[2].toLowerCase()) + 1 + "/" + match[1].replace(/[^\d]/g, "") + "/" + match[3];
  }
  else {
    return data;
  }

  return null;
}
