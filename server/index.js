const express = require("express");
const app = express();

const connection = require("./db");
const UserSchema = require("./models/UserModel");
require("dotenv").config();

const PORT = process.env.PORT;

//---------------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//---------------------------------------

app.get("/users", async (req, res) => {
  const users = await UserSchema.find();
  res.send(users);
});

app.post("/users", async (req, res) => {
  const users = await new UserSchema(req.body);
  await users.save();
  res.send(users);
});

//---------------------------------------

app.listen(PORT, async () => {
  try {
    await connection;
  } catch {
    console.log("Something went wrong while connecting to db");
  }
  console.log("listening on 8080");
});
