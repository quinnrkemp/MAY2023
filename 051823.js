// CHALLENGE NAME-  For Twins: 1. Types

// DESCRIPTION:

// Task:
// Write a function that will accept two parameters: variable and type and check 
// if type of variable is matching type. Return true if types match or false if not.

// Examples:
// 42, "number"   --> true
// "42", "number" --> false

// // ***STARTER CODE***

// function typeValidation(variable, type) {
//     // Your code should be here ;) 
//   } 

// //   ******TEST CASES*****

// describe("Basic Tests", function() {
//     Test.assertEquals(typeValidation(42, "number"), true);
//     Test.assertEquals(typeValidation("42", "number"), false);
//   }); 

// ******MY ANSWER********

function typeValidation(variable, type) {
    if(typeof variable=== type) {
      return true
    }
    
    else {
     return false 
   }
     // Your code should be here ;) 
   }