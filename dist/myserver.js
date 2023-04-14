"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
app.use((0, cors_1.default)());
// getting endpoint
app.get("/", (req, res) => {
    res.send({ secret: get_word() });
});
function get_word() {
    const secretWords = ["HELLO", "LOVER", "APPLE", "QUIET", "HANDS", "FEETS", "TABLE", "CHAIR", "BLURT", "SHOUT", "REACT", "MAJOR", "DEATH", "CRUST", "OUTDO", "ADOBE"];
    return secretWords[Math.floor(Math.random() * (secretWords.length))];
}
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
