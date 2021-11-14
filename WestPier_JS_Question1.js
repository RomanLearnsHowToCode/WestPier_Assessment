// WestPier studios - JavaScript:

/* QUESTION 1:  ORIGINAL CODE:

const obj = {foo: ‘bar’};

obj.method = function() {

    var logFunction = function() { 
        console.log("My foo is:", this.foo);
    };
    logFunction();
};

obj.method();
*/

/* QUESTION 1 PART 1:

    For the code below, what will the console print when console.log is called?

*/

/* ANSWER PART 1:
This will produce UNDEFINED,
var logFunction on line 10 is global function

We can prove this by editing the line 10 by: console.log("My foo is:", this);
this will produce the window object and global
*/


/* QUESTION 1 PART 2:

    Provide up to 4 ways that you could change the code, so that the THIS
    within logFunction references the correct context.

*/


/*1)We can modify the obj.method function and include the console.log inside, then we can delete the logFunction*/

// const obj = {foo: 'bar'};

// obj.method = function() {
//     console.log("My foo is:", this.foo);
// };

// obj.method();


/*2) We can include the function inside the obj object*/


// const obj = {foo: 'bar',
//  logFunction(){
//     console.log("My foo is:", this.foo);
// }};

// console.log(obj);


/*3) Referencing obj.foo instead of this.foo*/

// const obj = {foo: 'bar'};

// obj.method = function() {
//     var logFunction = function() { 
//         console.log("My foo is:", obj.foo);
//     };
//     logFunction();
// };

// obj.method();


/*4) We can parse obj into obj.method, and assigning this foo to obj.foo*/

// const obj = {foo: 'bar'};

// obj.method = function() {
//     var logFunction = function() {
//         this.foo = obj.foo;
//         console.log("My foo is:", this.foo);
//     };
//     logFunction();
// };

// obj.method(obj);
