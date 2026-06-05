const express = require("express");
const app = express();
const user_model = require("./db/user");
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("./db/config");
require("./db/user");




    app.post("/signup", async (req, res) => {
        const user = new user_model(req.body);
        const result =  await user.save();
        res.send(result);
    });

    app.get("/Show_users", async (req, res) => {
        const users = await user_model.find();
        res.json(users);
    });

app.listen(8080);