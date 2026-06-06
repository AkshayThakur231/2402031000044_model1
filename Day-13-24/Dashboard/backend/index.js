const express = require("express");
const app = express();
const cors = require("cors");

require("./db/config");

const user_model = require("./db/user");

app.use(cors());
app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const user = new user_model(req.body);
    const result = await user.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/Show_users", async (req, res) => {
  try {
    const users = await user_model.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/delete_user/:id", async (req, res) => {
  try {
    const result = await user_model.findByIdAndDelete(req.params.id);

    if (!result) {
      return res.status(404).send("User Not Found");
    }

    res.send("User Deleted Successfully");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/user/:id", async (req, res) => {
  const user = await user_model.findById(req.params.id);
  res.send(user);
});

app.put("/update_user/:id", async (req, res) => {
  const result = await user_model.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.send(result);
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});