var obj = {};
var test1 =
`{
  name: "simon",
  age: 33,
  hasCar: false,
  hasKids: null,
  favoriteFlavors: ["banana", "strawberry"],
  isUndefined: undefined,
  saysHi: function() {
    return "Hello there " + this.name;
  },
  something: "else"
}`;

var test2 = "{name: \"Mary\", age: 55}"


var test3 =
`{
  name: "simon",
  age: 33,
  hasCar: false,
  hasKids: null,
  favoriteFlavors: ["banana", "strawberry"],
  isUndefined: undefined
}`;

var test4 = `{
  name: "simon",
  age: 33,
  hasCar: false,
  hasKids: null,
  favoriteFlavors: ["banana", "strawberry", function(param1, param2){ if(param1 > param2) return param1; else{return param2;}}],
  isUndefined: undefined,
  saysHi: function() {
    return "Hello there " + this.name;
  },
  something: "else"
}`;
/*
WHEN YOU ARE DONE, YOU NEED TO CHANGE THE obj TO this.obj

*/

/*
1. FIND ALL THE STRING PIECES THAT START WITH "FUNCTION" AND END WITH "}"
CREATE A NEW VARIABLE (functionStrings) - USE .match().
2. CLEAN UP THESE STRINGS FROM ANYTHING NOT NEEDED AT THE FRONT AND BACK OF THE STRINGS
USE .replace() IN ALL THE functionStrings ELEMENTS
3 REPLACE ALL THE FUNCTION STRING PIECES IN THE evalObject WITH SOMETHING THAT READS "a function was here"
4. REPLACE ALL THE DOUBLE QUOTES IN THE functionStrings WITH SINGLE QUOTES
5. REPLACE ALL THE "a function was here" STRINGS WITH THE FUNCTION SCRINGS BY DOING
//A LOOP.
*/

function evalObject(el, obj){
  el = el.trim();
  if (el === "{}") return obj;

  if (!el.startsWith("{") || !el.endsWith("}")) return "error";
  console.log("In eval Object. el is", el, "Need to convert from string to object");

  //Put quotes in the keys of the object so it can pass the JSON.parse
  //Put quotes in all the "undefined" as well
  el = el
  .replace(/([\{,])(\s*)(\w+)(\s*)(:)/g, "$1$2\"$3\"$4$5") //Add quotes at the start and the end of the keys
  .replace(/(:\s+)(undefined)([,\n])/, "$1\"$2\"$3"); //put quotes around all the undefined


  // 1. Create a variable that is pulling out all the functions from the obj.
  // 2. replace unecessary text at the beginning and end of each element.
  // 3. Replace all the double quotes to single quotes and replace all the line breaks
  let functionStrings =
  el
  .match(/(:\s)(function\s*\((?:[^\|°¬\!#\$%/\(\)\?¡¿\+\{\}\[\]:\.\,;@ª^\*<>=\&]*,?\s*)*\)\s*\{[\S\s]+\})(,?\s)/g)
  .map((ele) => ele.slice(ele.indexOf("function"), ele.lastIndexOf("}") + 1))
  .map((elm) => elm.replace(/"/g, "'").replace(/\n/g, ""));
  console.log(functionStrings);

  //Replace all the function strings into "A function goes here"
  el = el.replace(/(:\s)(function\s*\((?:[^\|°¬\!#\$%/\(\)\?¡¿\+\{\}\[\]:\.\,;@ª^\*<>=\&]*,?\s*)*\)\s*\{[\S\s]+\})(,?\s)/g, "$1A function goes here$3");

  //Add all the functions back in the object as -cleaned- string formats
  while (functionStrings.length > 0) {
    el = el.replace(/A function goes here/, '"' + functionStrings.shift() + '"');
  }


  //Parse the string into an object
  obj = JSON.parse(el);

  for(let key in obj){
    if (obj[key] === "undefined") obj[key] = undefined;
    if (/function.*\}/.test(obj[key])) {
      let params = obj[key].slice(obj[key].indexOf("(") + 1, obj[key].indexOf(")")).split(/,\s*/);
      params.push(obj[key].slice(obj[key].indexOf("{") + 1, obj[key].lastIndexOf("}")));

      obj[key] = new Function(...params);
    }

    //What if the string is an array?
  } //End of the for loop
  return obj;
}
