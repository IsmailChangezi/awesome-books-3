const storage = JSON.parse(localStorage.getItem('BOOkS'));
let books = [];

const checkStorage = () => {
  if (storage !== null) {
    books = JSON.parse(localStorage.getItem('BOOkS'));
  }
};
checkStorage();

export default class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  Add = () => {
    books.push({ id: this.id, title: this.title, author: this.author });
    localStorage.setItem('BOOkS', JSON.stringify(books));
    checkStorage();
  };

  Delete = () => {
    books = JSON.parse(localStorage.getItem('BOOkS')); // eslint-disable-next-line
    books = books.filter((item) => {
      for (let i = 0; i < books.length; i += 1) {
        if (item.id === this.id) {
          return false;
        }
        return true;
      }
    });
    localStorage.setItem('BOOkS', JSON.stringify(books));
  };
}
