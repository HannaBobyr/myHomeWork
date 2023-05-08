/*
Теоретичні питання:
1. HTML тег можна створити методом document.createElement(‘name of tag’). 
2. Перший парамет методу insertAdjacentHTML показує куда по відношинню до елементу потрібно вставити новостворений тег. „beforebegin”- вставить перед елементом; „afterbegin”- вставити в середину елементу на початок; „beforeend”- вставити в середину елементу в кінець; „afterend”- вставити після елементу.
3. Для видалення елементу зі сторінки існує метод element.remove().
*/


//zadanie
function arrToList(arr, parent = document.body) {
    const list = document.createElement('ul');
    for (let index = 0; index < arr.length; index++) {
        let el = document.createElement('li');
        el.textContent = arr[index];
        list.append(el);
    }
    parent.prepend(list);
}
const array = ["1", "2", "3", "sea", "user", 23];
arrToList(array, );