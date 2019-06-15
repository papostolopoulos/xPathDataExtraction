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
  }
}`;

var test2 = "{name: \"Mary\", age: 55}"
/*
WHEN YOU ARE DONE, YOU NEED TO CHANGE THE sliceArrObj TO this.sliceArrObj
the evalObject( to this.evalObject(
and the obj to this.obj
*/


function evalObject(el){
  el = el.trim();
  if (!el.startsWith("{") || !el.endsWith("}")) return "error";
  console.log("In eval Object. el is", el, "Need to convert from string to object");

  //Put quotes in the keys of the object so it can pass the JSON.parse
  el = el.replace(/([\{,])(\s*)(\w)/g, "$1$2\"$3") //Add quote in start of the key
  .replace(/(\w)(\s*)(:)/g, "$1$2\"$3") //Add quote in end of the key
  .replace(/(undefined)(,\n)/, "\"$1\"$2")
  .replace(/(:\s)(function\\s+[^0-9\\|°¬\\!#\\$%/\\(\\)\\?¡¿\\+\\{\\}\\[\\]:\\.\\,;@ª^\\*<>=\\&]*\\s*\\(([^\\|°¬\\!#\\$%/\\(\\)\\?¡¿\\+\\{\\}\\[\\]:\\.\\,;@ª^\\*<>=\\&]*,?\\s*)+\\)\\s*\\{.*\\}([,\n\r"\w]))/, "$1\"$2\"$3")
  console.log("After the replacements, the string is:", el);
  let parsedEl = JSON.parse(el);
  console.log(parsedEl);
  return parsedEl;
}



function evalObject(objStr, obj) {
  if (objStr === "{}") return obj;
  else {
    if (objStr[0] !== "{" || objStr[objStr.length-1] !== "}"){
      console.log("In the error because the first or the last character of the string do not indicate an object");
      return "error";
    }
    else {
      console.log("In the else of the evalObject. The objStr before the slice:", objStr);
      objStr = objStr.slice(1, objStr.length-1);
      console.log("In the else of the eval array. The objStr after the slice:", objStr);
      let es5FunctionRegEx = "function\\s+[^0-9\\|°¬\\!#\\$%/\\(\\)\\?¡¿\\+\\{\\}\\[\\]:\\.\\,;@ª^\\*<>=\\&]*\\s*\\(([^\\|°¬\\!#\\$%/\\(\\)\\?¡¿\\+\\{\\}\\[\\]:\\.\\,;@ª^\\*<>=\\&]*,?\\s*)+\\)\\s*\\{.*\\}";
      let es6FunctionRegEx = "\\(([^\\|°¬\\!#\\$%/\\(\\)\\?¡¿\\+\\{\\}\\[\\]:\\.\\,;@ª^\\*<>=\\&]*,?\\s*)+\\)\\s*=>\\s*\\{.*\\}";

      //Number
      if(objStr.search(/\d+(\.\d+)?,/) === 0 || objStr.search(/\d+(\.\d+)?\s*$/) === 0) {
        console.log("else if for number");
        obj.push(Number(objStr.match(/\d+(\.\d+)?/)[0]));
        console.log(Number(objStr.match(/\d+(\.\d+)?/)[0]));
        objStr = objStr.slice(objStr.match(/\d+(\.\d+)?/)[0].length + 1);
        // objStr = objStr.slice(objStr.indexOf(",") + 1);
        objStr = objStr.trim();
        console.log("end of else if");
        return evalObject("{" + objStr + "}", obj);
      }

      //true
      else if (objStr.indexOf("true,") === 0 || objStr.search(/true\s*$/) === 0) {
        console.log("else if for true");
        obj.push(true);
        objStr = objStr.slice(5);
        objStr = objStr.trim();
        return evalObject("{" + objStr + "}", obj);
      }

      //false
      else if (objStr.indexOf("false,") === 0 || objStr.search(/false\s*$/) === 0) {
        console.log("else if for false");
        obj.push(false);
        objStr = objStr.slice(6);
        objStr = objStr.trim();
        return evalObject("{" + objStr + "}", obj);
      }

      //null
      else if (objStr.indexOf("null,") === 0 || objStr.search(/null\s*$/) === 0) {
        console.log("else if for null");
        obj.push(null);
        objStr = objStr.slice(5);
        objStr = objStr.trim();
        return evalObject("{" + objStr + "}", obj);
      }

      //Undefined
      else if (objStr.indexOf("undefined,") === 0 || objStr.search(/undefined\s*$/) === 0) {
        console.log("else if for undefined");
        obj.push(undefined);
        objStr = objStr.slice(10);
        objStr = objStr.trim();
        return evalObject("{" + objStr + "}", obj);
      }

      //string
      else if (objStr.search(/["'`]/) === 0) {
        console.log("else if for string");
        let firstQuote = objStr[0];
        if (objStr.indexOf(firstQuote + ",") > 0) {
          obj.push(objStr.substring(1, objStr.indexOf(firstQuote + ",")));
          objStr = objStr.slice(objStr.indexOf(firstQuote + ",") + 2);
          objStr = objStr.trim()
        }
        else if (objStr.lastIndexOf(firstQuote) === objStr.length-1) {
            obj.push(objStr.substring(1, objStr.length-1));
            objStr = "";
        }
        return evalObject("{" + objStr + "}", obj);
      }

      //function es5 es6
      else if (objStr.search(RegExp(es5FunctionRegEx)) === 0 ||  objStr.search(RegExp(es6FunctionRegEx)) === 0) {

        console.log("else if for function");
        let params = objStr.slice(objStr.indexOf("(") + 1, objStr.indexOf(")")).split(/,\s*/);
        console.log("params are", params);
        console.log("objStr is", objStr.match(/function\s+[^0-9\|°¬\!#\$%/\(\)\?¡¿\+\{\}\[\]:.\,;@ª^\*<>=\&]*\s*\(([^\|°¬\!#\$%/\(\)\?¡¿\+\{\}\[\]:\.\,;@ª^\*<>=\&]*,?\s*)+\)\s*\{.*\}/));
        //If there is a function and separated by a comma with other array elements
        if(objStr.search(RegExp(es5FunctionRegEx + ",")) !== -1 ||
        objStr.search(RegExp(es6FunctionRegEx + ",")) !== -1){
          console.log("In if for functions");
          params.push(objStr.slice(objStr.indexOf("{") + 1, objStr.indexOf("}, ")));
          obj.push(new Function(...params));
          objStr = objStr.slice(objStr.indexOf("}, ") + 3).trim();
          console.log("objStr is", objStr);
        }
        //if the function is the last element of the array
        else if ((RegExp(es5FunctionRegEx).test(objStr) && objStr.match(RegExp(es5FunctionRegEx))[0].length === objStr.length) ||
        RegExp(es6FunctionRegEx).test(objStr) && objStr.match(RegExp(es6FunctionRegEx))[0].length === objStr.length) {
          console.log("in else if for functions");
          params.push(objStr.slice(objStr.indexOf("{") + 1, objStr.lastIndexOf("}")));
          obj.push(new Function(...params));
          objStr = "";
          console.log(objStr);
        }
        return evalObject("{" + objStr + "}", obj);
      }

      //array
      else if (objStr.indexOf("{") === 0){
        console.log("else if for array");

        if (sliceArrObj("{", "}", objStr)) {
          let objStrSubstring = objStr.substring(0, this.sliceArrObj("{", "}", objStr));
          console.log("objStrSubstring is", objStrSubstring);
          //Push in obj array the function for evaluating arrays or objects (recursively), with the related substring
          obj.push(evalObject(objStrSubstring, []));

          //slice the arrayString at the level of the substring
          objStr = objStr.slice(sliceArrObj("{", "}", objStr) + 1);
          objStr = objStr.trim();
          return evalObject("{" + objStr + "}", obj);
        }
      }

      //object
      else if (objStr.indexOf("{") === 0){
        console.log("else if for object");

        if (sliceArrObj("{", "}", objStr)) {
          let objStrSubstring = objStr.substring(0, this.sliceArrObj("{", "}", objStr));
          console.log("objStrSubstring is", objStrSubstring);
          //Push in obj array the function for evaluating arrays or objects (recursively), with the related substring
          obj.push(evalObject(objStrSubstring, []));

          //slice the arrayString at the level of the substring
          objStr = objStr.slice(sliceArrObj("{", "}", objStr) + 1);
          objStr = objStr.trim();
          return evalObject("{" + objStr + "}", obj);
        }
      }

      //There was no identification of any data type so error is returned
      else {
        console.log("The data type was not matched");
        return "error";
      }


    }
  } //End of top else
} //End of function




function sliceArrObj(openBrkt, closeBrkt, arr) {
    let counter = 1;
    let subStr = arr.slice(1);
    for (let i = 0; i < subStr.length; i++) {
      if(subStr[i] === openBrkt) counter++;
      else if(subStr[i] === closeBrkt){
        counter--;
        if(counter === 0) return i+2;
      }
      else continue;
    } //End of for loop for substring
    return false;
}
