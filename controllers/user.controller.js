const db = require("../utils/database");
//get and delete user
exports.renderUser = async (req, res) => {
  try {
    const [users] = await db.execute("select * from users");
    res.render("users.ejs", { users });
  } catch (error) {
    res.status(500).send("Error loading users");
  }
};
exports.delteUser = async (req, res) => {
  try {
    await db.execute("delete from users where id=?", [req.params.id]);
    res.redirect("/");
  } catch (error) {
    res.send("error occure during delete user");
  }
};
//edit
exports.renderEdit = async (req, res) => {
  try {
    const id = req.params.id;
    const [editdata] = await db.execute("select * from users where id=?", [id]);
    res.render("edit.ejs", { user: editdata[0] });
  } catch (error) {
    res.send("error occure during editing").status(500);
  }
};
exports.postEdit = async (req, res) => {
  try {
    const id = req.params.id;
    const { username, password, role } = req.body;
    await db.execute(
      "update users set username=?,password=?,role=? where id=?",
      [username, password, role, id]
    );
    res.redirect("/");
  } catch (error) {
    res.send("bad data during update");
  }
};
//login
exports.renderLogin = async (req, res) => {
  res.render("login.ejs");
};
exports.postLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    await db.execute("insert into users(username,password) values (?,?)", [
      username,
      password,
    ]);
    res.redirect("/");
  } catch (error) {
    res.send("error occure during login");
  }
};
//register
exports.renderRegister = (req, res) => {
  res.render("register.ejs");
};
exports.registerUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    await db.execute("insert into users(username,password,role)values(?,?,?)", [
      username,
      password,
      role,
    ]);
    res.redirect('/login');
  } catch (error) {
    res.send('error occure during register user')
  }
};
