const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var port = process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/api/imc", function(req, res) {
 console.log(req.body, ' req body aqui');
  var height = req.body.height;
  var weight = req.body.weight;
  
  height = Number(height);
  weight = Number(weight);
  
  var squareHeight = height * height;


  var result = weight /squareHeight;
  result = result.toFixed(1);
  
  console.log(result, "IMC AQUI");
  
  
  res.send('alrighty');
  
});

// Not found middleware
app.use((req, res, next) => {
  return next({ status: 404, message: "not found" });
});



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
