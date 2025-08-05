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
console.log(typeof big_number)
var id=Symbol('id')//symbol
console.log(typeof id)

//NON PRIMITIVE DATA TYPES
//OBJECTS
var employee={
    emp_id:4,
    employee_name:"ramesh",
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

const laptop={
    brand:"lenovo",
    rating:4,
    discount:true,
    price:36 
};
console.log(laptop);

//assignment operators
let a=5
let b=10
console.log("a += b:",a +=b);//a=a+b
console.log("a -= b:",a -=b);//a=a-b
console.log("a *= b:",a *=b);//a=a*b
console.log("a %= b:",a %=b);//a=a%b
console.log("a ** b:",a **b);//a=a^b
//comparison operators

let c=15
let d=18
console.log("c>d:",c>d);
console.log("c>=d:",c>=d);
console.log("c<d:",c<d);
console.log("c<=d:",c>=d);
console.log("c==d:",c==d);
console.log("c!=d:",c!=d);
console.log("c===d:",c===d);