//given a string convert the first character to upper case and rest to lower case(like proper names)//

function toProperName(str) {
  if (str.length === 0) return ""; // Handle empty string

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Example usage
console.log(toProperName("hello"));     // Output: Hello
console.log(toProperName("jAVASCRIPT")); // Output: Javascript
console.log(toProperName("WORLD"));      // Output: World