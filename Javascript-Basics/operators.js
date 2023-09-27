// Assignment Operator
// let x = 5
// x*=5

// console.log(x)

// Arithmetic operator
// let num1=10
// let num2=20
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1%num2);
// console.log(num1**num2);  //powerOf

// Increment & Decrement operator
//  console.log(++num1);
//  console.log(++num1);
//  console.log(num1++);
//  console.log(num1);

//  Comparitor Operator  (true or false)

//  console.log(1<5);
//  console.log(1>5);
//  console.log(1===5); //Strict equality operator (datatype + value)
//  console.log(1==5);  // loose equality operator (String + number)
//  console.log(1<=5);
//  console.log(1>=5);
//  console.log(1!==5);
// let age=25;
// // Ternary Operator : condition ? 'value1' : 'value2'
// let type = age>18?"Adult Ticket":"Child Ticket"   
// console.log(type);

// console.log(false && true);
// console.log(false || true);
// console.log(!true);

// Logical Operators
// highIncome, cibilScore -> Loan Eligible, Non-eligible
let highIncome = true;
let cibilScore = true;
let eligiblePerson = highIncome || cibilScore;
let applicationStatus = !eligiblePerson;
console.log("Loan Status : " + eligiblePerson);
console.log("Application Status : " + applicationStatus);

// Bitwise Operators
// Human code -> Machina code (0,1)
// 1 -> 000000001 -> 1
// 2 -> 000000010 -> 2
// R -> 000000000 -> 0

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // & Bitwise AND

// Operator Precedence 
let x1 = 2 + 5 * 10;
console.log(x1);

let x2 = (2 + 5 ) * 10;
console.log(x2);










