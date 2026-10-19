
/*
 * File Name: declarations.js
 * Author: Kent Adrian
 * Date: October 19, 2026
 * Subject: IT103 - Programming 1
 * Week 3: Declaration Keywords and Comments
 */

// Use const for values that should stay fixed.
const STUDENT_NAME = "Kent Adrian";
const COURSE = "BSIT1M";
const PASSING_MARK = 75;

// Use let for values that need to change.
let score = 80;
score = 90; // The score changes after a new assessment.

// Demonstrate why const is used for fixed values.
console.log("STUDENT INFORMATION");
console.log("Name:", STUDENT_NAME);
console.log("Course:", COURSE);
console.log("Passing Mark:", PASSING_MARK);
console.log("Updated Score:", score);

// Demonstrate block scope: let stays inside its block.
if (true) {
    let blockMessage = "This variable exists inside the block.";
    console.log(blockMessage);
}

// Use a meaningful variable name and a comment explaining why.
const cartItems = [];
cartItems.push("Notebook"); // The list can grow even though it uses const.

console.log("\nSHOPPING CART");
console.log("Cart Items:", cartItems);

// Demonstrate why var is avoided in modern JavaScript.
function demonstrateVarScope() {
    if (true) {
        var oldStyleMessage = "var is visible outside this block.";
    }

    console.log(oldStyleMessage);
}

demonstrateVarScope();

// Summary of the declaration keywords.
console.log("\nDECLARATION KEYWORDS");
console.log("const: use when the variable will not be reassigned.");
console.log("let: use when the variable needs to be reassigned.");
console.log("var: avoid it in modern JavaScript because of its function scope.");
