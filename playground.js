function transform(data){
   return data.length > 150 ? data.replace(/(\.)(\d)/g,"~~~$2").match(/[^\.\?\!]*(?:(?:Valid for 20 oz. fountain drink and cameo popcorn)|(?:free\srefill)|(?:collectible)|(?:FREE large popcorn refill)|(?:concession bonus)|(?:good for one free)|(?:FREE ICEE)|(?:on\sdiscount)|(?:only\s\$))[^\.\?\!]*/gi)[0].toString().replace(/(\~\~\~)(\d)/g,".$2").replace(/.*Concession\s*perks/i,"").trim() + ".": data;
}
