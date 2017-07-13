function getJSON(url) {
	return new Promise(function (resolve, reject) {
		/*pedimos data al server atraveés de un nuevo objeto  que se esta guardando en ajax*/
		var ajax = new XMLHttpRequest();
		/*nos indita el tipo de petición que le haremos a la url que le daremos,la va preparando, aun no la manda.*/
		ajax.open("GET", url);
		/*hacemos la petición al servidor*/
		ajax.send();
		/*pregunta cambio de estado del ajax*/
		ajax.onreadystatechange = function () {
			/*inicia condicional para validar promesa*/
			if (ajax.readyState == 4) {
				resolve(JSON.parse(ajax.responseText));
			}
		}
	})
}

/* getJson("data....)---->llamamos a función que contiene promesa pasando como parametro la url de la funcion anterior */
/*acciones basadas en otras acciones ,obteneos info global (1ra linea), despues info especifica, obtenemos json de un planeta en particular y despues se loguea.*/

/*se define una función que se va a ejecutar hasta que se compruebe , y respete la asincronia */
/*cuando se pasa como parametro mensaje, el resultado de la promesa exitosa se va inicializar y ejecutar gracias a esta función*/

getJSON("data/earth-like-results.json")
	.then(function (mensaje) {
		    var listaPlanetas = mensaje.results;
			return getJSON(listaPlanetas.forEach(function(planeta){
				getJSON(planeta)
				.then(function(resultadoPlaneta){
					console.log(resultadoPlaneta);	
				})
			}))
			
		
	})


	.then(function (resultado) {
		console.log(resultados)
	});