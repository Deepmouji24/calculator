const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  //   res.send();
});
app.post("/add", (req, res) => {
  let a = parseInt(req.body.a);
  let b = parseInt(req.body.b);
  let ans = a + b;
  res.send(JSON.stringify({ ans: ans }));
});

app.post("/sub", (req, res) => {
  let a = parseInt(req.body.a);
  let b = parseInt(req.body.b);
  let ans = a - b;
  res.send(JSON.stringify({ ans: ans }));
});

app.post("/div", (req, res) => {
  let a = parseInt(req.body.a);
  let b = parseInt(req.body.b);
  let ans = a / b;
  res.send(JSON.stringify({ ans: ans }));
});

app.post("/mul", (req, res) => {
  let a = parseInt(req.body.a);
  let b = parseInt(req.body.b);
  let ans = a * b;
  res.send(JSON.stringify({ ans: ans }));
});

app.listen(3000, () => {
  console.log("example app listning on 3000!");
});
