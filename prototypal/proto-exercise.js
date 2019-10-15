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


