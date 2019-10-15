//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method. lastYear() which shows you last year 'YYYY' format.

new Date('1900-10-10').lastYear()
// "1899"

Date.prototype.lastYear = function () {
    return this.getFullYear() - 1;
}

new Date().lastYear()  //2018

// "this" needs to be determined at call time when we run this function. Dynamic Scope nature of this keyword.
// If we did with arrow function, this would be lexically scope and point the function which takes this.


//2
//Modify .map() to print '🗺️' at the end of each item.
// console.log([1,2,3].map())
//1🗺️, 2🗺️, 3🗺️

Array.prototype.map = function () {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push((this[i] + '🗺️'))
    }
    return arr;
}

let arr = [1, 2, 3]


arr.map()

//Never modify existing methods