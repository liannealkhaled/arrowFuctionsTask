// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/


const greet = (x) => `hello, ${x}`


console.log(greet(`lianne`))




// Q2) Write a simple arrow function that takes two parameters and returns their sum.

let sum = (x,y) => x+y 

console.log(sum(5,10))


// const sum = (x,y) => x+y 
// console.log(sum(2,3))

// Q3) Write a simple arrow function that squares a number.
let sqaure = (x) => x*x 

console.log(sqaure(2))


const squared = (x) => x*x
console.log(squared(4))

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
let array = [ 1,2,3,4,5]
let newarray = [ ]

newarray = array.map( (x)=> x*x )


console.log(newarray)


// const arr = [ 1,2,3,4]
// let newarray = []

// newarray =arr.map (function(x){return x*x})

// console.log(newarray)
