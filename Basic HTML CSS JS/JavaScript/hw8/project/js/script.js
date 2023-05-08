/*Теоритичні питання:
1. DOM  це об’єктна модель документа, яку браузер самостійно створює на основі HTML-кода. Вона представляє весь зміст документу в виді об’єктів.
2. innerText показує текстовий зміст елементу, лише текст між відкривающими і закривающими тегами, innerHTML показує текстовий зміст і разметку HTML цього елементу (включає всі теги які є в елементі). 
3. Є 2 головні методи getElement* i querySelector*. El.querySelector і el.querySelectorAll дозволяють пошук і звернення по любому виду селекторів, його найкраще використовувати, оскільки можна вписати будь-який css-селектор. А також можна використати методи типу getElement*: document.getElementById-пошук по id елементу, el.getElementByIdTagName- пошук по заданому тегу, el.getElementByClassName- пошук по класу, el.getElementByName- пошук по атрибути name.
*/

//zadanie1
const paragraphs = [...document.getElementsByTagName('p')];
paragraphs.forEach(element => {
    element.style.backgroundColor = "#ff0000";
});

//zadanie2
const elem = document.getElementById("optionsList");
console.log(elem);
console.log(elem.parentElement);
let children = elem.childNodes;
for (let i = 0; i < children.length; i++) {
console.log(`${children[i].nodeName} - ${children[i].nodeType} `);
}

//zadanie3
const testParagraph = document.getElementById('testParagraph');
testParagraph.textContent = 'This is a paragraph';

//zadanie4-5
const element = document.querySelector('.main-header');
const childrens = element.children;
console.log(childrens);
for (let i = 0; i < childrens.length; i++){
    childrens[i].classList.add('nav-item');
}
console.log(children);

//zadanie6
const title = [...document.getElementsByClassName('options-list-title')];
title.forEach(element => {element.classList.remove('options-list-title')})