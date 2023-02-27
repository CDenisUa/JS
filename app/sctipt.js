'use strict'

const arrayUsers = ['Any', 'Maria', 'Pavel'];

const setFlights = new Set(arrayUsers);

// Create map 
const map = new Map([
    ['Alex', '22'],
    ['Denis', '82'],
])

const obj = {
    mister: 'asdf83',
    obo: 'asdf,c3',
    john: '25g67'
}

const map2 = new Map(Object.entries(obj));

let wetherMap = new Map([
    ['London', 10],
    ['Kyiv', 99],
    ['Dnipro', 130],
]);

console.log(wetherMap)

// First way
let arr = []
for(const [key, value] of wetherMap) {
    arr.push([value, key]);
}
const result = new Map(arr);
console.log('first way', result);

// Second way
wetherMap = new Map([...wetherMap].map( el => el.reverse()));
console.log('second way',wetherMap);
