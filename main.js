//1 Declare two variables: admin and name.
let admin;
let name;

//Assign the value "John" to name.
name = "john";

//Copy the value from name to admin.
admin = name;

alert(admin);

//alert pops up with no '' quotes inside the brackets
//when alert('admin'); ()or even double quotation alert = admin

// ('')__/ 

//2 Create a variable with the name of our planet. How would you name such a variable?
//Create a variable to store the name of a current visitor to a website. How would you name that variable?

let ourPlanetName = heart;

let currentName = "yournamehere";

//3 considering :
const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

const AGE = someCode(BIRTHDAY); // make age uppercase?

//We generally use upper case for constants that are “hard-coded”. Or, in other words, when the value is known prior to execution and directly written into the code.

//In this code, birthday is exactly like that. So we could use the upper case.

//In contrast, age is evaluated in run-time. Today we have one age, a year after we’ll have another one. It is constant in a sense that it does not change through the code execution. But it is a bit “less of a constant” than birthday: it is calculated, so we should keep the lower case for it.

//argument = operand

//FOR BINARY (tow opeerands or arguments in the operation)

// +   
// if ANY OF THE ARGUMENTS HAS STRING = CONCATENATION, else = REGULAR ADDITION OPERATION

//alert(1 + "1");  displays 11
//alert("1" + 1);  displays 11
//alert ("1"+"1"); displays 11
//alert(1+1); DISPLAYS 2

//It appears that there are a gerargical order in more complex examples

//alert(2 + 2 + '1' ); // "41" and not "221"	
//alert('1' + 2 + 2); "122" and not "14"
//alert(2 + 2 + '1' + 2 + 2); = "4122"
//alert(2 + 2 + '1' + 2 + 2 + '1'); "41221"

//BEFORE the string '1' (at the left of the operation),  2+2 is a regular addition
//AFTER the string '1', (at the rigth of the operation) numbers concatenant each other
//and it still a string any time
//--------------------------------------------------------------------------------------------//


// -
//ANY argument whether number or string in subtraction = number

//alert( "5" - "1"); displays 4, NUMBER(''-''=number DESPITE STRINGS)
//alert('6' - 2); displays, 4 (one STRING - a number become a number ""-number=number, number-"=number") 
//alert(2 - '6'); DISPLAYS, -4 A NUMBER
//alert(5 - 3); DISPLAYS 2, A NUMBER

//alert(2 - 2 - '1' ); = -1	
//alert('1' - 2 - 2); = -3
//and so on beacause any argument whater... = number, for * and / too


// /
//ANY argument whether number or string in DIVISION = number

//alert( '6' / '2' ); =3
//alert( 6 / '2' ); = 3 also swapping operands
//alert(6 / 2);  =3

//* 
//ANY argument whether number or string in MULTIPLICATION = number


//Odin's complementary exercises

//alert( '6' * '2' ); =12
//alert( 6 * '2' ); = 12 also swapping operands
//alert(6 * 2);  =12

// console.log(23 + 97);

// console.log(1+2+3+4+5+6);

// console.log((4+6+9)/77);


// let a = 10
// console.log(a);
// console.log(9*a);


// let b = 7*a
// console.log(b)




// const max = 57
// const actual = max - 13

// const percentage = (actual/max);

// console.log(percentage);


