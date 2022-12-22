// const express=require("express")
import express from "express";
const fs = require("fs");
const cors=require("cors")

const app = express();
const PORT = process.env.PORT||3000;

let rawMemeData = fs.readFileSync("./views/memes.json");
let memeData = JSON.parse(rawMemeData);

app.use(cors())

app.get("/memes", (req, res) => {
  res.json(memeData);
});

app.get("/", (req, res) => {
  res.json({key:"Hello"})
});

app.listen(PORT);
  