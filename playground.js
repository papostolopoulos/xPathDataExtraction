function transform(data){
  if(!data) return null;

  var replaceArr = [
    //FULL TEXT REMOVAL
    {oldStr: /.*(New Winners Each Week).*/i, newStr: ""}, // .*Find text in the middle of string.*
    {oldStr: /^(Use code).*/i, newStr: ""}, // ^Find text in the beginning of the string.*
    // {oldStr: /.*()$/i, newStr: ""}, // .*Find text in the end of the string$
    // {oldStr: /^()$/i, newStr: ""}, // ^Find text at the beginning and the end of the string$
    //
    // //PARTIAL TEXT REMOVAL
    {oldStr: /^(Plus,)/i, newStr: ""}, // ^Find text at the beginning of the string
    // {oldStr: /()$/i, newStr: ""}, // Find text at the end of the string$
    // {oldStr: /.*()/i, newStr: ""}, // .*Find text in the middle, remove everything before that
    {oldStr: /(View Online|until (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)?|use code|See (Site for )?Details|Exclusions Apply).*/i, newStr: ""}, // Find text in the middle, remove everything after that.*
    {oldStr: /(—|\*|\||Limited time only|ends tomorrow|\d+ (Days|Hours) Only)/gi, newStr: ""}, // Find text in the middle of the string
    {oldStr: /([a-z])([A-Z])/g, newStr: "$1 $2"},
  ];

  replaceArr.forEach(function(el){
  	data = data.replace(el.oldStr, el.newStr).trim();
  });

  return data;
}
