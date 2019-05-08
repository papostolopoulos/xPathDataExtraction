function evalArr(arrStr) {
  console.log("In the evalArray for", arrStr);
  if (arrStr[0] !== "[" || arrStr[arrStr.length-1] !== "]"){
    console.log("In the error because the first or the last character of the string do not indicate an array");
    this.errorEntry = true;
  }
  else {
    arrStr = arrStr.slice(1, arrStr.length-1);
    console.log("The arrStr after the slice:", arrStr);
    let arrElements = []; //to be returned at the end of the function
    let bracketsObjects = [
      {
        openBrkt: "[",
        closeBrkt: "]",
        runFnctn: this.evalArr;
      },
      {
        openBrkt: "{",
        closeBrkt: "}",
        runFnctn: this.evalObj;
      }
    ];
    let openBracketsReg = /[\[\{]/;
    let openBracketsStr = "[{";
    let closeBracketsStr = "]}";

    /*This is the work that I am doing on the playground file.
    Objective is to properly split the string in the commas*/

    //Will open the while loop when I have figured out how to properly do the splits
    // while (arrStr.length > 0) {
      //
      // }





  }// End of the else statement




  //If the first character in the string arrStr is [ {
  //that means that the first element is an array or object
  //Other if statements need to follow for undefined, true, false, null, callback
  //function, immediately invoked function and string
  if (arrStr.indexOf("[") === 0 || arrStr.indexOf("{") === 0) {
    console.log("In the if");
    let idx = openBracketsStr.indexOf(arrStr[0]); //This is the index of
    //the character that is represented in the array bracketsObjects

    //If the string has a correct opening and closing brackets
    //(from the sliceArrObj function) then slice to the correct idx AND
    //Invoke the related function to evaluate the string, array or object
    if (sliceArrObj(bracketsObjects[idx].openBrkt, bracketsObjects[idx].closeBrkt, arrStr)) {
      console.log("This is what I will push:", arrStr.substring(0, sliceArrObj(bracketsObjects[idx].openBrkt, bracketsObjects[idx].closeBrkt, arrStr)));
      //Push in arrElements array the function for evaluating arrays or objects (recursively), with the related substring
      arrElements.push(bracketsObjects[idx].runFnctn(arrStr.substring(0, sliceArrObj(bracketsObjects[idx].openBrkt, bracketsObjects[idx].closeBrkt, arrStr))));
      //slice the arrayString at the level of the substring
      arrStr = arrStr.slice(sliceArrObj(bracketsObjects[idx].openBrkt, bracketsObjects[idx].closeBrkt, arrStr));
      arrStr = arrStr.trim();
    }
    else this.errorEntry = true;
  }

  /*
  Need to write if statements for
  strings
  undefined
  null
  true
  false
  numbers 
  */

  return arrElements;
} //End of evalArr function


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
