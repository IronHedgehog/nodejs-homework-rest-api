const Jimp = require("jimp");

const jimpFunc = (fileName) =>
  Jimp.read(fileName, (err, name) => {
    if (err) throw err;
    name
      .resize(256, 256) // resize
      .quality(60) // set JPEG quality
      .greyscale() // set greyscale
      .write("fileName"); // save;
  });

module.exports = jimpFunc;
