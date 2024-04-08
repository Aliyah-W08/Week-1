//EXAMPLE
/*let coffeeIsGrinding = false
const PressGrindBeans = () => 
{
    if(coffeeIsGrinding===true){
        console.log("Stopping the grind.");
        coffeeIsGrinding=false
    }else(console.log("starting the grind"));
coffeeIsGrinding=true
}
PressGrindBeans () // calling the function
PressGrindBeans ()
PressGrindBeans ()*/

// these are the parameters 
/*let cashWithdrawal = (amount,accnum) => 
{
    console.log(`withdrawing ${amount} from account number ${accnum}`)
}
cashWithdrawal (300,54678)
cashWithdrawal (50 , 123456)
cashWithdrawal (2000,678594)*/

/*let addUp = (num1,num2) => 
{
    return num1 + num2 //  return will give an answer when you call the function
}
addUp(2,3)
console.log(addUp(2,3)) // calling the function twice but will only see one with the console.log */

/*let minus32 = (farenheit) => 
{
    return farenheit - (32)
}
let getCelcius = (farenheit) =>
{ //        getting the 55-32 and multiplying it here
    return minus32 (farenheit) * (5/9)
}//                                telling the code that the original temp was 55
console.log(`the temperature is ${getCelcius(55)} C`)*/

//Activity 1
let calculateAverage = (mathScore, scienceScore, englishScore) =>
{
    return mathScore+scienceScore+englishScore/3
}

console.log(calculateAverage(15,20,10)) // I am giving the score for the parameters (each subject)
{
    return calculateAverage
}




