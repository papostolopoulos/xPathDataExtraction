function transform(data) {
  var replaceArr = [
    {oldStr: /^Diamond+/i, newStr:""},
    {oldStr: /(-Shop\s*now\.?|Learn\s*more\.?)/i, newStr: ""}
  ];

  replaceArr.forEach(function(el) {
    data = data.replace(el.oldStr, el.newStr);
  });

  while (data.length > 100 && data.indexOf(".") !== data.lastIndexOf(".")) {
    data = data.slice(0, data.lastIndexOf(".") + 1);
  }

  return data.trim();
}
