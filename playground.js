function transform(data){
  var replaceArr = [
    {oldStr: /\*/g, newStr: ""},
    {oldStr: /(EXP\.|offer\s*expires|Shop\s*now|CODE:).*/ig, newStr: ""},
    {oldStr: /^Ends\s*tonight/i, newStr: ""}

  ];

  replaceArr.forEach(function(el) {
    data = data.replace(el.oldStr, el.newStr);
  });

  return data.trim();
}
