$(document).ready(function(){
    $("#but_submit2").click(function(){
        var username = $("#name").val();
        var password = $("#pass").val();
        var email = $("#email").val();
        if( username != "" && password != "" && email !=""){
             $.ajax({
                url:'/SignUp',
                type:'post',
                data:{username,password,email},
                success:function(response){
                    if(response.request){
                                  window.location.href="login.html"; 
                                  
                    } 
                else{
                    $("#alert").css('visibility', 'visible');
                }

                },
                error:function(){
                    $("#alert").css('visibility', 'visible');
                }
            });
        }else{
            $("#alert").css('visibility', 'visible');
        }
    });   
  }); 