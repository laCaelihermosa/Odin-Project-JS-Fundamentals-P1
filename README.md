Working with variables
importance: 2
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).

# What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?

- The answer is:

    a = 2
    b = 2
    c = 2
    d = 1
    let a = 1, b = 1;

    alert( ++a ); // 2, prefix form returns the new value
    alert( b++ ); // 1, postfix form returns the old value

    alert( a ); // 2, incremented once
    alert( b ); // 2, incremented once


# What are the values of a and x after the code below?

let a = 2;

let x = 1 + (a *= 2);

The answer is:

a = 4 (multiplied by 2)
x = 5 (calculated as 1 + 4)

# Here’s a code that asks the user for two numbers and shows their sum.

It works incorrectly. The output in the example below is 12 (for default prompt values).

Why? Fix it. The result should be 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12


solution
The reason is that prompt returns user input as a string.

So variables have values "1" and "2" respectively.

let a = "1"; // prompt("First number?", 1);
let b = "2"; // prompt("Second number?", 2);

alert(a + b); // 12
What we should do is to convert strings to numbers before +. For example, using Number() or prepending them with +.

For example, right before prompt:

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3
Or in the alert:

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3
Using both unary and binary + in the latest code. Looks funny, doesn’t it?

# What are results of these expressions?

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2
Think well, write down and then compare with the answer.

solution
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)
The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
The addition with a string appends the number 5 to the string.
The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
null becomes 0 after the numeric conversion.
undefined becomes NaN after the numeric conversion.
Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.

Try the following exercises (and don’t forget to use console.log()!):

Add 2 numbers together! (just type console.log(23 + 97) into your html file)
Add a sequence of 6 different numbers together.
Print the solution to the following equation: (4 + 6 + 9) / 77
Answer should be approximately 0.24675
Let’s use variables!
Type this statement at the top of the script tag: let a = 10
In the console console.log(a) should print 10
Try the following in the console: 9 * a
and this: let b = 7 * a (returns undefined *) and then console.log(b)
You should be getting the hang of this by now… try this sequence:
Declare a constant variable max with the value 57
Set another variable actual to max - 13
Set another variable percentage to actual / max
If you type percentage in the console and press enter you should see a value like 0.7719

* As you might have noticed by running Javascript code in the console, the console prints the result of the code it executes (called a return statement). You will learn more about these in the next lessons, however for now it is good to remember that a declaration with an assignment (such as let b = 7 * a) returns undefined and so you cannot declare and assign a value to a variable and read its value in the same line.