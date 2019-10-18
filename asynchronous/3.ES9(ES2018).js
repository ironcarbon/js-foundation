//ES9(ES2018)
//Object Spread Operator
const animals = {
    tiger: 35,
    lion: 5,
    monkey: 2,
    bird: 40
}
const { tiger, ...rest } = animals;
tiger //35
rest  //{lion:5,monkey:2,bird:40}

const array = [1, 2, 3, 4, 5]
function sum(a, b, c, d, e) {
    return a + b + c + d + e;
}
sum(...array) === sum(1, 2, 3, 4, 5)

function objectSpread(p1, p2, p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}
objectSpread(tiger, rest);
//35 {lion: 5,
// monkey: 2,
// bird: 40}


//Destructuring
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

const { tiger, lion, monkey, bird } = animals;

// is basically the same with?

const tiger = animals.tiger;
const lion = animals.lion;
const monkey = animals.monkey;
const bird = animals.bird;