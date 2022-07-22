//---------------------------------------
// Imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const createError = require("http-errors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

// require("dotenv").config();
const connection = require("./db");
const UserSchema = require("./models/UserModel");
const authRouter = require("./routes/auth.routes");

//---------------------------------------
// Middleware
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));
dotenv.config();

app.use("/auth", authRouter);

//---------------------------------------
app.get("/", async (req, res) => {
  res.send("Hello!");
});

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
// Server
app.listen(PORT, async () => {
  try {
    await connection;
  } catch {
    console.log("Something went wrong while connecting to db");
  }
  console.log(`listening on PORT ${PORT}`);
});
