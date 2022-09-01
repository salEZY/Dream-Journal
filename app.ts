require("dotenv").config();
import express from "express";
import connectToDB from "./utils/db";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Q Agency Books API started on port ${PORT}`);

  connectToDB();
});
