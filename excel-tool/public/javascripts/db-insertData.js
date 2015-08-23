/**
 * Created by Cheng.Zhang on 8/4/2015.
 */

var rawdataSchema=require('./rawdata-schema');

exports.insert = function (db,jsondata,date) {
    var collenction="rawdata-"+date;
    var rawdataModel = db.model(collenction, rawdataSchema.testSchema);
        rawdataModel.remove({},function(err){
            if(err){
                console.log("数据清空错误"+err);
            }
            console.log("数据清空");
        });
        rawdataModel.create(jsondata,function(err){
        if(err){
            console.log("数据存储错误:"+err);

        }
        else{
            console.log("数据存储成功");

        }
    });


};