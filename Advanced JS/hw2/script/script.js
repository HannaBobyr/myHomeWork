const books = [
  {
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70
  },
  {
   author: "Сюзанна Кларк",
   name: "Джонатан Стрейндж і м-р Норрелл",
  },
  {
    name: "Дизайн. Книга для недизайнерів.",
    price: 70
  },
  {
    author: "Алан Мур",
    name: "Неономікон",
    price: 70
  },
  {
   author: "Террі Пратчетт",
   name: "Рухомі картинки",
   price: 40
  },
  {
   author: "Анґус Гайленд",
   name: "Коти в мистецтві",
  }
];
const root = document.querySelector('#root');
const listBooks = document.createElement('ul');
root.append(listBooks);
class Book{
    constructor(obj) {
        this.obj = obj;
    }
    itemAdd() {
        const item = document.createElement('li');
        const listValue = document.createElement('ul');
        try {
        if ( 'author' in this.obj) {
                if ( 'name' in this.obj) {
                    if ('price' in this.obj) {
                        for (const key in this.obj) {
                            const itemValue = document.createElement('li');
                            itemValue.textContent = `${key}: ${this.obj[key]}`;
                            listValue.append(itemValue);
                            item.append(listValue);
                        }
                    } else {
                        throw new Error("no found price in this object")
                }
                    } else {
                        throw new Error("no found name in this object")
                }
                } else {
                    throw new Error("no found author in this object")
            }
            listBooks.append(item);
        } catch (error) {
            console.log(error.message);
        }
    }
}
for (const iterator of books) {
    const item = new Book(iterator);
    item.itemAdd();
}