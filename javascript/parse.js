const jsonString = '[{"name":"janu","age":20,"isEmployee":true,"hobbies":["jelly","cricket","reading"]},{"name":"rkeerthi","age":40,"isEmployee":false},{"name":"manu","age":50,"isEmployee":true},{"name":"siri","age":36,"isEmployee":false}]';

const people = JSON.parse(jsonString);

// Loop through and log the details
people.forEach(person => {
  console.log(Name: ${person.name}, Age: ${person.age}, Employee: ${person.isEmployee});
});