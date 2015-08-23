var rawdataSchema = require('./rawdata-schema');
var db = require('./db-open').connect('excel');
var mongoose = require('mongoose');
var promise = new mongoose.Promise();
var c = 0,c2= 0,c3= 0;
var Consumer_Site_result = new Array();
for (var k = 0; k < 12; k++) {
    Consumer_Site_result[k] = new Array();
    for (m = 0; m < 12; m++) {
        Consumer_Site_result[k][m] = 0;
    }
};

var Consumer_Site_result2 = new Array();
for (var k = 0; k < 6; k++) {
    Consumer_Site_result2[k] = new Array();
    for (m = 0; m < 12; m++) {
        Consumer_Site_result2[k][m] = 0;
    }
};

var Creation_type = ["Flagship Product", "General Product", "Low Profile Product", "Static Page (L table)", "Static Page (M table)", "Static Page (S table)", "Static Page", "DHP Default Page", "DHP Target Page", "Large Smart protal", "Medium Smart Portal", "Small Smart Portal"];
var Consumer_Site = ["Asia", "China", "India", "Taiwan", "Japan", "MEA", "Europe", "CIS", "Latin America", "Canada", "US", "non-NSC"];
var Creation_type2=["Complex","Simple","Very simple","Copy","Deletion","Graphics Design"];

module.exports = function (date, callback) {
    var collection = "rawdata-" + date;
    var rawdataModel = db.model(collection, rawdataSchema.testSchema);
    //让ua和ru国家代码变为CIS
    rawdataModel.find({"Site": {$in: ["UA-uk", "RU-ru"]}, "Region": "Europe"}, function (err, doc) {

        for (var i in doc) {
            rawdataModel.update({"_id": doc[i]["_id"]}, {$set: {"Region": "CIS"}}, function (err1, doc1) {
                if (err1) console.log(err1);
            });
        }
    });
    //---------------

    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 12; j++) {
            //var stt=yield rawdataModel.count({"Business unit":"Consumer Site","Offering subtype":"Creation","Page Type":Creation_type[i],"Region":Consumer_Site[j]}).exec();
            countTable1(i, j, rawdataModel, callback);
        }
    }
    for(var i=0;i<6;i++){
        for(var j=0;j<12;j++){
            countTable2(i,j,rawdataModel,callback);
        }
    }


};
function countTable1(i, j, rawdataModel, callback) {

    rawdataModel.count({
        "Business unit": "Consumer Site",
        "Offering subtype": "Creation",
        "Page Type": Creation_type[i],
        "Region": Consumer_Site[j]
    }, function (err, doc) {
        if (err) console.log(err);
        Consumer_Site_result[i][j] = doc;
        //console.log("-----");
        //console.log("i-"+i+"j="+j);
        //console.log(Creation_type[i]+"----------"+Consumer_Site[j]);
        //console.log(doc);
        //console.log(Consumer_Site_result[i][j]);
        //console.log("c:"+c);
        //console.log("-----");

        c++;
        if(c2==72&&c==144&&c3==0){
            c3=1;
            c2=0;
            c1=0;
            callback(Consumer_Site_result.concat(Consumer_Site_result2));
        }

    });
}
function countTable2(i,j,rawdataModel, callback){
    rawdataModel.count({
        "Business unit": "Consumer Site",
        "Offering subtype": Creation_type2[i],
        "Region": Consumer_Site[j]
    },function(err,doc){
        if(err) console.log(err);
        Consumer_Site_result2[i][j] = doc;
        c2++;
        if(c2==72&&c==144&&c3==0){
            c3=1;
            c2=0;
            c=0;
            callback(Consumer_Site_result.concat(Consumer_Site_result2));
        }
    });
}




