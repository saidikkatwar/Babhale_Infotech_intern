// Q.1> // print numbers from 1 to 10
// function pprintOneToTen() {
//     for (let i = 1; i <= 10; i++) {
//       console.log(i);
//     }
//   }
//   pprintOneToTen();


// Q.2> print odd from numbes less than 100
// function printOddNumbersLessThan100() {
//     for (let i = 1; i < 100; i += 2) {
//       console.log(i);
//     }
//   } 
//   printOddNumbersLessThan100();


// Q.3> multiplication table with 7
// function printMultiplicationTableOf7() {
//     const number = 7;
//     for (let i = 1; i <= 10; i++) {
//       const product = number * i;
//       console.log(`${number} x ${i} = ${product}`);
//     }
//   }
//   printMultiplicationTableOf7();


// Q.4> multiplication tables with numbers friom 2 to 10
// function printAllMultiplicationTables() {
//     for (let number = 2; number <= 10; number++) {
//       console.log(`\nMultiplication Table of ${number}:\n`);
//       for (let i = 1; i <= 10; i++) {
//         const product = number * i;
//         console.log(`${number} x ${i} = ${product}`);
//       }
//     }
//   }
//   printAllMultiplicationTables();


// Q.5> sum of numbers from 1 to 10
// function sumOfNumbersFrom1To10() {
//     let sum = 0;
//     for (let i = 1; i <= 10; i++) {
//       sum += i; // Add the current number to the sum
//     }
//     console.log("The sum of numbers from 1 to 10 is:", sum);
//   }
//   sumOfNumbersFrom1To10();


// Q.6> factorial of 10
// function factorial(n) {
//     if (n < 0) {
//       return "Factorial is not defined for negative numbers";
//     } else if (n === 0) {
//       return 1;
//     } else {
//       let result = 1;
//       for (let i = 1; i <= n; i++) {
//         result *= i;
//       }
//       return result;
//     }
//   }
//   const number = 10;
//   const fact = factorial(number);
//   console.log(`The factorial of ${number} is: ${fact}`);


// Q.7> sum of odd numbers greater than 10 and less than 30
// function sumOfOddNumbersInRange() {
//     let sum = 0;
//     for (let i = 11; i < 30; i += 2) {
//       sum += i;
//     }
//     console.log("The sum of odd numbers greater than 10 and less than 30 is:", sum);
//   }
//   sumOfOddNumbersInRange();


// Q.8> sum of numbers in an array of numbers
// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;
//   }
// const numbers = [10, 25, 5, 30, 15, 40, 20, 35];
// const totalSum = sumArray(numbers);
// console.log("The sum of the numbers in the array is:", totalSum);


// Q.9> calculate average of the numbers in an array of numbers
// function Avgarray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum/arr.length;
//   }
//   const numbers = [10, 25, 5, 30, 15, 40, 20, 35];
//   const Average = Avgarray(numbers);
//   console.log("The average of the numbers in the array is:", Average);


// Q.10> a funtion recieved an array and reutrn the array only with positive numbers
// function getPositiveNumbers(arr) {
//     const positiveNumbers = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 0) {
//         positiveNumbers.push(arr[i]);
//       }
//     }
//     return positiveNumbers;
//   }
// const numbers = [-5, 10, 0, -2, 8, -1, 15, 3, -7, 20];
// const positiveArray = getPositiveNumbers(numbers);
// console.log("Array with positive numbers:", positiveArray);