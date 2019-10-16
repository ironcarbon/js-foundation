// A core aspect of OOP is INHERITANCE which means passing knowledge down.

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}


//Sub Classing: When we want to inherit super class properties and methods
class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongest fort in the world made'
    }
}

const fiona = new Character('Fiona', 'ninja stars');
console.log(fiona)

const dolby = new Elf('Dolby', 'cloth', 'house');
dolby.attack()
const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort()

console.log(Ogre.isPrototypeOf(shrek))  //false Ogre is constructor function

console.log(Ogre.prototype.isPrototypeOf(shrek)) //true
console.log(Character.prototype.isPrototypeOf(Ogre)) //false
console.log(Character.prototype.isPrototypeOf(Ogre.prototype))

console.log(dolby instanceof Elf)  //true
console.log(dolby instanceof Ogre)  //false
console.log(dolby instanceof Character) //true

// * Instance is when we use the new keyword from a class, we create an instance of a class. Instance is essentially creating a version of the class. NEW => INSTANCE
// * Inheritance which is what we do with the keyword EXTENDS is inheriting something from a higher class. Inheritance in JS does not actually copy the functionality. Instead it simply links up the prototype chain.  EXTENDS => INHERIT

//In JS, objects inherits objects. Class does not mean anything different in JS. These are just OBJECTS.