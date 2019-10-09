// Be careful of initializing functions inside of loops.

// Initialize the function JUST ONCE, then loop it.


//Instead of initializing the function in a loop 5 times. Follow the below way.
for (let i = 0; i < 5; i++) {
    function a() { console.log('do it!') }
    a()
}

//DO THIS WAY
function a() {
    console.log('do this way!!')
}

for (let i = 0; i < 5; i++) {
    a()
}
//We are just executing 5 times instead of initializing and executing it 5 times.





function b() {
    return param;
}
b()   // ==> Reference error: param is not defined sooo;

function b() {
    if (param) {
        return param;
    }
}



function c(param) {
    return param;
}
c();

// It is good to have default parameters set, soo
function d(param = 1) {
    return param;
}
d();