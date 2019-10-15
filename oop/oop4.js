//Constructor gets run every time we instantiate or use the new keyword on a class.

//Keep all our functionality inside of class box. All properties,states,methods,actions together in a nice contained environment a class an object.

//One location that holds entire elf object.

//Instance happens when we call the class and create an object out of this class.

//ES6 CLASS
class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}

const peter = new Elf('Peter', 'stones')
//peter is instance of elf
console.log(peter instanceof Elf) //true

  //Creating instance of class is OOP
  // 'new' keyword is called instantiation where instantiating a class.

  //Classes are Objects, behind the scene it works prototypal inheritance. Not a thing like other languages.

  //Class is syntactic sugar but class keyword is still just prototypal inheritance.

  //** Everytime we use the 'new' keyword and create or instantiate a class, the constructor function gets run. Every Elf requires unique name and weapon but functions like attack is shared by all instances of the class. If attack is moved the constructor, that's going to take up memory space.

  //* Instead of creating a function for each object, functions take place out of constructor function. (For memory purpose)