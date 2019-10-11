let dragon = {
    name: 'Timucin',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        return `I am ${this.name} and have a fire power`
    },
    singo() {
        if (this.fire) {
            return `I am ${this.name} and lalalalla`

        }
    }
}


let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

lizard.__proto__ = dragon;

for (let prop in lizard) {
    console.log(prop)
}







