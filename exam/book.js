function openAddBookModal() {
    document.getElementById('addBookModal').style.display = 'block';
}
function closeAddBookModal() {
    document.getElementById('addBookModal').style.display = 'none';
}
function addBook(event) {
    event.preventDefault();
    let title = document.getElementById('titleInput').value;
    let author = document.getElementById('authorInput').value;
    let year = document.getElementById('yearInput').value;
    let publisher = document.getElementById('publisherInput').value;
    let pages = document.getElementById('pagesInput').value;
    let copies = document.getElementById('copiesInput').value;

    if (!title || !author || !year || !publisher || !pages || !copies) {
        alert('Будь ласка, заповніть всі обов’язкові поля.');
        return;
    }
    if (year < 0 || pages < 0 || copies < 0) {
        alert('Не допускаються від’ємні значення для числових полів.');
        return;
    }
    let newBook = {
        title: title,
        author: author,
        year: year,
        publisher: publisher,
        pages: pages,
        copies: copies
    };

    let existingBooks = JSON.parse(localStorage.getItem('books')) || [];
    existingBooks.push(newBook);
    localStorage.setItem('books', JSON.stringify(existingBooks));
    document.getElementById('addBookModal').querySelector('form').reset();
    closeAddBookModal();
    updateBooksList();
}
function updateBooksList() {
    let tableBody = document.getElementById('booksTable').getElementsByTagName('tbody')[0];
    let books = JSON.parse(localStorage.getItem('books')) || [];
    tableBody.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let row = tableBody.insertRow(-1);
        let cellId = row.insertCell(0);
        let cellTitle = row.insertCell(1);
        let cellAuthor = row.insertCell(2);
        let cellYear = row.insertCell(3);
        let cellPublisher = row.insertCell(4);
        let cellPages = row.insertCell(5);
        let cellCopies = row.insertCell(6);
        let cellActions = row.insertCell(7);

        cellId.innerHTML = i + 1;
        cellTitle.innerHTML = book.title;
        cellAuthor.innerHTML = book.author;
        cellYear.innerHTML = book.year;
        cellPublisher.innerHTML = book.publisher;
        cellPages.innerHTML = book.pages;
        cellCopies.innerHTML = book.copies;

        cellActions.innerHTML = '<button onclick="editBook(' + i + ')">Редагувати</button> ' +
                                 '<button onclick="deleteBook(' + i + ')">Видалити</button>';
    }
}
function editBook(index) {
    let books = JSON.parse(localStorage.getItem('books')) || [];
    let book = books[index];
    document.getElementById('titleInput').value = book.title;
    document.getElementById('authorInput').value = book.author;
    document.getElementById('yearInput').value = book.year;
    document.getElementById('publisherInput').value = book.publisher;
    document.getElementById('pagesInput').value = book.pages;
    document.getElementById('copiesInput').value = book.copies;
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    openAddBookModal();
    updateBooksList();
}
function deleteBook(index) {
    var books = JSON.parse(localStorage.getItem('books')) || [];
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    updateBooksList();
}
updateBooksList();