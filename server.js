import express from "express";
import bcrypt from 'bcryptjs';
import cors from "cors";
import knex from "knex";

import handleRegister from "./controllers/register.js";
import handleSignIn from "./controllers/signin.js";
import handleProfileID from "./controllers/profileID.js";

// import axios from "axios";

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
  // res.json('sign in function here')
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

// * RUN SERVER
app.listen(3000, () => {
  console.log("app is running on port 3000");
});

// /////////////////////////////////////////

// TEST NBA API
// const axios = require("axios");
const season = "2017";

// const fetchNBAData = async () => {
//   const options = {
//     method: "GET",
//     url: `https://api-nba-v1.p.rapidapi.com/seasons`,
//     headers: {
//       "X-RapidAPI-Key": "7f369f5fa5msh21483b52a488f55p16c4ecjsnc910c7d96e73",
//       "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchNBAData();
