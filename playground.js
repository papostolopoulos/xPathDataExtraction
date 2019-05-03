var str = "That means 50% off handcrafted espresso beverages 😍 | View online",
str2 = "Take 50% off of lattes, mochas and more during Starbucks Happy Hour | View Online"


function transform(data){
  var removeArr = [
    /.*(terms|restrictions|starbucks\.com).*/ig,
    /^(rewards|Share\s*Your\s*Rewards)$/i
  ];

  for(var i = 0; i < removeArr.length; i++){
    if(removeArr[i].test(data)) return null;
  }


  var replaceArr = [
    {oldStr: /^(.*Happy\s*Hour\s*is\s*starting\s*at\s*3\s*p\.m\.|That\s*means|You'll\s*get|that\s*means)/i, newStr: ""},
    {oldStr: /(Order\s*now|View\s*online)\s*$/i, newStr: ""},
    {oldStr: /\*\|/g, newStr: ""},
    {oldStr: /(Display\s*images\s*to\s*show\s*real-time\s*content).*/i, newStr: ""}
  ];

  replaceArr.forEach(function(el){
    data = data.replace(el.oldStr, el.newStr);
  });

  return data;
}
