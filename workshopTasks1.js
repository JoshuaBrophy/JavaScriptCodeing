/*/ task 1
//
let favoriteFilms = ["Apocalypse Now",
                     "Deer hunter", 
                     "28 days later", 
                     "night of the living dead", 
                     "Lord of the rings: The fellowship of the ring"]

favoriteFilms.push("Lord of the rings: The Two Towers ",
                   "Lord of the rings: The Return of the King")

console.log("List of Favorite Films:")
for (let film of favoriteFilms) {
  console.log(film)
}
*/
//task 2

/*/ 
console.log("Random Numbers:")

let count = 0;
while (count < 6) {
  const randomNum = Math.floor(Math.random() * 50) + 1
  console.log(randomNum)
  count++
}
*/
/*
//task 3

console.log("Counting from 9 to 0:")

for (let i = 9; i >= 0; i--) {
  console.log(i)
}
*/
//task 4
//correct placemnet of ghostbusters in the 3rd place in the list 

let films = ["Fantasia",
             "A bugs life", 
             "Ghostbusters", 
             "the shawshank redemption"];

console.log("List of Films:");
for (let film of films) {
  console.log(film);
}
console.log(films[2] === "Ghostbusters" ? "Yay, it's Ghostbusters!" : "Boo! We want Ghostbusters!");

let films1 = ["Ghostbusters",
             "A bugs life", 
             "Time bandits", 
             "the shawshank redemption"];

console.log("List of Films:");
for (let film of films1) {
  console.log(film);
}
console.log(films1[2] === "Ghostbusters" ? "Yay, it's Ghostbusters!" : "Boo! We want Ghostbusters!");

//task 5

for (let i = 0; i < 6; i++) {
    console.log(Math.random() * 30);
  }