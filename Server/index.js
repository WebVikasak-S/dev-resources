// require packages used in the project
const express = require("express");
const dotenv = require("dotenv");
const cheerio = require("cheerio");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const path = require("path");
const helpers = require("./utils/helper");
const { bookmarks } = require("./db");
const mongoose = require("mongoose");
const Bookmarks = require("./model/bookmarkModel");
const cors = require("cors");
const linkPreview = require("./utils/linkPreview");

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

// Create a Bookmark
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

// Get Bookmark By ID
async function getBookmarkById(id) {
  if (id) {
    const temp = await Bookmarks.findById(id);
    console.log("Document By ID - ", temp);
    return temp;
  } else {
    return "Error";
  }
}

// Update a Bookmark
async function updateBookmarkById(data) {
  if (data) {
    console.log("Query ID - ", data._id);
    const temp = await Bookmarks.findByIdAndUpdate(
      data._id,
      {
        name: data.name,
        url: data.url,
        tags: data.tags,
      },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Doc : ", docs);
        }
      }
    );
    console.log("Return - ", temp);
    return temp;
  } else {
    return "Error in Query";
  }
}

const base = `
Hello Peeps...👋
  Available Endpoints - 
  1) - /getAllBookmarks
  2) - /createBookmark
  3) - /getBookmarkByID
  4) - /updateBookmarkById
  5) - /importBookmarks
  6) - /getLinkPreview
`;

// routes setting

app.get("/", async (req, res) => {
  res.send(base);
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
    console.log("Requested ID - ", req.body.id);
    const bookmarkById = await getBookmarkById(req.body.id);
    console.log("Requested Doc - ", bookmarkById);
    res.status(200).send(bookmarkById);
  } catch (err) {
    console.log(err);
    res.sendStatus(404).send(err);
  }
});

// Update bookmark by id
app.post("/updateBookmarkById", async (req, res) => {
  try {
    if (req.body) {
      console.log("Before - ", req.body);
      const newBookmark = await updateBookmarkById(req.body);
      console.log("After - ", newBookmark);
      res.status(200).send("Bookmark Updates Successfully");
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

// Storage Defination for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/uploads/");
  },

  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Cheerio function to Parse File and extract Data from it into an array
function parseHTML(uploadedFilePath) {
  const filePath = path.join(__dirname, uploadedFilePath);
  const $ = cheerio.load(fs.readFileSync(filePath));
  let newBookmarks = [];
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
  return newBookmarks;
}

app.post("/importBookmarks", (req, res) => {
  try {
    let upload = multer({
      storage: storage,
      fileFilter: helpers.htmlFilter,
    }).single("bookmarks");
    upload(req, res, function (err) {
      // req.file contains information of uploaded file
      // req.body contains information of text fields, if there were any

      if (req.fileValidationError) {
        return res.send(req.fileValidationError);
      } else if (!req.file) {
        return res.send("Please select an HTML file to upload");
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }

      // Display uploaded image for user validation
      let response = parseHTML(req.file.path);
      res
        .status(200)
        .send({ message: "File Uploaded and Parsed", data: response });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// Get Link preview DATA
app.get("/getLinkPreview", async (req, res) => {
  try {
    const url = req.body.url;
    const previewData = await linkPreview(url);
    res.status(200).send(previewData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
