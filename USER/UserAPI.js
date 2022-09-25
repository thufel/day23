const express = require("express");
const app = express();

const user = {
  fullName: "Thufeil Shobrun jamil",
  userName: "Thufeil",
  address: "Depok,Jawa barat",
};

app.use(express.json());

app.get("/userAPItest", function (req, res) {
  res.json(user);
});

app.post("/userAPI", (req, res) => {
  console.log(req.body);
  res.send("POST request to homepage");
});

console.log("listening...");
app.listen(3000);