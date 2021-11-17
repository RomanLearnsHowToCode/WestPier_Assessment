// WestPier studios - JavaScript Question 2:
console.log("*** QUESTION 2: ***");
/* QUESTION 2: Original code */

const myFunction = function() {
     var myVar = 0;

    return function() {
         myVar++;
        return myVar;
    };
};
    
const first = myFunction();
const second = myFunction();

console.log("Original code response: ")
console.log(first());
console.log(first());
console.log(second());
console.log(second());
console.log(first());
console.log(" ");

/* ANSWER: 
    This code would produce 1,2,1,2,3 
    the reason for this is, that const first and const second are new instances of myFunction, where myVar is being incremented every time it is returned,
    we can prove this by creating a new function with text variable on line 28, line 30 declare var text which contains string text, 
    we are logging to console on line 40 FUNCTION third, this will run the return function, assign new string to text variable and return it.
*/

console.log("New function response: ");

const textVariable = function () {

    var text = "text";
    
    return function () {
        text = "returnedText";
        return text;
    };
}

const third = textVariable();
console.log(third());
console.log("*** END OF QUESTION 2 ***");
console.log(" ");
