const express = require("express");
const router = new express.Router();
const multer = require("multer");
const users = require("../model/userSchema");
const moment = require("moment");



//img storage path

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}.${file.originalname}`);
  },
});

//img filter

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("only image is allowed"));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

//product upload


router.post("/register", upload.fields([{name:"photo1"},{name:"photo2"}]), async (req, res) => {
  const files = req.files;
  const { username, clgid, branch, gh, li, ig, mail } = req.body;

  if (!username || !clgid || !branch || files.length === 0) {
    res.status(401).json({ status: 401, message: "Fill all the data fields" });
  }

  try {
    const date = moment(new Date()).format("YYYY-MM-DD");
    const userData = new users({
      username: username,
      clgid: clgid,
      branch: branch,
      gh: gh,
      li: li,
      ig: ig,
      mail: mail,
      imgfront: files.photo1[0].filename, 
      imgback: files.photo2[0].filename,
      date: date,
    });
    const finalData = await userData.save();
    res.status(201).json({ status: 201, finalData });
  } catch (error) {
    console.log(error)
    res.status(401).json({ status: 401, error });
  }
});

//product data get

router.get("/getdata", async (req, res) => {
  try {
    const getUser = await users.find().sort({ date: -1 });
    res.status(201).json({ status: 201, getUser });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

module.exports = router;
