'use strict';

//   1


let Arr1 = [1, 5, '4', 'hello'];
let Arr2 = [true, 2, {}, ['a'], 222];

console.log(Arr1 [1]);
console.log(Arr2 [1]);

console.log(Arr1 [1] + Arr2 [1]);

//   2


Arr1 [4] = 22;

console.log(Arr1);

//   3


//   4


//   5


let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

styles[1] = 'Класика';

console.log(styles.shift());


styles.unshift( 'Реп', 'Реггі');


console.log(styles);