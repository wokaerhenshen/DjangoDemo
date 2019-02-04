
$(document).ready(function () {

    //every time the page loads call the api
    callApi($('#drop option:selected').val());

    //every time the user change the period call the api
    $("#drop").change(function () {
        var period = this.value;
        callApi(period);
    });
    

    //the function to call the api
    function callApi(period){
        console.log("calling api...")
        $('#tbody').empty();
        $.ajax({ 
            type: 'GET', 
            dataType: 'json',
            url: 'http://127.0.0.1:8000/getjson/?time=' + period, 
            success: function (data) {
                console.log(data);
                for(var i=0;i<data.length;i++)
                {
                  //set sortOrder and bgc for different ratings.
                  var sortOrder = 0;
                  var backGroundColor = 'white';
                  switch(data[i].rating.toLowerCase()){
                    case "clean":
                        sortOrder = 1;
                        backGroundColor = 'lightgreen';
                        break;
                    case "low-risk":
                        sortOrder = 2;
                        backGroundColor = 'lightblue';
                        break;
                    case "medium-risk":
                        sortOrder = 3;
                        backGroundColor = 'yellow';
                        break;
                    case "high-risk":
                        sortOrder = 4;
                        backGroundColor = 'orange';
                        break;
                    case "malicious":
                        sortOrder = 5;
                        backGroundColor = 'red';
                        break;
                    default :
                        break;
                  } 
                  var Html="<tr style='background-color: " + backGroundColor  + " '><td>"
                            +data[i].date
                            +"</td><td>"
                            +data[i].filename
                            +"</td><td>"
                            +data[i].action
                            +"</td><td>"
                            +data[i]['submit-type']
                            +"</td><td sorttable_customkey = "+ sortOrder +" >"
                            +data[i].rating
                            +"</td></tr>";
                  $('#tbody').append(Html);
                }
                setInterval(checkUpdate(period,data),100); 
            },
            error: function (msg) {
                alert(msg,"fail to load the data!");
            }
        })
    }

    function  checkUpdate(period,data){
        console.log("checking...");
        $.ajax({
            type: 'GET', 
            dataType: 'json',
            url: 'http://127.0.0.1:8000/getjson/?time=' + period, 
            success: function (res) {
                if(res != data){
                    alert("New Record Or Record Change Detected, please reload the page!");
                }
            },
            error: function (msg) {
                alert(msg,"fail to load the data!");
            }
        })
    }


})




