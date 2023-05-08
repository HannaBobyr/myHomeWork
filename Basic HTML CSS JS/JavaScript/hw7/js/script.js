/*Теоритичні питання:
1. Метод forEach(), перебирає масив по елементам і виконує вказану, як аргумент, колбек функцію для кожного елементу масиву.
2. Щоб очистити масив можна, по-перше, довжині масиву присвоїти значення 0 (array.length = 0), або використати метод splice(), першим параметром вказати перший елемент масиву, а другим параментром довжину масиву, щоб очистити всі елементи (array.splice(0,array.length)).
3. Щоб перевірити чи змінна є масивом існує метод Array.isArray(),  в дужках потрібно вказати нашу змінну. Метод повертає true, якщо змінна є масивом і false, якщо вона не є масивом.
*/

//Zadanie

function filterBy(array, type) {
    
    let newArr = array.filter(element => {
        return typeof element !== type ;
    })
    return newArr;
}

let array = ['hello', 'world', 23, '23', null , true, 34 , 22 , 34,false, { name: "Hanna" }];
let type = 'number';

console.log(array);
console.log(filterBy(array, type));