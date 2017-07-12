function getJSON(url) {
	return new Promise(function (resolve, reject) {

		/*pedimos data al server*/
		var ajax = new XMLHttpRequest();
		/*almacenamos en variable nuestra ruta */
		var url = url;
		/*hacemos peticion de url através de verbo get???*/
		ajax.open("GET", url);
		/*hacemos la petición al servidor*/
		ajax.send();
		ajax.onreadystatechange = function () {
			/*inicia condicional para validar promesa*/
			if (ajax.readyState == 4) {
				resolve(JSON.parse(ajax.responseText));
			}
		}
	})
};

/*llamamos a función que contiene promesa pasando como parametro la url de la funcion anterior */
getJSON("data/earth-like-results.json")
.then(function(mensaje){return getJSON(mensaje.results[0])})
	.then(function(resultado){comsole.log(resultado)});