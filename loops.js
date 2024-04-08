//show array individually
/*let drinks = [
    "coke",
    "orange juice",
    "water",
]
console.log(drinks[0])
console.log(drinks[1])
console.log(drinks[2])*/
//FOR LOOP example:
/*let multiplesOfThree = [];
for(let i=0; i<20; i++){
    if(i % 3 == 0) {multiplesOfThree.push(i)}
}
console.log(`numbers divisable by 3 are ${multiplesOfThree}`)*/

// create an aray of cards
/*let cards = ["diamond", "hearts", "spade", "club"]
let currentCard = "club"

// if the currentcard is not equal to spade 
while (currentCard != "spade")
{
// then it will display the currentcard
    console.log(currentCard)
//get a random number. round down becuase if its math.ceil it will go up and the length of the array doesnt go high
    currentCard = cards[Math.floor(Math.random()*4)]
//when currentcard finally comes to spade the code will stop running
}
console.log(currentCard)*/


//INDIVIDUAL WORK 1

//individually showing the movies
/*let favMovies = ["harry potter","star wars","hobbit","GOT","godfather"]
favMovies.push("lion king","assassins creed")
for(let i=0; i < favMovies.length; i++)
{
    console.log(favMovies[i])
}*/

//INDIVIDUAL WORK 2

/*//i=0 means there are no number
//i<6 need numbers only up to 6
//i++ means keep adding numbers until it reaches 6 numbers
for(let i=0; i<6; i++)
//rounded random number *100 so that its a full number 
{
let random = console.log(Math.ceil(Math.random()*100))
}*/

//multiplication table
let number = 3
for(i=1;1<10;i++)
{
    console.log(`${i} multiplied by ${number} = ${i*number}`)
}
