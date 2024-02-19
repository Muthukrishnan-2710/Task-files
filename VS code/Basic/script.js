//primitive data types
var number = 10; // number
var name = "Muthu Krishnan"; // string
var percentage = 6.5; // number
var flag = true; // boolean

console.log(number, typeof number);
console.log(name, typeof name);
console.log(percentage,typeof percentage);
console.log(flag, typeof flag);

// Non primitive data types
//array
// collection of data types
const arr = [10, "Muthu Krishnan" , percentage, false,{mentor: "sanjay"}];
console.log(arr);
// object json
// key and value

const obj = {
    mentor: "sanjay",
    batchsize: 50,
    isstrated: true,
    arr: [1,2, "d"],
};
console.log(obj);

// copy by value and copy by reference
var num1 = 10;
var num2 = num1;
num2 = 15
console.log("num1 ", num1);
console.log("num2" , num2);

// copy by reference
let studentarr =["Muthu", "Krishnan", "Varun"];
let studentarrcopy = studentarr;
studentarrcopy[2] = "Krish";
console.log("student array", studentarr);
console.log("studentarrcopy", studentarrcopy);

//deep copy
const oldobjectname = "krish";
const newobject = Object.assign({},oldobjectname);
newobject.name = "pradeep";
console.log("old", oldobjectname);
console.log("new", newobject);

//json object iteration
//way 1) dot notation
console.log(obj.mentor);
//way 2)map interation
console.log(obj["mentor"]);
//array iteration
console.log(arr[0]);

//XML HTTP Request
// https://restcountries.com/v3.1/all

Let Xhr = new XMLHttpRequest();
console.timeLog(Xhr);
Xhr.open("GET", "https://restcountries.com/v3.1/all");
Xhr.send();
Xhr.onload = function () {
    const data = JSON.parse(Xhr.response);
    console.log(data);
};

let dummy json = {
    name: "Muthu",
};

Const 


