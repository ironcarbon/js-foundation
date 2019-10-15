// OBject Oriented Programming is all about modelling real world objects and relationships.
const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon
    }
}
elf.attack()

//factory functions: creates objects for us

function createElf(name, weapon) {
    return {
        name: name,
        weapon: weapon,
        attack() {
            return 'attack with ' + weapon
        }
    }
}

const peter = createElf('Peter', 'stones')
peter.attack()

//Simplified Version => ES6: Property and Value are same, we can keep inside of an object
function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return 'attack with ' + weapon
        }
    }
}
const sam = createElf('Sam', 'fire')
sam.attack()

//Functions of all elf takes different places in a memory  =>prototypal inheritance



function createElf1(name, weapon2) {
    return {
        name: name,
        weapon: weapon2,
        attack() {
            return 'attack with ' + this.weapon
        }
    }
}

const ipek = createElf1('ipek', 'fire')
ipek.attack()


function car1(name, place) {
    return {
        nam: name,
        pl: place,
        tell() {
            return 'this is ' + name + ' and made in ' + place
        }
    }
}
const myCar = car1('BMW', 'Germany')

myCar.tell()

function car2(name, place) {
    return {
        nam: name,
        pl: place,
        tell() {
            return 'this is ' + this.nam + ' and made in ' + this.pl
        }
    }
}

const yourCar = car2('Toyota', 'Japon')
yourCar.tell()