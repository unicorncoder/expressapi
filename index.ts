import express from "express";
const fs = require("fs");

const app = express();
const port = process.env.port||3000;

let rawMemeData = fs.readFileSync("./views/memes.json");
let memeData = JSON.parse(rawMemeData);

app.get("/memes", (req, res) => {
  res.json(memeData);
});

app.listen(port);
  