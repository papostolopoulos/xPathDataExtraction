function evalArr(arrStr) {
  arrStr = arrStr.slice(1, arrStr.length-1);
  console.log("The arrStr after the slice:", arrStr);
  let finalArr = [];
  let openCharsReg = /[\[\{"'`]/;
  let openCharsStr = "[{\"'``"
  let openCloseCharsArr = [
    {
      openChar: "[",
      closeChar: "]",
      relFun: evalArr;
    },
    {
      openChar: "{",
      closeChar: "}",
      relFun: evalObj;
    },
    {
      openChar: '"',
      closeChar: '"',
      relFun: evalString;
    },
    {
      openChar: "'",
      closeChar: "'",
      relFun: evalString;
    },
    {
      openChar: "`",
      closeChar: "`",
      relFun: evalString;
    }
  ];

  // while (arrStr.length > 0) {
  //
  // }


  if (arrStr.search(openCharsReg) === 0) {
    let position = openCharsStr[arrStr[0]];
    console.log("In the if");
    if (sliceArrObj(openCloseCharsArr[position].openChar, openCloseCharsArr[position].closeChar, arrStr)) {
      console.log("This is what I will push:", arrStr.substring(0, sliceArrObj(openCloseCharsArr[position].openChar, openCloseCharsArr[position].closeChar, arrStr)));
      finalArr.push(openCloseCharsArr[position].relFun(arrStr.substring(0, sliceArrObj(openCloseCharsArr[position].openChar, openCloseCharsArr[position].closeChar, arrStr))));
      arrStr = arrStr.slice(sliceArrObj(openCloseCharsArr[position].openChar, openCloseCharsArr[position].closeChar, arrStr));
      arrStr = arrStr.trim();
    }
    else return "error";
  }

  return finalArr;
}


function sliceArrObj(openChar, closeChar, arr) {
    let counter = 1;
    let subStr = arr.slice(1);
    for (let i = 0; i < subStr.length; i++) {
      if(subStr[i] === openChar) counter++;
      else if(subStr[i] === closeChar){
        counter--;
        if(counter === 0) return i+2;
      }
      else continue;
    } //End of for loop for substring
    return false;
}

var str1 = "[[1,2,3], 'haha']";





function transform(arrStr){
  arrStr = arrStr.slice(1, arrStr.length-1);
  console.log("The arrStr after the slice", arrStr);


  arrStr = arrStr.split(/(?<=undefined|null|true|false|\/[igmsuy]+|\/),\s*/);
  // (?=undefined|null|true|false|\[|\{|\/|\d+|\d+\.\d+)
  console.log("arrStr after the split:", arrStr);

  for (var i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === "undefined"){
      arrStr[i] = undefined;
      continue;
    }
    if (arrStr[i] === "true") {
      arrStr[i] = true;
      continue;
    }
    if (arrStr[i] === "false") {
      arrStr[i] = false;
      continue;
    }
    if (arrStr[i] === "null") {
      arrStr[i] = null;
      continue;
    }
    if (arrStr[i].indexOf("[") !== -1 && arrStr[i].lastIndexOf("]") > arrStr[i].indexOf("[")) {
      console.log(`The length of the arrStr[i] minus 1 is: ${arrStr[i].length -1},
      The index of arrStr[i].indexOf("[") is: ${arrStr[i].indexOf("[")},
      The last index of arrStr[i].lastIndexOf("]") is: ${arrStr[i].lastIndexOf("]")}`);


      if (arrStr[i].indexOf("[") === 0 && arrStr[i].lastIndexOf("]") === arrStr[i].length - 1) {
        console.log("will run arrStr[i] = this.evalArr(`[${arrStr[i]}]`);");
        // arrStr[i] = this.evalArr(`[${arrStr[i]}]`);
        continue;
      }
      if (arrStr[i].indexOf("[") > 0 && arrStr[i].lastIndexOf("]") === arrStr[i].length - 1) {
        console.log("the array covers the end of the string");
      }
      if (arrStr[i].indexOf("[") === 0 && arrStr[i].lastIndexOf("]") !== arrStr[i].length - 1) {
        console.log("the array covers the beginning of the string");
      }
      if (arrStr[i].indexOf("[") > 0 && arrStr[i].lastIndexOf("]") < arrStr[i].length - 1) {
        console.log("the array is in the middle of the string");
      }

    }
  }

  return arrStr;
}

var str = `["den fevgo", [1,2,3], undefined, null, [1,2,[3], 4], false, 34, 'I like it', /I am a regex/i, 333, {person: "someone", name: "paris", age: 88}, 345, "string"]`;

console.log(transform(str));
