/*
---------------------
PRIMITIVE DATA TYPES
---------------------
In JavaScript, primitive are the data types that are not objects.
- They are immutable (they never change)
- They do not have any methods (but they can aquire them)

* STRINGS
  - Strings are holding data in a text form.
  - "I am a string in double quotation marks"
  - 'I am a string in single quotation marks'
  - `I am a string in backticks.
    I can be typed in multiple lines without breaking`
*/

//1. Can you write a string?
"Hello, I am a string"
//2. Can you write a method to change the string to something else?
"Hello, I am a string".toUpperCase();


/*
* NUMBERS
  - Unlike other probramming languages, numbers are not separated into integers and floats
  - That is because javaScript considers all the numbers as floating points.
  - Yet if you enter an integer, javaScript will not show you the decimals.
  - I am a number. An integer --> 500
  - I am a number too. A float --> 66.22
  - I am a number, a big one --> +Infinity
  - I am a number, a small one --> -Infinity
  - I am a number but I am not a number --> NaN (Not a Number)
*/

  //1. Can you write a floating point number?
  22.33
  //2. Can you get a number from the length of the string "SDE coupons"? If so, how?
  "SDE coupons".length


/*
* BOOLEANS
  - Boolean is a data type that can only have two values. true or false
  - In javaScript it is mostly used to define is a certain piece of code should
  be run or not
*/

//1. What will the following pieces of code return?
true; //==> true
5 > 7; //==> false
5 == "5"; //==> true (truthy value. values are the same, the data types are different)
5 === "5"; //==> false (false value. values are the same, the data types are different)

//2. Can you think of a time that you use booleans in your code writting?
var string = "I am a string"
if (string.length < 14) {
  string = string + " and I need to grow bigger";
}


/*
* NULL
  - null represents the intentional absence of any other value.
  - The null data type has only one value, which is null.
*/

//1. Can you think of a way to intentionally return no value from a function?
return null;
//2. What will the following method return when you run it? Why?
"Hello, how are you?".match(/Goodbye/); //=> null because the match() method
//returns null when there is no match between the string and the regular expression argument


/*
* UNDEFINED
  - undefined is used when a variable, statement or function is not assigned or does
  not return a value;
  - undefined is useful to understand if a value is initialized or not.
*/

//1. Define a variable named x and call it. What will javaScript return?
var x; //==> undefined



/*
* SYMBOL --> A unique and immutable primitive value and may be used as the key
of an Object property
* BIGINT --> A numeric primitive that can represent integers with arbitrary precision.

GOOD SOURCES FOR READING AND PRACTICING:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
https://www.sololearn.com/Play/JavaScript
*/






/*
-------------
OPERATORS
-------------
  - Operators are used in javaScript to compare values, calculate arithmetic operations
  assign values do concatenations etc.
  - Overall, the operators are used to operate the operands (Values expressed through
  primitive values, functions and objects).


/*
* ARITHMETIC OPERATORS
  - Arithmetic operators take the numerical values (either primitives or variables)
  and perform arithmetic calculations.
  - The order of the arithmetic operations is identical to the order used in simple
  math. A good way to remember the order is to remember the sentence.
  "Please Excuse My Aunt Sally".
  Please --> Everything in a parenthesis first.
  Excuse --> Exponents take priority (powers and roots).
  My --> Multiplication and Division, with an order of left to right.
  Aunt Sally --> Addition and Substraction, with an order of left to right.

  5 + 4 => returns 9
  var x = 8, y = 9
  x * y => returns 72
  x / 2 => returns 4
*/

//1. What will the following arithmetic operators return?
var x = 10, y = 5, z = 2;
x + y;
y * z / z;
x - 6 * y;
x + (z - 8) / 2 - 5;


/*
* ASSIGNMENT OPERATORS
  - Assignment operators are used to assign values to the left operands they are handling.
  x = y => x = y
  x += y => x = x + y
  x -= y => x = x - y
  x *= y => x = x * y
  x /= y => x = x / y
  x %= y => x = x % y (Remainder)
  x **= y => x = x ** y (Power of)
*/

//1. How will the following assignment operators affect the operands?
var x = 10; //=> x is the operand, = is the operator, 10 is the value
x += 5 //=> the value of x becomes 15
var y = 2;
x *= y //=> the value of x becomes 30


/* COMPARISON OPERATORS
  - The comparison operators compare two operands and return a boolean logical value
  (true or false)
*/

//1. What value will the following comparison operators return?
5 > 4; //true
"This is a string" === "This is a string"; //true
5 == "5"; //true because this is a comparison by value (truthy)
5 === "5"; //false because this is a comparison by data type and value
+0 === -0; //true
NaN === NaN; //false because NaN represents a value that inherits the Number objects
//properties but does not mean that that is is equal to some other value that is NaN
false === false; //true
isNaN("Hello") === isNaN("Goodbye"); //true
[1, 2, 3] === [1, 2, 3]; //false. Array objects are not equal. The elements of the
//objects might be equal but objects point at different locations in memory.
//Only if the operants (variable names) point to the same object, then the outcome is true.
"Hello there".match(/Hello/)[0] === "Hello there".replace(/ there/, ""); //true
//What is being compared is the product of the methods, not the methods themselves.
null == undefined //true
null === undefined //false


/* BOOLEAN (LOGICAL) OPERATORS
  - The logical operators return one of the values of the operands.
*/

//1. What do the following values return when we use logical operators?
true || false; //==> true
false || true; //==> true
true && false; //==> false
false && false; //==> false
true && (true || false); //==> true
undefined || "hello"; //==> hello
undefined && null; //==> undefined because undefined is stated first as an operand.
null && undefined; //==> null because null is stated first as an operand.

//In the following cases, null, undefined and "" equalize each other depending on the order used as operands
undefined || null; //==> null
null || undefined //==> undefined
undefined || "" //==> ""
"" || undefined //==> undefined
"" || null; //==> null.
null || ""; //==> ""
var x; //No value assigned so this is undefined.
x || null; //==> null


/*
*STRING OPERATORS
  - The string operators are used to offer concatenation to the strings.
*/

//1. What will the following values return?
var str = "Hello!"
str + " So good to see you"; //==> "Hello! So good to see you"
str += " I am glad you are here!";
str; //==> Hello! I am glad you are here!

/*GOOD RESOURCES FOR READING AND PRACTICING
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/









/*
WHAT IS IT?
CAN YOU GIVE ME AN EXAMPLE OF CODE TO WRITE?
CAN YOU REMEMBER IF YOU HAVE USED IT WHILE WORKING?*/
/*
- OBJECTS
  * Arrays
  * Object literals
  * Functions
*/



function transform() {
  console.log("5." + false || true);
}



//USE THIS AS AN EXAMPLE. SHOW PEOPLE HOW THEY CAN USE AN ARRAY WITH OBJECTS TO SIMPLIFY THIS FORMAT
function transform(data){
  if(data)
    return data.replace(/Save\stime.*|Take\sthe\sstress.*/,"").replace(/.*2017\,|Online\sonly\..*/,"").replace(/(.*)(Now\:\s+\$\d+\.\d+)(.*)/,"$1$2").replace(/(\d+)(\s+|\n)(%)/gmi,"$1$3").replace(/(\$)(\s+|\n)(\d+)/gmi,"$1$3").replace(/.*(Free next|stress-free|fast and free|110%|100%).*/i,"").replace(/(Ends \d|Expires \d).*/,"");
  else
    return null;
}


view deal|Make sure what you|®
REDEEM NOW|SIGN UP NOW|TELL ME MORE|find a store|join now|print now|add to cart
shop now|GET COUPON|GET STARTED|Learn more|See details.|Print coupon|view images
over\s[0-9,]+\sbought|Thanks for signing up.*|^For members who.*|^You are receiving.*|^always\sbe\sready\sto|^[1234]$|^save now$
\*|.*important.*|†|\^|®\s\.|^free$|^free\sshipping$|^reward$|^110percent$|Apply\snow$|^unbeatable.*|^backed.*|^HP.*Toner$|Inkjet\sprinters$|^Chairs?$|^Thanks for.*|^Hurry.*
^PRINT\.|^KEEP THE|^Monitors$|.*free\strial.*|.*and\smore\.|Order\sby.*|(use\s)?coupon\scode.*|\d{15,20}\.?|.*us again\.$|for you\.$|^Start saving$|^Coupon$



//Emphasize how you can comment out specific parts of your code (like inside the array)
//so you can properly debug it.



function transform(data){
  if(!data) return null;

  var replaceArr = [
    //{oldStr: /.*().*/, newStr: ""}, //.*Full text removal.*
    //{oldStr: /^().*/i, newStr: ""}, //^Starts with something specific, ends with something- anything.*
    //{oldStr: /.*()$/i, newStr: ""}, //.*Starts with something-anything, ends with something specific$
    //{oldStr: /^()$/, newStr: ""}, //^Starts with something specific and ends with something specific$
    //{oldStr: /^()/, newStr: ""}, //^Starts with Something specific
    //{oldStr: /.*()/, newStr: ""}, //.*Starts with something - anything
    //{oldStr: /()$/, newStr: ""}, //Ends with something specific$
    //{oldStr: /().*/, newStr: ""}, //Ends with something-anything.*
    //{oldStr: /()/, newStr: ""}, //somewhere in the middle
  ];

  for (var i = 0; i < replaceArr.length; i++) {
    data = data.replace(replaceArr[i].oldStr, replaceArr[i].newStr);
  }

  // replaceArr.forEach(function(el){
  // 	data = data.replace(el.oldStr, el.newStr).trim();
  // });

  return data;
}





//After adding all the regex Rules
function transform(data){
  if(!data) return null;

  var replaceArr = [
    {oldStr: /.*(Free next|stress-free|fast and free|110%|100%|free\s*trial).*/i, newStr: ""}, //.*Full text removal.*
    {oldStr: /^(You\s*are\s*receiving|unbeatable|Thanks\s*for|backed).*/i, newStr: ""}, //^Starts with something specific, ends with something- anything
    {oldStr: /.*(us again\.)$/i, newStr: ""}, //.*Starts with something-anything, ends with something specific$
    {oldStr: /^([1234]|save now|110percent|Monitors|reward|Start saving|Coupon|HP.*Toner|Chairs?|Hurry)$/i, newStr: ""}, //^Starts with something specific and ends with something specific$
    {oldStr: /^(always\s*be\s*ready\s*to|For members who.*|PRINT\.|KEEP THE)/i, newStr: ""}, //^Starts with Something specific
    {oldStr: /.*(2017\,|and\smore\.)/i, newStr: ""}, //.*Starts with something - anything
    {oldStr: /(Apply\s*now|for\s*you\.|Inkjet\s*printers)$/i, newStr: ""}, //Ends with something specific$
    {oldStr: /(Thanks for signing up|Ends \d|Expires \d|Order\sby|Save\s*time|Take\s*the\s*stress|Online\sonly\.|(use\s)?coupon\scode.*).*/i, newStr: ""}, //Ends with something-anything.*
    {oldStr: /\*|\†|\^|®\s\.|view\s*deal|Make\s*sure\s*what\s*you|®|REDEEM\s*NOW|SIGN\s*UP\s*NOW|TELL\s*ME\s*MORE|find\s*a\s*store|join\s*now|print\s*now|add\s*to\s*cart|shop\s*now|GET\s*COUPON|GET\s*STARTED|Learn\s*more|See\s*details.|Print\s*coupon|view\s*images|over\s*[0-9,]+\s*bought|\d{15,20}\.?/i, newStr: ""}, //somewhere in the middle
    {oldStr: /((\d+)(\s+|\n)(%)|(\$)(\s+|\n)(\d+))/gmi, newStr: "$1$3"},
    {oldStr: /(.*)(Now\:\s+\$\d+\.\d+)(.*)/, newStr: "$1$2"},
    {oldStr: //, newStr: ""},
  ];

  replaceArr.forEach(function(el){
  	data = data.replace(el.oldStr, el.newStr).trim();
  });

  return data;
}













https://www.sololearn.com/Play/JavaScript
