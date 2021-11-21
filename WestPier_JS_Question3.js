//WestPier Studios - JavaScript

/* QUESTION 3: */

//1) Write a class “Person”, constructed with a name, surname, and age. - done
//2) Implement an instance method “getDescription” for “Person” which returns the name, surname and age of the person as one string. e.g. "John Smith, 47". - done
//3) Write a subclass “Teacher” of “Person” which is additionally constructed with a list of subject names that they teach. - done 
//4) Override “getDescription” on “Teacher” so that it returns the same as “Person”, plus the list of subjects, all as one string. e.g. "Margaret Brown, 32: Physics, Biology, Chemistry" - done
/*5) Implement a static method “getSharedSubjects” for “Teacher” which takes two teachers and returns a list of all subjects that they share.
e.g. ["English", "History"] - done */

console.log("*** QUESTION 3 PART 1: ***");
//1)  class Person
class Person {
    constructor(name, surname, age){
        this.name = name,
        this.surname = surname,
        this.age = age
    }
}

console.log(Person);
console.log(" ");

console.log("*** QUESTION 3 PART 2: ***")
//2) Instance method
Person.prototype.getDescription = function(Person){
    console.log("The person name is " + Person.name + " " + "it's surname is " + Person.surname + " " + "and is " + Person.age + " " + "years old");
};

//2) John Smith 47
const John = new Person (
    "John",
    "Smith",
    47
)

//2) Running the instance method
Person.prototype.getDescription(John);

console.log(" ");
console.log("*** QUESTION 3 PART 3 ***");

//3) Teacher subclass implementation
class Teacher extends Person {
    constructor (name, surname, age, subjects = []){
        super(name, surname, age);
        this.subjects = subjects;
    }
}

console.log("Teacher subclass description: ");
console.log(Teacher);

//3) Teacher getDescription function - instance method
Teacher.getDescription = function(Teacher){
    console.log("The teacher " + Teacher.name + " " + Teacher.surname + " of age " + Teacher.age + " is teaching following subjects " + Teacher.subjects);
}
//3) Teacher subclass with inherited superclass paremeters
const Margaret = new Teacher (
    "Margaret",
    "Brown",
    32,
    ["English", "Maths", "History"]
);

console.log("Teacher subclass result: ");
Teacher.getDescription(Margaret);
console.log(" ");

//4) Override getDescription function
console.log("*** QUESTION 3 PART 4 ***");
console.log("** For this I need to re-create a new person object and implement static method");

//4) Implementing static method getDescrtiption2() to be overriden
class Person2 {
    constructor(name, surname, age){
        this.name = name,
        this.surname = surname,
        this.age = age
    }

    getDescription2(){
        console.log("The person name is: " + this.name + " " + this.surname + " and is " + this.age + " years old");
    }
}

//4) Creating new Person2 object
const James = new Person2 (
    "James",
    "Whigget",
    43
)

//4) Running the getDescription2() method
James.getDescription2();

//4) New Teacher2 object, overriding getDescription2 function
class Teacher2 extends Person2 {
    constructor(name, surname, age, subjects= []){
        super(name, surname, age);
        this.subjects = subjects;
    }
    
    getDescription2(){
        console.log("The teacher: " + this.name + " " + this.surname + " is " + this.age + " years old " + "and is teaching following subjects " + this.subjects);
    }
    
    /*5) Implement a static method “getSharedSubjects” for “Teacher” which takes two teachers and returns a list of all subjects that they share.
    e.g. ["English", "History"]*/
    //5)static method which compare subjects of two teachers implementation
    getSharedSubjects(t1, t2){
        var sharedSubjects = [];
        this.t1 = t1.subjects;
        this.t2 = t2.subjects;

        console.log("Subjects to compare");
        console.log(t1.subjects);
        console.log(t2.subjects);


        let s;
        // Comparing which array is longer
        if(t1.subjects.length > t2.subjects.length){
            s = t1.subjects.length;
        } else {
            s = t2.subjects.length;
        }

        // using the longer array result as loop expression
        for (let i = 0; i < s; i++){
            let j = 0;    

            for (j; j < s ; j++){

                if(t1.subjects[i] === t2.subjects[j]){
                    sharedSubjects.push(t1.subjects[i]);
                    console.log(sharedSubjects);
                }
            }
        }

        if (sharedSubjects.length > 0){

            console.log("Teachers " + t1.name + " and " + t2.name + " share following subjects: " + sharedSubjects);
        } else {
            console.log("Teachers do not share any subjects they teach.")
        }

    }

}

//4) New Teacher2 object
const Jeremy = new Teacher2 (
    "Jeremy",
    "White",
    38,
    ["Biology", "History", "Law", "Astrology"]
)

//4) Result of overriden function
Jeremy.getDescription2();
console.log("*** QUESTION 3 PART 5: ***");


//5) Result of two teachers subjects comparison
Jeremy.getSharedSubjects(Jeremy, Margaret);

console.log("*** END OF QUESTION 3 ***");
