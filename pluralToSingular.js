// source: https://www.grammarly.com/blog/plural-nouns/
// source: http://myenglishgrammar.com/list-1-singular-and-plural-nouns

function pluralToSingular(str){
  var strArr = str.split(" ");
  var finalStr = "";
  strArr.forEach(function(el){
    console.log("element is:", el, "and substring is" ,el.substring(0, el.lastIndexOf("es")));
    // If the singular noun ends in ‑s, -ss, -sh, -ch, -x, or -z, add ‑es to the end to make it plural.
    if (/.*(s|ss|sh|ch|x|z)es$/i.test(el)) finalStr += el.slice(0, el.lastIndexOf("es")) + " ";

    //In some cases, singular nouns ending in -s or -z, require that you double the -s or -z prior to adding the -es for pluralization.
    // else if (/.*(ss|zz)es$/.test(el)
    //   el.endsWith("es") && /.*(s|ss|sh|ch|x|z)$/i.test(el.substring(0, el.lastIndexOf("es")))) {
    //
    // }



    // if(el.indexOf("ies")!==-1){
    //   finalStr += el.slice(0, el.lastIndexOf("ies"));
    //   finalStr += "y ";
    // }
    // else if(el.indexOf("es")!==-1){
    //   finalStr += el.slice(0, el.lastIndexOf("es"));
    //   finalStr += "e ";
    // }
    // else if(el.indexOf("s")!==-1){
    //   finalStr += el.slice(0, el.indexOf(el.length - 2));
    //   finalStr += " ";
    // }
    else finalStr += el + " ";
  });
  // Utilities.sleep(500);
  return finalStr.trim();
}

var str = `truss – trusses bus – buses marsh – marshes lunch – lunches tax – taxes blitz – blitzes`;

/*
To make regular nouns plural, add ‑s to the end.
cat – cats

house – houses


3 In some cases, singular nouns ending in -s or -z, require that you double the -s or -z prior to adding the -es for pluralization.

fez – fezzes

gas –gasses

4 If the noun ends with ‑f or ‑fe, the f is often changed to ‑ve before adding the -s to form the plural version.

wife – wives

wolf – wolves

Exceptions:

roof – roofs

belief – beliefs

chef – chefs

chief – chiefs

5 If a singular noun ends in ‑y and the letter before the -y is a consonant, change the ending to ‑ies to make the noun plural.

city – cities

puppy – puppies

6 If the singular noun ends in -y and the letter before the -y is a vowel, simply add an -s to make it plural.

ray – rays

boy – boys

7 If the singular noun ends in ‑o, add ‑es to make it plural.

potato – potatoes

tomato – tomatoes

Exceptions:

photo – photos

piano – pianos

halo – halos

With the unique word volcano, you can apply the standard pluralization for words that end in -o or not. It’s your choice! Both of the following are correct:

volcanoes

volcanos

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
