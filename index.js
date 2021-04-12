const express = require("express");
const bodyParser = require("body-parser");
const user = require("./Routes/user");
const app = express();
const mongoose = require("mongoose");
// Initiate Mongo Server
mongoose.set("useCreateIndex", true);

mongoose.connect(
  "mongodb+srv://sirjan:gunsnroses12@cluster0.5hmpa.mongodb.net/register?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection
  .once("open", function () {
    console.log("connection has been made");
  })
  .on("error", function (error) {
    console.log("err is:", error);
  });
//Listen On Server
const PORT = process.env.PORT || 4000;
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/api/user", user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
