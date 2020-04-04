$(document).ready(function () {

    //localStorage
    if (localStorage.getItem("email") === null) {

        window.location.href = "login.html";

    }

    else {

        $("#useremail").html(localStorage.getItem("email"));
        getData();
        $("#SaveData").click(function(){  // Recuperation des valeurs
            var name = $("#name").val();
            var local = $("#local").val();
            var description = $("#description").val();
          
            if( name != "" && local != "" && description !=""){  // check les valeurs 
                 $.ajax({
                    url:'/AddCompany',
                    type:'post',
                    data:{name,local,description},
                    success:function(response){
                        if(response.request){
                            //send fetched
                            getData(response);
                        }  
                    }
                   
                });
            }
        });  
        $("#SaveD").click(function(){ 
            var name = $("#namedep").val();
            var boss = $("#boss").val();
            var description = $("#descriptionDep").val();
            var index=localStorage.getItem("id");
            if( name != "" && boss != "" && description !=""){
                 $.ajax({
                    url:'/AddNewDepartment',
                    type:'post',
                    data:{index,department:{name,boss,description}},
                    success:function(response){
                        if(response.request){
                            //send fetched
                            getData(response);
                        }  
                    }
                });
            } 
        }); 
    }
   



});


function getData(fetched){
    if(fetched===undefined){
    $.ajax({
        url: '/Company',
        type: 'get',
        success: function (response) {
            if (response.request) {

                // data correc
                AddToTable(response.data);
                
            }
        },
    });
}else{
    AddToTable(fetched.data);
}
}


function AddToTable(data){
    
                // data correc
                var company_Data = '';
                $("#TableCompany").html(company_Data);
                $.each(data, function (key, value) {
                    var options="";
                    value.department.forEach(element => {
                        options+="<option>"+element.name+"</option>";
                    });
                    company_Data += '<tr>';
                    company_Data += '<td>' + value.name + '</td>';
                    company_Data += '<td>' + value.local + '</td>';
                    company_Data += '<td>' + value.description + '</td>';
                    company_Data += '<td>' + '<select class="form-control">' + options + '</select>'+ '</td>';
                    company_Data += '<td class="text-center"><a class="btn btn-info btn-xs" href="#" data-toggle="modal" data-target="#exampleModalCenter2"onclick="show('+key+')" ><span class="glyphicon glyphicon-edit"></span> Add Department</a></td>';
                    company_Data += '</tr>';
                });
                $("#TableCompany").append(company_Data);
                
}

function show(indice){ 
    localStorage.setItem("id",indice);
}

