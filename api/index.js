"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const books_json_1 = __importDefault(require("./data/books.json"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
function getRandomBook() {
    const randomIndex = Math.floor(Math.random() * books_json_1.default.length);
    const randomBook = books_json_1.default[randomIndex];
    return randomBook;
}
app.get("/random-book", (req, res) => {
    res.json(getRandomBook());
});
app.get("/random-book-delayed", (req, res) => {
    setTimeout(() => {
        res.json(getRandomBook());
    }, 2000);
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map