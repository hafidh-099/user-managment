const db = require("../utils/database");
//get and delete user

exports.renderUser = async (req, res) => {
  try {
    const sessiondata = req.session;
    if(sessiondata.user=='true'){
      const [users] = await db.execute("select * from users");
      res.render("users.ejs", { users ,sessiondata});
    }else{
      res.redirect('/login');
    }
  } catch (error) {
    res.send("Error loading users").status(500);
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
    const sessiondata = req.session;
    const [editdata] = await db.execute("select * from users where id=?", [id]);
    res.render("edit.ejs", { user: editdata[0],sessiondata });
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
