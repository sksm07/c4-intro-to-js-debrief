//1. GenBuzz
// Create variable myNumber
// Check that the value of the myNumber is of type number
// If myNumber is not a number, print 'This is not a number' to the console.
// If value of myNumber is a multiple of 3 print 'Gen' to the console
// If value of myNumber is a multiple of 5 print 'Buzz' to the console
// If the value of myNumber is a multiple of both 3 and 5 (ex. 15) print GenBuzz to the console
// If the value of myNumber is any other number print the value of myNumber to the console.
// Reference Codecademy lessons: Introduction- Arithmetic Opertaors, Conditional Statements lessons 3, 4, 5,and 9

//Write your code for GenBuzz below this line:



let myNumber=15;
if(typeof myNumber==='number'){
    if(myNumber%3===0 && myNumber%5===0){
        console.log('GenBuzz')}else if(myNumber%3===0){
            console.log('Gen')
        }else if(myNumber%5===0){
            console.log('Buzz')
        }else{console.log(myNumber);}
}else{console.log('This is not a number!')}






//2. E-COMMERCE ITEM LIST

// Use a swtich statement to print the price of the each item in the store to the console.
// Ex. If the value of the variable is 'shoes' then, the statement "Shoes are $50" should be printed to the console.
// Reference: Codecademy lesson 10
// Items:
// Shoes- $50
// Jeans- $25
// Hat- $12
// Socks- $2
// If the variable input is not an item in the store, then print 'Invalid Item' to the console.

//Write your code for the E-Commerce item list below this line:


let item='shoes';
switch (item){
    case Shoes:
        console.log('Shoes are $50')
        break;
    case Jeans:
        console.log('Jeans are $25')
        break;  
    case Hat:
        console.log('Hat is $12')
        break;
    case Socks:
        console.log('Socks are $2')
        break;
    default:
        console.log('Invalid Item') 
        break;     
}


//3. Print a random integer (whole number) between 50(inclusive) and 100(exclusive) to the console
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Write your code below this line:

function randomInteeger(min,max){
    min=Math.ceil(min)
    max=Math.floor(max)
    console.log(Math.floor(Math.random()*(max-min)+min));
}
randomInteeger(50,100);
