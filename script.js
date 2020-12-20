// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. Log a string with the result, for example "The result of squaring the number 3 is 9."

// Defined, stored in memory (we trained our application to go something,  sweet!)
function squareNumber(num) {
return num ** 2
}



/*
// Call to action, output the value of the variable
console.log(`The square root of the number is:  ${squareNumber(5)}.`)
*/

// Ideal way to write 
function squareNumber(num) {
    console.log(`The square root of ${num} is: ${num ** 2}`)
    return num ** 2
}

let numToSq = 4
squareNumber(numToSq)
squareNumber(2) 
squareNumber(3)
squareNumber(4)

console.log(`When we send in ${numToSq}, we get ${squareNumber(numToSq)}`)

// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. Log a string with the result, for example: "Half of 5 is 2.5.".

function halfNumber(numb) {
    console.log(`Half of ${numb} is ${numb / 2}.`)
    return numb / 2
}

halfNumber(17) 
halfNumber(18)
halfNumber(19)


// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. Log a string with the result, for example: "2 is 50% of 4."
    
function percentOf(numValue) {
    console.log(`${numValue * percent} is ${percent * 100}% of ${numValue}`)
    return percent * 100
}
let percent = .5
percentOf(4)
percentOf(8)
percentOf(16)

// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on parameter, and return the result. Log a string with the result, for example: "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Do some searching to see if you can find a way to round the result so that there are exactly two fixed digits after the decimal.

let radius = 2
let pi = Math.PI

function areaOfCircle(radius) {
     console.log(`The area for a circle with radius 2 is ${Math.round(area * 100)/100}.`)
     return pi * radius ** 2 
} 

let area = pi * radius ** 2 
areaOfCircle(2)


// EXERCISE 5
// Write a function named runAll that will take one argument (a number) and perform the following operations, calling to the functions you wrote earlier
//      1. Calculate half of the starting number and store the result
//      2. Square the result of the first step (#1) and store it
//      3. Find the area of a circle, using the previous result (#2) as its radius  
//      4. Calculate what percentage the squared result (#2) is of the circle's area (#3)
//      5. Format the final result for output to the console

// 1
let aNumber = 8

function runAll(aNumber){
    console.log(`5.1 Half of the starting number is ${aNumber / 2}`)
    return aNumber / 2
}
runAll(8)

// 2
let resultOne = 4 

function squaredRes (resultOne){
    console.log(`5.2 The result of the first step squared is ${resultOne ** 2}`)
    return resultOne ** 2
}
squaredRes(4)

// 3
let newRadius = 16
let circPi = Math.PI

function aOfCircle(newRadius) {
     console.log(`5.3 The area for this circle with it's radius as 16 is ${Math.round(newArea * 100)/100}m.`)
     return circPi * newRadius ** 2 
} 

let newArea = circPi * newRadius ** 2 
aOfCircle(16)

// 4
let cirPercent2 = .16

function percentOf2(cirArea) {
    console.log(`5.4 ${cirArea * cirPercent2}m is ${cirPercent2 * 100}% of ${cirArea}m`)
    return cirPercent2 * 100
}
percentOf2(804.25)

document.querySelector(`ol.list.items`).innerHTML
