const express = require('express');
const app = express();
const bodypurse = require('body-parser');
const session = require('express-session');
const myrouter = require('./routes/users.route');


app.use(bodypurse.urlencoded({extended:true}));
app.set('view engine','ejs');

app.use('/',myrouter);
app.use('/users',myrouter);

app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000');
})