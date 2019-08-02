'use strict';

// function showName(name, status, lvl){
//   console.log('User' + ' ' + name + ' - ' + lvl + ' ' + status );
// }
// showName('Alex', 'dodik', 'polniy');




// let x = 10; //global
// function showNumber (num){
//  let y  = 50;
//  console.log(x + y + num);
// }
// console.log(x);
// showNumber(40);
// console.log(x);



// if (true){
//   let x = 100;
// }
// console.log(x);




// function addNumber (x, y){
//   console.log (x+y);
//   return  (x+y);
// }
// addNumber (10,5);


// function substructNumber (x, y){
//     console.log (x-y);
//     return  (x - y);
// }
// substructNumber (20,6);


// function multiplyNumber (x, y){
//   console.log (x*y);
//   return  (x * y);
// }
// multiplyNumber (10,10);


// function divideNumber (x, y){
//   console.log (x/y);
//   return  (x / y);
// }
// divideNumber (20,4);




// function adding(num1, num2, num3 = 0, num4 = 0){
// return num1 + num2 + num3 +  num4;
// }
// let res = adding (1, 2, 3, 4);
// console.log(res);


// function compareNumbers(x, y){
//   if (x===y) {
//  return 'equal';  
// } else {
  
// }
// }



// let a = 2;  let b = 5;
// function min (a,b){
//   if (a <  b){
//     return a;
//   }
//   else{
//     return b;
//   }
// }
// console.log (min);




// РЕКУРСИЯ

// function pow(x, n){
//   if (n!=1) {
//     return x * pow (x, n-1);
//   } else{
//     return (x);
//   }
// }
// alert (pow (5,4));



// function pow(x, n) {
//   var res = x;

//   for (var i = 1; i < n; i++) {
//     res *= x;
//   }

//   return res;
// }

// var x = prompt("x?", '');
// var n = prompt("n?", '');

// if (n <= 1) {
//   alert('Степень ' + n +
//     'не поддерживается, введите целую степень, большую 1'
//   );
// } else {
//   alert( pow(x, n) );
// }



// let degree_of_number = (n) => {
// let parametrs = (x, n) => {
//   if n === 1 {
//     return (x);
//   }
//   return 
// }
// } 




//ЗАДАЧА складається з 3 частин:
// знайти суму чисел n до 20 через цикл

// function sumTo (n){
//   let sum = 0;
//   for (let i = 1; i<=n; i++){
//     sum += i;
//     }
//     return sum;
// }
// alert (sumTo(20));


// знайти суму чисел n до 20  через рекурсию
// function sumTo (n){
// if (n==1) return 1;
// return n + sumTo(n - 1);
// }
// alert (sumTo(20));


// знайти суму чисел n до 20  через формулу
// function sumTo(n){;
// return n * (n+1)/2;
// }
// alert (sumTo(20)); 



//ЗАДАЧА факториал:
// Вирахувати факториал

// function factorial(n) {
//   return (n != 1) ? n * factorial(n - 1) : 1;
// }
// alert( factorial(5) );

//ЗАДАЧА фибаначи:

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// alert( fib(0) ); 
// alert( fib(1) ); 
// alert( fib(2) ); 
// alert( fib(3) ); 


//задача
//Вывод односвязного списка

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {
//   let navigateThroughList = list;

//   while (navigateThroughList) {
//     alert(navigateThroughList.value);
//     navigateThroughList = navigateThroughList.next;
//   }

// }
// printList(list);

// рекурсивний спосіб

// function printList(list) {
// alert (list.value);
// if (list.next) {
//   printList(list.next);
// } 
// }
// printList(list);


// рекурсивний спосіб в протилежному напрямку
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {
if (list.next) {
  printReverseList(list.next);
} 
alert (list.value);
}
printReverseList(list);