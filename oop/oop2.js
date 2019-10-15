// Having same functionality on multiple objects.

//1st way: manually put aside functions
const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}
function createElf(name, weapon) {
    return {
        name,
        weapon
    }
}

const peter = createElf('Peter', 'stones')
peter.attack = elfFunctions.attack
peter.attack()
const sam = createElf('Sam', 'fire')
sam.attack = elfFunctions.attack
sam.attack()



//2nd way: instead of having to manually attach methods onto each elf member, use Object.create() to create that link to prototype chain between these two parts of code


const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon
    }
}

function createElf(name, weapon) {
    let newElf = Object.create(elfFunctions)
    //newElf creates an empty object
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const tim = createElf('Tim', 'stones')
tim.attack()