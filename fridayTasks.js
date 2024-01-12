//1) Create a program that stores what you eat today for ‘breakfast:’, ‘lunch:’ and ‘dinner:’. Return the
//   string. Eg (“breakfast:pancakes, lunch:blt, dinner:steakandchips”). Don’t forget the colons. 
/* 
let mealList = (breakfast, lunch, dinner) => ` breakfast: ${breakfast}, lunch: ${lunch}, dinner: ${dinner} `

console.log(mealList('bacon roll', 'Soup & sandwitch', 'Sushi'))
*/

//2)Pass in a parameter called num. If num is a data type of string or num is less than or equal to 0,
//  return the string 'needs to be a positive number’.  If num is divisible by 3 return “fizz”, if num is
//  divisible by 5 return “buzz”, if num is divisible by both 3 and 5 return “fizz buzz”. If num is not 
//  divisible by 3 or 5 return the value of num.
/*
const checkNum = (num) => {
    if (num !== 'number', num <= 0){
        return 'needs to be a posative number (not -2 e,g.)'
    } else if (num % 3 === 0 && num % 5 === 0){
        return 'fizz buzz'
    } else if (num % 3 === 0) {
        return 'fizz'
    } else if (num % 5 === 0){
        return 'buzz'
    } 
}

console.log(checkNum(3))
*/

//3) Pass in 2 parameters called num1 and num2. Create an if statement that checks if the result of the sum
//   is even, if it is return the number, otherwise return the numbers multiplied together. If the parameters 
//   are not numbers return the error message 'make sure you enter 2 numbers'. 

const operateOnNumbers = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') 
    return 'make sure you enter 2 numbers'
    return (num1 + num2) % 2 === 0 ? num1 + num2 : num1 * num2
  }
  
console.log(operateOnNumbers(3, 5))


//4) Generate 6 random numbers between 1-50, add them to an array and return the array.
/*
let count = 0
while (count < 6) {
  const randomNum = Math.floor(Math.random() * 50) + 1
  console.log(randomNum)
  count++
}
console.log("Random Numbers:")
*/

//5) If we can create a loop to put 0-9 on the screen, how can we count from 9-0? Return an array that contains 
//   9-0 using a loop that does this. 
/*
console.log("Count from 9 to 0:")

for (let i = 9; i >= 0; i--) {
  console.log(i)
}
*/