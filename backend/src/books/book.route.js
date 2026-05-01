const express = require("express");
const Book = require("./book.model");
const router = express.Router();

//post = when submit something frontend to db
// get = When get samething back to db
// put/patch = when editor update something
// delete = when delete something

// post a book
router.post("/create-book", async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res.status(200).send({ message: "Book posted sucessfully", book: newBook });
  } catch (error) {
    console.error("Error creating book", error);
    res.status(500).send({ message: "Failed to created book"});
  }
});

module.exports = router;
