
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI ||
    "mongodb://localhost/fitnesstracker", {
    useNewUrlParser: true,
    useFindAndModify: true
})

var apiroutes = require("./routes/api-routes")
var htmlroutes = require("./routes/htmlroutes")
app.use(apiroutes)
app.use(htmlroutes)

app.listen(port, () => {
    console.log("App running on port 3000!");
});
