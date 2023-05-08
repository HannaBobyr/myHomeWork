class Employee{
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    set name (newName) {
     if (!newName) {
           console.log('Имя должно содержать хотя бы одну букву!');
     } else {
           this._name = newName; 
     }
   }
    get name() {
        return this._name;
    }

    set age(newAge) {
        if (newAge < 18) {
           console.log('Вік менше 18!');
     } else {
           this._age = newAge; 
     }
    }
    get age() {
        return this._age;
    }

    set salary(value) {
        this._salary = value;
    }
    get salary() {
        return this._salary;
    }
}

class Programmer extends Employee{
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this.lang = lang;
    }
    set salary(value) {
        this._salary = value * 3;
    }
}

const programmer1 = new Programmer('Uasya', '22', '10000', ['ukrainian', 'english']);
console.log(programmer1);

const programmer2 = new Programmer('', '13', '100', ['ukrainian', 'english', 'german']);
console.log(programmer2);