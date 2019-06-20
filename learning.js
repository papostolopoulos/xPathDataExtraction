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
"Hello, I am a string";
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
true; // --> true
5 > 7; // --> false
5 == "5"; // --> true (truthy value. values are the same, the data types are different)
5 === "5"; // --> false (false value. values are the same, the data types are different)

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
var x; // --> undefined



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
//properties. It does not mean that is is equal to some other value that is NaN
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
true || false; // --> true
false || true; // --> true
true && false; // --> false
false && false; // --> false
true && (true || false); // --> true
undefined || "hello"; // --> hello
undefined && null; // --> undefined because undefined is stated first as an operand.
null && undefined; // --> null because null is stated first as an operand.

//In the following cases, null, undefined and "" equalize each other depending on the order used as operands
undefined || null; // --> null
null || undefined // --> undefined
undefined || "" // --> ""
"" || undefined // --> undefined
"" || null; // --> null.
null || ""; // --> ""
var x; //No value assigned so this is undefined.
x || null; // --> null


/*
*STRING OPERATORS
  - The string operators are used to offer concatenation to the strings.
*/

//1. What will the following values return?
var str = "Hello!";
str + " So good to see you"; // --> "Hello! So good to see you"
str += " I am glad you are here!";
str; // --> Hello! I am glad you are here!

/*GOOD RESOURCES FOR READING AND PRACTICING
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/




/*
------------
OBJECTS
------------
  - In javaScript, an object is a collection of properties.
  - Each object property is constituted by a name (key) and a value, or an index and a value.
  - In javaScript, everything that is not a primitive data type is an object type. That
  includes object literals, arrays and functions.


/*
* OBJECTS (Object literals)
  - Objects are sets of properties and methods.
  - Each property is constituted by a string key and a value.
  - Each method is constituted by a string key and a function.
*/

//1. Create an object with two properties and a method.
var person = {
  name: "John",
  surname: "Smith",
  sayHi: function() {
    return "Hello, my name is John!"
  }
}
//2. Call the name of the person object.
person.name; // --> "John"
//3. Make the person object say hi.
person.sayHi(); // --> "Hello, my name is John"


/*
* ARRAYS
  - Arrays are objects that are structured in a list like setting.
  - Each one of the elements of the array can be called by:
    - Calling the array
    - Calling the index position of the particular element
  - The array's index starts from 0 and ends at the length of the array minus 1.
  - The elements of the array can be any javascript datatype (ex, numbers, strings,
  null, functions, booleans, other arrays, objects etc)
*/

//1. Create an array with five random numbers.
var arr = [2, 4, 6, 8, 10];
//2. Can you call the fourth element of the array?
arr[0]; // --> 2
arr[1]; // --> 4
arr[2]; // --> 6
arr[3]; // --> 8 (This is the fourth element of the array)
arr[4]; // --> 10
//3. Can you subtract the fourth element of the array from the third element of the array?
arr[3] - arr[2]; // --> 8 - 6
//4. Can you create an array with two elements that are both objects?
var objectsArr = [
  {name: "John", surname: "Doe", age: 33},
  {name: "Jane", surname: "Smith", age: 44}
];
//5. How can you call the second element of the above array?
objectsArr[1]; // --> {name: "Jane", surname: "Smith", age: 44}
//6. How can you call the "age" property of the second element of the above array?
objectsArr[1].age; // --> 44


/*
* FUNCTIONS
  - Functions are types of objects that are used for the execution of proceedures
  or the calculation of values.
  - When functions are inside objects, they are called "methods".
  - Functions can be invoked many different times with different sets of arguments.
*/

//1. Create a function that takes two string parameters, one for language and one for name.
//These two arguments have to be returned as a concatenated string.
function sayHi(lan, name){
  return lan + name;
}
//2. Invoke the above function with different sets of arguments.
var enHi = "Hi, my name is ";
var esHi = "Hola mi nombre es ";
var name1 = "Rick";
var name2 = "Liz";

sayHi(enHi, name2);
sayHi(esHi, name1);






/*
------------------------------------------------------------------------
// TECHNIQUES OF WRITING CODE THAT IS CLEAN AND EASY TO READ - REVISIT - COLLABORATE ON
------------------------------------------------------------------------
  - When we write SDE rules, there are cases where we need to change the "data" string.
  - A way to accomplish that is by using some built in javaScript methods like:
    - .replace();
    - .match();
    - .trim();
    - .exec();
    - .substring();
    - .split();
    - .join();
    - .slice();
  - Since we get several strings from different emails, we have to capture all the
  different scenarions and do string modifications.
  - Yet, adding a lot of methods in a function, combined with a lot of regular expressions
  can result in
    - Difficult to manage code
    - Code that when revisited, it is hard to understand which logic was followed
    - It might be difficult for other colleagues to understand the code we have written
    - The code is not always performant. The same code can be written in different
    more effective ways.
*/











/*
EXAMPLE
  - In the following example, there is a function that has several .replace() methods
  concatenated with each other.
  - Moreover, additional strings were added in the blacklist for a linkbased rule.
  - The way that the function and the blacklisted items are structured makes it
  difficult to revisit the code and do modifications if needed.
  - Also it is more likely to have duplications or errors in the way the regular
  expressions are concatenated since there is no relationship between the different
  strings
*/
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




/*
---------------------
ALTERNATIVE FORMAT 1
---------------------
  1. Separate each method on a different line to make it more readable
*/

function transform(data){
  if(data)
    return data.replace(/Save\stime.*|Take\sthe\sstress.*/,"")
    .replace(/.*2017\,|Online\sonly\..*/,"")
    .replace(/.*(Free next|stress-free|fast and free|110%|100%).*/i,"")
    .replace(/(Ends \d|Expires \d).*/,"");
    .replace(/(.*)(Now\:\s+\$\d+\.\d+)(.*)/,"$1$2")
    .replace(/(\d+)(\s+|\n)(%)/gmi,"$1$3")
    .replace(/(\$)(\s+|\n)(\d+)/gmi,"$1$3")
  else
    return null;
}


view deal|Make sure what you|®
REDEEM NOW|SIGN UP NOW|TELL ME MORE|find a store|join now|print now|add to cart
shop now|GET COUPON|GET STARTED|Learn more|See details.|Print coupon|view images
over\s[0-9,]+\sbought|Thanks for signing up.*|^For members who.*|^You are receiving.*|^always\sbe\sready\sto|^[1234]$|^save now$
\*|.*important.*|†|\^|®\s\.|^free$|^free\sshipping$|^reward$|^110percent$|Apply\snow$|^unbeatable.*|^backed.*|^HP.*Toner$|Inkjet\sprinters$|^Chairs?$|^Thanks for.*|^Hurry.*
^PRINT\.|^KEEP THE|^Monitors$|.*free\strial.*|.*and\smore\.|Order\sby.*|(use\s)?coupon\scode.*|\d{15,20}\.?|.*us again\.$|for you\.$|^Start saving$|^Coupon$



/*
2. Consolidate all the different regular expressions together, depending on
if you are modifying:
  - The whole string
  - The beginning of the string
  - The end of the string
  - The middle of the string
*/

function transform(data){
  if(data)
    return data
    .replace(/.*(Free next|stress-free|fast and free|110%|100%|free\s*trial).*/i, "")
    .replace(/^(You\s*are\s*receiving|unbeatable|Thanks\s*for|backed).*/i, "")
    .replace(/.*(us again\.)$/i, "")
    .replace(/^([1234]|save now|110percent|Monitors|reward|Start saving|Coupon|HP.*Toner|Chairs?|Hurry)$/i, "")
    .replace(/^(always\s*be\s*ready\s*to|For members who.*|PRINT\.|KEEP THE)/i, "")
    .replace(/.*(2017\,|and\smore\.)/i, "")
    .replace(/(Apply\s*now|for\s*you\.|Inkjet\s*printers)$/i, "")
    .replace(/(Thanks for signing up|Ends \d|Expires \d|Order\sby|Save\s*time|Take\s*the\s*stress|Online\sonly\.|(use\s)?coupon\scode.*).*/i, "")
    .replace(/\*|\†|\^|®\s\.|view\s*deal|Make\s*sure\s*what\s*you|®|REDEEM\s*NOW|SIGN\s*UP\s*NOW|TELL\s*ME\s*MORE|find\s*a\s*store|join\s*now|print\s*now|add\s*to\s*cart|shop\s*now|GET\s*COUPON|GET\s*STARTED|Learn\s*more|See\s*details.|Print\s*coupon|view\s*images|over\s*[0-9,]+\s*bought|\d{15,20}\.?/i, "")
    .replace(/((\d+)(\s+|\n)(%)|(\$)(\s+|\n)(\d+))/gmi, "$1$3")
    .replace(/(.*)(Now\:\s+\$\d+\.\d+)(.*)/gmi, "$1$2");

  else
    return null;
}


/*
3. Comment each method, explaining how the different regular expressions are grouped
This can help you with the management of the regular expressions and possible debugging
you might need to do.
Also it is more readable.
*/

function transform(data) {
  if (data) {
    return data
    .replace(/.*(Free next|stress-free|fast and free|110%|100%|free\s*trial).*/i, "") // .*Find text in the middle of string and remove all.*
    .replace(/^(You\s*are\s*receiving|unbeatable|Thanks\s*for|backed).*/i, "")  // ^Find text in the beginning of the string and remove all.*
    .replace(/.*(us again\.)$/i, "") // .*Find text in the end of the string and remove all$
    .replace(/^([1234]|save now|110percent|Monitors|reward|Start saving|Coupon|HP.*Toner|Chairs?|Hurry)$/i, "") // ^Find text at the beginning and the end of the string and remove all$
    .replace(/^(always\s*be\s*ready\s*to|For members who.*|PRINT\.|KEEP THE)/i, "") // ^Find text at the beginning of the string
    .replace(/.*(2017\,|and\smore\.)/i, "") //.*Find text in the middle, remove everything before that
    .replace(/(Apply\s*now|for\s*you\.|Inkjet\s*printers)$/i, "") // Find text at the end of the string$
    .replace(/(Thanks for signing up|Ends \d|Expires \d|Order\sby|Save\s*time|Take\s*the\s*stress|Online\sonly\.|(use\s)?coupon\scode.*).*/i, "") // Find text in the middle, remove everything after that.*
    .replace(/\*|\†|\^|®\s\.|view\s*deal|Make\s*sure\s*what\s*you|®|REDEEM\s*NOW|SIGN\s*UP\s*NOW|TELL\s*ME\s*MORE|find\s*a\s*store|join\s*now|print\s*now|add\s*to\s*cart|shop\s*now|GET\s*COUPON|GET\s*STARTED|Learn\s*more|See\s*details.|Print\s*coupon|view\s*images|over\s*[0-9,]+\s*bought|\d{15,20}\.?/i, "") // Find text in the middle of the string
    .replace(/((\d+)(\s+|\n)(%)|(\$)(\s+|\n)(\d+))/gmi, "$1$3")
    .replace(/(.*)(Now\:\s+\$\d+\.\d+)(.*)/, "$1$2");
  }
  else return null;

}




/*
4. Get rid of the "else" statement. If the data is undefined, then null will be returned anyway
*/

function transform(data){
  if(data)
    return data
    .replace(/.*(Free next|stress-free|fast and free|110%|100%|free\s*trial).*/i, "") //.*Full text removal.*
    .replace(/^(You\s*are\s*receiving|unbeatable|Thanks\s*for|backed).*/i, "") //^Starts with something specific, ends with something- anything
    .replace(/.*(us again\.)$/i, "") //.*Starts with something-anything, ends with something specific$
    .replace(/^([1234]|save now|110percent|Monitors|reward|Start saving|Coupon|HP.*Toner|Chairs?|Hurry)$/i, "") //^Starts with something specific and ends with something specific$
    .replace(/^(always\s*be\s*ready\s*to|For members who.*|PRINT\.|KEEP THE)/i, "") //^Starts with Something specific
    .replace(/.*(2017\,|and\smore\.)/i, "") //.*Starts with something - anything
    .replace(/(Apply\s*now|for\s*you\.|Inkjet\s*printers)$/i, "") //Ends with something specific$
    .replace(/(Thanks for signing up|Ends \d|Expires \d|Order\sby|Save\s*time|Take\s*the\s*stress|Online\sonly\.|(use\s)?coupon\scode.*).*/i, "") //Ends with something-anything.*
    .replace(/\*|\†|\^|®\s\.|view\s*deal|Make\s*sure\s*what\s*you|®|REDEEM\s*NOW|SIGN\s*UP\s*NOW|TELL\s*ME\s*MORE|find\s*a\s*store|join\s*now|print\s*now|add\s*to\s*cart|shop\s*now|GET\s*COUPON|GET\s*STARTED|Learn\s*more|See\s*details.|Print\s*coupon|view\s*images|over\s*[0-9,]+\s*bought|\d{15,20}\.?/i, "") //somewhere in the middle
    .replace(/((\d+)(\s+|\n)(%)|(\$)(\s+|\n)(\d+))/gmi, "$1$3")
    .replace(/(.*)(Now\:\s+\$\d+\.\d+)(.*)/, "$1$2");

    return null;
}






/*
ABOUT THE FOR LOOP
  - The for loop is a statement that can be used to iterate through the elements
  of a string or an array.
  - At the beginning of the for loop, there is a numeric variable that is used as
  the index number that helps us iterate through the different elements of the array.
*/

//1. Create a for loop that logs (prints) all the elements of an array.
var arr = ["Hello", "how", "are", "you?"];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//i =  0, therefore arr[i] === arr[0] === Hello
//i =  1, therefore arr[i] === arr[1] === how
//i =  2, therefore arr[i] === arr[2] === are
//i =  3, therefore arr[i] === arr[3] === you?





/*
------------------------
ALTERNATIVE FORMAT 2
------------------------
- In this method, all the regular expressions within the .replace() methods become
elements of an array.
- The array elements are invoked by using a for loop statement.
*/


function transform(data){
  if(!data) return null;

  var replaceArr = [
    //FULL TEXT REMOVAL
    /.*(Free next|stress-free|fast and free|110%|100%|free\s*trial).*/i, // .*Find text in the middle of string.*
    /^(You\s*are\s*receiving|unbeatable|Thanks\s*for|backed).*/i, // ^Find text in the beginning of the string.*
    /.*(us again\.)$/i, // .*Find text in the end of the string$
    /^([1234]|save now|110percent|Monitors|reward|Start saving|Coupon|HP.*Toner|Chairs?|Hurry)$/i, // ^Find text at the beginning and the end of the string$

    //PARTIAL TEXT REMOVAL
    /^(always\s*be\s*ready\s*to|For members who.*|PRINT\.|KEEP THE)/i, // ^Find text at the beginning of the string
    /(Apply\s*now|for\s*you\.|Inkjet\s*printers)$/i, // Find text at the end of the string$
    /.*(2017\,|and\smore\.)/i, // .*Find text in the middle, remove everything before that
    /(Thanks for signing up|Ends \d|Expires \d|Order\sby|Save\s*time|Take\s*the\s*stress|Online\sonly\.|(use\s)?coupon\scode).*/i, // Find text in the middle, remove everything after that.*
    /(\*|\†|\^|®\s\.|view\s*deal|Make\s*sure\s*what\s*you|®|REDEEM\s*NOW|SIGN\s*UP\s*NOW|TELL\s*ME\s*MORE|find\s*a\s*store|join\s*now|print\s*now|add\s*to\s*cart|shop\s*now|GET\s*COUPON|GET\s*STARTED|Learn\s*more|See\s*details.|Print\s*coupon|view\s*images|over\s*[0-9,]+\s*bought|\d{15,20}\.?)/i, // Find text in the middle of the string
  ];

  //Loop through the array and remove unwanted strings
  for (var i = 0; i < replaceArr.length; i++) {
    data = data.replace(replaceArr[i], "");
  }

  //Reorder strings
  data = data
  .replace(/((\d+)(\s+|\n)(%)|(\$)(\s+|\n)(\d+))/gmi, "$1$3")
  .replace(/(.*)(Now\:\s+\$\d+\.\d+)(.*)/, "$1$2");


  return data;
}






/*
-------------------------
ALTERNATIVE FORMAT 3
-------------------------
  - In this method, all the regular expressions become properties of objects.
  - All these different objects are elements of an array.
  - The .replace method is happening repeatedly inside a for loop.
  - The for loop is responsible for itterating through the array and calling the
  different object elements.

*/
function transform(data){
  if(!data) return null;

  var replaceArr = [
    //FULL TEXT REMOVAL
    // {oldStr: /.*().*/i, newStr: ""}, // .*Find text in the middle of string.*
    // {oldStr: /^().*/i, newStr: ""}, // ^Find text in the beginning of the string.*
    // {oldStr: /.*()$/i, newStr: ""}, // .*Find text in the end of the string$
    // {oldStr: /^()$/i, newStr: ""}, // ^Find text at the beginning and the end of the string$
    //
    // PARTIAL TEXT REMOVAL
    // {oldStr: /^()/i, newStr: ""}, // ^Find text at the beginning of the string
    // {oldStr: /()$/i, newStr: ""}, // Find text at the end of the string$
    // {oldStr: /.*()/i, newStr: ""}, // .*Find text in the middle, remove everything before that
    // {oldStr: /().*/i, newStr: ""}, // Find text in the middle, remove everything after that.*
    // {oldStr: /()/i, newStr: ""}, // Find text in the middle of the string
  ];

  for (var i = 0; i < replaceArr.length; i++) {
    data = data.replace(replaceArr[i].oldStr, replaceArr[i].newStr);
  }

  return data;
}




/*
  - Likewise, you can create an array with different object elements.
  - Each element is an object that has two properties.
  - The first property is the one that identifies the string to be modified or removed
  - The second property is the string that we are going to use for replacement.
*/
function transform(data){
  if(!data) return null;

  var replaceArr = [
    //FULL TEXT REMOVAL
    {oldStr: /.*(Free next|stress-free|fast and free|110%|100%|free\s*trial).*/i, newStr: ""}, //.*Find text in the middle of string*
    {oldStr: /^(You\s*are\s*receiving|unbeatable|Thanks\s*for|backed).*/i, newStr: ""}, //^Find text in the beginning of the string.*
    {oldStr: /.*(us again\.)$/i, newStr: ""}, //.*Find text in the end of the string$
    {oldStr: /^([1234]|save now|110percent|Monitors|reward|Start saving|Coupon|HP.*Toner|Chairs?|Hurry)$/i, newStr: ""}, //^Find text at the beginning and the end of the string$

    //PARTIAL TEXT REMOVAL
    {oldStr: /^(always\s*be\s*ready\s*to|For members who.*|PRINT\.|KEEP THE)/i, newStr: ""}, //^Find text at the beginning of the string
    {oldStr: /(Apply\s*now|for\s*you\.|Inkjet\s*printers)$/i, newStr: ""}, //Find text at the end of the string
    {oldStr: /.*(2017\,|and\smore\.)/i, newStr: ""}, //.*Find text in the middle, remove everything before that
    {oldStr: /(Thanks for signing up|Ends \d|Expires \d|Order\sby|Save\s*time|Take\s*the\s*stress|Online\sonly\.|(use\s)?coupon\scode).*/i, newStr: ""}, //Find text in the middle, remove everything after that.*
    {oldStr: /(\*|\†|\^|®\s\.|view\s*deal|Make\s*sure\s*what\s*you|®|REDEEM\s*NOW|SIGN\s*UP\s*NOW|TELL\s*ME\s*MORE|find\s*a\s*store|join\s*now|print\s*now|add\s*to\s*cart|shop\s*now|GET\s*COUPON|GET\s*STARTED|Learn\s*more|See\s*details.|Print\s*coupon|view\s*images|over\s*[0-9,]+\s*bought|\d{15,20}\.?)/i, newStr: ""}, //Find text in the middle of the string
    {oldStr: /((\d+)(\s+|\n)(%)|(\$)(\s+|\n)(\d+))/gmi, newStr: "$1$3"},
    {oldStr: /(.*)(Now\:\s+\$\d+\.\d+)(.*)/, newStr: "$1$2"},
    {oldStr: /Shop now/, newStr: "Hello"}
  ];

  for (var i = 0; i < replaceArr.length; i++) {
    data = data.replace(replaceArr[i].oldStr, replaceArr[i].newStr);
  }

  return data;
}
