let books = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).json(books);
    },
    create: (req, res) => {
        const {title, author} = req.body
        let book = {
            id: id,
            title: title,
            author: author
        }
        books.push(book);
        id++;
        res.status(200).json(books);
    },
    update: (req, res) => {
        const {title, author} = req.body;
        const index = books.findIndex(val => val.id == req.params.id);

        const book = books[index];

        books[index] = {
            id: book.id,
            title: title || book.title,
            author: author || book.author
        }
        res.status(200).json(books);
    },
    delete: (req, res) => {
        let index = null;
    books.forEach((book, i) => {
      if (book.id === Number(req.params.id)) index = i;
    });
    books.splice(index, 1);
    res.status(200).send(books);
    }
};