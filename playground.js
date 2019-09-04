/*
I love apples
I like oranges
I do not like bananas
I don't like papayas
I like grapes

5
3
2
8
12
*/

var str1 = "I love apples";
var str2 = "I like oranges";
var str3 = "I do not like bananas";
var str4 = "I don't like papayas";
var str5 = "I like grapes";

var num1 = 5;
var num2 = 3;
var num3 = 2;
var num4 = 8;
var num5 = 12;

function loveFruit1(str, num){
  if (str.indexOf("I like") !== -1 || str.indexOf("I love") !== -1) {
      return str + ". Please give me " + num.toString();
  }
  else {
    return str + ". I don't want any of your fruit!";
  }
}

function loveFruit2(str, num){
  return /I\s(love|like)/.test(str) ?
  `${str}. Please give me ${num.toString()}` :
  `${str}. I don't want any of your fruit!`;
}
