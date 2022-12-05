import Book from './modules/books.js';
import { checkStorage, printBooks } from './modules/printer.js';
import { DateTime } from './modules/luxon.js';

const dt = document.getElementById('date-time');
setInterval(() => {
  dt.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_FULL_WITH_SECONDS,
  );
}, 1000);

const listBtn = document.getElementById('call-list');
const addBooksBtn = document.getElementById('call-add-new');
const contactBtn = document.getElementById('call-contact');
const inpTitle = document.getElementById('title');
const inpAuthor = document.getElementById('author');
const listSection = document.getElementById('books');
localStorage.removeItem('randid');
const addBooksSection = document.querySelector('#add-books');
const contactSection = document.querySelector('footer');

const storage = JSON.parse(localStorage.getItem('BOOkS'));

let books = [];

if (storage !== null) {
  books = JSON.parse(localStorage.getItem('BOOkS'));
}

checkStorage();

printBooks();

const lastId = () => {
  let lastId = 0;
  if (books.length > 0) {
    lastId = books[books.length - 1].id;
  }
  return lastId;
};

let n = lastId();

// Add books
document.querySelector('form').addEventListener('submit', () => {
  n += 1;
  const newBook = new Book(n, inpTitle.value, inpAuthor.value);
  newBook.Add();
  checkStorage();
  printBooks();
});

// display list section
document.getElementById('call-list').addEventListener('click', () => {
  listSection.classList.remove('hidden');
  addBooksSection.classList.add('hidden');
  contactSection.classList.add('hidden');
  listBtn.classList.add('active');
  addBooksBtn.classList.remove('active');
  contactBtn.classList.remove('active');
});

// Display Add books Section
document.getElementById('call-add-new').addEventListener('click', () => {
  addBooksSection.classList.remove('hidden');
  addBooksBtn.classList.add('active');
  listSection.classList.add('hidden');
  contactSection.classList.add('hidden');
  listBtn.classList.remove('active');
  contactBtn.classList.remove('active');
});

// display contact section
document.getElementById('call-contact').addEventListener('click', () => {
  contactSection.classList.remove('hidden');
  contactBtn.classList.add('active');
  listSection.classList.add('hidden');
  addBooksSection.classList.add('hidden');
  listBtn.classList.remove('active');
  addBooksBtn.classList.remove('active');
});
