function transform(data){
  var regexArr = [
    // 10% off | 10% (in )savings | 10% discount | 10% (cash)back | 10% reward | 10% gift | 10% value | 10% credit | 10% (promotional )coupon
    // $10 off | $10 (in )savings | $10 discount | $10 (cash)back | $10 reward | $10 gift | $10 value | $10 credit | $10 (promotional )coupon
    /(\d{1,2}%|\$\d+)\s+(off|(in )?savings|discount|(cash)?back|reward|gift|value|credit|(promotional\s+)?coupon)/i,
    // extra 10% | up to 10% | save 10% | over 10% | more than 10% | discount of 10% | discounted by 10% | savings of 10% | at least 10% | gift of 10% | down to 10% | as low as 10%
    // extra $10 | up to $10 | save $10 | over $10 | more than $10 | discount of $10 | discounted by $10 | savings of $10 | at least $10 | gift of $10 | down to $10 | as low as $10
    /(extra|up\s+to|sav(e|ings\s+of)|over|more\s+than|discount(ed)?\s+(of|by)|at\s+least|gift\s+of|down\s+to|as\s+low\s+as)\s+(\d{1,2}%|\$\d+)/i,
    //free ship | free on orders of
    /free\s+(ship|on\s+orders\s+of)/i,
    //buy one / two / three, get one, two. three free
    /buy\s+(one|two|three|\d),?\sget\s+(one|two|three|\d)\s+free/i
  ];
}


//Free

var buyNumberGetNumberFree = /(?i)buy\s(one|two|three|\d),?\sget\s(one|two|three|\d)\s(free|\d{1,2}% off)/;
var cashback = /(?i)cash\s?back/;



//Points
var numberPoints = /\d+\s?[Pp][Oo][Ii][Nn][Tt][Ss]/;
var earnNumberPoints = /(?i)earn\s\d+\spoints/;

//Coupon
var couponColon = /(?i)coupon:/i;
var couponCodeColon = /(?i)coupon\scode:/i;

var offers = /\s+offer[s]?\s+/i;
var promoCode = /promo(?:tion)\s+code\s+/i;
var negPromoCode = /^into\sthe/i;

var redeem = /\sredeem\s/i;
var redeem2 = /\.[^.]*?\sredeem\s/i;

var earnedReward = /\sbody\sworks\sreward/i;

// find index of match and find the last index of the full stop in the preceding string
// and the first index of the full stop in the following string.
