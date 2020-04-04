 

    $(document).ready(function(){
        console.log("Login.js");
        $("#but_submit").click(function(){
            var username = $("#name").val();
            var password = $("#pass").val();
             if( username != "" && password != "" ){
                 $.ajax({
                    url:'/login',
                    type:'post',
                    data:{username,password},
                    success:function(response){
                        if(response.request){
                                        // password correct
                                        console.log(response)
                                        localStorage.setItem("email", response.data[0].email);
                                        window.location.href="Company.html"; 
                                       

                        }else{
                            //password incorrect
                            $("#alert").css('visibility', 'visible');

                        }


                    },
                    error:function(){
                        $("#alert").css('visibility', 'visible');
                    }
                });
            }
            else{
                $("#alert").css('visibility', 'visible');
            }
        });   
      }); 