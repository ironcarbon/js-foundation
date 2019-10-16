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