// CHALLENGE NAME-  Sum of Multiples

// DESCRIPTION:

// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

// Examples...

// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

// // ***STARTER CODE***

// function sumMul(n,m){
//     //your idea here
//     }

// //   ******TEST CASES*****

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("should test", () => {
//     assert.strictEqual(sumMul(0,0),"INVALID");
//     assert.strictEqual(sumMul(2,9),20);
//     assert.strictEqual(sumMul(4,-7),"INVALID");
//   });
// });

// ******MY ANSWER********

function sumMul(n,m){
    let res = 0
  for(let i = n; i < m; i++){
    if(i % n === 0)
      res += i
  }
    return res > 0 ? res : "INVALID"
  }