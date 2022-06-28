const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "tmp");
const jimpFunc = require("../helpers/jimpFunction");

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    const { path } = file;
    jimpFunc(path);
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
