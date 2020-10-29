
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


var htmlroutes = require("./routes/htmlroutes")

app.use(htmlroutes)

if(process.env.MONGODB_URI){
    mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useFindAndModify: true},function(){
            app.listen(port, () => {

                var apiroutes = require("./routes/api-routes")
                app.use(apiroutes)
                console.log("App running on port 3000!");
                      });
        })
}
else{
    mongoose.connect
    ("mongodb://localhost/fitnesstracker", {
        useNewUrlParser: true,
        useFindAndModify: true},function(){
            app.listen(port, () => {
                var apiroutes = require("./routes/api-routes")
                app.use(apiroutes)
                console.log("App running on port 3000!");
            });
        })
}





