/**
 * Created by Cheng.Zhang on 8/4/2015.
 */
function createConnect(){
    var mongoose=require('mongoose');
    var db =mongoose.connect("mongodb://localhost:27017");
    db.connection.on("open",function(){
        console.log("数据库连接成功!");
    });
    db.connection.on("error",function(err){
        console.log("数据库连接失败:"+err);
    });
}
exports=createConncet();
