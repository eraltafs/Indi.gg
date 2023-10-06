const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  name: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
