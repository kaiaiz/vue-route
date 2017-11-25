var mysql=require("mysql");
var connect=mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : '1703Node',
    dateStrings:"DATE"
})

module.exports=connect;


