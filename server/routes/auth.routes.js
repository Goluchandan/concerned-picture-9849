//---------------------------------------
//
const { Router } = require("express");
const createError = require("http-errors");

const UserSchema = require("../models/UserModel");

const authRouter = Router();

//---------------------------------------
//

authRouter.post("/signup", async (req, res) => {
  console.log(req.body);

  const user = await new UserSchema(req.body);
  
  user.save((err, success) => {
    if (err) {
      res.status(500).send({ message: "Error occurred" });
    }
    return res.status(201).send({ message: "Sign up success", token: 54321 });
  });
});

//---------------------------------------
// Export
module.exports = authRouter;
