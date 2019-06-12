evalObjectvar test1 = "[1, 2, 3]"; //ok
var test2 = "[1, 2, 'Hello']" //ok
var test3 = "[1, 2, [3, 4]]" //ok
var test4 = "[function (){return 'I love it'}, 88, undefined, null, 'grand array']"; //ok
var test5 = "[[1,2,3]]"; //ok
var test6 = "[1, 2, [3, 4], [5]]"; //ok
var test7 = "[[1,2,3],[3, 4], [5], 'hamos']"; //ok


var test1 =
{
  name: "simon",
  age: 33,
  hasCar: false,
  hasKids: null,
  favoriteFlavors: ["banana", "strawberry"],
  saysHi: function() {
    return "Hello there " + this.name;
  }
};
/*
WHEN YOU ARE DONE, YOU NEED TO CHANGE THE sliceArrObj TO this.sliceArrObj
the evalObject( to this.evalObject(
and the evalObjectElements to this.evalObjectElements
*/

function evalObject(objStr, evalObjectElements) {
  if (objStr === "{}") return evalObjectElements;
  else {
    if (objStr[0] !== "{" || objStr[objStr.length-1] !== "}"){
      console.log("In the error because the first or the last character of the string do not indicate an array");
      return "error";
    }
    else {
      console.log("In the else of the eval array. The objStr before the slice:", objStr);
      objStr = objStr.slice(1, objStr.length-1);
      console.log("In the else of the eval array. The objStr after the slice:", objStr);
      let es5FunctionRegEx = "function\\s+[^0-9\\|°¬\\!#\\$%/\\(\\)\\?¡¿\\+\\{\\}\\[\\]:\\.\\,;@ª^\\*<>=\\&]*\\s*\\(([^\\|°¬\\!#\\$%/\\(\\)\\?¡¿\\+\\{\\}\\[\\]:\\.\\,;@ª^\\*<>=\\&]*,?\\s*)+\\)\\s*\\{.*\\}";
      let es6FunctionRegEx = "\\(([^\\|°¬\\!#\\$%/\\(\\)\\?¡¿\\+\\{\\}\\[\\]:\\.\\,;@ª^\\*<>=\\&]*,?\\s*)+\\)\\s*=>\\s*\\{.*\\}";

      //Number
      if(objStr.search(/\d+(\.\d+)?,/) === 0 || objStr.search(/\d+(\.\d+)?\s*$/) === 0) {
        console.log("else if for number");
        evalObjectElements.push(Number(objStr.match(/\d+(\.\d+)?/)[0]));
        console.log(Number(objStr.match(/\d+(\.\d+)?/)[0]));
        objStr = objStr.slice(objStr.match(/\d+(\.\d+)?/)[0].length + 1);
        // objStr = objStr.slice(objStr.indexOf(",") + 1);
        objStr = objStr.trim();
        console.log("end of else if");
        return evalObject("{" + objStr + "}", evalObjectElements);
      }

      //true
      else if (objStr.indexOf("true,") === 0 || objStr.search(/true\s*$/) === 0) {
        console.log("else if for true");
        evalObjectElements.push(true);
        objStr = objStr.slice(5);
        objStr = objStr.trim();
        return evalObject("{" + objStr + "}", evalObjectElements);
      }

      //false
      else if (objStr.indexOf("false,") === 0 || objStr.search(/false\s*$/) === 0) {
        console.log("else if for false");
        evalObjectElements.push(false);
        objStr = objStr.slice(6);
        objStr = objStr.trim();
        return evalObject("{" + objStr + "}", evalObjectElements);
      }

      //null
      else if (objStr.indexOf("null,") === 0 || objStr.search(/null\s*$/) === 0) {
        console.log("else if for null");
        evalObjectElements.push(null);
        objStr = objStr.slice(5);
        objStr = objStr.trim();
        return evalObject("{" + objStr + "}", evalObjectElements);
      }

      //Undefined
      else if (objStr.indexOf("undefined,") === 0 || objStr.search(/undefined\s*$/) === 0) {
        console.log("else if for undefined");
        evalObjectElements.push(undefined);
        objStr = objStr.slice(10);
        objStr = objStr.trim();
        return evalObject("{" + objStr + "}", evalObjectElements);
      }

      //string
      else if (objStr.search(/["'`]/) === 0) {
        console.log("else if for string");
        let firstQuote = objStr[0];
        if (objStr.indexOf(firstQuote + ",") > 0) {
          evalObjectElements.push(objStr.substring(1, objStr.indexOf(firstQuote + ",")));
          objStr = objStr.slice(objStr.indexOf(firstQuote + ",") + 2);
          objStr = objStr.trim()
        }
        else if (objStr.lastIndexOf(firstQuote) === objStr.length-1) {
            evalObjectElements.push(objStr.substring(1, objStr.length-1));
            objStr = "";
        }
        return evalObject("{" + objStr + "}", evalObjectElements);
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
          evalObjectElements.push(new Function(...params));
          objStr = objStr.slice(objStr.indexOf("}, ") + 3).trim();
          console.log("objStr is", objStr);
        }
        //if the function is the last element of the array
        else if ((RegExp(es5FunctionRegEx).test(objStr) && objStr.match(RegExp(es5FunctionRegEx))[0].length === objStr.length) ||
        RegExp(es6FunctionRegEx).test(objStr) && objStr.match(RegExp(es6FunctionRegEx))[0].length === objStr.length) {
          console.log("in else if for functions");
          params.push(objStr.slice(objStr.indexOf("{") + 1, objStr.lastIndexOf("}")));
          evalObjectElements.push(new Function(...params));
          objStr = "";
          console.log(objStr);
        }
        return evalObject("{" + objStr + "}", evalObjectElements);
      }

      //array
      else if (objStr.indexOf("{") === 0){
        console.log("else if for array");

        if (sliceArrObj("{", "}", objStr)) {
          let objStrSubstring = objStr.substring(0, this.sliceArrObj("{", "}", objStr));
          console.log("objStrSubstring is", objStrSubstring);
          //Push in evalObjectElements array the function for evaluating arrays or objects (recursively), with the related substring
          evalObjectElements.push(evalObject(objStrSubstring, []));

          //slice the arrayString at the level of the substring
          objStr = objStr.slice(sliceArrObj("{", "}", objStr) + 1);
          objStr = objStr.trim();
          return evalObject("{" + objStr + "}", evalObjectElements);
        }
      }

      //object
      else if (objStr.indexOf("{") === 0){
        console.log("else if for object");

        if (sliceArrObj("{", "}", objStr)) {
          let objStrSubstring = objStr.substring(0, this.sliceArrObj("{", "}", objStr));
          console.log("objStrSubstring is", objStrSubstring);
          //Push in evalObjectElements array the function for evaluating arrays or objects (recursively), with the related substring
          evalObjectElements.push(evalObject(objStrSubstring, []));

          //slice the arrayString at the level of the substring
          objStr = objStr.slice(sliceArrObj("{", "}", objStr) + 1);
          objStr = objStr.trim();
          return evalObject("{" + objStr + "}", evalArrayElements);
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
