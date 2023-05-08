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
