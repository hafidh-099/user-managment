const express = require("express");
const app = express();
const bodypurse = require("body-parser");
const session = require("express-session");
const myuser = require("./routes/users.route");
const myauth = require("./routes/auth.route")

app.use(bodypurse.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(
  session({
    key: "session_id",
    secret: "secret_key",
    resave: false,
    saveUninitialized: false,
  })
);
//user route
app.use("/", myuser);
app.use("/users", myuser);
//auth route
app.use('/',myauth)

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
