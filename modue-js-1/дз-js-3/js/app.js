'use strict';

let k1  = '5px';
let k2  = '12djd334';
let k3  = '12.45asdwe12';
let k4  = 'qwqweeewq';


//  1

console.log('Цілі числа:');

console.log(Number.parseInt(k1));
console.log(Number.parseInt(k2));
console.log(Number.parseInt(k3));
console.log(Number.parseInt(k4));

//  2


console.log('Дробові числа:');

console.log(Number.parseFloat(k1));
console.log(Number.parseFloat(k2));
console.log(Number.parseFloat(k3));
console.log(Number.parseFloat(k4));

//  3


// найбільше
console.log(Math.max ( 2, 34, 99, 3, 22, 36, 733, 18  ) );

// найменше
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));

//  4


console.log(Math.random() *(19 - 1) + 1);

//  5


const result = 5+5+'5';

console.log(`${result}`);

console.log(typeof`${result}`);

//  6


const email = '4002445@gmail.com';





console.log(email.includes('@') );

console.log(email.length);

//  7

const n1 = 'My ';
const n2 = 'name ';
const n3 = 'is ';


let fullname = n1 + n2 + n3 + 'Victor';

console.log(fullname);

//  8


let userName = 'Eugene';
let payment = '299.99 гривнь';

alert('Дякуемо, '  + `${userName}` + '!  До сплати ' + `${payment}`);

