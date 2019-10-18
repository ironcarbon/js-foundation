//ASYNC AWAIT ES8
// It is built on top of promises.
//Async function is a function that returns a promise. It makes code easier to read.


//PROMISE example
movePlayer(100, 'left')
    .then(() => movePlayer(400, 'left'))
    .then(() => movePlayer(10, 'left'))
    .then(() => movePlayer(320, 'left'))

// Async await is looks like synchronous code.

//ASYNC AWAIT is syntactic sugar, ir does same thing with PROMISE

// async makes the function asynchronous.
//await tells the wait until I give you something. await returns promises. When the function resolves then the function moves to the next line.

async function playerStart() {
    const first = await movePlayer(100, 'left');
    const second = await movePlayer(100, 'left');
    await movePlayer(100, 'left');
    await movePlayer(100, 'left');
}

// FETCH function is promise.

// Real Example 1

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(result => console.log(result))

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = resp.json();
    console.log(data)

}

// Real Example 2
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//first way
async function getData() {
    const [users, posts, albums] = await Promise.all(urls.map(url => {
        return fetch(url).then(resp => resp.json())
    }))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
}
getData()
//second way
const getsData = async function () {
    const [users, posts, albums] = await Promise.all(urls.map(url => {
        return fetch(url).then(resp => resp.json())
    }))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
}
getsData();

//When JS sees the 'try', it automatically runs. Then, 'try' comes with 'catch'. 'catch' receives an (error)

const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url => {
            return fetch(url).then(resp => resp.json())
        }))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (err) {
        console.log('oops', err)
    }
}