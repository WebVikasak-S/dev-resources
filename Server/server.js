// require packages used in the project
const express = require("express");
const dotenv = require("dotenv");
const cheerio = require("cheerio");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const { bookmarks } = require("./db");
const mongoose = require("mongoose");
const Bookmarks = require("./model/bookmarkModel");

// Express App Initialization
const app = express();

// .env file inclusion
dotenv.config();
const port = process.env.PORT || 5000;

// DataBase Connection
const dbUri = process.env.MONGODB_CONNECTION_URI;
mongoose.connect(
  dbUri,
  () => {
    console.log("Connected Successfully");
  },
  (err) => {
    console.log("Error Connecting - ", err);
  }
);

function AddManyBookmarks(data) {
  data.map((item, i) => {
    const temp = new Bookmarks(item);
    temp
      .save()
      .then(console.log("entry added - ", temp))
      .catch((err) => {
        console.log(`Error at index ${i} - `, err);
      });
  });
}

async function GetAllBookmarks() {
  const data = await Bookmarks.find();
  if (data) {
    // console.log("Fetched all Bookmarks", data);
  } else {
    console.log("Error Fetching all Bookmarks");
    return;
  }
  return data;
}

// routes setting

// Get All Bookmarks From Database
app.get("/getBookmarks", async (req, res) => {
  try {
    const allBookmarks = await GetAllBookmarks();
    console.log(allBookmarks)
    res.status(200).send(allBookmarks);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

// Route And Logic to Get and Parse an
// HTML file to extract the bookmarks from it

const filePath = path.join(__dirname, "./assets/uploads/demoBookmarks1.html");
const $ = cheerio.load(fs.readFileSync(filePath));
let newBookmarks = [];

app.get("/importBookmarks", (req, res) => {
  //   let aTags = $("a");
  //   $(aTags).each((i, tag) => {
  //     let object = {
  //       date_added: "",
  //       guid: uuidv4(),
  //       id: "",
  //       name: $(tag).text(),
  //       type: "",
  //       url: $(tag).attr("href"),
  //       tags: [],
  //     };
  //     newBookmarks.push(object);
  //   });
  try {
    req.on("data", (data) => {
      console.log(data);
    });
    res.status(200).send(req.file);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
