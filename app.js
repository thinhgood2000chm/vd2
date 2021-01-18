var express = require("express");
var bodyParser= require("body-parser");
//var connect= require("../PhoneShop/Connectdatabase");
var connect= require("./Connectdatabase");

var app= express();
var expressSession= require('express-session');




//var urlencodedParser= bodyParser.urlencoded({extended:false});

app.set("view engine","ejs");
app.set("views",'./views');

//hiển thị hình ảnh trong nodejs
app.use(express.static('images'));

// cái này dùng để làm body parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());



// taoj lien ket với file routes vì app và routes cùng cấp nên ./
app.use('/',require('./routes/pages'));

//bất cứ cài đường dẫn nào bắt đầu bằng /auth thì thằng app.use('/auth' nó sẽ lo và chạy đến file route cần với đường dẫn tiếp theo
app.use('/auth',require('./routes/auth'));

app.listen(3000,function(){
  console.log("kết nối server thành công ");
});
