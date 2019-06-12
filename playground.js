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
    {oldStr: /(Shop\s+now)$/i, newStr: ""}, // Find text at the end of the string$
    // {oldStr: /.*()/i, newStr: ""}, // .*Find text in the middle, remove everything before that
    {oldStr: /(Please\s+contact|(,\s+)?valid\s+from).*/i, newStr: ""}, // Find text in the middle, remove everything after that.*
    {oldStr: /(between\s(?:(?:\d{1,2}\/){2}\d{2,4})\s+and\s+((?:\d{1,2}\/){2}\d{2,4})|†|\*)/gi, newStr: ""}, // Find text in the middle of the string
  ];

  replaceArr.forEach(function(el){
  	data = data.replace(el.oldStr, el.newStr).trim();
  });

  return data;
}
