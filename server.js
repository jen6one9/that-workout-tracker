
const express = require("express");
const mongoose = require("mongoose");


const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost//fitnesstracker",{
    useNewUrlParser:true,
    useFindAndModify:true
})

var apiroutes = require("./routes/api-routes")
var htmlroutes = require("./routes/html-routes")
app.use(apiroutes)
app.use(htmlroutes)





// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
