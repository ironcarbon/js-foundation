//JS uses prototypal inheritance.
/*
    Inheritance is object getting access to the propertis and methods of another object.

    * Array Object [] and Functions () gets access to the properties and methods of the OBJECT {} IN JS.

                                    OBJECT {}
                                //             \\
                        ARRAY []               FUNCTION()



    Special way to see this prototypal inheritance.

    const array= [];
    array.__proto__  // []   ==> go up the prototype chain => new array was created from BIG ARRAY[] which is constructor.

    array.__proto__.__proto__   // {}   ==> go up the object that everything in JS gets created from including FUNCTIONS and arrays.

    Object gets access to the properties and methods of another object through prototype chain.

    function a(){}
    a.__proto__    // it goes NATIVE FUNCTION which is base function where all functions are created from

    a.__proto__.__proto__   // goes to the object which is base object where all objects come from.

*/