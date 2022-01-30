const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
require("dotenv").config();

app.use(
  cors({
    origin: "",
  })
);

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (_, res) => {
  res.send(`Simple api for serving ML model.`);
});

app.listen(PORT, () =>
  console.log(`Server listening on port: ${process.env.PORT}`)
);
