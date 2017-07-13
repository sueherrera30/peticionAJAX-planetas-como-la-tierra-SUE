/**/
function getJSON(url){
	return new Promise(function(resolve, reject){
		/*pedimos data al server*/
		var ajax = new XMLHttpRequest();
		/*hacemos peticion de url através de verbo get???*/
		ajax.open("GET",url);
		/*hacemos la petición al servidor*/
		ajax.send();
		ajax.onreadystatechange = function (){
			/*inicia condicional para validar promesa*/
			if(ajax.readyState == 4){
				resolve(JSON.parse(ajax.responseText));
			}
		}
	})
}

/*llamamos a función que contiene promesa pasando como parametro la url de la funcion anterior */
/*acciones basadas en otras acciones ,obteneos info global (1ra linea), despues info especifica, obtenemos json de un planeta en particular y despues se loguea.*/
getJSON("data/earth-like-results.json")
/*se define una función que se va a ejecutr hasta que se compruebe , y respete la asincronia */
/*cuando se pasa como parametro mensaje, el resultado de la promesa exitosa se va inicializar y ejecutar gracias a esta función*/
.then(function(mensaje){return getJSON(mensaje.results[0])})
.then(function(resultado){console.log(resultado)});