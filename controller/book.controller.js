const { bookModel } = require("../models/book.model");

const book_add = async (req, res) => {
  const { title, author } = req.body;
  try {
    const book = new bookModel({ title, author });
    await book.save();
    res.send({ msg: "book added", book });
  } catch (error) {
    res.send({ msg: "book not added" });
  }
};
const get_book = async (req, res) => {
  const book = await bookModel.find();
  res.send(book);
};

module.exports = {
  book_add,
  get_book,
};
