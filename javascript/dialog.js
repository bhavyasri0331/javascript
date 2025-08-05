alert("welcome!")
var female = confirm("Are you a female")
if(female){
    let name =prompt("Enter your name:");
    document.writeln("Hello madam"+name+"welcome to our website");
}
else{
    let name = prompt("Enter your name:");
    document.writeln("Hello Mr"+ name+"welcome to our website");
}