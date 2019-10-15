//Constructor Functions
function Elf(name,weapon){
    this.name = name;
    this.weapon = weapon;
  }
  const peter = new Elf('Peter','stones')
  peter.name
  
  Elf.prototype.attack = function(){
    return 'attack with ' + this.weapon
  }
  peter.attack()
  
  //new keyword automatically returns the OBJECT for us. It creates elf constructor.
  
  //Any function that is invoked using the new keyword is called a constructor function.
  
  //Function needs to start with upper case to notify the other programmers that this is a constructor function.
  
  // We have created a new object and because this function is called a new execution context is created. Every function that we call gets 'this' and argument parameters.
  // ** With new keyword 'this' points the object that we just created so this becomes Peter or Sam. Without new keyword, it does not return an object.
  
  const Elf1 = new Function('name','weapon',
  `this.name = name;
  this.weapon = weapon;
  `)
  
  const sarah = new Elf1('Sarah','fireworks')
  
  //Why new keyword is so important because every function in JS, gets automatically a PROTOTYPE PROPERTY. Functions are special objects in JS. It's a callable object that has code that can be invoked.
  
  //Prototype property is absolutely useless with any regular function. But Constructor functions that we can invoke with NEW is useful.
  
  /*
  To Review: We are able to use constructor functions instead of Object.create().
  
  Function Elf creates a new object, returns a new object. Also, Elf function modifies what 'this' means to whatever object calls us instead of global object.
  
  ** 'this' is not going to point to the calling object, Peter and Sam. But because this is a constructor function, we also have prototype property that we can attach some functionality. peter.attack() gets called while peter does not have attack as its own method but it's going to go up the prototype chain.
  
  If we change to an arrow function,because arrow functions are lexically scoped, it gives undefined,based on where they are written. In this case, it is on global object.
  */