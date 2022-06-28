const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models/user");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");
const Jimp = require("jimp");

const patchAvatar = async (req, res) => {
  try {
    const { _id: id } = req.user;
    const { filename, path: filePath } = req.file;
    const [extension] = filename.split(".").reverse();
    const name = `${id}.${extension}`;
    const newDir = path.join(avatarsDir, name);
    await fs.rename(filePath, newDir);
    const image = await Jimp.read(newDir);
    console.log("image", image);
    image.resize(250, 250);
    image.write(newDir);

    const avatarURL = path.join("avatars", name);

    const result = await User.findByIdAndUpdate(
      req.user._id,
      { avatarURL },
      { new: true }
    );
    res.json({
      avatarURL: result.avatarURL,
    });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = patchAvatar;
