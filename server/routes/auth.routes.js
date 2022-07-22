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

//---------------------------------------
// Export
module.exports = authRouter;
