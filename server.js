const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

const fileUpload = require('express-fileupload');
var multer = require('multer')
var cors = require('cors');



const app = express();



//Body Parser
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));


app.get("/", (req, res) => res.send("Hello World"));

//Use routes
app.use(cors());
app.options("*", cors());


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on Port ${port}`));
