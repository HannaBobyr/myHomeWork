let i = document.getElementsByClassName('fas');

i[0].addEventListener('click', clickPasssword);
let password = document.createElement(`p`);
function clickPasssword() {
    if (this.classList.contains('fa-eye-slash')) {
        this.classList.replace('fa-eye-slash', 'fa-eye');
        password.textContent = document.getElementById("password").value;
        this.after(password);
    } else {
        this.classList.replace('fa-eye', 'fa-eye-slash')
        password.textContent = '';
    }
}

i[1].addEventListener('click', clickPasssword2);
function clickPasssword2() {
    if (this.classList.contains('fa-eye-slash')) {
        this.classList.replace('fa-eye-slash', 'fa-eye');
        password.textContent = document.getElementById("confirm-password").value;
        this.after(password);
    } else {
        this.classList.replace('fa-eye', 'fa-eye-slash')
        password.textContent = '';
    }
}

const button = document.getElementsByClassName('btn');
button[0].addEventListener('click', (e) => {
    confirmPasdword(e);
} )

function confirmPasdword(e) {
    e.preventDefault();
if (document.getElementById("confirm-password").value === document.getElementById("password").value) {
    alert('You are welcome');
} else {
    let mistake = document.createElement('p');
    mistake.textContent = 'Потрібно ввести однакові значення';
    document.getElementById("confirm-password").after(mistake);
}    
}
