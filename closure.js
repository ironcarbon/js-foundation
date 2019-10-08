//Exercise

function callMeMaybe() {
    const callMe = 'Hi! I am now here!';
    setTimeout(function () {
        console.log(callMe);
    }, 4000);
}

callMeMaybe()


function callMeMaybe() {
    setTimeout(function () {
        console.log(callMe);
    }, 4000);
    const callMe = 'Hi! I am now here!';

}


//Memory Efficient
//Encapsulation     ==> Hiding an information that is unnecessary