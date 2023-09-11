const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors({ origin: " * " }));
app.use(express.json());
mongoose.connect("mongodb+srv://root:root@cluster0.lt8xkwk.mongodb.net/");
app.listen(3001, () => {
  console.log("app is started");
});

//creating the schema
const schema = mongoose.Schema({
  title: { type: String, require: true },
});

const note = mongoose.model("note", schema);

app.use("/postData", (req, res) => {
  const newNote = new note(req.body);
  const result = newNote.save();
  res.send(result);
});

app.use("/get", (req, res) => {
  note
    .find()
    .then((ress) => {
      res.send(ress);
    })
    .catch((err) => {
      res.send(err);
    });
});
