/*jslint browser */

// CS 3312, spring 2023
// Studio 5
// YOUR NAME: Kyle Bunger

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   // Each little web app is hidden from the others using an IIFE.
   (function () {
      // Do not declare any other variables here, but you may declare variables inside your function.

      // WRITE YOUR isPrime FUNCTION HERE
      const isPrime = function (num) {
         num = parseInt(document.querySelector('#primality-input').value, 10);
         // Verify number is an integer greater than 2
         if (!Number.isInteger(num) || num < 2) {
            return false;
         }

         let divisor; // Counter variable named divisor since that's what we're testing
         // Loop through all divisor ints up to num - 1
         for (divisor = 2; divisor < num; divisor += 1) {
            if (num % divisor === 0) {
               return false;
            }
         }

         // If none divide evenly, the number is prime. Return true
         return true;

      };
      // The report function is hidden from the isPrime function using an IIFE.
      (function () {
         // Do not declare any other variables here, but you may declare variables inside your function.

         // WRITE YOUR report FUNCTION HERE
         const report = function (num) {
            let result;
            // Verify num is a finite integer, then determine prime status
            if (Number.isFinite(num) && isPrime(num)) {
               result = 'prime';
            } else if (Number.isFinite(num) && !isPrime(num)) {
               result = 'not prime';
            } else if (!Number.isFinite(num)) {
               result = 'not a number';
            }
            // Print result to the screen
            document.querySelector('#prime-or-not').textContent = result;
         };
         // Call the report function even before there's a value to use.
         report();
         // When the number is changed at all, immediately . . .
         document.querySelector('#primality-input').addEventListener('input', function () {
            // . . . call the report function and pass it the user's value.
            report(parseInt(document.querySelector('#primality-input').value, 10));
         });
      }());
   }());

   (function () {
      // Do not declare any other variables here, but you may declare variables inside your function.

      // WRITE YOUR fibonacci FUNCTION HERE
      const fibonacci = function (n) {
         if (!Number.isInteger(n) || n < 0) {
            return 0; // Default value is n is not a positive integer
         }

         if (n < 2) {
            return n; // Base case
         }

         return fibonacci(n - 2) + fibonacci(n - 1); // Return nth Fibbonaci integer
      };
      // Do things when the "Calculate it" button is clicked.
      document.querySelector('#calculate-fibonacci').addEventListener('click', function () {
         // Get the user's number.
         const whichFibonacciNumber = parseInt(document.querySelector('#fibonacci-input').value, 10);
         // Use the fibonacci function to calculate the output.
         document.querySelector('#which-fibonacci-number').textContent = whichFibonacciNumber.toString();
         document.querySelector('#fibonacci-number').textContent = fibonacci(whichFibonacciNumber).toString();
      });
   }());

   (function () {
      // Do not declare any other variables here, but you may declare variables inside your function.

      // WRITE YOUR reverseString FUNCTION HERE
      const reverseString = function (str) {
         // Retrieve input and define an object to hold the reversed string for iteration
         // Also create a "result" object to perform concatenation with
         str = document.querySelector('#reversal-input').value;
         let newStr = '';
         let resultString = '';
         let i; // Counter variable for the for loop. References the character index

         // If valid string, use "for" loop to iterate through each character -- append to newStr
         if (typeof str === 'string' && str.length > 0) {
            for (i = str.length - 1; i >= 0; i -= 1) {
               newStr += str[i];
            }
            // Slice off last letter of reversed string -- concat first letter of original
            resultString = newStr.slice(0, newStr.length - 1) + str.charAt(0);
            return resultString;
         } else {
            str = '';
            return str; // Base case for invalid string
         }
      };

      (function () {
         const reversalInputElement = document.querySelector('#reversal-input');
         // When the user changes the string and focuses on another part of the page, reverse the new string.
         // Notice the difference between the 'change' event and the 'input' event.
         reversalInputElement.addEventListener('change', function () {
            reversalInputElement.value = reverseString(reversalInputElement.value);
         });
      }());
   }());

   (function () {
      // Blue, Green, and Red levels of square color
      let red;
      let green;
      let blue;

      const colorSquare = function (r, g, b) {
         // Changes the RGB of the square div element
         squareElement.style.backgroundColor = (
            'rgb(' + r.toString() + ', ' + g.toString()
            + ', ' + b.toString() + ')'
         );
      };

      const squareElement = document.querySelector('#colors');

      // Randomize initial square color
      red = Math.floor(Math.random() * 256);
      green = Math.floor(Math.random() * 256);
      blue = Math.floor(Math.random() * 256);
      colorSquare(red, green, blue);

      // Do things when the mouse moves in the squareElement
      squareElement.addEventListener('mousemove', function () {
         // Randomly adjust RGB colors
         if (Math.random() * 255 < red) {
            red -= 10;
         } else {
            red += 10;
         }
         if (Math.random() * 255 < green) {
            green -= 10;
         } else {
            green += 10;
         }
         if (Math.random() * 255 < blue) {
            blue -= 10;
         } else {
            blue += 10;
         }

         // Send new RGB levels to squareElement background color
         colorSquare(red, green, blue);
      });
   }());
});