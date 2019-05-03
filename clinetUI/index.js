$(document).ready(function(){
    $.get("http://127.0.0.1:3000/validateUser?userName=admin&password=admin",function(data){
        alert(data);
    });                  
});

function validateUser() {
    var username = $(#'username').val();
    //document.getElementsByName("username")[0].value;
    //get Password
    var password = $(#'password').val(); 
    //document.getElementsByName("password")[0].value;

    $.get("/validateUser?username="+username+"&password="+password, function(data){
    	alert(data);
    	});
    }