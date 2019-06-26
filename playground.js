function transform(data){
  if(!data || /valid/i.test(data)) return null;

  var replaceArr = [
    // {oldStr: /^()/i, newStr: ""}, // ^Find text at the beginning of the string
    // {oldStr: /()$/i, newStr: ""}, // Find text at the end of the string$
    // {oldStr: /.*()/i, newStr: ""}, // .*Find text in the middle, remove everything before that
    // {oldStr: /().*/i, newStr: ""}, // Find text in the middle, remove everything after that.*
    // {oldStr: /()/i, newStr: ""}, // Find text in the middle of the string
    // {oldStr: /(\$\d+\.\d{2})([A-z])/, newStr: "$1 $2"}
  ];

  replaceArr.forEach(function(el){
  	data = data.replace(el.oldStr, el.newStr).trim();
  });

  return data;
}



function transform(data){
  if(data)
    return data.replace(/\!/,"! ").replace(/Wine[A-Z]/,"Wine ").replace(/Free.*/,"| Free").replace(/\w+day.*PM|Questions.*/,"").trim();
  else
    return "";
}
