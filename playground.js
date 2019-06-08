function transform(data){
  if(!data) return null;

  var replaceArr = [
    //{oldStr: /.*().*/, newStr: ""}, //.*Full text removal.*
    //{oldStr: /^().*/i, newStr: ""}, //^Starts with something specific, ends with something- anything.*
    //{oldStr: /.*()$/i, newStr: ""}, //.*Starts with something-anything, ends with something specific$
    //{oldStr: /^()$/, newStr: ""}, //^Starts with something specific and ends with something specific$
    //{oldStr: /^()/, newStr: ""}, //^Starts with Something specific
    //{oldStr: /.*()/, newStr: ""}, //.*Starts with something - anything
    //{oldStr: /()$/i, newStr: ""}, //Ends with something specific$
    {oldStr: /(Excludes|VALID|Exclusions|IN\s*STORE\s*ONLY|GET\s*COUPON).*/i, newStr: ""}, //Ends with something-anything.*
    //{oldStr: /()/g, newStr: ""}, //somewhere in the middle
  ];

  replaceArr.forEach(function(el){
  	data = data.replace(el.oldStr, el.newStr).trim();
  });

  return data;
}
