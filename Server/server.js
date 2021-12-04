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
const cors = require("cors");

// Express App Initialization
const app = express();
app.use(express.json());
app.use(cors());

// .env file inclusion
dotenv.config();
const port = process.env.PORT || 5000;

// DataBase Connection
const dbUri = process.env.MONGODB_CONNECTION_URI;
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("DB Connected Successfully...!");
  })
  .catch((err) => {
    console.log(err);
  });

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


// Get All the Bookmarks From DB
async function getBookmarks() {
  const data = await Bookmarks.find();
  if (data) {
    // console.log("Fetched all Bookmarks", data);
  } else {
    console.log("Error Fetching all Bookmarks");
    return;
  }
  return data;
}

async function createBookmark(data) {
  if (data) {
    const temp = new Bookmarks(data);
    temp
      .save()
      .then(console.log("entry added - ", temp))
      .catch((err) => {
        console.log("Error Adding Bookmark", err);
      });
  } else {
    return "Error";
  }
}

async function updateBookmarkById(id) {}

// routes setting

app.get("/", async (req, res) => {
  res.send("Hello Peep..🔥");
});

// Get All Bookmarks From Database
app.get("/getAllBookmarks", async (req, res) => {
  try {
    const allBookmarks = await getBookmarks();
    console.log(allBookmarks);
    res.status(200).send(allBookmarks);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

// Create a new Bookmark
app.post("/createBookmark", async (req, res) => {
  try {
    const newBookmark = await createBookmark(req.body);
    console.log("New Bookmark added - ", req.body);
    res.status(200).send(`added bookmark - ${req.body}`);
  } catch (err) {
    console.log(err);
    res.sendStatus(404).send(err);
  }
});

// Get Bookmark By ID
app.get("/getBookmarkByID", async (req, res) => {
  try {

  } catch (err) {
    console.log(err);
    res.sendStatus(404).send(err);
  }
});

// Update bookmark by id
app.post("/updateBookmarkById", async (req, res) => {
  try {
    if (req.body) {
      console.log("ID? - ", req.body.id);
      const newBookmark = await updateBookmarkById(req.body.id);
      res.status(200).send(`Updated bookmark -> Id - ${req.body} - `);
    } else {
      res.status(404).send("No Parameter..!");
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(404).send(err);
  }
});

// Route And Logic to Get and Parse an
// HTML file to extract the bookmarks from it

const filePath = path.join(__dirname, "./assets/uploads/demoBookmarks1.html");
const $ = cheerio.load(fs.readFileSync(filePath));
let newBookmarks = [];

app.post("/importBookmarks", (req, res) => {
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
