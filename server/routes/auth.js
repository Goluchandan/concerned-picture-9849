//---------------------------------------
//
const { Router } = require("express");
const createError = require("http-errors");

const UserSchema = require("../models/UserModel");

//---------------------------------------
//
const authRouter = Router();

//---------------------------------------
// Export
module.exports = authRouter;
