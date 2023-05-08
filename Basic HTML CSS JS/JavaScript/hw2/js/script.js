/*
Теоретичні питання{
 1. Існує типи number, string, Boolean, значення undefined i null, а також типи BigInt i object.
 2. "==" і "===" порівнюють значення. "==" спочатку переводить всі типи в числа і потім їх порівнює, а "===" не переводить типи, і якщо типи не співпадають то порівняння закінчується.
 3. Оператор це спеціальний символ, який показує, що саме програма повинна виконувати(+,-,/,%,<,>,== та інші).
}
*/

//Завдання
let name = prompt("Your name: ");
while (!isNaN(name)  || name === "" || name === null) {
  if (name === null) {
    name = prompt("You have entered no name, please enter your name again: ");
  } else {
    name = prompt("You have entered no name, please enter your name again: ", name);
  }
}

let age = prompt("Your age: ");
while (isNaN(age) || age === "" || age === null) {
  if (age === null) {
    age = prompt("You have entered no number, please enter your age again: ");
  } else {
    age = prompt("You have entered no number, please enter your age again: ", age);
  }
}

if (age < 18) {
  alert("You are not allowed to visit this website")
} else if (age>=18 && age<=22) {
  let result = confirm("Are you sure you want to continue?");
  if (result) {
    alert(`Welcome ${name}`);
  } else {
    alert(" You are not allowed to visit this website");
  }
} else {
  alert(`Welcome ${name}`);
}