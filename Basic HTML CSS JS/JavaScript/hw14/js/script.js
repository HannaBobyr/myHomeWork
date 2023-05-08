const btn = document.querySelectorAll('.btn');
document.addEventListener('keydown', clickOnKey)
function clickOnKey(event) {
    btn.forEach(value => {
        value.classList.remove('active');
        if (value.classList.contains(`${event.code}`)) {
            value.classList.add('active');
        }
    })
}
const btnChange = document.querySelector('.btn-change');
btnChange.addEventListener('click',themeCange)
let counter = 0;
let itemBackground;
function themeCange() {
    if (!counter) {
        btn.forEach(value => {
            value.style.backgroundColor = 'yellow';
            itemBackground = value.style.backgroundColor;
        });
        document.body.style.backgroundColor = 'blue';
        counter++;
    } else {
        btn.forEach(value => {
            value.style.backgroundColor = '';
            itemBackground = value.style.backgroundColor;
        });
        document.body.style.backgroundColor = '';
        counter--;
    }
    localStorage.setItem('itemBackgroundColor', itemBackground);
    localStorage.setItem('bodyBackgroundColor', document.body.style.backgroundColor);
}
window.onload=function () {
    if (localStorage.getItem('bodyBackgroundColor')) {
        let bodyBackgroundColor = localStorage.getItem('bodyBackgroundColor');
        document.body.style.backgroundColor = bodyBackgroundColor;
    }
    if (localStorage.getItem('itemBackgroundColor')) {
        let itemBackgroundColor = localStorage.getItem('itemBackgroundColor');
        btn.forEach(value => {
            value.style.backgroundColor = itemBackgroundColor;
        });
}
}
