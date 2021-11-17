// WestPier studios - JavaScript:
console.log("**** WestPier Studios JavaScript ****");
console.log(" ");
console.log("*** QUESTION 1 PART 1: ***");

//QUESTION 1:  ORIGINAL CODE:
console.log("Original code response:");
const obj = {foo: 'bar'};

obj.method = function() {

    var logFunction = function() { 
        console.log("My foo is:", this.foo);
    };
    logFunction();
};

obj.method();

console.log(" ");

/* QUESTION 1 PART 1:

    For the code below, what will the console print when console.log is called?

*/

/* ANSWER PART 1:
This will produce UNDEFINED,
var logFunction on line 12 is global function

We can prove this by editing the line 12 by: console.log("My foo is:", this);
this will produce the window object and global properties
*/

console.log("*** QUESTION 1 PART 2: ***");

/* QUESTION 1 PART 2:

    Provide up to 4 ways that you could change the code, so that the THIS
    within logFunction references the correct context.

*/

/*1)We can modify the obj.method function and include the console.log inside, then we can delete the logFunction*/
console.log("** 1st way resposne **");

const obj2_1 = {foo: 'bar'};

obj2_1.method = function() {
    console.log("My foo is:", this.foo);
};

obj2_1.method();

/*2) We can include the function inside the obj object*/
console.log("** 2nd way response **");

const obj2_2 = {foo: 'bar',
 logFunction(){
    console.log("My foo is:", this.foo);
}};

console.log(obj2_2);

/*3) Referencing obj.foo instead of this.foo*/
console.log("** 3rd way response **");
const obj2_3 = {foo: 'bar'};

obj2_3.method = function() {
    var logFunction = function() { 
        console.log("My foo is:", obj2_3.foo);
    };
    logFunction();
};

obj2_3.method();

/*4) We can parse obj into obj.method, and assigning this foo to obj.foo*/
console.log("** 4th way response **");
const obj2_4 = {foo: 'bar'};

obj2_4.method = function() {
    var logFunction = function() {
        this.foo = obj2_4.foo;
        console.log("My foo is:", this.foo);
    };
    logFunction();
};

obj2_4.method(obj2_4);

console.log("*** END OF QUESTION 1 ***");
console.log(" ");
