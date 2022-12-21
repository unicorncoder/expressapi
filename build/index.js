"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs = require("fs");
const app = (0, express_1.default)();
const port = 3000;
let rawMemeData = fs.readFileSync("./views/memes.json");
let memeData = JSON.parse(rawMemeData);
app.get("/memes", (req, res) => {
    res.json(memeData);
});
app.listen(port);
