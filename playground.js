function transform(data,node,headers){
  if(/(today|one day) only|ends at midnight/i.exec(data)) {
    var n = headers.get("Date");
    var n1 = new Date(n * 1000);
    var day1 = n1.getDate();
    var mon1 = n1.getMonth();
    var vt = new Date("1970", mon1, day1);
    return vt;
  }
  return "";
}
