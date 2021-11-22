// require packages used in the project
const express = require("express");
const app = express();
const cheerio = require("cheerio");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const port = 5000;
const { bookmarks } = require("./db");

// routes setting
app.get("/getBookmarks", (req, res) => {
  try {
    console.log("Bookmarks - ", bookmarks);
    res.status(200).send(bookmarks);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

// Route And Logic to Get and Parse an
// HTML file to extract the bookmarks from it

const filePath = path.join(__dirname, "./demoBookmarks.html");
const $ = cheerio.load(fs.readFileSync(filePath));
let newBookmarks = [];

app.get("/importBookmarks", (req, res) => {
  let aTags = $("a");
  $(aTags).each((i, tag) => {
    let object = {
      date_added: "",
      guid: uuidv4(),
      id: "",
      name: $(tag).text(),
      type: "",
      url: $(tag).attr("href"),
      tags: [],
    };
    newBookmarks.push(object);
  });
  try {
    // console.log(req.body);
    res.status(200).send(newBookmarks);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
