var routes = require ("express").Router()
var path = require("path")
routes.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"..public/index.html")
)})
routes.get("/stats",function(req,res){
    res.sendFile(path.join(__dirname,"..public/stats.html")
)})
routes.get("/exercise",function(req,res){
    res.sendFile(path.join(__dirname,"..public/exercise.html")
)})

module.exports = routes