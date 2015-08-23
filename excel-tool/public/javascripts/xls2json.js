/**
 * Created by Cheng.Zhang on 8/7/2015.
 */
var xls_to_json = require("xls-to-json");
var db_insert=require('./db-insertData');

exports.xls2json = function (path, sheet,db) {
    if (sheet == null) {
        sheet = "List";
    }
    path = path.replace(/\\/g, "\/");
    xls_to_json({
        //only xls
        //input: "C:/Users/cheng.zhang/Desktop/Panasonic WPL KPI_test version v3.0a.xls", // input xls
        input:path,
        //output: "output.json", // output json
        output:null,
        sheet: sheet // specific sheetname

    }, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log("xls文件读取成功");

            db_insert.insert(db,result,result[0].date);
        }

    });

};



