// Скидки при покупке ------------------------------------------------------------------
// const sum = parseInt(prompt("Введите сумму интересующего вас товара:"))
// let result;

// if (sum < 200){
//     alert("К сожалению, при этой сумме вы не получаете скидку.");
// } else if (sum >= 200 && sum <= 300) {
//     result = (sum / 100) * 3;
//     alert ("При сумме: " + sum + " - Вы получаете скидку в 3% или " + result + "$");
// } else if (sum >= 301 && sum <= 500) {
//     result = (sum / 100) * 5;
//     alert ("При сумме: " + sum + " - Вы получаете скидку в 5% или " + result + "$");
// } else if (sum > 500) {
//     result = (sum / 100) * 7;
//     alert ("При сумме: " + sum + " - Вы получаете скидку в 5% или " + result + "$");
// }
// ---------------------------------------------------------------------------------------









// Вангуем число -------------------------------------------------------------
// alert ("Давайте поиграем! Загадайте число от 1 до 100. Дам подсказку: не загадывайте сильно большое, будет тяжело считать");

// const play = confirm ("Загадали?");
// if (play != true) {
//     alert ("Ну и ладно, в другой раз.")
// }

// alert ("Отнимите от этого числа 1");
// alert ("Остаток удвойте и прибавьте первоначально задуманное число.");

// let result = parseInt(prompt("Скажите результат:"));

// alert ("Кажется знаю)))");
// alert ((result + 2) / 3);
// --------------------------------------------------------------------------







// Общая сумма всех чисел ----------------------------------------------
// let numberOne = parseInt(prompt("Введите первое число:"));
// const numberTwo = parseInt(prompt("Введите второе число:"));
// let sum = numberOne;
// let sumNumber = 0;

// while (sum <= numberTwo) {
//     if (numberOne > numberTwo){
//         alert ("Первое число должно быть меньше второго");
//         break;
//     }
//     sumNumber = sum + sumNumber;
//     sum++
// }

// alert ("Общая сумма всех чисел " + sumNumber);
// ------------------------------------------------------------------













// Возраст человека ----------------------
// const age = parseInt(prompt("Ваш возраст:")); 

//   if (age > 0 && age < 13) {
//     console.log ("Вы ребенок!");

//   } else if (age >= 13 && age <= 17) {
//   console.log ("Вы подросток!");

//   } else if (age >= 18 && age <= 60) {
//     console.log ("Вы взрослый!");

//   } else if (age >= 60) {
//     console.log ("Вы пенсионер!");

//   } else if (age < 0) {
//     console.log ("Ну вы и сказочник!");
//   }
//   ---------------------------------------------













// Спец символ -----------------------------------------------
// let namber = parseInt(prompt("Введите число, а я покажу какой символ находится на этой клавише:"));
// if (namber == 1) {
//     alert("!");
// } else if (namber == 2) {
//     alert("@");
// } else if (namber == 3) {
//     alert("#");
// } else if (namber == 4) {
//     alert("$");
// } else if (namber == 5) {
//     alert("%");
// } else if (namber == 6) {
//     alert("^");
// } else if (namber == 7) {
//     alert("&");
// } else if (namber == 8) {
//     alert("*");
// } else if (namber == 9) {
//     alert("(");
// } else if (namber == 0) {
//     alert(")");
// } else if (namber > 9) {
//     alert("Вы что то не то вводите(");
// }
// -----------------------------------------------------------














// Калькулятор ---------------------------------------------------------

// let restartForm = confirm("Вы вошли в калькулятор. Продолжить?");

// if (restartForm == true) {
//     restart ();
// }


// function restart() {
//     const num1 = parseInt(prompt("Введите число:"));
//     let act = prompt("Выберите действие: + - / *");
//     const num2 = parseInt(prompt("Введите второе число:"));
//     let result;



//     const plus = "+";
//     const minus = "-";
//     const del = "/";
//     const umn = "*";

//     if (act == "+") {
//         result = num1 + num2;
//         alert (result);
//     } else if (act == "-") {
//         result = num1 - num2;
//         alert (result);
//     } else if (act == "/") {
//         result = num1 / num2;
//         alert (result);
//     } else if (act == "*") {
//         result = num1 * num2;
//         alert (result);
//     } else {
//         alert ("Вы ввели не верное значение!!!")
//     }

//     let res = confirm("Продолжить?");

//     if (res == true) {
//     restart ();
//     }

// }
// -----------------------------------------------------------------










// Количество цифр -------------------------------------------------------
// let number = parseInt(prompt("Введите любое число:"));
// alert ("Вами введено: " + String(number). length + " цифры(а)");
// ---------------------------------------------------------------------










// Конвертер валют -------------------------------------------------

// let currencyUSD = parseInt(prompt("Ввести USD"));
// const translate = prompt ("Перевести в: EUR  UAN  AZN");

// let currencyEUR = currencyUSD * 0.82;
// let currencyUAN = currencyUSD * 27.91;
// let currencyAZN = currencyUSD * 1.70;

// if (translate === "EUR") {
//     alert (currencyUSD + " USD  =  " + currencyEUR + " EUR");
// } else if (translate === "UAN") {
//     alert (currencyUSD + " USD  =  " + currencyUAN + " UAN");
// } else if (translate === "AZN") {
//     alert (currencyUSD + " USD  =  " + currencyAZN + " AZN");
// } else {
//     alert ("Не допустимое значение!");
// }

// ------------------------------------------------------------------