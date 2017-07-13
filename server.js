/*traemos express y path */
/*express es un paquete, un servidor de js*/
var express = require("express");
var path = require("path");
/*ejecutamod a express y la guardamos en una variabl*/
var app = express();
/*haceos rutas estaticas*/
/*app.use , nos dice que en un lugar hay una carpeta que quiero que se haga publica; 
express.static: hará una ruta estatica de ciertos archivos que nosotros les demos,
al usar path, ayuda a enviar files, archivos,enrealidad static no exixste es mas bien una ruta que express usara para poder acceder a esos archivos*/
app.use("/data",express.static(__dirname + "/data"));
app.use("/static",express.static(path.join(__dirname + "/assets")));
app.use("/static",express.static(path.join(__dirname + "/node_modules")));
/*endpoint*/
/*metodos verbos http get, hace peticion , e este caso es a una accción hecha por una función ,cuando entremos a esta petición nos dara este archivo*/
app.get("/",(req,res)=>{
	res.sendFile(__dirname + "/index.html");
});

/*hacemos que nos escuche el puerto*/
app.listen(8000);