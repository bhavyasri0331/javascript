const names = ["spongebob","patrick","squidward","cummins"];
const person ={
    "name":"spongebob",
    "age":30,
    "isEmployed":true,
    "hobbies":["jellyfishing","karate","Matrial Arts"]
};
const people =[
  {
    name: "ram",
    age: 40,
    isEmployee: false,
    
  },
  {
    name: "shyam",
    age: 50,
    isEmployee: true,

  },
  {
    name: "siri",
    age: 36,
    isEmployee: false
  }
];


const jsonstring =JSON.stringify(people);
console.log(jsonstring) ;