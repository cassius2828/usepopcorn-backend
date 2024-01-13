import express from "express";
import bcrypt from "bcryptjs";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";

import handleRegister from "./controllers/register.js";
import handleSignIn from "./controllers/signin.js";
import handleProfileID from "./controllers/profileID.js";
import searchMovies from './controllers/searchMovies.js'


// import axios from "axios";
dotenv.config();

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "cassiusreynolds",
    password: "",
    database: "usepopcorn",
  },
});

// * EXPRESS SETUP
const app = express();
app.use(cors());
app.use(express.json());

// * GET REQ TEST
app.get("/", (req, res) => {
  res.send("success");
});

// * SIGN IN
app.post("/signin", (req, res) => {
  handleSignIn(req, res, bcrypt, db);
});

// * REGISTER
app.post("/register", (req, res) => {
  handleRegister(req, res, bcrypt, db);
});

// * PROFILE ID
app.get("/profile/:id", (req, res) => {
  handleProfileID(req, res, db);
});

// * SEARCH MOVIE API CALL
app.post('/search_movies', (req,res) => {
searchMovies(req,res);
})

// * RUN SERVER
app.listen(process.env.PORT, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});

// /////////////////////////////////////////

