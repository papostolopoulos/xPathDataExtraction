var test1 = "[1, 2, 3]"; //ok
var test2 = "[1, 2, 'Hello']" //ok
var test3 = "[1, 2, [3, 4]]" //ok
var test4 = "[function (){return 'I love it'}, 88, undefined, null, 'grand array']"; //ok
var test5 = "[[1,2,3]]"; //ok
var test6 = "[1, 2, [3, 4], [5]]"; //ok
var test7 = "[[1,2,3],[3, 4], [5], 'hamos']"; //ok

/*
WHEN YOU ARE DONE, YOU NEED TO CHANGE THE sliceArrObj TO this.sliceArrObj
the evalArray( to this.evalArray(
and the evalArrayElements to this.evalArrayElements
*/

function evalArray(arrStr, evalArrayElements) {
  if (arrStr === "[]") return evalArrayElements;
  else {
    if (arrStr[0] !== "[" || arrStr[arrStr.length-1] !== "]"){
      console.log("In the error because the first or the last character of the string do not indicate an array");
      return "error";
    }
    else {
      console.log("In the else of the eval array. The arrStr before the slice:", arrStr);
      arrStr = arrStr.slice(1, arrStr.length-1);
      console.log("In the else of the eval array. The arrStr after the slice:", arrStr);
      let es5FunctionRegEx = "function\\s+[^0-9\\|°¬\\!#\\$%/\\(\\)\\?¡¿\\+\\{\\}\\[\\]:\\.\\,;@ª^\\*<>=\\&]*\\s*\\(([^\\|°¬\\!#\\$%/\\(\\)\\?¡¿\\+\\{\\}\\[\\]:\\.\\,;@ª^\\*<>=\\&]*,?\\s*)+\\)\\s*\\{.*\\}";
      let es6FunctionRegEx = "\\(([^\\|°¬\\!#\\$%/\\(\\)\\?¡¿\\+\\{\\}\\[\\]:\\.\\,;@ª^\\*<>=\\&]*,?\\s*)+\\)\\s*=>\\s*\\{.*\\}";

      //Number
      if(arrStr.search(/\d+(\.\d+)?,/) === 0 || arrStr.search(/\d+(\.\d+)?\s*$/) === 0) {
        console.log("else if for number");
        evalArrayElements.push(Number(arrStr.match(/\d+(\.\d+)?/)[0]));
        console.log(Number(arrStr.match(/\d+(\.\d+)?/)[0]));
        arrStr = arrStr.slice(arrStr.match(/\d+(\.\d+)?/)[0].length + 1);
        // arrStr = arrStr.slice(arrStr.indexOf(",") + 1);
        arrStr = arrStr.trim();
        console.log("end of else if");
        return evalArray("[" + arrStr + "]", evalArrayElements);
      }

      //true
      else if (arrStr.indexOf("true,") === 0 || arrStr.search(/true\s*$/) === 0) {
        console.log("else if for true");
        evalArrayElements.push(true);
        arrStr = arrStr.slice(5);
        arrStr = arrStr.trim();
        return evalArray("[" + arrStr + "]", evalArrayElements);
      }

      //false
      else if (arrStr.indexOf("false,") === 0 || arrStr.search(/false\s*$/) === 0) {
        console.log("else if for false");
        evalArrayElements.push(false);
        arrStr = arrStr.slice(6);
        arrStr = arrStr.trim();
        return evalArray("[" + arrStr + "]", evalArrayElements);
      }

      //null
      else if (arrStr.indexOf("null,") === 0 || arrStr.search(/null\s*$/) === 0) {
        console.log("else if for null");
        evalArrayElements.push(null);
        arrStr = arrStr.slice(5);
        arrStr = arrStr.trim();
        return evalArray("[" + arrStr + "]", evalArrayElements);
      }

      //Undefined
      else if (arrStr.indexOf("undefined,") === 0 || arrStr.search(/undefined\s*$/) === 0) {
        console.log("else if for undefined");
        evalArrayElements.push(undefined);
        arrStr = arrStr.slice(10);
        arrStr = arrStr.trim();
        return evalArray("[" + arrStr + "]", evalArrayElements);
      }

      //string
      else if (arrStr.search(/["'`]/) === 0) {
        console.log("else if for string");
        let firstQuote = arrStr[0];
        if (arrStr.indexOf(firstQuote + ",") > 0) {
          evalArrayElements.push(arrStr.substring(1, arrStr.indexOf(firstQuote + ",")));
          arrStr = arrStr.slice(arrStr.indexOf(firstQuote + ",") + 2);
          arrStr = arrStr.trim()
        }
        else if (arrStr.lastIndexOf(firstQuote) === arrStr.length-1) {
            evalArrayElements.push(arrStr.substring(1, arrStr.length-1));
            arrStr = "";
        }
        return evalArray("[" + arrStr + "]", evalArrayElements);
      }

      //function es5 es6
      else if (arrStr.search(RegExp(es5FunctionRegEx)) === 0 ||  arrStr.search(RegExp(es6FunctionRegEx)) === 0) {

        console.log("else if for function");
        let params = arrStr.slice(arrStr.indexOf("(") + 1, arrStr.indexOf(")")).split(/,\s*/);
        console.log("params are", params);
        console.log("arrStr is", arrStr.match(/function\s+[^0-9\|°¬\!#\$%/\(\)\?¡¿\+\{\}\[\]:.\,;@ª^\*<>=\&]*\s*\(([^\|°¬\!#\$%/\(\)\?¡¿\+\{\}\[\]:\.\,;@ª^\*<>=\&]*,?\s*)+\)\s*\{.*\}/));
        //If there is a function and separated by a comma with other array elements
        if(arrStr.search(RegExp(es5FunctionRegEx + ",")) !== -1 ||
        arrStr.search(RegExp(es6FunctionRegEx + ",")) !== -1){
          console.log("In if for functions");
          params.push(arrStr.slice(arrStr.indexOf("{") + 1, arrStr.indexOf("}, ")));
          evalArrayElements.push(new Function(...params));
          arrStr = arrStr.slice(arrStr.indexOf("}, ") + 3).trim();
          console.log("arrStr is", arrStr);
        }
        //if the function is the last element of the array
        else if ((RegExp(es5FunctionRegEx).test(arrStr) && arrStr.match(RegExp(es5FunctionRegEx))[0].length === arrStr.length) ||
        RegExp(es6FunctionRegEx).test(arrStr) && arrStr.match(RegExp(es6FunctionRegEx))[0].length === arrStr.length) {
          console.log("in else if for functions");
          params.push(arrStr.slice(arrStr.indexOf("{") + 1, arrStr.lastIndexOf("}")));
          evalArrayElements.push(new Function(...params));
          arrStr = "";
          console.log(arrStr);
        }
        return evalArray("[" + arrStr + "]", evalArrayElements);
      }

      //array
      else if (arrStr.indexOf("[") === 0){
        console.log("else if for array");

        if (sliceArrObj("[", "]", arrStr)) {
          let arrStrSubstring = arrStr.substring(0, this.sliceArrObj("[", "]", arrStr));
          console.log("arrStrSubstring is", arrStrSubstring);
          //Push in evalArrayElements array the function for evaluating arrays or objects (recursively), with the related substring
          evalArrayElements.push(evalArray(arrStrSubstring, []));

          //slice the arrayString at the level of the substring
          arrStr = arrStr.slice(sliceArrObj("[", "]", arrStr) + 1);
          arrStr = arrStr.trim();
          return evalArray("[" + arrStr + "]", evalArrayElements);
        }
      }

      //object
      else if (arrStr.indexOf("{") === 0){
        console.log("else if for object");

        if (sliceArrObj("{", "}", arrStr)) {
          let arrStrSubstring = arrStr.substring(0, this.sliceArrObj("{", "}", arrStr));
          console.log("arrStrSubstring is", arrStrSubstring);
          //Push in evalArrayElements array the function for evaluating arrays or objects (recursively), with the related substring
          evalArrayElements.push(evalArray(arrStrSubstring, []));

          //slice the arrayString at the level of the substring
          arrStr = arrStr.slice(sliceArrObj("{", "}", arrStr) + 1);
          arrStr = arrStr.trim();
          return evalArray("[" + arrStr + "]", evalArrayElements);
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
