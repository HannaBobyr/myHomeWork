/*
Теоритичні питання:
1. \, обраний слеш називається символом екранування. Він використовується перед спецсимволами. Наприклад: \\, \n,\t і багато інших. Також він використовується щоб використати кавичкі в фразі \”, бо без нього буде вибивати помилку.
2. 1 спосіб: function declaration: function имяФункції(){}; 2 спосіб: function expression: let имяПеременной=function(); 3 спосіб: named function expression: let имяПеременной = function имяФункції(){};.
3. hosting це механізм при якому під час компіляції коду, об’явлення змінніх та функцій зчитується в першу чергу. Але об’явлення змінних лише типу var, а об’явлення функцій способом function declaration . Тому ми можемо ці змінні і функції використовувати, або звертатися до них, перед тим як вони будуть об’явленні.
*/
function createNewUser() {
    let firstName = prompt("your name: ");
    let lastName = prompt("your last name: ");
    let date = prompt("your birthday: ");
    let year = date.slice(6);
    let month = date.slice(3, 5);
    let day = date.slice(0, 2);
    let birthday = new Date(year, month-1, day);

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        getAge() {
            let age = (Date.now() - this.birthday.getTime())/(364*24*3600*1000);
            return `your age is ${Math.floor(age)}`;
        },
        getLogin() {
            return this.firstName.toUpperCase()[0]+this.lastName.toLowerCase()+this.birthday.getFullYear();
        },
    }
    console.log(newUser.getAge());
    console.log(newUser.getLogin());
    console.log(newUser);
}
createNewUser(); 