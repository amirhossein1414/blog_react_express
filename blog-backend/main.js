const express = require("express");
const router = require("express").Router;
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const { keys } = require("./modules/auth/keys/public-private-keys");
const { v4: uuid } = require("uuid");

dotenv.config();

const app = express();
//app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/dist/Blog'));

app.get("/login", (rq, rs, next) => {
  //const
  const token = rq.headers.token;
  const decoded = jwt.verify(token, keys.getPrivateKey());

  //rs.setHeader("token", token);
  rs.send("logedin");
});

app.get("/angular", (rq, rs) => {
  rs.sendFile("./dist/Blog/index.html", { root: __dirname });
});

app.get("/react", (rq, rs) => {
  rs.sendFile("./build/index.html", { root: __dirname });
});

app.get("/", (rq, rs) => {
  /* rs.send({
            key: 'value'
        }) */

  const token = jwt.sign(
    {
      userData: uuid(),
    },
    keys.getPrivateKey(),
    { expiresIn: "20s" }
  );
  rs.setHeader("token", token);

  rs.send("hello");
});

app.listen(process.env.apiPort);
