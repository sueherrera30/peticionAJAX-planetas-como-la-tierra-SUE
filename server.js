/*traemos express y path */
var express = require("express");
var path = require("path");
/*iniciamos a express*/
var app = express();

/*endpoint*/
app.get("/",(req,res)=>{
	res.sendFile(__dirname + "/index.html");
});
/*haceos rutas estaticas*/
app.use("/data",express.static(__dirname + "/data"));
app.use("/static",express.static(path.join(__dirname + "/assets")));
app.use("/static",express.static(path.join(__dirname + "/node_modules")));
/*hacemos que nos escuche el puerto*/
app.listen(8000);