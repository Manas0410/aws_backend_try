const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).send("this is api data from AWS");
});

app.listen(3000, () => {
  console.log("listen 3000  port");
});
