'use strict';

 //  1


 let x = prompt('введіть число: ');

 if (x>54 && x<100){
   console.log('Число потрапляє в діапазон');
 }
 else{
     console.log('Число не потрапляє в діапазон');
 }

 //  2


 let maxage = 55;

 if (maxage<16){
     alert('Максим відносится до группи  - діти');
 }
 else if(maxage>16 && maxage<60){
     alert('Максим відносится до группи  - дорослі');
 }
 else{
     alert('Максим відносится до группи  - пенсіонери');
 }

 //  3


 let name3 = 'Eugene';
 let tname3 = 'Bocharov';


 if(name3.length>4 && tname3.length>5){
   alert(name3.length + tname3.length);
 }
 else{
   alert('УПС');
 }

 //  4 


 let z = Math.random() * (1 - 5) +1;

 if(z = 1){
     console.log('це 1');
 }
 else if(z = 2){
     console.log('це 2');
 }
 else if(z = 3){
     console.log('це 3');
 }
 else if(z = 4){
     console.log('це 4');
 }
 else if(z = 5){
     console.log('це 5');
 }


//  5

    



// ------------------------------------------------------------------------------------------

// //  1

// let i = 0 ;

// while (i < 11){  
//     console.log(`Ітерація  - ${i}`);
//     i += 1;
// }



// //  2


// let ts1  = 1;
// let ts2  = 2;
// let ts3  = 3;
// let ts4  = 4;
// let ts5  = 5;
// let ts6  = 6;
// let ts7  = 7;
// let ts8  = 8;
// let ts9  = 9;
// let ts10 = 10;




// //  3

// let num = 20 ;

// while (num < 28){  
//     console.log(`num  - ${num}`);
//     num += 1;
// }


// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       alert( i );
//     }
//   }
