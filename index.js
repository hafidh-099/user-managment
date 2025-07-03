const express = require("express");
const app = express();
const bodypurse = require("body-parser");
const session = require("express-session");
const myuser = require("./routes/users.route");
const myauth = require("./routes/auth.route");
const sessioninfo = require("./utils/sessiondata");
const sessionDB = require("express-mysql-session")(session);

app.use(bodypurse.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const session_db = new sessionDB(sessioninfo);

app.use(
  session({
    key: "session_id",
    secret: "secret_key",
    resave: false,
    saveUninitialized: false,
    store: session_db,
  })
);
//user route
app.use("/", myuser);
app.use("/users", myuser);
//auth route
app.use("/", myauth);

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
