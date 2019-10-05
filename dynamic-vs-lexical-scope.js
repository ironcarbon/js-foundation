const a = function () {
    console.log('a', this)
    const b = function () {
        console.log('b', this)
        const c = {
            hi: function () {
                console.log('c', this)
            }
        }
        c.hi()
    }
    b()
}
a()



const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        var anotherFunc = function () {
            console.log('b', this)
        }
        anotherFunc()
    }
}

obj.sing()   // a {name:'Billy', sing()}
// b window object

//Object did not call the sing function, sing function did

//  this ==> It matters HOW THE FUNCTION WAS CALLED not where it is written like lexical scope.

//  Everything in JS is actually lexical scoped how you write, it determines what we have available except THIS keyword

// 'this' keyword is DYNAMICALLY SCOPED so HOW THE FUNCTION WAS CALLED is the matter!

/*
    How we can solve this?

    Arrow functions are LEXICALLY bound so they have lexical behaviour.



*/


const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        var anotherFunc = () => {
            console.log('b', this)
        }
        anotherFunc()
    }
}

obj.sing()

//    a {name:'Billy', sing()}
//    b {name:'Billy', sing()}

//   ARROW FUNCTION prevents a lot of confusion.

//   Before arrow function, we had to do this with BIND(THIS)


const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        var anotherFunc = function () {
            console.log('b', this)
        }
        return anotherFunc().bind(this)
    }
}

obj.sing()()


// Other way to solve this problem



const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        var self = this
        var anotherFunc = function () {
            console.log('b', self)
        }
        return anotherFunc().bind(this)
    }
}

obj.sing()()