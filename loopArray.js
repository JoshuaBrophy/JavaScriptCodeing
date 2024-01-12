
/*
let coffeeOrder = [
    "josh - americano",
    "bob  - Latte",
    "garry - flat wite",
    "phillis - milk"
]
console.log(coffeeOrder[0]);
*/


/*
let coffeeOrder = [
    "josh - americano",
    "bob  - Latte",
    "garry - flat wite",
    "phillis - milk"
]
coffeeOrder[2] = "phil  -  water"
console.log(coffeeOrder.length)
*/
/*
let coffeeOrder = [
    "josh - americano",
    "bob  - Latte",
    "garry - flat wite",
    "phillis - milk"
]
coffeeOrder.push('josh - americano')
console.log(coffeeOrder)
*/

/*
let favoriteSongs = ["song 2 (blur)",
                     "walk (pantera)", 
                     "bad mans world (jenny lewis)", 
                     "duailty (slipknot)"
];

// Display the initial array
console.log("Initial Array:", favoriteSongs)

// Add a new song to the end using push()
favoriteSongs.push("duailty (slipknot)")
console.log("After push():", favoriteSongs)

// Remove the last song using pop()
favoriteSongs.pop()
console.log("After pop():", favoriteSongs)

// Adding a new song to the beginning using unshift()
favoriteSongs.unshift("NewSong2");
console.log("After unshift():", favoriteSongs)

// Removing the first song using shift()
favoriteSongs.shift();
console.log("After shift():", favoriteSongs)

// Creating a new array with a subset of songs using slice()
let newSongsSlice = favoriteSongs.slice(1, 3)
console.log("New Array with slice():", newSongsSlice)

// Removing and adding songs at a specific position using splice()
favoriteSongs.splice(1, 2, "Genysis (justice)", "Terror (terror)")
console.log("After splice():", favoriteSongs)
*/


/*
let favroiteDrinks = ["coke", "orange", "coffee"]

for (let i = 0; i < favroiteDrinks.length; i++){
    console.log(favroiteDrinks[i])
}
*/

/*
let multiplesOfTwo = [];

for (let i = 0; i < 20; i++){
    if (i % 2 == 0){
        multiplesOfTwo.push(i)
    }
}

console.log(`numbers divisable by 2 are ${multiplesOfTwo}`)
*/

/*
let age = 15

while (age < 18 ){
   console.log("your a child")
   age++ 
}

console.log("your an adult")
*/

let cards = ["diamond", "spade", "heart", "club"]
let currentCard = "club"

while (currentCard != "spade") {
    console.log(currentCard)
    currentCard = cards[Math.floor(Math.random()*4)]
}
console.log(currentCard)