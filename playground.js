function transform(data) {
  if (data) {
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    for (var i = 0; i < monthNames.length; i++) {
      if(data.endsWith(monthNames[i])) return "1970/" + i+1 + "/" + data.replace(/[A-z\s]/g, "");

    }

    var regex = /(\s*\d+)\/(\s*\d+)/i;
    var match = regex.exec(data);
    if (match && match[1]) {
      return monthNames[match[1] - 1] + ', ' + match[2];}
    else{
      return data;
    }
  }
  return null;
}
