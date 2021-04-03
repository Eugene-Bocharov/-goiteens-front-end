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


//   4



//  5


// function myAverageScore (..._myAverageScore =[ prompt('ur Array')]){
//     let _z;
//     let x;

//     if(_myAverageScore.length = 2){
//       let  _z = _myAverageScore[0] + _myAverageScore[1];
//       let  x = _z / _myAverageScore.length;
//         if (x<=91, x>=100){
//             console.log('Myaveragescore: A');
//          }
//          else if (x<=81, x>=90){
//            console.log('  My average score: B');
//          }
//          else if (x<=71, x>=80){
//            console.log('  My average score: C');
//          }
//          else if (x<70){
//             console.log('  My average score: D');
//           }
//     }

//     else if(_myAverageScore.length = 3){
//       let _z = _myAverageScore[0] + _myAverageScore[1] + _myAverageScore[2];
//        let  x = _z / _myAverageScore.length;
//        if (x<=91, x>=100){
//         console.log('Myaveragescore: A');
//      }
//      else if (x<=81, x>=90){
//        console.log('  My average score: B');
//      }
//      else if (x<=71, x>=80){
//        console.log('  My average score: C');
//      }
//      else if (x<70){
//         console.log('  My average score: D');
//       }
// }
   

//    else if(_myAverageScore.length = 4){
//       let _z = _myAverageScore[0] + _myAverageScore[1] + _myAverageScore[2] + _myAverageScore[3];
//        let  x = _z / _myAverageScore.length;
//        if (x<=91, x>=100){
//         console.log('Myaveragescore: A');
//      }
//      else if (x<=81, x>=90){
//        console.log('  My average score: B');
//      }
//      else if (x<=71, x>=80){
//        console.log('  My average score: C');
//      }
//      else if (x<70){
//         console.log('  My average score: D');
//       }
// }
//    }
const sum = function() {
  let total = 0;

  for (const argument of arguments) {
    total += argument;
  }

  return total;
};

console.log(sum(1, 2, 3)); //  6
console.log(sum(1, 2, 3, 4)); //  10
console.log(sum(1, 2, 3, 4, 5)); //  15

myAverageScore();








const myAverageScore = function () {
  if (arguments >= Math.round(Math.random() * (100 - 91) + 1)) {
      let range = 0;
      for (const scores1 of arguments){
          range += scores1;
      };
      return console.log('My average score: A');
  }else if (arguments >= Math.round(Math.random() * (90 - 81) + 1)) {
      let range = 0;
      for (const scores1 of arguments){
          range += scores1;
      };
      return console.log('My average score: B');
  }else if (arguments >= Math.round(Math.random() * (80 - 71) + 1)) {
      let range = 0;
      for (const scores1 of arguments){
          range += scores1;
      };
      return console.log('My average score: C');
  }else if (arguments <= 70) {
      let range = 0;
      for (const scores1 of arguments){
          range += scores1;
      };
      return console.log('My average score: D');
  }
};


myAverageScore(2, 2);


