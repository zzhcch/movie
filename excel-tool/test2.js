var xls_to_json = require("xls-to-json");
xls_to_json({
    input: "C:/Users/cheng.zhang/Desktop/Panasonic WPL KPI_test version v3.0a.xls", // input xls
    //input:path,
    output: "output.json", // output json
    //sheet: sheet // specific sheetname
    sheet:"Raw data"
}, function(err, result) {
    if(err) {
        console.error(err);

    } else {
        console.log("success");

    }
});