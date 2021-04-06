'use strict';

//   1

function hello1(){
    return console.log('Привіт, JavaScript');
}

//   2


function hello2(){
  let _name = prompt('Введіть ваше ім\'я')
    return console.log(`Привіт, ${_name}`);
}

//   3

function mul(n, m) {
    return `n * m = ${n * m}, n + m = ${n + m}, n - m = ${n - m}`;
}

console.log(mul(4,5));

//   4

const myNewArrowFunction = (...mes) => {
    console.log(mes);
}

myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("JS", "Python", "Java", "PHP", "C++");

//  5


let marks = [93, 99, 93, 96];

const myAverageScore = function (...marks) {
    let totalMarks = 0;
    let lastMark;
    for (const total of  arguments) {
        totalMarks += total;
    };

    lastMark = totalMarks / marks.length;
    if (lastMark <= 100 && lastMark >= 91) {
         console.log('My average score: A');
    } else if (lastMark <= 90 && lastMark >= 81) {
         console.log('My average score: B');
    } else if (lastMark <= 80 && lastMark >= 71) {
         console.log('My average score: C');
    } else if (lastMark <= 70) {
         console.log('My average score: D');
    };
};

myAverageScore(...marks);