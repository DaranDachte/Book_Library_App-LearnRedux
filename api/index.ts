import express from "express";
import cors from "cors";
import booksData from "./data/books.json";

const app = express();
app.use(cors());

function getRandomBook() {
  const randomIndex = Math.floor(Math.random() * booksData.length);
  const randomBook = booksData[randomIndex];
  return randomBook;
}

app.get(
  "/random-book",
  (
    _req: any,
    res: {
      json: (arg0: { title: string; author: string; year: number }) => void;
    }
  ) => {
    res.json(getRandomBook());
  }
);

app.get(
  "/random-book-delayed",
  (
    _req: any,
    res: {
      json: (arg0: { title: string; author: string; year: number }) => void;
    }
  ) => {
    setTimeout(() => {
      res.json(getRandomBook());
    }, 2000);
  }
);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
