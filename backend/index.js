const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require("dotenv").config();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);

// routes
const bookRoutes = require("./src/books/book.route");
app.use("/api/books", bookRoutes);

app.get("/", (req, res) => {
  res.send("Book store server is running!");
});

async function main() {
  await mongoose.connect(process.env.DB_URL);
}

main()
  .then(() => console.log("Mongodb connect sucessfully!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
