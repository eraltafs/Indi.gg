const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");
require("dotenv").config();

const user_register =  async (req, res) => {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    console.log(user);
    if (user) {
      return res.send("user exists");
    }
    try {
      bcrypt.hash(password, 5, async (err, result) => {
        if (err) {
          console.log(err);
          res.send("user not created");
        }
        if (result) {
          const user = new UserModel({ name, email, password: result });
          await user.save();
          res.send("user created");
        }
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("internal server err");
    }
}
  const user_login =  async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    console.log(user);
    try {
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            const token = jwt.sign(
              { email, role: user.role },
              process.env.jwtkey
            );
            return res.send({ msg: "login success", token });
          } else {
            console.log(err);
            return res.send({msg:"wrong credentials"});
          }
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("internal server error");
    }
  }

  module .exports ={
    user_register, user_login
  }
  