//array format example 
/*let coffeeOrder = [
    "Bob - latte",
    "sarah - Americano",
     "steve - flat white", // commas are needed 
]
console.log(coffeeOrder[1]) // if you want to select a specific order you include that number 
                            // in the square brackets either 0,1,2
console.log(coffeeOrder.length)// this tells you how many items are in the list 

//adding an array with method .push()
coffeeOrder.push("aliyah - iced coffee")
console.log(coffeeOrder)*/


//ACTIVITY
/*let height = [
    "Bob - tall",
    "Sarah - Medium",
    "Steve - Small",
]
console.log(height.length)
console.log(height[1])
height[1] = "Mia - average"
console.log(height[1]) // it will show line 16 and 18 because its before and after the change
//splice can add or take an array
height.splice(0,0,"Brian - very tall") //.splice(position,how many items you want changed,your replacement)
console.log(height)*/

//individual work 1
/*let num = [
    "1",
    "2",
    "3"
]
console.log(num)
num.push("4") 
console.log(num)// push addes an element to the end

num.pop()
console.log(num)// pop removes the last element

num.unshift("0")
console.log(num)// unshift addes an element to the beginning

num.shift()
console.log(num)// shift removes the first element*/

//individual work 2
/*let name = [
    "Aliyah",
    "mia",
    "brian",
]

name.forEach(name => console.log(name))//forEach uses the function given on each element in the array

name.map(name=>(console.log(name.toUpperCase()))) //map does the funcion provided on every element

let startsWithA = name.filter((name)=> name.startsWith("A"))
console.log(startsWithA) // filter, filters out all the names and leaves the ones starting with A*/


//individual work 3
/*let numArray = [
    "1",
    "2",
    "3",
    "4",
]
console.log(numArray.includes("4"))// includes will see if it has that specific element and will provide a true/false
console.log("it is " + numArray.includes("4"))//making it a sentence
console.log(numArray.indexOf("2"))// indexOf will find the index of the element

let string = [
    "camel",
    "zebra",
    "horse"
]
string.sort()
console.log(string)// sort will make it into alphabetical order

string.reverse()
console.log(string)// reverse will reverse the order*/

//individual activity 4
let numArray2 = [
    "1",
    "3",
    "5",
    "7"
]
numArray2.reduce() // DONT UNDERSTAND
console.log(numArray2)

/*console.log(numArray2.slice(0,2))//slice will take the remaining number off
                                 //format - .slice(start,end)
            
numArray2.splice(1,0,"2")
console.log(numArray2) // splice adds a number in 

numArray2.splice(0,1,"0")
console.log(numArray2)// splice can also replace a number 

let numArray3 = [
    "8",
    "9",
    "10",
    "11",
]
let array = numArray2.concat(numArray3)
console.log(array) // concat merges 2 arrays together */


