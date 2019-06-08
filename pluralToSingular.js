// source:
// source: http://myenglishgrammar.com/list-1-singular-and-plural-nouns

function pluralToSingular(str){
  var strArr = str.split(" ");
  var finalStr = "";
  strArr.forEach(function(el){
    console.log("element is:", el, "and substring is" ,el.substring(0, el.lastIndexOf("es")));
    //1. In some cases, singular nouns ending in -s or -z, require that you double
    //the -s or -z prior to adding the -es for pluralization.
    if (/.*(ss|zz)es$/.test(el)) finalStr += el.slice(0, el.lastIndexOf("es") - 1) + " ";

    //2. If the singular noun ends in ‑s, -ss, -sh, -ch, -x, or -z, add ‑es to
    //the end to make it plural.
    else if (/.*(s|ss|sh|ch|x|z)es$/i.test(el)) finalStr += el.slice(0, el.lastIndexOf("es")) + " ";

    //3. If the noun ends with ‑f or ‑fe, the f is often changed to ‑ve before
    //adding the -s to form the plural version.
    else if (/.*ves/i.test(el)) finalStr += el.slice(0, el.lastIndexOf("ves")) + "f ";

    //4. If a singular noun ends in ‑y and the letter before the -y is a consonant,
    //change the ending to ‑ies to make the noun plural.
    else if (/.*[^aeiou]ies /i.test(el)) finalStr += el.slice(0, el.lastIndexOf("ies")) + "y ";

    //5. If the singular noun ends in -y and the letter before the -y is a vowel,
    //simply add an -s to make it plural.
    else if (/.*[aeiou]ys/i.test(el)) finalStr += el.slice(0, el.lastIndexOf("s")) + " ";

    //6. If the singular noun ends in ‑o, add ‑es to make it plural.
    else if (/.*oes/i.test(el)) finalStr += el.slice(0, el.lastIndexOf("es")) + " ";

    //7. If the singular noun ends in ‑us, the plural ending is frequently ‑i.
    else if (/.*i/i.test(el)) finalStr += el.slice(0, el.lastIndexOf("i")) + "us ";

    //10. To make regular nouns plural, add ‑s to the end.
    else if (/.*s/i.test(el)) finalStr += el.slice(0, el.lastIndexOf("s")) + " ";

    else finalStr += el + " ";
  });
  // Utilities.sleep(500);
  return finalStr.trim();
}


var str1 = `truss – trusses bus – buses marsh – marshes lunch – lunches tax – taxes blitz – blitzes`;
var str2 = `fez – fezzes gas – gasses`;
var str3 = `wife – wives wolf – wolves Exceptions: roof – roofs belief – beliefs chef – chefs chief – chiefs`;
var str4 = `city – cities puppy – puppies`;
var str5 = `ray – rays boy – boys`;
var str6 = `potato – potatoes tomato – tomatoes Exceptions: photo – photos piano – pianos halo – halos`;
var str7 = `cactus – cacti focus – foci`;
var str10 = `cat – cats house – houses`;

/*
To make regular nouns plural, add ‑s to the end.
cat – cats
house – houses




8 If the singular noun ends in ‑us, the plural ending is frequently ‑i.

cactus – cacti

focus – foci

9 If the singular noun ends in ‑is, the plural ending is ‑es.

analysis – analyses

ellipsis – ellipses

10 If the singular noun ends in ‑on, the plural ending is ‑a.

phenomenon – phenomena

criterion – criteria

11 Some nouns don’t change at all when they’re pluralized.

sheep – sheep

series – series

species – species

deer –deer
*/
