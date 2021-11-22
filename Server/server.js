// require packages used in the project
const express = require("express");
const app = express();
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

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
