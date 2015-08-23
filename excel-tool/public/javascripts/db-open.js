/**
 * Created by Cheng.Zhang on 8/11/2015.
 */

    var mongoose = require('mongoose');
    console.log("开始连接");
    var db = mongoose.connect('mongodb://localhost:27017/excel');

    db.connection.on('error', function (error) {
        console.log(error);
    });
    db.connection.on('open',function(){
        console.log("服务器连接成功");
    });

module.exports=db;

