/*Теоритичні питання:
1. Метод об’єкту це та само функція в звичайному JS, але метод відрізняється від функції, ти що він є свойством об’єкта. Визнається методи як звичайні свойства об’єкта через «.», і після назви ставиться «()», як при визові звичайної функції.
 2. Значення властивості об’єкта може мати любий тип даних: null, undefined, Boolean, string, number, object, symbol, а також function.
 3. Об’єкт є посилалальний тип даних, томущо він вказує на значення, ссилається на них, але не зберігає їх.
 */

//Zadanie

function createNewUser() {
    let firstName = prompt("your name: ");
    let lastName = prompt("your last name: ");

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        getLogin() {
            return this.firstName.toLowerCase()[0]+this.lastName.toLowerCase();
        },
    }
    console.log(newUser.getLogin());
    return newUser;
}
createNewUser();
