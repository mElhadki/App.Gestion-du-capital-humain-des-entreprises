var express = require('express');
const fs = require('fs');

//Recuperation d'un fichier Json

let rawdata = fs.readFileSync('./Data/Login.json');
var Login = JSON.parse(rawdata);

module.exports = (function () {
    var api = express.Router();
    api.route("/Login").post(function (req, res) {
        
        filtred=Login.filter((e)=> {if(e.username===req.body.username && e.password===req.body.password){ return e ; }})
        if(filtred.length!=1){
            res.send({
                request: false 
            });
        }else{
            res.send({
                request: true,
                data: filtred
            });
        }
        res.end()
    });
    return api;
})();