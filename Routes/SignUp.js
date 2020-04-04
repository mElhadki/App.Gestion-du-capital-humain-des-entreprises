var express = require('express');
const fs = require('fs');


module.exports = (function() {
    var api = express.Router();
    api.route("/SignUp").post(function(req, res) { 

                                                //Recuperation d'un fichier Json 
                                                
                                                fs.readFile('Data/Login.json', 'utf8', (err, jsonString) => {
                                                    if (err) {
                                                        console.log("File read failed:", err)
                                                        return
                                                    }
                                                data =JSON.parse(jsonString);

                                                filtred=data.filter((e)=> {if(e.username===req.body.username || e.password===req.body.password && e.email===req.body.email){ return e ; }})
                                                if(filtred.length===1){
                                                    res.send({
                                                        request: false 
                                                    });
                                                }   
                                                  else{                                                      

                                                //Get parameters
                                                data.push(req.body);
                                                //update file data Login.json
                                                dataUpdated=JSON.stringify(data,null,4);
                                                fs.writeFileSync('Data/Login.json', dataUpdated);
                                                //Response to clients
                                                res.send({request:true,data});
                                                res.end();


                                            }
                                            }) 
    });
    return api;
})();