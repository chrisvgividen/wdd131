// 1. Javascript arrays

//                  0           1           2       3          4        5
let names =  ["Christian", "Braxton", "Cooper", "Andrew", "Kezja", "Kenzli"]; // an array of strings
console.log(names);
console.log(names[1]);
console.log(names[2]);
console.log(names[names.length - 1]); // always grabs the last thing in the array




let ages = [21, 19, 17, 14, 11, 8];


let mixArray = ["Conrad", 5, "cool math games", 3, "commander", 22];
console.log(mixArray);


// 2. Javascript objects

let studentName = "Bob";
let studentClass = "WDD131";


// literal objects
let student = {
    // key/value pairs
    name : "Bob",
    class : "WDD131",
    grade : "A",
    age : 27
}

console.log(student);
console.log(student.class);



// 3. Array methods

names.forEach((name) => {
    // This code executes once per each item in the array
    console.log(name);
})

// Map function returns a NEW array with values returned from functions
let newNameArray = names.map((name)=> {
    return name + " Gividen";
})

console.log(newNameArray);


// Filter function returns a new array with filtered values

// Good for filtering searches

let filterArray = names.filter((name)=> {
    // filter returns boolean. True keep, false don't keep.

    return name[0] === 'C';
})

console.log(filterArray);

//.reduce()
// not 100% sure what this one does, or how it works. Keep getting: Uncaught TypeError on line 71.
console.log(">");

// let reduce = document.getElementById("output").innerHTMl = ages.reduce(myFunc);

// function myFunc(total, num) {
//     return total - num;
// }

// console.log(reduce);

console.log(" < Getting errors with the .reduce() part of this assignment, not sure why.");


// .indexOf()
// This tells us what position something is in an array/list. In this case, Cooper is in position 2 (counting from zero)
// using names as the constant for this example

let index = names.indexOf("Cooper");

console.log(index);



// Template Literals

const nameSummary = `
  <div class="name-summary">
    <h2>${names.title}</h2>
    <p>${names.genre} - ${names}</p>
  </div>
`;

// document.getElementById("name-list").innerHTML += nameSummary;

console.log(nameSummary);

console.log("I don't know how I should be using Template Literals. And I get the same error here as I did in the .reduce(), saying something about how the .innerHTML is wrong. Sorry.")