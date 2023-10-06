const {Router} = require("express")

const { book_add, get_book } = require("../controller/book.controller")
const bookRouter = Router()


bookRouter.post("/",book_add)
bookRouter.get("/",get_book)


module.exports = {bookRouter}