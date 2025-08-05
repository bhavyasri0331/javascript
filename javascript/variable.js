//variables are case sensitive
name="bhavya"
fullname="gajapurambhavyasri"
console.log(name)
console.log(fullname)
//VAR can be re-declared and updated,it has global scope
var name="hey"
console.log(name)
var name="hello"
name="nice"
console.log(name)
// let can't be re-declared and can be updated
let name1="bekkam"
   name1="sreeja"
console.log(name1);
//const var cannot be re declared or updated
const number=86
console.log(number)
//primitive data types
var full_name="bhavya"//string
console.log(typeof full_name)
var age=19//number
console.log(typeof age)
var isfollow=true//boolean
console.log(typeof isfollow)
var branch;//undefined
console.log(typeof branch)
var phone_number=null;//null
console.log(typeof phone_number)
var big_number=2345n;//bigint
//console.log(typeof big_number)
var id=Symbol('id')//symbol
console.log(typeof id)
//NON PRIMITIVE DATA TYPES
var employee={
    emp_id:4,
    employee_name:"bhavitha",
    role:"sde",
    isemp:true

};
console.log(employee["emp_id"])
console.log(employee["employee_name"])
console.log(employee["isemp"])
console.log(employee["role"])
console.log(employee);

//ghmc employee
var ghmcemp={
    emp_id:10,
    employee_name:"suresh",
    role:"corporator",
    isemp:true,
    salary:20000
};
console.log(ghmcemp["emp_id"])
console.log(ghmcemp["employee_name"])
console.log(ghmcemp["isemp"])
console.log(ghmcemp["role"])
console.log(ghmcemp["salary"])
console.log(ghmcemp);
//ARRAYS
let vehicles=["car","bikes","lorry"]
    console.log(vehicles);
    var fruits=["banana","apple","mango"]
    console.log(fruits);
    var successs=[1,"name",5,"srija"]
    console.log(successs);
    var numbers=[1,2,3,44,5]
    console.log(numbers);

//comparison operators
let c=15
let d=18
console.log("c>d:",c>d);
console.log("c>=d:",c>=d);
console.log("c<d:",c<d);
console.log("c<=d:",c>=d);
console.log("c==d:",c==d);
let user="bhavya"
if(user){
    console.log("hello my name is" +user)
}
else{
    console.log("please enter your name")
}
//switch is used for multiple cases
let monthNumber = 7; // You can change this to any number between 1 and 12

switch (monthNumber) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid month number");
}
let str = "World";

for (let char of str) {
  console.log(char);
}
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
//string methods
let str1 = "Hello";
let str2 = 'World';
let str3 = `Hello, ${str2}`; // Template literal

// Basic properties and inspection
console.log("Length of str1:", str1.length);         // 5
console.log("First character of str2:", str2.charAt(0)); // "W"

// Case conversion
console.log("str1 to uppercase:", str1.toUpperCase());   // "HELLO"
console.log("str2 to lowercase:", str2.toLowerCase());   // "world"

// String concatenation
let combined = str1 + " " + str2;
console.log("Concatenated string:", combined);          // "Hello World"

// Includes and indexOf
console.log("str3 includes 'World':", str3.includes("World")); // true
console.log("Index of 'o' in str1:", str1.indexOf("o"));       // 4

// Slice and substring
console.log("Slice of str3 (7 to 12):", str3.slice(7, 12));    // "World"
console.log("Substring of str1 (1 to 4):", str1.substring(1, 4)); // "ell"

// Replace
console.log("Replace 'World' with 'JS':", str3.replace("World", "JS")); // "Hello, JS"

// Split
console.log("Split str3 by space:", str3.split(" ")); // ["Hello,", "World"]

// Repeat and trim
let exclaim = "Wow! ";
console.log("Repeated string:", exclaim.repeat(3)); // "Wow! Wow! Wow! "

let messy = "   Hello JS!   ";
console.log("Trimmed string:", messy.trim()); // "Hello JS!"

// Template Literal with Expression
let see = "Bhavyasri";
let greeting = `Hi, ${see.toUpperCase()}!`;
console.log(greeting); // "Hi, BHAVYA!"
//2.check if the 3rd character of a given string is a vowel or not
function generateUsername(fullName) {
  if (!fullName || fullName.trim().length === 0) {
    return "Invalid name!";
  }

  let cleanName = fullName.trim().replace(/\s+/g, '');
  let nameLength = cleanName.length;
  let username = `@chm${cleanName}${nameLength}`;

  return username;
}

// Example usage:
let userInput = prompt("Enter your full name:");
let username = generateUsername(userInput);
console.log("Generated username:", username);
//3.replace all spaces in a string with underscores(_) to make it URL_friendly//

function makeURLFriendly(str) {
  return str.replace(/ /g, "_");
}

// Example usage
let originalString = "Hello World This is JavaScript";
let urlFriendly = makeURLFriendly(originalString);

console.log(urlFriendly);  // Output: Hello_World_This_is_JavaScript
//4.given a string convert the first character to upper case and rest to lower case(like proper names)//

function toProperName(str) {
  if (str.length === 0) return ""; // Handle empty string

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Example usage
console.log(toProperName("hello"));     // Output: Hello
console.log(toProperName("jAVASCRIPT")); // Output: Javascript
console.log(toProperName("WORLD"));      // Output: World
//5.given a string clean it by :trimming,making it lowercase,replacing all spaces with input:My First BLOG Post,output:"my-first-blog-post"//

function cleanString(str) {
  return str.trim().toLowerCase().replace(/ /g, "-");
}

// Example usage
let input = "My First BLOG Post";
let output = cleanString(input);

console.log(output);  // Output: "my-first-blog-post"
//functions
function fun1(){//function without parameters
  console.log("hello")
}
fun1();
fun1();
//with parameters passing
function f1(a,b){
  console.log(a+b)
}
f1(5,8);
function f2(c,g){
  return c*g
}
console.log(f2(4,6));
//arrow functions
const g1=(a,b)=>{
  return a*b
}
console.log(g1(2,5))
let g5=(s)=>{
  return s*s
}
console.log(g5(6))
var g2=(t)=>{
  return t*5
}
console.log(g2(10));
var g3=(n,m)=>{return n*m}
console.log('return value:${g3(5,7)}')
