/**
 * Created by Cheng.Zhang on 8/10/2015.
 */
$(function () {

    $('#beling-query').on('click', function () {

        var date=$("#mydate").val();
        console.log(date);
        if(date==""){
            alert("请选择日期");
            return;
        }
        console.log('beling:ajax请求开始');
        $.ajax({
            url: "beling-query",
            type:"post",

            data:{date:date},
            success:function(data){
                //console.log(data);
                var tr=$("#Consumer").find("tbody").find("tr");
                var numC=0;
                var numR=0;
                for(var i= 0;i<18;i++){
                    var td=$(tr[i]).find("td");
                    numC=0;
                    for(var j=1;j<td.length;j++){
                        $(td[j]).html(data[i][j-1]);
                        numC+=data[i][j-1];
                    }
                    $(td[0]).html(numC);
                }
                var td2=$(tr).eq(18).find("td");
                for(var i=0;i<13;i++){
                    numR=0;
                    for( var j=0;j<18;j++){
                        if(i==0){
                           numR+= parseInt($(tr[j]).find("td").eq(0).html());
                            console.log("num="+numR);
                        }
                        else{
                            numR+=data[j][i-1];
                        }
                    }
                    td2.eq(i).html(numR);
                }

            },
            error:function(err){
                console.log(err);
            }


        });
    });


});