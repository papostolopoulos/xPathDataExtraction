/(\¢|\%|\$\d+(\.\d+)?)\s*(off|gasback|cashback)/i,
/(earn|get|receive|save)\s*([\$\d+]|\d+\¢\/gal)/i,
/(free\s*gas)/i,
/((triple|double)\s*gasback)/i,

/(\¢|\%|\$\d+(\.\d+)?)\s*(off|gasback|cashback)|((earn|get|receive|save)\s*([\$\d+]|\d+\¢\/gal))|(free\s*gas)|((triple|double)\s*gasback)/gi



blacklist: (?i)^Save\s*on\s*Gas$

var str = "Save 5cents/gallon on every fill, every day. Join now and save even more. Once you've become a member, refer your friends and family so they can join the Fuel Rewards® program. Then, the first time a friend uses it at participating Shell stations to save 5¢/gal on their next fill, you will instantly earn 25¢/gal*. There's no limit to how many friends you invite or how many times you earn."

function transform (data){
  if(!data || /[^A-z]void|eligible/.test(data)) return null;

  return data.length > 80 ?
  data.replace(/(\.)(\d)/g,"~~~$2")
  .match(/[^\.!]*((?:\¢|\%|\$\d+(?:\.\d+)?)\s*(?:off|gasback|cashback)|(?:(?:earn|get|receive|save)\s*(?:[\$\d+]|\d+\¢\/gal))|(?:free\s*gas)|(?:(?:triple|double)\s*gasback))[^\.!]*/gi)
  .join(".")
  .replace(/(\~\~\~)(\d)/g,".$2") + "." :
  cleanMe(data);
}

function cleanMe(str) {

  var replaceArr = [
    // {oldStr: /^()/i, newStr: ""}, // ^Find text at the beginning of the string
    {oldStr: /(START EARNING|JOIN FOR FREE|Start getting free gas now:|BUY TICKETS|GET STARTED|EARN NOW|JOIN PREMIUM|JOIN NOW|LEARN MORE|SHOP NOW)$/i, newStr: ""}, // Find text at the end of the string$
    // {oldStr: /.*()/i, newStr: ""}, // .*Find text in the middle, remove everything before that
    {oldStr: /(with Code:).*/i, newStr: ""}, // Find text in the middle, remove everything after that.*
    {oldStr: /([*©®ǂ‡†±+→§>™¹›∞•◊ΔÐð_|^])/ig, newStr: ""}, // Find text in the middle of the string
  ];

  replaceArr.forEach(function(el){
    str = str.replace(el.oldStr, el.newStr).trim();
  });

  return str;
}
