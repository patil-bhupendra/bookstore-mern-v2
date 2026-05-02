const express = require("express");
const Book = require("./book.model");
const router = express.Router();
const { postABook, getAllBooks, getSingleBook, updateBook, deleteABook } = require("./book.controller");

// frontend => backend server => controller => book schema => database => send to server => back to the fronted
//post = when submit something frontend to db
// get = When get samething back to db
// put/patch = when editor update something
// delete = when delete something

// post a book
router.post("/create-book", postABook);

// get all books
router.get("/", getAllBooks)

// single book endpoint
router.get("/:id", getSingleBook)

// update a book endpoint
router.put('/edit/:id', updateBook)

// delete a book
router.delete("/:id", deleteABook)

module.exports = router;
