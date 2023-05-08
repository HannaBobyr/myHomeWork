/*
Теоретичні питання{
1. Як я розумію, функція це невелика підпрограма, яку можна викликати, вписувати в неї дані, а також вона може повертати значення. Функції використовують якщо є кусок кода, який повторюються і його можна винести в окремий блок, і потім при необхідності просто звертатися до цієї функції, а не писати код знову.
2. Аргументи функції використовуються, щоб передавати якісь значення в функцію. Вони вписуються в дужках при викликанні функції, щоб вона могла взаємодіяти з іншим кодом програми. Але передавати аргументи не обов’язково.
3. Оператор return повертає результат функції, якій потім можна буде використати. В функції return може бути не один і знаходитись в різних місцях, але як тільки код доходить до return, функція завершується і повертає якесь значення.
}
*/

//Завдання
let number1 = prompt("Введіть перше число: ");
while (isNaN(number1) || number1 === "" || number1 === null) {
  if (number1 === null) {
    number1 = prompt("Ви ввели не число, будь ласка, введіть своє число ще раз:");
  } else {
    number1 = prompt("Ви ввели не число, будь ласка, введіть своє число ще раз:", number1);
  }
}

let number2 = prompt("Введіть друге число: ");
while (isNaN(number2) || number2 === "" || number2 === null) {
  if (number2 === null) {
    number2 = prompt("Ви ввели не число, будь ласка, введіть своє число ще раз: ");
  } else {
    number2 = prompt("Ви ввели не число, будь ласка, введіть своє число ще раз:", number2);
  }
}

let operation=prompt("Введіть математичну операцію: ")

function math(number1, number2, operation) {
    switch (operation) {
    case "+":
        return +number1 + +number2;
        break;
    case "-":
        return number1 - number2;
        break;
    case "*":
        return number1 * number2;
        break;
    case "/":
        return number1 / number2;
        break;
}
}
console.log(math(number1, number2, operation));