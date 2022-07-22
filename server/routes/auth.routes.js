//---------------------------------------
//
const { Router } = require("express");
const createError = require("http-errors");

const UserSchema = require("../models/UserModel");

const authRouter = Router();

//---------------------------------------
//

authRouter.post("/signup", async (req, res) => {
  console.log("req.body:", req.body);

  // checking if the entered email is present in the database
  let { email } = req.body;
  if (!email) {
    res.status(500).send({ message: "Error occurred" });
  } else {
    let searchResult = await UserSchema.find({
      email: { $regex: email },
    });
    console.log("searchResult:", searchResult);

    if (searchResult.length === 0) {
      const user = await new UserSchema(req.body);

      user.save((err, success) => {
        if (err) {
          res.status(500).send({ message: "Error occurred" });
        }
        return res.status(201).send({ message: "Sign up success" });
      });
    } else {
      res.status(500).send({ message: "Email already registered" });
    }
  }
});

authRouter.post("/login", async (req, res) => {
  // checking if the entered email is present in the database
  let { email, password } = req.body;
  if (!email) {
    res.status(500).send({ message: "Error occurred" });
  } else {
    let searchResult = await UserSchema.find({
      $and: [{ email: { $regex: email } }, { password: { $regex: password } }],
    });
    console.log("searchResult:", searchResult);
    // console.log("searchResult:", searchResult[0].email);

    if (searchResult.length === 0) {
      res.status(500).send({ message: "Email or password is wrong" });
    } else {
      let check = false;

      searchResult.map((e) => {
        if (e.email === email && e.password === password) {
          check = true;
        }
      });

      console.log("check:", check);

      if (!check) {
        res.status(500).send({ message: "Entered Email or password is wrong" });
      }
    }
  }
});

//---------------------------------------
// Export
module.exports = authRouter;
