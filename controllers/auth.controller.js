const db = require("../utils/database");

//login
exports.renderLogin = async (req, res) => {
  res.render("login.ejs");
};
exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    const [validate] = await db.execute("select * from users where username=?",[username]);
    const data = validate[0];
    if(data){
        if(data.password===password){
            req.session.user='true';
            res.redirect('/')
        }else{
            res.redirect('/login')
        }
    }else{
        res.redirect('/login');
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
    res.redirect("/");
  } catch (error) {
    res.send("error occure during register user");
  }
};
exports.LogOut = (req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
    });
}
